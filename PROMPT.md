# Bend Psychologist Website - Ralph Loop Prompt

You are building a premium, modern website for **RiverFlow Psychology Services** (bendpsychologist.com) — the practice of **Dr. R. Andrew Barram, Psy.D.**, a Licensed Psychologist in Bend, Oregon.

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** with custom design tokens
- **Deployment target**: Vercel

## Design System

Take heavy inspiration from [movedacademy.com](https://movedacademy.com/):

### Typography
- **Headings**: Playfair Display (serif) — dramatic, premium feel
- **Body**: Inter (sans-serif) — clean readability
- **Micro-copy/labels**: Uppercase with letter-spacing (tracking-widest)
- **Hero headlines**: Large scale (text-5xl to text-8xl responsive)

### Color Palette
- **Primary accent**: Warm sage/forest green (#5B7B6A) — calming, grounding
- **Dark backgrounds**: Rich charcoal (#1A1A1A) for hero and footer
- **Light backgrounds**: Warm off-white (#FAFAF7) and soft gray (#F5F3EF)
- **Body text**: Dark gray (#2D2D2D)
- **White text**: On dark sections
- **Subtle accent**: Muted gold (#C4A962) for highlights/hover states

### Layout Patterns
- Full-viewport hero with gradient overlay on background image
- Max-width container (max-w-7xl / 80rem)
- Generous vertical section padding (py-24 to py-32)
- Card-based layouts with subtle borders and hover effects
- Numbered progression/pathway visualization for process steps

### UI Components
- Rounded buttons with uppercase text and letter-spacing
- Hover scale transforms (scale-105) and smooth color transitions
- Ghost/outline button variants for secondary actions
- SVG checkmark bullets for feature lists
- FAQ accordion with expandable sections

### Overall Aesthetic
- Premium minimalist — not clinical, not cold
- Warm, grounded, and approachable
- Generous whitespace
- Grayscale or muted photography treatment
- Calm and safe feeling that reduces anxiety about seeking help

## Content / Copy

### About Dr. Barram
Dr. R. Andrew Barram, Psy.D. is a Licensed Psychologist based in Bend, Oregon. He grew up in Northern California and Eastern Washington farmland. After graduate school and time in Portland and Denver, he established his practice in Bend where he raised his family. He operates RiverFlow Psychology Services and specializes in work with First Responders.

### Services
1. **Counseling** — "Counseling is provided for adolescent and adult clients. Counseling often facilitates finding a path through the challenges of life." Expand this into warm, inviting copy.
2. **Evaluations** — "Psychological evaluations are conducted to provide diagnoses, treatment recommendations and to address forensic concerns." Expand professionally.
3. **Consultation** — "Consultations and expert testimony are available when specialized information or guidance is necessary to guide critical decisions." Expand with authority.
4. **Public Speaking** — "Presentations and lectures provide opportunities to bring forward psychological information in a manner targeted to specific audiences." Expand engagingly.

### Specialties
- First Responder mental health (primary specialty — emphasize this)
- Adolescent and adult therapy
- Forensic psychological evaluations
- Expert testimony and consultation

### Contact Info
- **Location**: 25 NW Park Place, Bend, OR 97701
- **Practice name**: RiverFlow Psychology Services

## Page Structure (Single Page with Sections)

1. **Navigation** — Sticky header: Logo/practice name, section links (About, Services, Specialties, Contact), CTA button "Request Consultation"
2. **Hero** — Full-viewport, dark overlay on nature/mountain/river image placeholder, dramatic headline about finding clarity/strength, tagline, dual CTA buttons
3. **About** — Dr. Barram's story, photo placeholder, warm and personal tone
4. **Services** — Card-based grid (2x2), each service with icon, title, description, learn-more link
5. **Specialties / Approach** — Highlight First Responder focus, numbered pathway showing the therapeutic process (like movedacademy's pathway visualization)
6. **Testimonials** — Placeholder testimonial cards (3-4) with quote styling
7. **FAQ** — Accordion-style common questions about therapy, first sessions, insurance, etc.
8. **Contact** — Contact form (name, email, phone, message), location info, embedded map placeholder, office hours
9. **Footer** — Dark background, practice info, quick links, contact details, copyright

## Instructions for Each Iteration

1. Read `prd.json` to find the current user story to work on (first story where `passes: false`)
2. Implement that story completely, following the design system above
3. Ensure `npm run build` passes with no errors
4. Update `prd.json`: set the completed story's `passes: true` and add notes
5. Commit your work with a descriptive message
6. If ALL stories have `passes: true`, output `<promise>ALL STORIES COMPLETE</promise>`

## Important Guidelines

- Use placeholder images (solid color divs with descriptive text, or use Unsplash placeholder URLs for nature/Bend Oregon imagery)
- Write compelling, warm, professional copy — expand on the base content provided
- Ensure full mobile responsiveness
- Add smooth scroll behavior for navigation links
- Include proper meta tags and SEO basics
- Use Next.js Image component for any images
- Keep components modular and well-organized in `src/components/`
- Use `src/app/` directory structure
