# Personal engineering site

A static, dependency-free personal site (HTML + CSS + vanilla JS) for GitHub Pages. No build step.

## Personalise
Edit **`profile.js`**: name, links, bio, skills, projects, experience, interests. Empty `email`, `github` or `linkedin` values hide the related buttons. Projects without `github` or `demo` show "Private / Enterprise Project".
Also replace `YOUR NAME` and `YOUR-DOMAIN` in `index.html` (title, meta, Open Graph), `robots.txt` and `sitemap.xml`. Add an `og-image.png` (1200x630) for link previews.

## Local development / preview
No install needed. Either open `index.html`, or serve the folder:
```
python3 -m http.server 8000     # then visit http://localhost:8000
```
(`npm install`, `npm run dev`, `npm run build` are not needed: there is no build.)

## Deploy to GitHub Pages
1. Create a repository on GitHub (for a user site, name it `<username>.github.io`).
2. Push this folder:
   ```
   git init && git add . && git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` runs on every push to `main`. Watch it under the **Actions** tab.
5. Your site appears at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` for a user site). All asset paths are relative, so project-site subpaths work.
6. Custom domain (optional): Settings → Pages → Custom domain, add a `CNAME` DNS record to `<username>.github.io`, then update `canonical`, `robots.txt` and `sitemap.xml`.

## Extras
- Press **Ctrl + /** for the terminal easter egg.
- Set `githubUsername` in `profile.js` to load live repositories (public API, no token; falls back to placeholders on failure).
