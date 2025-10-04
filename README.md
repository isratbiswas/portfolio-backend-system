# portfolio-backend-system

A RESTful backend API for managing a personal portfolio, including blogs, projects, and owner-only dashboard functionalities. Built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)

---

Suggested Folder Structure
portfolio-backend/
│
├─ src/
│ ├─ app/
│ │ ├─ config/
│ │ │ ├─ db.ts # MongoDB connection
│ │ │ └─ env.ts # Environment variables
│ │ ├─ middlewares/
│ │ │ ├─ checkAuth.ts
│ │ │ ├─globalErrorHandle.ts
│ │ │ └─ notFound.ts
│ │ │ └─ validRequest.ts
│ │ │
│ │ ├─ utils/
│ │ │ ├─ apiResponse.ts # Standard API response format
│ │ │ └─ hash.ts # Password hashing helper
│ │ └─ app.ts # Express app instance & middleware setup
│
├─ modules/
│ ├─ auth/
│ │ ├─ auth.controller.ts # Login, register functions
│ │ ├─ auth.service.ts # Business logic
│ │ ├─ auth.routes.ts # Auth routes
│ │
│ │
│ ├─ blogs/
│ │ ├─ blog.controller.ts
│ │ ├─ blog.service.ts
│ │ ├─ blog.routes.ts
│ │ └─ blog.model.ts
│ │
│ ├─ projects/
│ │ ├─ project.controller.ts
│ │ ├─ project.service.ts
│ │ ├─ project.routes.ts
│ │ └─ project.model.ts
│
├─ types/
│ ├─ express.d.ts # Custom types for request/response
│ └─ index.d.ts
│
├─
│  
│
├─ utils/ # Seed admin user or DB scripts
│ └─ seedAdmin.ts
│
├─ .env.example
├─ package.json
├─ tsconfig.json
├─ README.md
└─ server.ts # Entry point to start server

## Overview

This API serves as the backend for a personal portfolio website. It allows public users to view blogs, projects, and other information while giving the portfolio owner access to a private dashboard for managing content securely.

---

## Features

- Public access to:
  - All blogs
  - Individual blog pages
  - Project showcase
- Owner-only access:
  - Admin dashboard
  - Create, update, delete blogs
  - Manage projects and other content
- JWT-based authentication and authorization
- Password hashing with bcrypt
- Role-based access control
- Error handling with structured responses

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT & bcrypt
- **Environment Variables:** dotenv

---

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB (local or cloud)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd portfolio-backend

# Install dependencies
npm install

# Create a .env file
cp .env.example .env

# Start the server
npm run dev
Server will start at: http://localhost:5000 (or your configured PORT)

API Endpoints
Auth
POST /api/auth/login – Owner login

POST /api/user/register – Register new admin (optional / for setup)

Blogs
GET /api/v1/blog/all-blog – Get all blogs (public)

GET /api/v1/blog/:id – Get single blog (public)

POST /api/v1/blogs – Create blog (admin only)

PUT /api/v1/blog/:id – Update blog (admin only)

DELETE /api/v1/blog/:id – Delete blog (admin only)

Projects
GET /api/v1/project/all-project – Get all projects

POST /api/v1/project/create-project – Create project (admin only)

PUT /api/v1/project/:id – Update project (admin only)

DELETE /api/v1/project/:id – Delete project (admin only)

Authentication
JWT-based authentication for protected routes

Passwords hashed using bcrypt

Admin-only routes require a valid JWT in Authorization: Bearer <token> header
```
