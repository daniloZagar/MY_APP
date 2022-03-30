import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LaunchesDetails from "./views/LaunchesDetails";
import loader from "./assets/images/loader.png";
const Home = lazy(() => import("./views/Home"));
const Launches = lazy(() => import("./views/Launches"));
const NotFoundPage = lazy(() => import("./views/NotFoundPage"));
function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center">
          <img className="w-44 h-auto animate-bounce" src={loader} alt="" />
        </div>
      }
    >
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
