import { base } from '$app/paths';

/**
 * Point site-root links and assets at the app's base path. Markdown content
 * links to pages like `/guide#x` and the site is served from a subfolder on
 * GitHub Pages, so those need the base in front of them.
 * @param {string} html
 */
export default function withBase(html) {
	if (!base) return html;
	return html.replace(/(href|src)="\/(?!\/)/g, `$1="${base}/`);
}
