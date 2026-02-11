import { z } from "zod";

export const insertBookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required").max(20, "Phone number too long"),
  address: z.string().min(1, "Address is required"),
  pickupDate: z.date({
    required_error: "Pickup date is required",
  }),
  serviceType: z.string().min(1, "Service type is required"),
  notes: z.string().optional(),
});

export const insertMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(20, "Phone number too long").optional(),
  message: z.string().min(1, "Message is required"),
});
