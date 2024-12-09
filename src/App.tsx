import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { DocsLayout } from "./pages/docs/DocsLayout";
import { Introduction } from "./pages/docs/Introduction";
import { Installation } from "./pages/docs/Installation";
import { UtilityClasses } from "./pages/docs/UtilityClasses";
import { ResponsiveDesign } from "./pages/docs/ResponsiveDesign";
import { DarkMode } from "./pages/docs/DarkMode";
import { Buttons } from "./pages/docs/Buttons";
import { Cards } from "./pages/docs/Cards";
import { Forms } from "./pages/docs/Forms";
import { Navigation } from "./pages/docs/Navigation";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<DocsLayout />}>
              <Route index element={<Introduction />} />
              <Route path="installation" element={<Installation />} />
              <Route path="utility-classes" element={<UtilityClasses />} />
              <Route path="responsive-design" element={<ResponsiveDesign />} />
              <Route path="dark-mode" element={<DarkMode />} />
              <Route path="buttons" element={<Buttons />} />
              <Route path="cards" element={<Cards />} />
              <Route path="forms" element={<Forms />} />
              <Route path="navigation" element={<Navigation />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
