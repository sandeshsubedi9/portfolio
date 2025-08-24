"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { useState } from "react";
import { fa } from "zod/locales";

const schema = z.object({
  user_name: z.string().min(1, "Name is required"),
  user_email: z
  .union([z.string().email("Invalid email"), z.literal("")])
  .optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    }
  });

  function sendEmail(data: FormData) {
    setIsLoading(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: data.user_name,
        email: data.user_email,
        message: data.message,
        title: data.subject,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
      .then(() => {
        toast.success("Email sent successfully");
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to send email");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <div id="contact" className="z-0">
        <div className=" w-[80vw] md:w-[50w] mx-auto flex items-center justify-center flex-col">
          <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            Contact Me
          </h1>
          <h2 className=" text-gray-300 text-[20px]">Excited to collaborate and bring your ideas to life </h2>
          <span className="text-gray-300 text-[19px] ">
            — email me at
            <a href="mailto:sandeshsubedi2020@gmail.com" target="_blank" rel="noopener noreferrer " className="text-purple-500 hover:text-blue-500 transition duration-200"> sandeshsubedi2020@gmail.com
            </a>
          </span>
        </div>

        <Form {...form}>s
          <form onSubmit={form.handleSubmit(sendEmail)} className="text-gray-300 mb-25 mt-7 mx-auto w-[80vw] md:w-[30vw] flex flex-col gap-8">

            <FormField
              control={form.control}
              name="user_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="user_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your Email (Optional)" {...field} />
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
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <Button type="submit">Submit</Button> */}
            <button disabled={isLoading} className="disabled:cursor-not-allowed py-2 button-primary text-center text-gray-50 cursor-pointer rounded-lg max-w-[150px]" type="submit">Send Email</button>
          </form>
        </Form>
      </div>
    </>
  );
}
