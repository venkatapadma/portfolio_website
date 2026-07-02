import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { cn } from "../lib/util";
import { useToast } from "../hooks/use-toast";
import { useState, type SubmitEventHandler } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `${data.get("name")} sent message from Pama Portfolio site`,
    );
    const body = encodeURIComponent(`Hi Padma,\n\n ${data.get("message")}`);
    setIsSubmitting(true);
    window.location.href = `mailto:padmaganapathi568@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your Message will get back to you soon",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-sxl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Whether you
          have a project in mind, want to discuss potential partnerships, or
          just want to say hello, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:padmaganapathi568@gmail.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    padmaganapathi568@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone </h4>
                  <a
                    href="tel:+447901504825"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +44 7901504825
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location </h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Wolverhampton, United Kingdom
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/venkatapadma/"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <form
            className="bg-card p-8 rounded-lg shadow-xs space-y-6"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary resize-none"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2",
              )}
            >
              {isSubmitting ? "Sending" : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
