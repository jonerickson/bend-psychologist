export default function About() {
  return (
    <section id="about" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-sage">
          About
        </p>

        <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
          Meet Dr. Barram
        </h2>

        {/* Two-column layout */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-warmgray flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-sage/20" />
                <p className="font-serif text-xl text-charcoal-light">
                  Dr. Barram
                </p>
                <p className="mt-1 text-sm text-darktext/50">
                  Photo placeholder
                </p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-sage/20" />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <div className="h-px w-12 bg-sage" />
            <p className="mt-6 text-lg leading-relaxed text-darktext">
              Dr. R. Andrew Barram, Psy.D., is a Licensed Psychologist bringing
              warmth, depth, and genuine care to every therapeutic relationship.
              Growing up across the landscapes of Northern California and Eastern
              Washington farmland, he developed an early appreciation for
              resilience and the quiet strength found in community.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-darktext">
              After completing graduate studies and gaining experience in both
              Portland and Denver, Dr. Barram chose Bend, Oregon, as the place
              to build his practice and raise his family. The natural beauty and
              close-knit community of Central Oregon reflect the values he
              brings to his work &mdash; grounding, connection, and growth.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-darktext">
              Through RiverFlow Psychology Services, he specializes in working
              with First Responders and individuals navigating life&apos;s most
              demanding challenges. His approach is collaborative,
              evidence-based, and deeply human &mdash; meeting each person
              exactly where they are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
