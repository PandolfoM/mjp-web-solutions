"use client";

import React, { useEffect, useState } from "react";
import { jetBrains } from "../fonts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstname: z
    .string({ required_error: "Required" })
    .min(2, {
      message: "Must be at least 2 characters",
    })
    .max(50),
  lastname: z
    .string({ required_error: "Required" })
    .min(2, {
      message: "Must be at least 2 characters",
    })
    .max(50),
  email: z
    .string({ required_error: "Required" })
    .email({ message: "Not a valid email" }),
  subject: z.string({ required_error: "Required" }),
  message: z.string({ required_error: "Required" }),
});

function Contact() {
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);

    toast({
      duration: 2000,
      title: "Contact form submitted!",
      description: "",
    });
    // form.reset();
  }

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-[100px] px-7 flex-1">
      <h1 className="text-lg font-bold text-center">
        Contact us today to get started on your project!
      </h1>

      <section className="bg-gradient-radial to-80% from-card/[10%] to-card/[2%] rounded-[10px] p-[15px]">
        <h3 className="font-bold text-md">Contact Information</h3>
        <p className={`${jetBrains.className} opacity-75 text-sm mb-[25px]`}>
          Fill out the form below and we will get back to you soon.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-[5px]">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Subject" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Standard Plan">
                        Standard Plan
                      </SelectItem>
                      <SelectItem value="Premium Plan">Premium Plan</SelectItem>
                      <SelectItem value="Pro Plan">Pro Plan</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={8}
                      placeholder="Message"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              text="Send"
              className="bg-[#141429] mt-[20px]"
            />
          </form>
        </Form>
      </section>
    </div>
  );
}

export default Contact;
