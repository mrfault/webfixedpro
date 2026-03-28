import { getPage } from "@/lib/api";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | WebFixedPro",
  description: "Learn how WebFixedPro collects, uses, and protects your personal information.",
};

const fallbackContent = `
<h2>Privacy Policy</h2>
<p>Our privacy policy is currently being updated. Please check back soon or contact us at hello@webfixedpro.com for any questions.</p>
`;

export default async function PrivacyPolicyPage() {
  let page = null;

  try {
    page = await getPage("privacy-policy");
  } catch {
    // Use fallback content if API is unavailable
  }

  return (
    <LegalPage
      title={page?.title ?? "Privacy Policy"}
      content={page?.content ?? fallbackContent}
    />
  );
}
