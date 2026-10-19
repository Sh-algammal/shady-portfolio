import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Send } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-hairline bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-3 sm:grid-cols-2">
      <input name="name" required maxLength={100} placeholder="Your name" aria-label="Name" className={field} />
      <input name="email" type="email" required maxLength={255} placeholder="Your email" aria-label="Email" className={field} />
      <textarea name="message" required maxLength={2000} rows={5} placeholder="Your message" aria-label="Message" className={`${field} sm:col-span-2`} />
      <div className="flex items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          <Send className="h-4 w-4" /> {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "done" && <p className="text-sm text-primary">Thanks — your message was sent.</p>}
        {status === "error" && <p className="text-sm text-destructive">Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}
