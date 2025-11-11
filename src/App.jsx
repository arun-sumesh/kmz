import React, { useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Preloader from "./Components/Preloader/Preloader";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "./Components/ScrollToTop"; // <-- added

// lazy imports
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

// sections
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Solutions from "./Components/Solutions/Solutions";
import Stat from "./Components/Stat/Stat";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      {!loadingFinished && (
        <Preloader finishLoading={() => setLoadingFinished(true)} />
      )}

      {loadingFinished && (
        <BrowserRouter>
          <ScrollToTop />   {/* <-- ensures scroll resets on route change */}
          <Navbar />
          <ErrorBoundary>
            <Suspense fallback={<div className="container py-20 text-center">Loading…</div>}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <About />
                      <Services />
                      <Stat />
                      <Contact />
                      <Footer />
                    </>
                  }
                />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                  path="*"
                  element={
                    <>
                      <Hero />
                      <About />
                      <Services />
                      <Stat />
                      <Contact />
                      <Footer />
                    </>
                  }
                />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
