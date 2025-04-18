import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';

import Landing from "./Landing/Landing.jsx";
import Menu from "./Menu/Menu.jsx";
import Questionality from "./pages/Questionality/index.jsx";
import Visibility from "./pages/Visibility/index.jsx";
// import Inclusivity from "./pages/Inclusivity/index.jsx";
import Originality from "./pages/Originality/index.jsx";
import Activity from "./pages/Activity/index.jsx";
import Creativity from "./pages/Creativity/index.jsx";
import Comics from "./pages/Creativity/Comics.jsx";

// Activity Subpages
import Comp1 from "./pages/Activity/Competitions/2d-3d.jsx";
import Winner from "./pages/Activity/Competitions/winner.jsx";

// Activity Subpages
import Competitions from "./pages/Activity/Competitions/index.jsx";
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
import DC from "./pages/Activity/DC.jsx";

// Conferences Subpages
import Igncc2024 from "./pages/conferences/igncc2024.jsx";
import Igncc2025 from "./pages/conferences/igncc2025.jsx";
import FirstExperiment from "./pages/conferences/first_experiment.jsx";

// Inclusivity Subpages
import Signup from "./pages/Inclusivity/Signup.jsx";
import Login from "./pages/Inclusivity/Login.jsx";
import Profile from "./pages/Inclusivity/Profile.jsx";
// Originality Subpages
import WhoWeAre from "./pages/Originality/who_we_are.jsx";
import Student from "./pages/Originality/student.jsx";
import Faculty from "./pages/Originality/faculty.jsx";
import Reader from "./pages/Originality/reader.jsx";
import Creator from "./pages/Originality/creator.jsx";
import Scholar from "./pages/Originality/scholar.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="w-full min-h-screen overflow-y-auto bg-cream text-black">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />} />
            
            {/* menu section */}
            <Route path="/questionality" element={<Questionality />} />
            <Route path="/visibility" element={<Visibility />} />
            {/* <Route path="/inclusivity/*" element={<Inclusivity />} /> */}
            <Route path="/originality" element={<Originality />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/creativity" element={<Creativity />} />
            
            {/* Activity section */}
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
          
            {/* Questionality section */}
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/questions" element={<Questions />} />
          
            {/* Visibility section */}  
            <Route path="/news" element={<News />} />

            {/* Comics section */}  
            <Route path="/comics" element={<Comics />} />

            {/* Projects section */}  
            <Route path="/dc" element={<DC/>} />

            {/* Conferences section*/}
            <Route path="/igncc2024" element={<Igncc2024/>} />
            <Route path="/igncc2025" element={<Igncc2025/>} />
            <Route path="/firstexperiment" element={<FirstExperiment/>} />

            {/* Inclusivity section */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />

            {/* Originality section */}
            <Route path="/who_we_are" element={<WhoWeAre />} />
            <Route path="/student" element={<Student />} />
            <Route path="/faculty" element={<Faculty />} /> 
            <Route path="/reader" element={<Reader />} />
            <Route path="/creator" element={<Creator />} />
            <Route path="/scholar" element={<Scholar />} />
            {/*Competitions section*/}
            <Route path="/2d-3d" element={<Comp1/>}/>
            <Route path="/winner" element={<Winner/>}/>
            

            {/* 404 page */}


          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
