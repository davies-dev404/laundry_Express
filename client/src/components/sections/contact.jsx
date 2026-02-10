import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@/lib/validation";
import { useSendMessage } from "@/hooks/use-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
function Contact() {
  const { mutate, isPending } = useSendMessage();
  const form = useForm({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });
  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };
  return /* @__PURE__ */ React.createElement("section", { id: "contact", className: "py-24 bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "container mx-auto px-4 md:px-6" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "text-primary font-semibold tracking-wide uppercase text-sm" }, "Get in Touch"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl md:text-4xl font-bold mt-2 mb-6 font-display text-slate-900" }, "Have Questions? ", /* @__PURE__ */ React.createElement("br", null), " We're Here to Help."), /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground text-lg mb-8" }, "Reach out to us for custom quotes, corporate partnerships, or any inquiries about our services."), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-50 p-8 rounded-2xl border border-slate-100" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-xl mb-4 text-slate-900" }, "Quick Contacts"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-medium text-slate-500" }, "Phone / WhatsApp"), /* @__PURE__ */ React.createElement("div", { className: "text-lg font-semibold text-slate-900" }, "+254 700 123 456")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-medium text-slate-500" }, "Email"), /* @__PURE__ */ React.createElement("div", { className: "text-lg font-semibold text-slate-900" }, "hello@expresslaundry.co.ke")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-medium text-slate-500" }, "Location"), /* @__PURE__ */ React.createElement("div", { className: "text-lg font-semibold text-slate-900" }, "Westlands, Nairobi, Kenya"))))), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
    },
    /* @__PURE__ */ React.createElement("h3", { className: "text-2xl font-bold mb-6 font-display" }, "Send a Message"),
    /* @__PURE__ */ React.createElement(Form, { ...form }, /* @__PURE__ */ React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6" }, /* @__PURE__ */ React.createElement(
      FormField,
      {
        control: form.control,
        name: "name",
        render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(FormLabel, null, "Your Name"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(Input, { placeholder: "John Doe", className: "h-12 bg-slate-50", ...field })), /* @__PURE__ */ React.createElement(FormMessage, null))
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, /* @__PURE__ */ React.createElement(
      FormField,
      {
        control: form.control,
        name: "email",
        render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(FormLabel, null, "Email Address"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(Input, { placeholder: "john@example.com", className: "h-12 bg-slate-50", ...field })), /* @__PURE__ */ React.createElement(FormMessage, null))
      }
    ), /* @__PURE__ */ React.createElement(
      FormField,
      {
        control: form.control,
        name: "phone",
        render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(FormLabel, null, "Phone Number"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(Input, { placeholder: "+254...", className: "h-12 bg-slate-50", ...field, value: field.value || "" })), /* @__PURE__ */ React.createElement(FormMessage, null))
      }
    )), /* @__PURE__ */ React.createElement(
      FormField,
      {
        control: form.control,
        name: "message",
        render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(FormLabel, null, "Message"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(
          Textarea,
          {
            placeholder: "How can we help you?",
            className: "min-h-[120px] bg-slate-50 resize-none",
            ...field
          }
        )), /* @__PURE__ */ React.createElement(FormMessage, null))
      }
    ), /* @__PURE__ */ React.createElement(
      Button,
      {
        type: "submit",
        className: "w-full h-12 text-lg",
        disabled: isPending
      },
      isPending ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }), "Sending...") : /* @__PURE__ */ React.createElement(React.Fragment, null, "Send Message", /* @__PURE__ */ React.createElement(Send, { className: "ml-2 h-4 w-4" }))
    )))
  ))));
}
export {
  Contact
};
