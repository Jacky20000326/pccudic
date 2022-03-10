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
const Theme = {
	w_900: {
		w: "900px",
		padding: "0px 50px 0px 50px",
		title_fs: "28px"
	},
	w_576: {
		w: "576px",
		padding: "0px 50px 0px 50px"
	}

}

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<React.StrictMode>
			<Router>
				<GlobalStyled />
				<Nav ></Nav>
				<App />
				<Footer />
			</Router>
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById("root")
);
