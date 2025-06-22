import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Systems from "./pages/Systems";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-900 flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-grow w-full max-w-screen-xl mx-auto p-6 lg:p-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white text-center py-3 text-xs sm:text-sm text-gray-500 border-t">
          © 2025 Brew To The Future. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
