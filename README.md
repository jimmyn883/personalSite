# Jimmy Njuguna – Personal Resume Website

![Personal Resume Website](resume-screenshot.jpg?raw=true 'Personal Resume Website')

<div align="center">

<a href="https://github.com/jimmyn883/personalSite/releases"><img alt="GitHub release" src="https://img.shields.io/github/v/release/jimmyn883/personalSite"></a>
<a href="https://github.com/jimmyn883/personalSite"><img alt="Top language" src="https://img.shields.io/github/languages/top/jimmyn883/personalSite"></a>
<a href="https://github.com/jimmyn883/personalSite/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/jimmyn883/personalSite?color=success"></a>
<a href="https://github.com/jimmyn883/personalSite/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/jimmyn883/personalSite?color=yellow"></a>

</div>

## 🧑‍💻 About

This is my personal resume website, built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). It’s fully responsive, fast, and deployed on [Vercel](https://vercel.com/). The content is dynamically populated from a single config file, making it easy to update and maintain.

### 🔗 Live site: [jimmynjuguna.com](https://jimmynjuguna.com)

---

## 🚀 Tech Stack

- React + Next.js
- TypeScript
- Tailwind CSS
- Vercel (deployment)
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
All data is defined in /src/data/data.tsx — including your name, bio, experience, education, projects, skills, and contact info.

Images are stored under /src/images/. Swap out existing ones or add your own and update the imports accordingly.



## 📬 Contact Form
The contact form is wired for input handling and validation, but you'll need to hook it up to a backend/email service. Free options:
- Vercel Serverless Functions + SendGrid
- EmailJS
- Formspree

## 🌐 Deployment
1. Push the project to a GitHub repo

2. Go to vercel.com/import and connect your repo

3. Set up the build command: `npm run build` or `yarn build`

4. Set the output directory to `.next`

5. Deploy and done

## 🧠 Credits
This project is originally based on the excellent work by [Tim Baker](https://github.com/tbakerx/react-resume-template), with significant customization and personalization.

## 📸 Screenshot
<insert website pic

## 💬 License
MIT License – free to use, modify, and distribute.
