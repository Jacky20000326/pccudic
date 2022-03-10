import React from "react";
import styled from "styled-components";
import Department from "./pages/Department";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Introduce from "./components/Department_components/Introduce"
import Features from "./components/Department_components/Features"
import Teacher from "./components/Department_components/Teacher"
import Course from "./pages/Course";
import Resources_p1 from "./components/Course_Components/Resources_p1"
import Resources_p2 from "./components/Course_Components/Resources_p2"
import Resources_p3 from "./components/Course_Components/Resources_p3"
import Resources_p4 from "./components/Course_Components/Resources_p4"
import Research from "./pages/Research"
import Research_p1 from "./components/Research_components/Research_p1"
import Research_p2 from "./components/Research_components/Research_p2"
import Research_p3 from "./components/Research_components/Research_p3"
import Research_p4 from "./components/Research_components/Research_p4"
import Research_p5 from "./components/Research_components/Research_p5"
import Per_Announcement from "./pages/Per_Announcement"
import All_Announcement from "./pages/All_Announcement"
import Topic from "./pages/Topic"

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} exact />
			<Route path="/department" element={<Department />} exact >
				<Route path="introduce" element={<Introduce />} exact />
				<Route path="features" element={<Features />} exact />
				<Route path="teacher" element={<Teacher />} exact />

			</Route>
			<Route path="/course" element={<Course />} exact >
				<Route path="resources_p1" element={<Resources_p1 />} exact />
				<Route path="resources_p2" element={<Resources_p2 />} exact />
				<Route path="resources_p3" element={<Resources_p3 />} exact />
				<Route path="resources_p4" element={<Resources_p4 />} exact />
			</Route>
			<Route path="/Research" element={<Research />} exact >
				<Route path="Research_p1" element={<Research_p1 />} exact />
				<Route path="Research_p2" element={<Research_p2 />} exact />
				<Route path="Research_p3" element={<Research_p3 />} exact />
				<Route path="Research_p4" element={<Research_p4 />} exact />
				<Route path="Research_p5" element={<Research_p5 />} exact />
			</Route>
			<Route path="/announcement" element={<All_Announcement />} exact>
				<Route path=":id" element={<Per_Announcement />}></Route>
			</Route>
			<Route path="/Topic" element={<Topic />} exact>

			</Route>

		</Routes>
	);
};

export default App;
