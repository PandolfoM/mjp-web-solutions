"use client";

import React, { Suspense, useEffect, useState } from "react";
import { jetBrains } from "../../fonts";
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
import { useSearchParams } from "next/navigation";
import Section from "@/components/ui/section";
import { NextResponse } from "next/server";
import Spinner from "@/components/ui/spinner";

const formSchema = z.object({
  firstName: z
    .string({ required_error: "Required" })
    .min(2, {
      message: "Must be at least 2 characters",
    })
    .max(50),
  lastName: z
    .string({ required_error: "Required" })
    .min(2, {
      message: "Must be at least 2 characters",
    })
    .max(50),
  email: z
    .string({ required_error: "Required" })
    .email({ message: "Not a valid email" }),
  subject: z.string().min(1, { message: "Required" }),
  msg: z.string().min(1, { message: "Required" }),
});

function ContactForm() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      msg: "",
    },
  });

  useEffect(() => {
    const plan = searchParams.get("plan");
    if (plan !== null) {
      form.setValue("subject", `${plan} Plan`);
    }
  }, [searchParams, form]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.error) {
        toast({
          duration: 2000,
          title: "Error! Try again later.",
        });
      } else {
        toast({
          duration: 2000,
          title: "Contact form submitted!",
        });
        form.reset();
      }
    } catch (error: any) {
      toast({
        duration: 2000,
        title: "There has been an error!",
      });
      return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {loading && <Spinner />}
      <div className="flex flex-col gap-[75px] px-7 flex-1 lg:m-auto lg:flex-row lg:items-center lg:justify-center lg:gap-[12rem]">
        <div className="text-center lg:w-96 lg:text-left">
          <h1 className="text-lg font-bold lg:text-xl">Let's talk!</h1>
          <p className={`${jetBrains.className} text-sm opacity-75 lg:text-md`}>
            Contact us today to get started on your project!
          </p>
        </div>

        <Section>
          <div className="bg-gradient-radial to-80% from-card/[10%] to-card/[2%] rounded-[10px] p-[15px] lg:w-[30rem]">
            <h3 className="font-bold text-md lg:text-lg">
              Contact Information
            </h3>
            <p
              className={`${jetBrains.className} opacity-75 text-sm mb-[25px] lg:text-md`}>
              Fill out the form below and we will get back to you soon.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-[5px]">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="First Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
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
                          <SelectItem value="Premium Plan">
                            Premium Plan
                          </SelectItem>
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
                  name="msg"
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
                  disabled={loading}
                  className="bg-[#141429] mt-[20px]"
                />
              </form>
            </Form>
          </div>
        </Section>
      </div>
    </>
  );
}

function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}

export default Contact;
