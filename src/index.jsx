import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyled } from "./components/componentStyled/GlobalStyled";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Global_Components/Nav";
import Footer from "./components/Global_Components/Footer"

// 設定全域所需要使用的主題樣式
import { ThemeProvider } from "styled-components";

// mobile
const mobile = {
	w: "420px"
}

ReactDOM.render(
	<ThemeProvider theme={mobile}>
		<React.StrictMode>
			<Router>
				<GlobalStyled />
				<Nav ></Nav>
				<App />
				<Footer></Footer>
			</Router>
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById("root")
);
