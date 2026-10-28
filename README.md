# sky. — Yaline Shanthakumar portfolio

Static HTML / CSS / JavaScript website for GitHub Pages. The original design, animation, sections, responsive layout, theme toggle and project filters are retained.

## Publish using only GitHub.com
1. Create a public repository named `skyaline1202.github.io`.
2. Open the downloaded ZIP, go **inside** `yaline-portfolio`, and upload `index.html`, `styles.css`, `script.js`, and the `assets` folder to the repository root using **Add file → Upload files**. Commit.
3. Under **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)`, then Save.
4. Visit `https://skyaline1202.github.io/` once GitHub Pages publishes it.

## Update content without installing anything
Edit `index.html` using GitHub's pencil icon. `styles.css` contains appearance, `script.js` contains animation and filters. `assets/tableau-renewable-dashboard.png` is the supplied dashboard screenshot.

### Project links
The analytics cards currently link to your **GitHub profile**, not a fabricated project repository. When you have a project repository, replace the card link's `href` with its direct GitHub repository URL and change the label to `View project on GitHub ↗`.

### Article PDF links
You can upload the full magazine PDF or an article-only PDF (the latter is usually easier for visitors). Place it under `assets/`, e.g. `assets/ai-and-finance.pdf`, then add this HTML at the end of the relevant `.project-body`:

```html
<a class="inline-link" href="assets/ai-and-finance.pdf" target="_blank" rel="noopener noreferrer">Read article (PDF) ↗</a>
```

Do not add a link until you have uploaded its file. The magazine may have its own usage/credit requirements.

## Privacy
This public site deliberately does not display referee details or your phone number. Academic grades/GPA are not displayed.

### Version 4 changes
- Completely removed Courses & Certifications from the page and navigation.
- Renumbered subsequent sections; everything else remains unchanged.

### Previous Version 3 changes
- Removed the education timeline and graduation statistics.
- Added three named career-direction cards in About.
- Added an Independent projects filter with an honest in-progress placeholder; replace it with completed personal work as it becomes available.
- Refined section headings, added smooth reduced-motion-aware About animation, and updated footer wording.


Portfolio cover images are in `assets/`; the SCAF Times Issue 04 article link opens the publisher’s PDF.
