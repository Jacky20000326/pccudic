// Nav component
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//匯入Nav Links
import { links } from "../../assets/file.js";
import { BiMenu } from "react-icons/bi"
const Nav = () => {
	// 取得 pathName
	let Path = location.pathname

	// reload state
	let [reload, setReload] = useState()

	let [link, setLink] = useState(links)

	// 改變點擊後樣式
	let click_change_style = (e) => {
		links.forEach(item => item.state = false)
		e.state = true
		setReload({})
	}

	// 第一次載入後判斷是否為該路徑，若是則將state改成true
	useEffect(() => {
		links.forEach(item => item.state = false)
		let route = links.find(item => {
			return item.path == Path
		})
		if (route) route.state = true
		setReload({})
	}, [])

	return (
		<NavStyled>
			<Link to="/">
				<DicLogo src={require("../../assets/DicLogo.png")} alt=""></DicLogo>
			</Link>
			<Links>
				{links.map((item) => {
					return (
						<LinkStyle onClick={() => { click_change_style(item) }} color={item.state} to={item.path} key={item.id}>
							{item.name}
						</LinkStyle>
					);
				})}

			</Links>
			<Mobile_hamburger>
				<BiMenu color="#023373" size="40px"></BiMenu>
			</Mobile_hamburger>

		</NavStyled>
	);
};
const NavStyled = styled.nav`
	width: 100vw;
	height: 110px;
	background: #ffffff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 4px 10px rgba(160, 160, 160, 0.25);
	padding: 0px 128px 0px 128px;
	
`;
const DicLogo = styled.img`
	width: 240px;
	height: 67px;

`;
const Links = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	font-size: 15px;
	min-width: 200px;
	min-width: 800px;
	margin-left: 100px;
	@media (max-width: 769px) {
		display: none;
	}

`;
const LinkStyle = styled(Link)`
	color: ${prop => prop.color ? "#F69393" : "#777777"};
	margin-left: 1.5em;
	text-decoration: none;
	font-size: 1em;
	&:hover{
	color: #F69393;
	transition: 0.3s;
	border-bottom: 1px solid #F69393;

}
`
const Mobile_hamburger = styled.div`
	display: none;
	@media (max-width: 769px) {
		display: block;
		margin-left: 300px;
	}
`

export default Nav;
