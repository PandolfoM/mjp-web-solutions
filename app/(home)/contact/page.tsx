"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
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
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { sendEmail } from "@/lib/send-email";
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
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const turnstile = useRef<TurnstileInstance>(null);
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
    if (!captchaToken) {
      toast({
        duration: 2000,
        title: "Please wait for the security check to finish.",
      });
      return;
    }
    setLoading(true);
    try {
      // Sent through MJP Hub, which checks the Turnstile token.
      const res = await sendEmail({
        from: "MJP Web Solutions",
        to: "matt@pandolfo.com",
        subject: `Website Inquiry (${data.subject})`,
        emailProps: {
          Name: `${data.firstName} ${data.lastName}`,
          Email: data.email,
          Subject: data.subject,
          Message: data.msg,
        },
        text: `Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.msg}`,
        captchaToken,
      });

      if (!res.ok) {
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
    } catch {
      toast({
        duration: 2000,
        title: "There has been an error!",
      });
    } finally {
      // Tokens work once; get a fresh one for the next message.
      setCaptchaToken("");
      turnstile.current?.reset();
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
      <div className="flex flex-col gap-[75px] px-7 flex-1 lg:m-auto lg:flex-row lg:items-center lg:justify-center lg:gap-48">
        <div className="text-center lg:w-96 lg:text-left">
          <h1 className="text-lg font-bold lg:text-xl">Let's talk!</h1>
          <p className={`${jetBrains.className} text-sm opacity-75 lg:text-md`}>
            Contact us today to get started on your project!
          </p>
        </div>

        <Section>
          <div className="bg-gradient-radial to-80% from-card/10 to-card/2 rounded-[10px] p-[15px] lg:w-120">
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
                <Turnstile
                  ref={turnstile}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  onSuccess={setCaptchaToken}
                  onExpire={() => setCaptchaToken("")}
                  onError={() => setCaptchaToken("")}
                  options={{ theme: "dark", size: "flexible" }}
                  className="mt-[20px]"
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
