import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs:classNameValue[]):string => {
  return twMerge(clsx(inputs));
}

type classNameValue = string| number| boolean | null | undefined | classNameValue[] | {[key:string]:unknown}