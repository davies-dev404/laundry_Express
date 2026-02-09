import { pgTable, text, serial, timestamp, varchar, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  address: text("address").notNull(),
  pickupDate: timestamp("pickup_date").notNull(),
  serviceType: text("service_type").notNull(), // e.g., "Wash & Fold", "Dry Cleaning"
  notes: text("notes"),
  status: text("status").default("pending").notNull(), // pending, confirmed, completed
  createdAt: timestamp("created_at").defaultNow(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: varchar("phone", { length: 20 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertBookingSchema = createInsertSchema(bookings).omit({ 
  id: true, 
  status: true, 
  createdAt: true 
});

export const insertMessageSchema = createInsertSchema(messages).omit({ 
  id: true, 
  createdAt: true 
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
