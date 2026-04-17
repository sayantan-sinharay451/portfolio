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

const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.'),
  email: z.email('Please enter a valid email address.'),
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

      // Placeholder until the email endpoint is wired up.
      console.log('Sending contact message', values);
      form.reset();
      setSubmitStatus({
        type: 'success',
        message: "Thanks for reaching out. Your message is queued locally for now.",
      });
    } catch (err) {
      console.error(err);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong while preparing your message. Please try again.',
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm"
      >
        {submitStatus && (
          <div
            className={`rounded-lg border px-4 py-3 text-sm ${
              submitStatus.type === 'success'
                ? 'border-primary/40 bg-primary/10 text-primary-light'
                : 'border-red-500/40 bg-red-500/10 text-red-200'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your email" {...field} />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your message..." rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
