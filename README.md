# Gewa Developer — Portfolio (Static HTML/CSS/JS)

Plain HTML, CSS, and JavaScript version of the React/Vite portfolio — no build step, no dependencies. Just open `index.html` or push straight to GitHub Pages.

## Structure
```
index.html          -> markup for every section
css/style.css        -> all styling (theme, layout, animations)
js/script.js          -> content data + interactivity (typing effect, scroll-spy nav,
                         particle background, skill bars, counters, loading screen)
assets/profile.png    -> your photo
assets/favicon.svg    -> site favicon
```

Icons are loaded from CDNs (Font Awesome + Devicon) and fonts from Google Fonts — no local install needed, but you do need an internet connection when viewing the page.

## Deploy to GitHub Pages
1. Push this folder's contents to a repo (e.g. `git init && git add . && git commit -m "portfolio" && git push`).
2. In the repo settings, go to **Pages** → set source to the `main` branch, root folder.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

## Customize
- Update text/data in `js/script.js` (SKILLS, SERVICES, PROJECTS, EXPERIENCES, CERTIFICATES, STATS, TESTIMONIALS, BLOG_POSTS, CONTACT_INFO arrays).
- Replace `assets/profile.png` with your own photo.
- The contact form currently just shows a placeholder alert — wire it up to a real backend or a service like Formspree/EmailJS to actually receive messages.
- Real social links (GitHub, LinkedIn) are placeholder `#` hrefs — update them in `index.html`.
