import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useSendMessage } from "@/hooks/use-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const { mutate, isPending } = useSendMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-display text-slate-900">
              Have Questions? <br /> We're Here to Help.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Reach out to us for custom quotes, corporate partnerships, or any inquiries about our services.
            </p>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-xl mb-4 text-slate-900">Quick Contacts</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-slate-500">Phone / WhatsApp</div>
                  <div className="text-lg font-semibold text-slate-900">+254 700 123 456</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Email</div>
                  <div className="text-lg font-semibold text-slate-900">hello@expresslaundry.co.ke</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Location</div>
                  <div className="text-lg font-semibold text-slate-900">Westlands, Nairobi, Kenya</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <h3 className="text-2xl font-bold mb-6 font-display">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-12 bg-slate-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="h-12 bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+254..." className="h-12 bg-slate-50" {...field} value={field.value || ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[120px] bg-slate-50 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg" 
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
