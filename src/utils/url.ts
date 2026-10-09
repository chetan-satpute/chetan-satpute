// The address as a résumé prints it: no scheme, `www.` or trailing slash.
export function displayUrl(href: string) {
  return href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}
