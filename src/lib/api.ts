const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function fetchAPI(endpoint: string, options?: RequestInit) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options?.headers,
    },
    next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
  });

  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function getHero() {
  const data = await fetchAPI('/hero');
  return data.data;
}

export async function getServices() {
  const data = await fetchAPI('/services');
  return data.data;
}

export async function getProjects() {
  const data = await fetchAPI('/projects');
  return data.data;
}

export async function getTestimonials() {
  const data = await fetchAPI('/testimonials');
  return data.data;
}

export async function getSettings() {
  const data = await fetchAPI('/settings');
  return data.data;
}

export async function getPage(slug: string) {
  const data = await fetchAPI(`/pages/${slug}`);
  return data.data;
}

export async function submitContact(formData: { name: string; email: string; message: string }) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}
