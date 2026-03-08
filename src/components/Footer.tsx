const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Specialties", href: "#specialties" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Counseling",
  "Evaluations",
  "Consultation",
  "Public Speaking",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Practice info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-serif text-xl text-white">
              RiverFlow{" "}
              <span className="text-sage-light">Psychology</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Compassionate, evidence-based psychological services in Bend,
              Oregon. Specializing in First Responder mental health.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-sage">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-sage">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-sage">
              Contact
            </p>
            <div className="mt-4 space-y-2.5 text-sm text-white/50">
              <p>
                25 NW Park Place
                <br />
                Bend, OR 97701
              </p>
              <p>
                (541) 000-0000
                <br />
                info@bendpsychologist.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} RiverFlow Psychology Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
