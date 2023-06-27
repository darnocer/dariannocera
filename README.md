# dariannocera.com ⚠️ Under Construction

![Nextjs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 👋🏼 About

I maintain a portfolio at [darian.digital](https://darian.digital) to showcase my professional value that generally evolves with the type of work I'm doing at the time.

I've struggled for a bit with the idea that the whole point of a professional portfolio is to get hired, but I wanted a little corner of the internet where I can post unrelated thoughts and pretty much do whatever I want.

It occurred to me there's nothing wrong with having two websites if they serve different purposes. And also that that's literally what a blog is. Thus, my personal website, creatively named [dariannocera.com](dariannocera.com), was born.

## ⚙️ Setup

### Getting Started

**Install Dependencies**

```bash
npm install
```

**Start Development Server**

```bash
npm start
```

- Open http://localhost:3000 in browser to view.

## 🎨 Customization

### Basic Customizations

- `data/siteMetadata.js` - site information
- `data/authors/default.md` - about me info
- `data/headerNavLinks.js` - nav links
- `data/chips.js` - interest chips

### Custom Components

To add new components:

1. Create `Component.js` in /components
2. Create the react component:

```js
// import statements

const Component = ({ props }) => {
// ... functions
  }

  return (
//... jsx markup
  )
}

export default Component
```

To use in MDX:

3. Add to `const MDXComponents` object in /components/MDXComponents
4. Use in .mdx in the format:

```jsx
<Component prop="value" />
```

## ✅ Todo

- [ ] 🐞 Fix: Resolve routing issue for blog pages
- [ ] 📝 Content: Post article backlog
- [ ] 📝 Content: Post snippet backlog
- [ ] ✨ Enhancement: Add styles for callout types
- [ ] ✨ Enhancement: Add images for snippet categories
- [ ] 🧹 Refactor: Remove unneeded files/code

## ⭐️ Credits

I used [this AMAZING template](https://github.com/timlrx/tailwind-nextjs-starter-blog) by timlrx as a starter and am adding customizations along the way.

Also shout out to the [Indie Web](https://indieweb.org/). Let's make the internet great again.

## ✉️ Contact

Get in touch with me at [darian@darian.digital](mailto:darian@darian.digital).
