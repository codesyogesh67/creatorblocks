// lib/templates.gallery.ts
export type TemplateItem = {
  label: string; // short name for breadcrumbs/nav
  title: string; // display title on detail page
  shortDescription: string; // brief intro on detail page
  slug: string;
  src: string;
  alt: string;
  category: "template";
  href: string;
  sections: string[];
  tags: string[];
};

export const templatesGallery: TemplateItem[] = [
  {
    label: "SaaS Starter",
    title: "SaaS Starter",
    shortDescription:
      "A launch-ready SaaS landing built from polished blocks. Customize and ship in minutes.",
    slug: "template-saas-starter",
    src: "/templates/saas-starter.png",
    alt:
      "SaaS landing with hero, logos, feature grid, pricing, FAQ, and footer",
    category: "template",
    href: "/templates/saas-starter",
    sections: [
      "Hero/With Logos",
      "Features/3-Column",
      "Integrations",
      "Pricing/Tiered",
      "FAQ/Accordion",
      "CTA/Banner",
      "Footer/Columns",
    ],
    tags: ["saas", "startup", "light"],
  },
  {
    label: "Creator Portfolio",
    title: "Creator Portfolio",
    shortDescription:
      "A clean portfolio with intro hero, gallery, services, testimonials, and contact.",
    slug: "template-creator-portfolio",
    src: "/templates/portfolio.png",
    alt: "Portfolio with intro hero, gallery, about, services, and contact",
    category: "template",
    href: "/templates/creator-portfolio",
    sections: [
      "Hero/Centered",
      "Gallery/Grid",
      "About/Split",
      "Services/Cards",
      "Testimonials",
      "Contact/Form",
      "Footer/Minimal",
    ],
    tags: ["creator", "artist", "portfolio"],
  },
  {
    label: "Agency Studio",
    title: "Agency Studio",
    shortDescription:
      "An agency site with services, case studies, process, testimonials, and a strong CTA.",
    slug: "template-agency-studio",
    src: "/templates/agency.png",
    alt: "Agency site with case studies, services, process, and contact CTA",
    category: "template",
    href: "/templates/agency-studio",
    sections: [
      "Hero/Split",
      "Services/Icons",
      "Work/Case Studies",
      "Process/Steps",
      "Testimonials",
      "CTA/Strip",
      "Footer/Columns",
    ],
    tags: ["agency", "studio", "business"],
  },
  {
    label: "Link in Bio",
    title: "Link in Bio",
    shortDescription:
      "A creator hub with avatar, bio, social links, featured content, and newsletter.",
    slug: "template-link-in-bio",
    src: "/templates/sales-funnel.png",
    alt:
      "Link hub with avatar, bio, social links, featured content, and newsletter",
    category: "template",
    href: "/templates/link-in-bio",
    sections: [
      "Hero/Profile",
      "Links/List",
      "Featured/Carousel",
      "Newsletter/Inline",
      "Footer/Minimal",
    ],
    tags: ["creator", "social", "mobile-first"],
  },
  {
    label: "E-commerce Landing",
    title: "E-commerce Landing",
    shortDescription:
      "Product-focused landing with benefits, gallery, reviews, FAQ, and a purchase CTA.",
    slug: "template-ecommerce-landing",
    src: "/templates/ecommerce.png",
    alt:
      "Product-focused landing with hero, benefits, gallery, reviews, and purchase CTA",
    category: "template",
    href: "/templates/ecommerce-landing",
    sections: [
      "Hero/Product",
      "Benefits/3-Up",
      "Gallery/Carousel",
      "Reviews",
      "FAQ",
      "CTA/Purchase",
      "Footer/Columns",
    ],
    tags: ["ecommerce", "product", "conversion"],
  },
  {
    label: "Course & Coaching",
    title: "Course & Coaching",
    shortDescription:
      "Course/coach landing with outcomes, curriculum, instructor bio, pricing, and FAQ.",
    slug: "template-course-coaching",
    src: "/templates/courses.webp",
    alt:
      "Course landing with outcomes, curriculum, instructor bio, pricing, and FAQ",
    category: "template",
    href: "/templates/course-coaching",
    sections: [
      "Hero/With Logos",
      "Outcomes/Icons",
      "Curriculum/Chapters",
      "Instructor/Bio",
      "Pricing/Cards",
      "FAQ",
      "Footer/Newsletter",
    ],
    tags: ["education", "creator", "info-product"],
  },
  {
    label: "Mobile App",
    title: "Mobile App",
    shortDescription:
      "App promo with feature highlights, screenshots, testimonials, and store badges.",
    slug: "template-mobile-app",
    src: "/templates/software.jpeg",
    alt: "App promo with feature highlights, screenshots, and store badges",
    category: "template",
    href: "/templates/mobile-app",
    sections: [
      "Hero/App Badges",
      "Features/Screenshots",
      "How It Works/Steps",
      "Testimonials",
      "CTA/Download",
      "Footer/Minimal",
    ],
    tags: ["app", "product", "light"],
  },
  {
    label: "Event & Workshop",
    title: "Event & Workshop",
    shortDescription:
      "Event page with speakers, agenda timeline, location, FAQ, and ticket CTA.",
    slug: "template-event-workshop",
    src: "/templates/event.png",
    alt: "Event page with agenda, speakers, schedule, location, and ticket CTA",
    category: "template",
    href: "/templates/event-workshop",
    sections: [
      "Hero/Event",
      "Speakers/Grid",
      "Agenda/Timeline",
      "Location/Map",
      "FAQ",
      "CTA/Tickets",
      "Footer/Minimal",
    ],
    tags: ["event", "workshop", "ticketing"],
  },
  {
    label: "Nonprofit & Cause",
    title: "Nonprofit & Cause",
    shortDescription:
      "Cause page with mission, impact stats, stories, donate CTA, partners, and newsletter.",
    slug: "template-nonprofit-cause",
    src: "/templates/nonprofit.jpg",
    alt:
      "Cause page with mission, impact stats, stories, donate CTA, and newsletter",
    category: "template",
    href: "/templates/nonprofit-cause",
    sections: [
      "Hero/Statement",
      "Impact/Stats",
      "Stories/Cards",
      "Partners/Logos",
      "CTA/Donate",
      "Newsletter",
      "Footer/Columns",
    ],
    tags: ["nonprofit", "cause", "donations"],
  },
  {
    label: "Restaurant & Cafe",
    title: "Restaurant & Cafe",
    shortDescription:
      "Food venue page with menu highlights, gallery, reviews, hours, location, and booking.",
    slug: "template-restaurant-cafe",
    src: "/templates/cafe.avif",
    alt:
      "Food venue page with hero, menu highlights, gallery, hours, location, and booking",
    category: "template",
    href: "/templates/restaurant-cafe",
    sections: [
      "Hero/Photo",
      "Menu/Highlights",
      "Gallery/Grid",
      "Reviews",
      "Hours & Location",
      "CTA/Book",
      "Footer/Minimal",
    ],
    tags: ["local", "food", "booking"],
  },
];
