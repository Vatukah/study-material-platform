
# Study Material Platform

## 📌 Project Overview
The **Study Material Platform** is a web application designed to provide students with organized study materials based on their course syllabus. It supports multiple educational boards and initially offers PDFs, with quizzes and videos planned for future updates.

## 🛠️ Tech Stack
- **Frontend:** React (Vite)
- **Backend:** Supabase (Authentication, Database)
- **State Management:** React Context API
- **Styling:** CSS Modules / TailwindCSS
- **Authentication:** Supabase Auth (Email/Password, Google Login)

## 📂 Folder Structure
```
study-material-platform/
│── public/                # Static assets (logos, icons, etc.)
│── src/                   # Main source code
│   ├── assets/            # Images, fonts, and other assets
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page components (Dashboard, Login, CourseDetails, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── contexts/          # Context providers (AuthContext, ThemeContext, etc.)
│   ├── utils/             # Utility functions (helpers, formatters, API calls, etc.)
│   ├── services/          # API service files (Supabase, external APIs)
│   ├── styles/            # Global styles, theme configurations
│   ├── routes/            # Route definitions (React Router)
│   ├── config/            # Environment-specific configuration
│   ├── store/             # State management (if using Redux/Zustand)
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Entry point for React
│── server/                # Backend (Express/Supabase server setup)
│── tests/                 # Unit and integration tests
│── .env                   # Environment variables (not committed to Git)
│── .gitignore             # Files and folders to ignore in Git
│── package.json           # Dependencies and scripts
│── README.md              # Project documentation
```

## 🚀 Features
✅ User authentication (Email/Password, Google Login)  
✅ Organized study materials based on syllabus  
✅ Multi-board support  
✅ PDF resources (videos & quizzes in future updates)  
✅ Secure and scalable backend with Supabase  

## 🔧 Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/study-material-platform.git
   ```
2. Navigate to the project folder:
   ```sh
   cd study-material-platform
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables (`.env` file):
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
5. Run the development server:
   ```sh
   npm run dev
   ```
6. Open the app in your browser at `http://localhost:5173`

## 📜 License
This project is licensed under the MIT License.

---

🚀 *Happy Coding!*

