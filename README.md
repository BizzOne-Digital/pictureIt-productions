This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Admin Panel

Site content (Services, Packages, Gallery, Testimonials, FAQs, Add-Ons, Package Includes) is stored in MongoDB and managed at `/admin`.

1. Copy `.env.example` to `.env.local` and fill in:
   - `MONGODB_URI` — your MongoDB connection string
   - `ADMIN_PASSWORD` — the password used to log into `/admin`
   - `ADMIN_SECRET` — any long random string (used to sign the admin session cookie)
   - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` — from your Cloudinary dashboard's "Account Details" (used for image uploads in the admin panel)
2. Run the app and visit `/admin/login`.
3. On first load, each content collection auto-seeds from the site's existing content, so nothing goes blank.
4. Images uploaded through the admin panel are stored on Cloudinary (not on the server disk), so they persist across deploys.

Set the same env vars on the production server before deploying.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
