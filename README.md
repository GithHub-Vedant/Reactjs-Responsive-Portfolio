# React Responsive Portfolio

A modern, responsive personal portfolio website built with React and Vite. This single-page application showcases professional skills, services, projects, and contact information with a clean, attractive design.

## Table of Contents

- [Project Overview](#project-overview)
- [Business Problem](#business-problem)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Research Questions and Key Findings](#research-questions-and-key-findings)
- [Screenshots](#screenshots)
- [How to Run the Project](#how-to-run-the-project)
- [Customization](#customization)

## Project Overview

This is a responsive personal portfolio website designed for developers and designers to showcase their work professionally. Built with React 19 and Vite, it offers fast loading times, smooth animations, and a mobile-first approach that works seamlessly across all devices.

The portfolio includes essential sections:
- Hero section with introduction and call-to-action buttons
- About section with skills and achievements
- Services offered
- Portfolio of recent work
- Contact form with validation

## Business Problem

In today's digital world, professionals need an online presence to showcase their skills and attract potential clients or employers. Creating a personal portfolio website from scratch can be time-consuming and technically challenging, especially for those focusing primarily on backend or other non-frontend skills.

This project solves that problem by providing:
- A ready-to-use, responsive portfolio template
- Easy customization without deep technical knowledge
- Modern design that follows current web standards
- Fast performance thanks to Vite's build optimizations

## Technologies Used

- **React 19**: For building the user interface with component-based architecture
- **Vite**: Ultra-fast build tool and development server
- **JavaScript (ES6+)**: Modern JavaScript features for clean, efficient code
- **CSS3**: For styling and responsive design
- **HTML5**: Semantic markup structure
- **react-anchor-link-smooth-scroll**: For smooth scrolling navigation
- **web3forms**: For handling contact form submissions

Development tools:
- ESLint: Code quality and consistency
- npm: Package management

## Project Structure

```
react-responsive-portfolio/
├── src/
│   ├── assets/
│   │   ├── mywork_data.js
│   │   └── services_data.js
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── MyWork/
│   │   ├── Navbar/
│   │   └── Services/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Key Features

1. **Fully Responsive Design**: Works on mobile, tablet, and desktop screens
2. **Smooth Scrolling Navigation**: One-page layout with anchor links
3. **Modern UI Components**: Clean, professional design with consistent styling
4. **Contact Form Integration**: Functional contact form using web3forms API
5. **Performance Optimized**: Fast loading times with Vite build tool
6. **Easy Customization**: Data-driven approach for content updates
7. **Cross-browser Compatibility**: Works on all modern browsers

## Research Questions and Key Findings

**Q: Why use React for a portfolio website?**
A: React provides component reusability, efficient rendering, and a rich ecosystem of libraries. For portfolios, this translates to maintainable code and smooth user interactions.

**Q: How does Vite improve development experience?**
A: Vite offers instant server start, lightning-fast HMR (Hot Module Replacement), and optimized builds. This significantly reduces development time and improves productivity.

**Q: What makes this portfolio responsive?**
A: The site uses CSS media queries, flexible grids, and scalable units (%, em, rem) to adapt to different screen sizes. All components are tested on various devices.

## Screenshots

Below are screenshots of the portfolio website showing different sections and responsive views:

Home Section:

![Home Section](screenshot/Screenshot%202025-11-16%20170625.png)

About Section:

![About Section](screenshot/Screenshot%202025-11-16%20170641.png)

Services Section:

![Services Section](screenshot/Screenshot%202025-11-16%20170655.png)

Portfolio Section:

![Portfolio Section](screenshot/Screenshot%202025-11-16%20170710.png)

Contact Section:

![Contact Section](screenshot/Screenshot%202025-11-16%20170725.png)

## How to Run the Project

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-responsive-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-responsive-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the project for production
- `npm run preview`: Previews the production build locally
- `npm run lint`: Runs ESLint to check for code issues

## Customization

To customize this portfolio for your own use:

1. **Update Personal Information**:
   - Edit the content in each component file (Hero.jsx, About.jsx, etc.)
   - Replace images in the `src/assets/` folder with your own

2. **Modify Services**:
   - Update `src/assets/services_data.js` with your services

3. **Update Portfolio Items**:
   - Modify `src/assets/mywork_data.js` with your projects

4. **Configure Contact Form**:
   - Copy the `.env.example` file to `.env` and add your web3forms API key
   - Update contact details in `src/components/Contact/Contact.jsx`

5. **Styling**:
   - Modify CSS files in each component folder to change colors, fonts, spacing
   - Global styles can be adjusted in `src/index.css`

-------------------------------------------------------------------------------

© 2025 Vedant Ligade. All rights reserved
