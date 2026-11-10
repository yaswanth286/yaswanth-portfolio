# Yaswanth Yadlapalli — Developer Portfolio

A modern, fully responsive personal portfolio website built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **React 19** + **Vite 8** — fast dev and build
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — utility-first styling
- **Framer Motion** — smooth animations
- **Lucide React** — consistent icon set
- **EmailJS** — contact form email delivery

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Configuration

All personal data, URLs, and project links are in **one file**:

```
src/config/data.js
```

Open that file and update:
- `personal.linkedin` — your actual LinkedIn URL
- `resumeConfig.viewUrl` — your Google Drive PDF share link
- `projects[1].live` (Milk Manager Pro) — frontend deployment URL when ready
- `projects[2].github` / `projects[3].github` — public repo URLs when available

### Resume PDF

Place your resume in the `public/` folder:

```
public/Yaswanth_Yadlapalli_Resume.pdf
```

The Download CV button links directly to this file.

---

## EmailJS Setup (Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Add an **Email Service** (Gmail recommended)
3. Create an **Email Template** — use these variables in the template:
   - `{{from_name}}` — sender name
   - `{{from_email}}` — sender email
   - `{{subject}}` — subject
   - `{{message}}` — message body
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

> The contact form will show a warning banner until these are configured. It will never pretend to send a message if unconfigured.

---

## Add Your Profile Photo

1. Save your photo as `public/profile.jpg` (or `.png`, `.webp`)
2. In `src/components/Hero.jsx`, find the commented `<img>` block near the bottom of the photo area and uncomment it:

```jsx
<img
  src="/profile.jpg"
  alt="Yaswanth Yadlapalli"
  className="w-full h-full object-cover"
/>
```

3. Remove or hide the placeholder `<div>` above it.

---

## Deployment on Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Import Project → select your repo
3. Vercel auto-detects Vite — no build config changes needed
4. Add environment variables in Vercel dashboard:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Deploy

The `vercel.json` SPA rewrite rule is already included.

---

## Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── Yaswanth_Yadlapalli_Resume.pdf   ← add your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── GitHubStats.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── config/
│   │   └── data.js          ← all personal data & config
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── vercel.json
├── vite.config.js
└── README.md
```

---

## Placeholders to Update

| Location | What to update |
|---|---|
| `src/config/data.js` → `personal.linkedin` | Your LinkedIn profile URL |
| `src/config/data.js` → `resumeConfig.viewUrl` | Google Drive PDF view link |
| `src/config/data.js` → `projects[1].live` | Milk Manager Pro live URL |
| `src/config/data.js` → `projects[2].github` | Hospital EHR repo URL |
| `src/config/data.js` → `projects[3].github` | Music Recommendation repo URL |
| `public/Yaswanth_Yadlapalli_Resume.pdf` | Your actual resume PDF |
| `public/profile.jpg` | Your profile photo |
| `.env` | EmailJS credentials |
