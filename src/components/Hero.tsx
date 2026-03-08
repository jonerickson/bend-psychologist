export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />

      {/* Subtle texture / nature placeholder */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-gradient-to-br from-sage/30 via-transparent to-gold/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Micro label */}
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-sage-light md:text-sm">
          Bend, Oregon &middot; Licensed Psychologist
        </p>

        {/* Headline */}
        <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl lg:text-8xl">
          Find Your Path
          <br />
          <span className="text-sage-light">Forward</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
          Compassionate, evidence-based psychological services for individuals
          navigating life&apos;s most demanding challenges. Specializing in
          First Responder mental health.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-full bg-sage px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-sage-dark"
          >
            Schedule a Consultation
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/40">
            Scroll
          </span>
          <div className="h-10 w-px animate-pulse bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
