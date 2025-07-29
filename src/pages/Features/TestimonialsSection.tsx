
import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechForward",
    content: "CloudStick's features have transformed our development workflow. The white labeling capability allowed us to present a cohesive brand to our clients.",
    stars: 5
  },
  {
    name: "Mark Thompson",
    role: "Lead Developer",
    company: "InnoSolutions",
    content: "The API integration and custom workflows have saved us countless hours. Our team can now focus on innovation rather than maintenance.",
    stars: 5
  },
  {
    name: "Jessica Chen",
    role: "Product Manager",
    company: "DigiGrowth",
    content: "We've seen a 40% increase in team productivity since implementing CloudStick's collaboration features. Worth every penny!",
    stars: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.stars
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex items-center mt-4">
                <div className="bg-gradient-to-r from-[#006FEE] to-cyan-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
