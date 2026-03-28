"use client";

type Settings = Record<string, Record<string, string>> | null;

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Web Design",
  "Web Development",
  "E-Commerce",
  "SEO & Performance",
  "UI/UX Design",
  "Ongoing Support",
];


function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer({ settings }: { settings?: Settings }) {
  const email = settings?.contact?.email ?? "hello@webfixedpro.com";
  const phone = settings?.contact?.phone ?? "+1 (555) 123-4567";
  const companyName = settings?.general?.company_name ?? "WebFixedPro";
  const tagline = settings?.general?.tagline ?? "A modern web design and development studio helping ambitious businesses succeed online.";
  const copyright = settings?.general?.copyright ?? `\u00a9 2026 WebFixedPro. All rights reserved.`;

  const resolvedContactDetails = [
    { label: email, href: `mailto:${email}` },
    { label: phone, href: `tel:${phone.replace(/\D/g, "").replace(/^/, "+")}` },
    { label: "New York, United States", href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Main columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-1 cursor-pointer w-fit"
              aria-label={`${companyName} home`}
            >
              <span className="text-lg font-bold tracking-tight text-white">
                {companyName.replace(/Pro$/, "") || "WebFixed"}
              </span>
              <span className="text-lg font-bold tracking-tight text-blue-400">
                {companyName.endsWith("Pro") ? "Pro" : ""}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mb-3 ml-0.5 flex-shrink-0" />
            </button>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-150 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-150 cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              {resolvedContactDetails.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            {copyright}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-slate-500 text-xs hover:text-slate-300 transition-colors duration-150"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 text-xs hover:text-slate-300 transition-colors duration-150"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
