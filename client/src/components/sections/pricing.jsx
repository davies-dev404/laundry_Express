import React from "react";
import { motion } from "framer-motion";
import { Check, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Pricing() {
  const categories = [
    {
      id: "gentlemen",
      name: "Gentlemen's Wear",
      items: [
        { name: "Suit (2 Piece)", price: "800" },
        { name: "Suit (3 Piece)", price: "1,000" },
        { name: "Jacket / Blazer", price: "450" },
        { name: "Trousers", price: "250" },
        { name: "Shirt", price: "200" },
        { name: "T-Shirt / Polo", price: "150" },
        { name: "Tie", price: "100" },
        { name: "Coat (Light)", price: "500" },
        { name: "Coat (Heavy)", price: "700" },
      ]
    },
    {
      id: "ladies",
      name: "Ladies' Wear",
      items: [
        { name: "Skirt (Plain)", price: "250" },
        { name: "Skirt (Pleated)", price: "350" },
        { name: "Dress (Simple)", price: "400" },
        { name: "Dress (Evening/Gown)", price: "800" },
        { name: "Blouse", price: "200" },
        { name: "Trouser Suit", price: "700" },
        { name: "Skirt Suit", price: "700" },
        { name: "Wedding Gown", price: "2,500+" },
      ]
    },
    {
      id: "household",
      name: "Household Items",
      items: [
        { name: "Duvet (Single)", price: "800" },
        { name: "Duvet (Double)", price: "1,200" },
        { name: "Duvet (King)", price: "1,500" },
        { name: "Blanket (Small)", price: "600" },
        { name: "Blanket (Large)", price: "1,000" },
        { name: "Bed Sheets (Pair)", price: "300" },
        { name: "Pillow Case", price: "50" },
        { name: "Towel (Bath)", price: "200" },
        { name: "Curtains (per kg)", price: "350" },
        { name: "Carpet (per sq. ft)", price: "50" },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative min-h-screen">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Detailed Price List
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display text-slate-900">
            Transparent Laundry Pricing
          </h2>
          <p className="text-slate-600 text-lg">
            Comprehensive rates for all our services. All prices are in KSh.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <Tabs defaultValue="gentlemen" className="w-full">
            <div className="bg-slate-50 border-b border-slate-100 p-4 overflow-x-auto">
              <TabsList className="w-full justify-start md:justify-center bg-transparent h-auto p-0 gap-2">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg px-6 py-3 h-auto text-base font-medium transition-all"
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="p-6 md:p-8">
              {categories.map((cat) => (
                <TabsContent key={cat.id} value={cat.id} className="mt-0">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 md:mb-0">{cat.name}</h3>
                    <div className="relative w-full md:w-64">
                      
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-slate-200 overflow-hidden">
                    <Table>
                      <TableHeader className="bg-slate-50">
                        <TableRow>
                          <TableHead className="w-[70%] font-bold text-slate-900">Item</TableHead>
                          <TableHead className="text-right font-bold text-slate-900">Price (KSh)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {cat.items.map((item, idx) => (
                          <TableRow key={idx} className="hover:bg-slate-50/50">
                            <TableCell className="font-medium text-slate-700">{item.name}</TableCell>
                            <TableCell className="text-right font-bold text-primary">{item.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              ))}
            </div>
            
            <div className="bg-slate-50 p-6 border-t border-slate-100 text-center">
               <p className="text-sm text-slate-500 mb-4">
                 * Prices are subject to change based on fabric type, size, and condition.
               </p>
               <BookingDialog>
                  <Button size="lg" className="px-8">Book a Collection Now</Button>
               </BookingDialog>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export { Pricing };
