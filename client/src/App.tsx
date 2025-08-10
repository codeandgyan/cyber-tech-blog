import "./App.css";
import { Routes, Route } from "react-router-dom";
import Heading from "./components/Header/Heading";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="sm:max-w-screen lg:max-w-5xl xl:max-w-7xl mx-auto px-4 lg:px-10">
        <Heading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<div>Post Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
