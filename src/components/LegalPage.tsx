import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LegalPageProps {
  title: string;
  content: string;
  updatedAt?: string;
}

export default function LegalPage({ title, content, updatedAt }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors duration-150 mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-8">
            {title}
          </h1>

          {updatedAt && (
            <p className="text-sm text-slate-400 mb-10">
              Last updated: {updatedAt}
            </p>
          )}

          <div
            className="legal-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
