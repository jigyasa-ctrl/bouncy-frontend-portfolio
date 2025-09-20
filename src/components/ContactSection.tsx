
import React, { FormEvent, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import {EmailTemplateParams } from '@/config/emailjs';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const templateParams: EmailTemplateParams = {
      from_name: formData.get('name') as string,
      from_email: formData.get('email') as string,
      message: formData.get('message') as string,
      phone:  formData.get('phone') as string,
    };

    try {
      const response = await fetch('https://formspree.io/f/mpwqkaro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: templateParams.from_email,
          name: templateParams.from_name,
          phone: templateParams.phone,
          message: templateParams.message
        })
      });

      if (response.ok) {
        toast({
          title: 'Message Sent Successfully !',
          description: 'Thank you! Your message has been sent successfully.'
        });
        // setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'error',
        description: 'Sorry, there was an error sending your message. Please try again.',
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }

    // try {
    //   await emailjs.send(
    //     EMAILJS_CONFIG.serviceId,
    //     EMAILJS_CONFIG.templateId,
    //     templateParams as Record<string, unknown>,
    //     EMAILJS_CONFIG.publicKey
    //   );
      
    //   toast({
    //     title: "Message sent successfully!",
    //     description: "I'll get back to you as soon as possible.",
    //   });
      
    //   form.reset();
    // } catch (error) {
    //   console.error('Error sending email:', error);
    //   toast({
    //     title: "Failed to send message",
    //     description: "Please try again or contact me directly at jigyasaupadhyay60@gmail.com",
    //     variant: "destructive",
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Have a project in mind or want to discuss potential collaboration? I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:jigyasaupadhyay60@gmail.com" className="text-muted-foreground transition-colors">
                    jigyasaupadhyay60@gmail.com
                  </a>
                </div>
              </div>

              
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Remote</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-lg">
            <form onSubmit={handleSubmit}  className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-background/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder=""
                  className="bg-background/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="resize-none h-32 bg-background/50"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#1ED760]" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
