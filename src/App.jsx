import React from "react";
import NavBar from "./components/NavBar";
import RecipeDetailView from "./components/RecipeDetailView";
import SearchView from "./components/SearchView";
import CuisineBar from "./components/Cuisine";
import HomeView from "./components/HomeView";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
          <NavBar />
          <CuisineBar />
          <Routes>
            <Route path="/" element={<HomeView />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
