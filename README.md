# Taylor In Socials Static Launch Build

This is a dependency-free static launch build for the Taylor In Socials public website, with a public client portal information page for the coming secure portal experience.

## Open Locally

Open `index.html` in a browser, or run a simple local server:

```bash
python -m http.server 4173
```

Then visit `http://localhost:4173/index.html`.

## Launch Notes

- Recommended host: Vercel.
- Domain target: `taylorinsocials.com`.
- Deployment config: `vercel.json`.
- SEO basics: `robots.txt`, `sitemap.xml`, metadata, favicon, and manifest are included.
- Launch guide: `docs/LAUNCH_GUIDE.md`.

## Included

- Premium hospitality-focused public website.
- Home, Services, Results, About, FAQ, Free Audit, Contact, Privacy, and Terms pages.
- Free audit and contact forms that open organised email drafts to `taylorkinsella@taylorinsocials.com`.
- Client portal information page explaining the planned content calendar, approvals, messages, file requests, reporting, and client workflow.

## Client Portal Status

The public site does not expose a demo login. Production client use needs real authentication, server-side authorization, workspace-level data isolation, secure credential handling, and integrated booking/payment tools.
