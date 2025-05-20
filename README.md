# Jimmy Njuguna – Personal Resume Website

[//]: # (If you update the screenshot, bump the query string like &v=2 to break GitHub cache)
![Personal Resume Website](resume-screenshot.jpg?raw=true&v=2 'Personal Resume Website')

<div align="center">

![GitHub last commit](https://img.shields.io/github/last-commit/jimmyn883/personalSite)
<a href="https://github.com/jimmyn883/personalSite"><img alt="Top language" src="https://img.shields.io/github/languages/top/jimmyn883/personalSite"></a>
<a href="https://github.com/jimmyn883/personalSite/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/jimmyn883/personalSite?color=success"></a>
<a href="https://github.com/jimmyn883/personalSite/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/jimmyn883/personalSite?color=yellow"></a>

</div>

## 🧑‍💻 About

This is my personal resume website, built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). It’s fully responsive, fast, and deployed on [Vercel](https://vercel.com/). The content is dynamically populated from a single config file, making it easy to update and maintain.

### 🔗 Live site: [jimmy-njuguna.vercel.app](https://jimmy-njuguna.vercel.app/)

---

## 🚀 Tech Stack

- React + Next.js
- TypeScript
- Tailwind CSS
- Vercel (CI/CD deployment)
- SendGrid (contact form email)
- Markdown-style config via `data.tsx`

---

## 🛠️ How to Use

### 1. Clone this repo

```
git clone https://github.com/jimmyn883/personalSite.git
cd personalSite
```
### 2. Install dependencies
```
npm install
# or
yarn install
```
### 3. Run locally
```
npm run dev
# or
yarn dev
```
Open your browser at `http://localhost:3000`

## 🧑‍🎨 Customization
All data is defined in `/src/data/data.tsx` — including your name, bio, experience, education, projects, skills, and contact info.

Images are stored under `/src/images/`. Swap out existing ones or add your own and update the imports accordingly.



## 📬 Contact Form
The contact form is connected to a custom Next.js API route that uses SendGrid to deliver messages.
To use:

1. Sign up for a [SendGrid account](https://sendgrid.com/en-us)
2. Verify a sender (or domain)
3. Generate an API key
4. Add the key to .env.local:
```
SENDGRID_API_KEY=your-key-here
```
5. Set the same key in Vercel under Project Settings > Environment Variables

Messages are delivered in real-time via a Vercel serverless function, with no backend required.



## 🌐 Deployment
- Hosted on Vercel
- Automatically redeploys on every push to `main`
- CI/CD handles builds, environment injection, and production deployment

To set it up:
1. Push the project to your GitHub repo
2. Connect the repo to Vercel
3. Set the build command to `npm run build` or `yarn build`
4. Output directory: `.next`
5. Add any necessary environment variables (e.g., `SENDGRID_API_KEY`)
6. Deploy

## 🧠 Credits
This project is originally based on the excellent work by [Tim Baker](https://github.com/tbakerx/react-resume-template), with significant customization and personalization.

## 💬 License
MIT License – free to use, modify, and distribute.
