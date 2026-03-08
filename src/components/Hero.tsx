import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt="Pacific Northwest river flowing through misty mountains and evergreen forest"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-linear-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />

      {/* Extra vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,26,26,0.4)_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Micro label */}
        <p className="mb-8 inline-block border border-white/20 rounded-full px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.35em] text-white/80 backdrop-blur-sm md:text-xs">
          Bend, Oregon &middot; Licensed Psychologist
        </p>

        {/* Headline */}
        <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
          Find Your Path
          <br />
          <span className="text-gold drop-shadow-[0_0_25px_rgba(196,169,98,0.4)]">
            Forward
          </span>
        </h1>

        {/* Decorative line */}
        <div className="mx-auto mt-8 h-px w-16 bg-linear-to-r from-transparent via-gold to-transparent" />

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/70 sm:text-lg md:text-xl">
          Compassionate, evidence-based psychological services for individuals
          navigating life&apos;s most demanding challenges.
          <span className="mt-1 block font-normal text-white/90">
            Specializing in First Responder mental health.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="group relative rounded-full bg-sage px-9 py-4 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-sage/25 transition-all duration-300 hover:scale-105 hover:bg-sage-dark hover:shadow-xl hover:shadow-sage/30"
          >
            Schedule a Consultation
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/25 px-9 py-4 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-3 group"
          aria-label="Scroll to content"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 transition-colors group-hover:text-white/60">
            Discover
          </span>
          <svg
            className="h-5 w-5 animate-bounce text-white/40 transition-colors group-hover:text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
