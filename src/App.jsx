import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing/Landing.jsx";
import Menu from "./Menu/Menu.jsx";
import Questionality from "./pages/Questionality/index.jsx";
import Visibility from "./pages/Visibility/index.jsx";
import Inclusivity from "./pages/Inclusivity.jsx";
import Originality from "./pages/Originality.jsx";
import Activity from "./pages/Activity/index.jsx";
import Creativity from "./pages/Creativity/index.jsx";
import Comics from "./pages/Creativity/Comics.jsx";

// Activity Subpages
import Competitions from "./pages/Activity/Competitions.jsx";
import Conferences from "./pages/Activity/Conferences.jsx";
import Courses from "./pages/Activity/Courses.jsx";
import Events from "./pages/Activity/Events.jsx";
import Projects from "./pages/Activity/Projects.jsx";
import Publications from "./pages/Activity/Publications.jsx";

// Questionality Subpages
import Faqs from "./pages/Questionality/Faqs.jsx";
import Questions from "./pages/Questionality/Questions.jsx";

// Visibility Subpages
import News from "./pages/Visibility/News.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Landing /></div>} />
        <Route path="/menu" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Menu /></div>} />
        
        {/* menu section */}
        <Route path="/questionality" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Questionality /></div>} />
        <Route path="/visibility" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Visibility /></div>} />
        <Route path="/inclusivity" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Inclusivity /></div>} />
        <Route path="/originality" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Originality /></div>} />
        <Route path="/activity" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Activity /></div>} />
        <Route path="/creativity" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Creativity /></div>} />
        
         {/* Activity section */}
        <Route path="/competitions" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Competitions /></div>} />
        <Route path="/conferences" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Conferences /></div>} />
        <Route path="/courses" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Courses /></div>} />
        <Route path="/events" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Events /></div>} />
        <Route path="/projects" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Projects /></div>} />
        <Route path="/publications" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Publications /></div>} />
      
        {/* Questionality section */}
        <Route path="/faqs" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Faqs /></div>} />
        <Route path="/questions" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Questions /></div>} />
      
        {/* Visibility section */}  
        <Route path="/news" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><News /></div>} />

        {/* Comics section */}  
        <Route path="/comics" element={<div className="w-full min-h-screen bg-cream text-black flex flex-col"><Comics /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
