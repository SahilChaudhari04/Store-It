# 🚀 Store-It

## 🌟 Overview
> A full-stack, scalable Google Drive clone built with the modern T3 Stack. This application provides a secure, reliable platform for file storage and management, complete with user authentication and organization features.


---

## ✨ Features
* **📂 File & Folder Management:** Create, rename, move, and delete files and folders.
* **🔒 Secure Authentication:** Powered by **Clerk** for robust user login and management.
* **☁️ Scalable File Uploads:** Leverages **UploadThing** for fast and reliable file handling.
* **💾 Robust Database:** Built on **SingleStore** for high-performance data storage.
* **📈 Integrated Analytics (Optional):** Tracks usage and performance via **PostHog**.

---

## 🛠️ Tech Stack
This project is built using the opinionated T3 Stack:

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js** | React framework for frontend and API routes. |
| **Language** | **TypeScript** | Strongly typed language for better code quality. |
| **Styling** | **Tailwind CSS** | Utility-first CSS framework for rapid UI development. |
| **API** | **tRPC** | End-to-end type safety for API calls. |
| **Database** | **SingleStore** | High-performance, scalable SQL database. |
| **ORM** | **Drizzle** | TypeScript ORM for database schema management. |
| **Auth** | **Clerk** | Simple, secure user authentication. |
| **Files** | **UploadThing** | File upload service optimized for Next.js. |

---

## ⚙️ Getting Started

### Prerequisites

You need API keys for the following services to run the app:
* **Clerk** (Authentication)
* **UploadThing** (File Storage)
* **SingleStore** (Database)

### Local Setup (Using pnpm)

1.  **Clone the repository:**
    ```bash
    git clone [Your Repository URL]
    cd [your-project-name]
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Configure Environment:**
    * Create a `.env` file in the root directory.
    * Fill in your API keys using the required variables (e.g., `DATABASE_URL`, `CLERK_SECRET_KEY`, `UPLOADTHING_TOKEN`).

4.  **Database Migration:**
    ```bash
    pnpm db:push
    ```

5.  **Run Development Server:**
    ```bash
    pnpm dev
    ```

The application will be accessible at `http://localhost:3000`.

---

## 🤝 Contribution

Contributions are welcome! If you find a bug or have a feature request, please open an issue.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'feat: Add amazing feature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---


