import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LaunchesDetails from "./views/LaunchesDetails";
const Home = lazy(() => import("./views/Home"));
const Launches = lazy(() => import("./views/Launches"));
const NotFoundPage = lazy(() => import("./views/NotFoundPage"));
function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/launches" element={<Launches />}></Route>
          <Route path="/launches/:id" element={<LaunchesDetails />}></Route>
          <Route element={NotFoundPage}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
