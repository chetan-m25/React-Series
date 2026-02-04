# ⚛️ React Learning Series – Day 03

Welcome to **Day 03** of my **React Learning Series** 
On this day, I focused on learning **Tailwind CSS** and how to use it inside a **React + Vite** project.

---------------------------------------------------

## 📘 What I Learned on Day 03

- What **Tailwind CSS** is and why it is useful
- How to **install Tailwind CSS in a React project**
- How to integrate **Tailwind with Vite**
- How to configure Tailwind using `vite.config.js`
- Using **Tailwind utility classes** for styling
- Creating a **simple card UI** using Tailwind
- Understanding how Tailwind replaces traditional CSS files
- I also created a **small card UI** using Tailwind utility classes

## 🧩 What is Tailwind CSS?

Tailwind CSS is a **utility first CSS framework**.  
Instead of writing custom CSS files, you style elements directly using **predefined class names**.

Example:
```html
<div class="bg-white rounded-xl p-6 text-center">
```

### Setup (One-Line Instruction as Requested):

Go to the Tailwind CSS website, click Get Started, then go to the Using Vite section and follow the steps provided to set up Tailwind CSS with React.

---------------------------------------------------

# Styling in React

## 1. Different Styling Approaches in React

React supports multiple ways to style UI components. The most commonly used approaches are:

- Inline Styles
- CSS Stylesheets
- CSS Modules
- Utility First CSS (Tailwind CSS)
- Styled Components / CSS in JS (advanced, optional)

Each approach has different use cases depending on scalability, maintainability, and team workflow.

## 2. Importance of Component Based Styling

React follows a component based architecture, so styling should align with this philosophy.

Why component based styling is important:

- Styles remain scoped to a component
- Avoids global CSS conflicts
- Improves code readability
- Makes components reusable
- Easier to maintain in large applications

Component based styling ensures that UI logic and styles evolve together.


## 3. Basic Tailwind CSS Utilities

### Height & Width

```html
<div class="h-24 w-24 bg-orange-500"></div>
```

### Flexbox

```html
<div class="flex"></div>
```

### Center Items (Both Axis)

```html
<div class="flex items-center justify-center"></div>
```

### Space Between Items

```html
<div class="flex justify-between"></div>
```

### Background Color

```html
<div class="bg-blue-500"></div>
```

### Background Opacity

```html
<div class="bg-black bg-opacity-50"></div>
```

## 4. Custom CSS Values in Tailwind ([] syntax)

Tailwind allows custom values using square brackets.

### Examples:

```html
<div class="h-[120px] w-[300px]"></div>

<div class="bg-[#1e293b]"></div>

<div class="text-[18px]"></div>
```

### Why it's useful:

- No need to write custom CSS files
- Keeps everything inside JSX
- Fast UI experimentation

## 5. Why Tailwind Works Well with React

- Perfect for component based styling
- No context switching between CSS and JSX
- Faster development
- Consistent design system
- Eliminates unused CSS

---------------------------------------------------

## 📂 Folder Structure (day-03):
```
day-03/
│
├── node_modules/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Main React component (UI built here)
│   ├── index.css        # Tailwind CSS directives
│   └── main.jsx         # React entry point
│
├── .gitignore
├── eslint.config.js
├── index.html 
├── package-lock.json
├── package.json
├── vite.config.js       # Vite configuration file (Tailwind integrated)
└── README.md            # Documentation for React Day 03 learning
```
