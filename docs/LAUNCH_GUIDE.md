# Taylor In Socials Launch Guide

## Recommended Hosting

Use Vercel for this first launch.

Why it fits:

- The current website is static HTML, CSS, and JavaScript, so it deploys cleanly without server setup.
- Vercel gives automatic HTTPS, global CDN hosting, preview deployments, and simple domain management.
- It keeps the upgrade path open for a future real portal with authentication, forms, booking, and payments.

## End-Of-Day Launch Path

1. Create a GitHub repository for this folder and push the current files.
2. In Vercel, choose "Add New Project" and import the GitHub repository.
3. Leave framework preset as "Other" or static. No build command is required.
4. Deploy the project and check the Vercel preview URL.
5. In Vercel project settings, open Domains and add:
   - `taylorinsocials.com`
   - `www.taylorinsocials.com`
6. In the domain registrar DNS panel, point the domain to Vercel:
   - Apex/root domain `taylorinsocials.com`: add Vercel's recommended `A` record.
   - `www`: add Vercel's recommended `CNAME` record.
7. Wait for DNS and SSL to finish provisioning, then set the preferred production domain.
8. Test:
   - `https://taylorinsocials.com`
   - `https://www.taylorinsocials.com`
   - Mobile header menu
   - Free audit form
   - Contact form
   - Client portal preview login

## Important Pre-Launch Decisions

- Forms: this static launch opens an email draft to `taylorkinsella@taylorinsocials.com`. For a more polished production flow, connect a form provider or a Vercel serverless function.
- Booking: the audit time buttons are preferred time requests only. Replace them with Calendly, TidyCal, Cal.com, or a direct booking embed when the real calendar is ready.
- Legal: the Privacy and Terms pages now contain baseline launch copy, but they should be reviewed before paid campaigns or client onboarding.
- Portal: the client portal is still a clearly labelled front-end preview. Real client use needs authentication, workspace-level permissions, secure credential handling, and a database.

## Suggested Next Upgrade Order

1. Connect a real booking calendar.
2. Connect audit/contact forms to email or a CRM.
3. Add real case studies, testimonials, and brand imagery.
4. Add analytics after the privacy notice is confirmed.
5. Build the real portal as a separate authenticated app when client volume justifies it.
