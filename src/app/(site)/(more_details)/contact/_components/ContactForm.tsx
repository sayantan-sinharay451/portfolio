'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, User, Mail, Tag, MessageSquare } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().trim().min(3, 'Please add a short subject.'),
  message: z.string().trim().min(20, 'Please add at least 20 characters.'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      setSubmitStatus(null);

      console.log('Sending contact message', values);
      form.reset();
      setSubmitStatus({
        type: 'success',
        message: 'Thanks for reaching out. Your message is queued locally for now.',
      });
    } catch (err) {
      console.error(err);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong while preparing your message. Please try again.',
      });
    }
  }

  const iconInputClass =
    'pl-10 border-zinc-700/60 bg-black/60 text-white placeholder:text-zinc-500 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/40 transition-all duration-300 rounded-lg h-10';

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-white/5 pb-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-400">
          <Send size={20} className="-rotate-45" />
        </div>
        <div>
          <h3 className="font-heading text-[15px] font-semibold text-white">Send a Message</h3>
          <p className="mt-0.5 text-xs text-zinc-400">{`I'll get back to you as soon as possible.`}</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {submitStatus && (
            <div
              className={`rounded-lg border px-4 py-3 text-sm ${
                submitStatus.type === 'success'
                  ? 'border-emerald-500/40 bg-emerald-950/30 text-emerald-300'
                  : 'border-red-500/40 bg-red-500/10 text-red-200'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Name + Email — 2-column row on desktop */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                    Name
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User
                        size={15}
                        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500"
                      />
                      <Input placeholder="Your name" className={iconInputClass} {...field} />
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                    Email
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail
                        size={15}
                        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500"
                      />
                      <Input
                        type="email"
                        placeholder="Your email"
                        className={iconInputClass}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* Subject — full width */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                  Subject
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Tag
                      size={15}
                      className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500"
                    />
                    <Input placeholder="Subject" className={iconInputClass} {...field} />
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Message — full width */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                  Message
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <MessageSquare
                      size={15}
                      className="pointer-events-none absolute top-3 left-3 text-zinc-500"
                    />
                    <Textarea
                      placeholder="Write your message..."
                      rows={5}
                      className="rounded-lg border-zinc-700/60 bg-black/60 pl-10 text-white transition-all duration-300 placeholder:text-zinc-500 focus-visible:border-emerald-500/40 focus-visible:ring-emerald-500/30"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Button — full width */}
          <Button
            type="submit"
            className="group w-full rounded-lg bg-emerald-500 px-6 py-5 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-400 active:scale-[0.97]"
            disabled={form.formState.isSubmitting}
          >
            <span className="flex items-center justify-center gap-3">
              {form.formState.isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </>
              )}
            </span>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
