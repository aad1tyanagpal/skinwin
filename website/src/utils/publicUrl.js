// Prefixes a root-relative public/ asset path with PUBLIC_URL, so images still
// resolve when the app is built for a sub-path deploy (e.g. GitHub Pages).
// PUBLIC_URL is "" for a normal build, so this is a no-op in production.
export const publicUrl = (path) => `${process.env.PUBLIC_URL}${path}`;
