import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-offwhite">
        <h1 className="font-serif text-5xl text-charcoal">
          RiverFlow Psychology
        </h1>
        <p className="mt-4 text-lg text-darktext">
          Dr. R. Andrew Barram, Psy.D. &mdash; Licensed Psychologist, Bend,
          Oregon
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="rounded-full bg-sage px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-sage-dark"
          >
            Schedule a Consultation
          </a>
          <a
            href="#about"
            className="rounded-full border border-sage px-8 py-3 text-sm font-medium uppercase tracking-widest text-sage transition-colors hover:bg-sage hover:text-white"
          >
            Learn More
          </a>
        </div>
      </main>
    </>
  );
}
