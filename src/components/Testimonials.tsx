const testimonials = [
  {
    quote:
      "Dr. Barram created a space where I felt truly understood for the first time. His approach is thoughtful, patient, and genuinely caring. I finally feel like I have the tools to navigate what I'm going through.",
    name: "Sarah M.",
    role: "Counseling Client",
  },
  {
    quote:
      "As a firefighter, I was skeptical about therapy. Dr. Barram gets it — he understands the job, the culture, and the weight we carry. Working with him has been a turning point for me and my family.",
    name: "James R.",
    role: "First Responder",
  },
  {
    quote:
      "The psychological evaluation was thorough, professional, and delivered with real compassion. Dr. Barram took the time to explain everything clearly and made the entire process feel manageable.",
    name: "Michelle T.",
    role: "Evaluation Client",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-sage">
          Testimonials
        </p>

        <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
          Words From Those
          <br className="hidden sm:block" /> I&apos;ve Worked With
        </h2>

        {/* Note about placeholders */}
        <p className="mt-4 text-sm italic text-darktext/40">
          * These testimonials are placeholders and should be replaced with
          actual client testimonials.
        </p>

        {/* Testimonial cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl bg-white p-8 shadow-sm"
            >
              {/* Quotation mark */}
              <span className="font-serif text-5xl leading-none text-sage/30">
                &ldquo;
              </span>

              <p className="mt-2 italic leading-relaxed text-darktext/70">
                {testimonial.quote}
              </p>

              <div className="mt-6 border-t border-warmgray pt-4">
                <p className="font-medium text-charcoal">
                  {testimonial.name}
                </p>
                <p className="text-sm text-darktext/50">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
