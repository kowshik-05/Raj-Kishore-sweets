import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductsPage from "./pages/Products";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white text-red-900">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-yellow-200 px-3 py-2 rounded"
        >
          Skip to content
        </a>
        <Header />
        <div id="content" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
