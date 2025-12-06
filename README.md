# Personal Portfolio

A personal portfolio application built using a modern frontend stack and a custom architectural pattern focused on modularity, maintainability, and predictable UI behavior.

## Tech Stack

![React](https://img.shields.io/badge/React-19.1.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.13-blue?style=flat-square&logo=tailwind-css)

The application is built using modern web technologies:

- **Frontend:** React 19.1.1 with TypeScript 5.8.3
- **Styling:** Tailwind CSS 4.1.13
- **Animations:** Motion 12.23.12
- **Build Tool:** Vite 7.1.2
- **Quality Assurance:** ESLint 9.33.0, Prettier 3.6.2

## Features

- Responsive design with dynamic breakpoint management
- Smooth animations and transitions
- Interactive project showcase
- Skills presentation with categorized abilities
- Modern floating UI components
- Mobile-optimized interface

## Project Structure

- *src/sections* — high-level interface modules (page sections, feature blocks)
- *src/assets* — static assets and global styling resources
- *src/shared* — cross-module utilities, abstractions, and shared logic
- *src/shared/components* — specialized UI components bound to specific sections
- *src/shared/ui* — UI primitives usable across the entire project
- *src/shared/lib* — lightweight TypeScript classes encapsulating logic and reducing code duplication (only classNames now)

## Commands

- ```npm run dev``` - starts the application in development mode with HMR enabled
- ```npm run build``` - compiles the application for production
- ```npm run preview``` - launches a local preview server for the previously built production bundle
- ```npm run lint``` - runs static code analysis using ESLint
- ```npm run lint:fix``` - automatically fixes ESLint-detected issues
- ```npm run prettier``` - checks code formatting using Prettier
- ```npm run prettier:fix``` - automatically formats code according to Prettier rules
