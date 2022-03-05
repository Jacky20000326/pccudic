import React from "react";
import styled from "styled-components";
import Department from "./pages/Department_Page";
import Home from "./pages/Home_Page";
import { Routes, Route } from "react-router-dom";
import Introduce from "./components/department_components/Introduce"
import Features from "./components/department_components/Features"
import Teacher from "./components/department_components/Teacher"


const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} exact />
			<Route path="/department" element={<Department />} exact >
				<Route path="introduce" element={<Introduce />} exact />
				<Route path="features" element={<Features />} exact />
				<Route path="teacher" element={<Teacher />} exact />
			</Route>
		</Routes>
	);
};

export default App;
