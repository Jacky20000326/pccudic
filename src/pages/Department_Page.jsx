import React from "react";
import styled from "styled-components";
// import Department from "../components/department_components/Department_Info.jsx";
import { Link, Outlet } from "react-router-dom"
import { hover } from "@testing-library/user-event/dist/hover";
const Department_page = () => {

	return (
		<Department_container>
			<Department_txt>系所介紹</Department_txt>
			<Decorate_block></Decorate_block>
			<Separate_line />
			<Department_info_container>
				<Department_links_container>
					<LinkStyle to="introduce">歷史沿革、介紹</LinkStyle>
					<LinkStyle to="features">系所特色</LinkStyle>
					<LinkStyle to="teacher">師資介紹</LinkStyle>
				</Department_links_container>
				<Department_info>
					<Outlet />
				</Department_info>
			</Department_info_container>
		</Department_container>
	);
};

const Department_container = styled.div`
	padding: 0px 143px 0px 131px;
`
const Department_txt = styled.div`
	margin-top: 60px;
	color: #0050AE;
	font-size: 32px;

`
const Decorate_block = styled.div`
	width: 50px;
	height: 10px;
	margin-top: 16px;
	background-color: #2B62A2;

`
const Separate_line = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));

	margin-top: 50px;
	height: 1px;
	border: none;
	background-color: #555555;
`
const Department_info_container = styled.div`
	display: flex;
	margin-top: 45px;
`
const Department_links_container = styled.div`
	
	display: flex;
	flex-direction: column;
	flex: 1;

`
const LinkStyle = styled(Link)`
	text-decoration: none;
	color: #777777;
	margin-bottom: 30px;
	&:hover{
		color: #F69393;
		transition: 0.3s;
	}
`


const Department_info = styled.div`
	margin-left: 70px;
	flex: 5;

`
export default Department_page;
