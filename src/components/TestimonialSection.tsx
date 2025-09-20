// import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useRef } from 'react';

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Avinash Jayakumar',
    role: 'Principle Software developer @ Gupshup',
    avatar: 'test1.webp',
    quote:
      'I recommend Jigyasa, whom I had the pleasure of mentoring from a fresher to a seasoned 5+ year engineer during our time working together from 2020 to 2024. She is a top-tier talent with a rare combination of deep technical skill, architectural thinking, and a powerful drive to learn.',
  },
  {
    name: 'Anshuman Mohanty',
    role: 'Frontend Engineer @ Veeam',
    avatar: 'test2.jpg',
    quote:
      'I highly recommend Jigyasa as an exceptional Frontend Developer. During our time working together at Gupshup, she consistently demonstrated remarkable technical proficiency and a deep understanding of modern frontend technologies. Her expertise spans React, JavaScript, TypeScript, and contemporary frontend frameworks, making her an invaluable asset to any development team.',
  },
  {
    name: 'Arjun Rai',
    role: 'Founder @ Staff Talents LLC',
    avatar: 'test3.jpg',
    quote:
      'Jigyasa did an amazing job developing our website. She delivered a pixel-perfect UI, completed everything on time, and leveraged modern frameworks to make the site fast, responsive, and maintainable. Working with her was seamless, and the quality exceeded our expectations.',
  },
  {
    name: 'Lavina Kapoor',
    role: 'HR @ Mango Analytics',
    avatar: 'test4.jpg',
    quote:
      'I had the opportunity to work with Jigyasa on a few side projects, including the development of a professional website for Mango Analytics. From the very first discussion, she impressed me with her clear understanding of requirements and her ability to turn ideas into a clean, user-friendly design.',
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref);

  return (
    <section id="testimonials" ref={ref} className="relative py-24 sm:py-28 overflow-hidden">
      {/* Quotes background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 w-[480px] h-[480px] rounded-[36px] border-2 border-[#1ED760]/50" />
        <div className="absolute -right-32 -top-8 w-[560px] h-[560px] rounded-[36px] border-2 border-[#1ED760]/40" />
        <div className="absolute right-10 bottom-0 w-[420px] h-[420px] rounded-[36px] border-2 border-secondary/30" />
        <div className="absolute -left-350 bottom-0 w-[420px] h-[420px] rounded-[36px] border-2 border-secondary/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold">Trusted By Developers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              className="group relative overflow-hidden rounded-2xl p-6 bg-[#232323] border border-[#1ED760]/10 shadow-[0_8px_40px_rgba(30,215,96,0.05)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(30,215,96,0.15)] hover:border-[#1ED760]/40"
            >
              <div className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden>
                <div
                  className="absolute inset-0 rounded-[28px] blur-2xl"
                  style={{
                    background:
                      'radial-gradient(120px 120px at 85% 20%, #1ED76055, transparent 60%), radial-gradient(160px 160px at 15% 80%, #0FA85144, transparent 60%)',
                  }}
                />
              </div>
              {/* top quotes */}
              <Quote className="absolute right-6 top-6 h-16 w-16 text-[#1ED76022] group-hover:text-[#1ED76055] transition-colors" />

              <div className="flex items-center gap-4 mb-4">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover border-2 border-[#1ED760]/40" />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">{t.quote}</p>

              {/* bottom quotes */}
              {/* <Quote className="absolute left-6 bottom-6 h-16 w-16 rotate-180 text-[#1ED76011]" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


