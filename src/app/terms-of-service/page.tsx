import { getPage } from "@/lib/api";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service | WebFixedPro",
  description: "Read the terms and conditions for using WebFixedPro services.",
};

const fallbackContent = `
<h2>Terms of Service</h2>
<p>Our terms of service are currently being updated. Please check back soon or contact us at hello@webfixedpro.com for any questions.</p>
`;

export default async function TermsOfServicePage() {
  let page = null;

  try {
    page = await getPage("terms-of-service");
  } catch {
    // Use fallback content if API is unavailable
  }

  return (
    <LegalPage
      title={page?.title ?? "Terms of Service"}
      content={page?.content ?? fallbackContent}
    />
  );
}
