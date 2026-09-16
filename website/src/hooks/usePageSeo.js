import { useEffect } from 'react';

const SITE_URL = 'https://www.skinwin.co.in';

function upsertMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
  return el;
}

function upsertCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  return el;
}

// Sets per-route title/description/canonical/JSON-LD, restoring the previous
// values on unmount so a non-blog route doesn't keep a blog post's SEO tags.
export default function usePageSeo({ title, description, canonicalPath, jsonLd }) {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDescription = document.querySelector('meta[name="description"]')?.getAttribute('content');
    const prevCanonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');

    if (title) document.title = title;
    if (description) upsertMeta('description', description);
    if (canonicalPath) upsertCanonical(`${SITE_URL}${canonicalPath}`);

    let jsonLdScript;
    if (jsonLd) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.text = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    return () => {
      document.title = prevTitle;
      if (prevDescription !== undefined) upsertMeta('description', prevDescription);
      if (prevCanonical !== undefined) upsertCanonical(prevCanonical);
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [title, description, canonicalPath, jsonLd]);
}
