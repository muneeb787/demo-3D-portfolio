# 3D Portfolio Website Project Quick Start Guide

Welcome to this project! This guide will walk you through the steps to set up and run this project.

## Prerequisites

Before getting started, ensure you have the following installed on your machine:

- Node.js (version >= 12.0.0)
- npm (version >= 6.0.0) or yarn (version >= 1.0.0)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/muneeb787/demo-3D-portfolio.git
```

2. Navigate to the project directory:

```bash
cd demo-3D-portfolio
```

3. Install dependencies using npm:

```bash
npm install
```

## Development

To start the development server, run the following command:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

This will start the development server at `http://localhost:3000`. You can now view your Vite project in the browser.

## Development

In this project, I utilized a GLB model for the 3D elements. To integrate the GLB model seamlessly into the React environment, I employed a GLB to GLB transformer. This transformer optimizes the GLB file for efficient usage within React components.

After incorporating the 3D model, I integrated it into the background using Three.js, a popular JavaScript library for creating and displaying 3D graphics in a web browser.

Additionally, I constructed the frontend of the website, ensuring a user-friendly and visually appealing interface.

To enhance user engagement and visual appeal further, I implemented animations on the 3D models using GSAP (GreenSock Animation Platform) with ScrollTrigger. This allowed for smooth and interactive animations synchronized with scrolling actions, creating a captivating user experience.


