import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema } from "@/lib/validation";
import { useCreateBooking } from "@/hooks/use-bookings";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Loader2, CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
function BookingDialog({ children, defaultService }) {
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useCreateBooking();
  const form = useForm({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      serviceType: defaultService || "Wash & Fold",
      notes: "",
      pickupDate: /* @__PURE__ */ new Date()
    }
  });
  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
      }
    });
  };
  return /* @__PURE__ */ React.createElement(Dialog, { open, onOpenChange: setOpen }, /* @__PURE__ */ React.createElement(DialogTrigger, { asChild: true }, children || /* @__PURE__ */ React.createElement(Button, { size: "lg", className: "font-semibold shadow-lg shadow-primary/20" }, "Book Now")), /* @__PURE__ */ React.createElement(DialogContent, { className: "sm:max-w-[500px] max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ React.createElement(DialogHeader, null, /* @__PURE__ */ React.createElement(DialogTitle, { className: "text-2xl font-bold text-primary" }, "Schedule Pickup"), /* @__PURE__ */ React.createElement(DialogDescription, null, "Fill in your details and we'll come to your doorstep.")), /* @__PURE__ */ React.createElement(Form, { ...form }, /* @__PURE__ */ React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4 py-4" }, /* @__PURE__ */ React.createElement(
    FormField,
    {
      control: form.control,
      name: "name",
      render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(FormLabel, null, "Full Name"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(Input, { placeholder: "John Doe", ...field })), /* @__PURE__ */ React.createElement(FormMessage, null))
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement(
    FormField,
    {
      control: form.control,
      name: "phone",
      render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(FormLabel, null, "Phone Number"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(Input, { placeholder: "+254 7...", ...field })), /* @__PURE__ */ React.createElement(FormMessage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    FormField,
    {
      control: form.control,
      name: "email",
      render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(FormLabel, null, "Email"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(Input, { placeholder: "john@example.com", ...field })), /* @__PURE__ */ React.createElement(FormMessage, null))
    }
  )), /* @__PURE__ */ React.createElement(
    FormField,
    {
      control: form.control,
      name: "address",
      render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(FormLabel, null, "Pickup Address"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(
        Textarea,
        {
          placeholder: "Apartment name, Street, House number...",
          className: "resize-none h-20",
          ...field
        }
      )), /* @__PURE__ */ React.createElement(FormMessage, null))
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement(
    FormField,
    {
      control: form.control,
      name: "serviceType",
      render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(FormLabel, null, "Service"), /* @__PURE__ */ React.createElement(Select, { onValueChange: field.onChange, defaultValue: field.value }, /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(SelectTrigger, null, /* @__PURE__ */ React.createElement(SelectValue, { placeholder: "Select service" }))), /* @__PURE__ */ React.createElement(SelectContent, null, /* @__PURE__ */ React.createElement(SelectItem, { value: "Wash & Fold" }, "Wash & Fold"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Dry Cleaning" }, "Dry Cleaning"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Pressing Only" }, "Pressing Only"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Bedding & Duvets" }, "Bedding & Duvets"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Leather Care" }, "Leather Care"))), /* @__PURE__ */ React.createElement(FormMessage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    FormField,
    {
      control: form.control,
      name: "pickupDate",
      render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, { className: "flex flex-col" }, /* @__PURE__ */ React.createElement(FormLabel, null, "Pickup Date"), /* @__PURE__ */ React.createElement(Popover, null, /* @__PURE__ */ React.createElement(PopoverTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(
        Button,
        {
          variant: "outline",
          className: cn(
            "w-full pl-3 text-left font-normal",
            !field.value && "text-muted-foreground"
          )
        },
        field.value ? format(field.value, "PPP") : /* @__PURE__ */ React.createElement("span", null, "Pick a date"),
        /* @__PURE__ */ React.createElement(CalendarIcon, { className: "ml-auto h-4 w-4 opacity-50" })
      ))), /* @__PURE__ */ React.createElement(PopoverContent, { className: "w-auto p-0", align: "start" }, /* @__PURE__ */ React.createElement(
        Calendar,
        {
          mode: "single",
          selected: field.value,
          onSelect: field.onChange,
          disabled: (date) => date < new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
          initialFocus: true
        }
      ))), /* @__PURE__ */ React.createElement(FormMessage, null))
    }
  )), /* @__PURE__ */ React.createElement(
    FormField,
    {
      control: form.control,
      name: "notes",
      render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(FormLabel, null, "Special Instructions (Optional)"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(Input, { placeholder: "E.g., Gate code, specific stains...", ...field, value: field.value || "" })), /* @__PURE__ */ React.createElement(FormMessage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      type: "submit",
      className: "w-full text-lg h-12 mt-2 bg-gradient-to-r from-primary to-primary/90 hover:to-primary",
      disabled: isPending
    },
    isPending ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }), "Confirming...") : "Confirm Pickup Request"
  )))));
}
export {
  BookingDialog
};
