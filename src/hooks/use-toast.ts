import * as React from 'react';
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

function genId() {
    count = (count+1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
type ToastContent = {
    id: string;
    title?: string;
    description?: string;
    action?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open:boolean)=>void;
    [key:string]: unknown;
};

type ToastOptions = Omit<ToastContent, 'id' | 'open' | 'onOpenChange'>;

type ToastState = {
    toasts: ToastContent[];
};

type ToastAction = 
| {type:'ADD_TOAST', toast:ToastContent}
| {type:'UPDATE_TOAST', toast:Partial<ToastContent> & {id:string}}
| {type:'DISMISS_TOAST', toastId?:string}
| {type:'REMOVE_TOAST', toastId?:string}
const toastTimeouts = new Map<string, number>();

const addToRemoveQueue = (toastId: string) => {
    if(toastTimeouts.has(toastId)) {
        return;
    }

    const timeout = window.setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};

const reducer=(state:ToastState, action: ToastAction): ToastState => {
    switch(action.type) {
        case 'ADD_TOAST': return {
            ...state,
            toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
        };

        case 'UPDATE_TOAST':
            return {
                ...state, 
                toasts:state.toasts.map((toast)=>toast.id===action.toast.id ? {...toast, ...action.toast}:toast)
            };
        
        case 'DISMISS_TOAST': 
            const {toastId} = action;
            if(toastId) {
                addToRemoveQueue(toastId);
            } else {
                state.toasts.forEach((toast)=> {
                    addToRemoveQueue(toast.id);
                });
            }
            return {
                ...state,
                toasts:state.toasts.map((toast)=> toast.id===toastId || toastId=== undefined ?
            { 
                ...toast,
                open: false,
            }: toast ),
            };
        case 'REMOVE_TOAST':
            if(action.toastId===undefined) {
                return {
                    ...state,
                    toasts:[],
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((toast)=> toast.id!== action.toastId),
            };

        default:
            return state;
    }
};

const listeners:Array<React.Dispatch<React.SetStateAction<ToastState>>>=[];
let memoryState:ToastState = {toasts:[]};

function dispatch(action: ToastAction) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=> {
        listener(memoryState);
    });
}

const toast = (props:ToastOptions) => {
    const id=genId();

    const update = (props:ToastOptions) =>
        dispatch({
            type: 'UPDATE_TOAST',
            toast: {...props, id},
        });

    const dismiss = ()=> dispatch({type:'DISMISS_TOAST', toastId: id});

    dispatch({
        type: 'ADD_TOAST',
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange:(open)=> {
                if(!open) dismiss();
            },
        }
    });

    return {
        id: id,
        dismiss,
        update,
    };
}

function useToast() {
    const [state, setState] = React.useState(memoryState);

    React.useEffect(()=> {
        listeners.push(setState);
        return ()=> {
            const index = listeners.indexOf(setState);
            if(index != -1) {
                listeners.splice(index, 1);
            }
        };
    }, [state]);
    return {
        ...state,
        toast,
        dismiss: (toastId?: string)=> dispatch({type: 'DISMISS_TOAST', toastId}),
    };
}

export {useToast, toast};