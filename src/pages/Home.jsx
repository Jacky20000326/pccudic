import React from "react";
import styled from "styled-components";
import Announcement from "../components/Home_Components/Announcement";
import Folio from "../components/Home_Components/Folio";
import Carousel from "../components/Home_Components/Carousel"


const Home = () => {
	return (
		<>
			<Carousel ></Carousel>
			<Announcement></Announcement>
			<SeparateImg />
			<Folio />

		</>
	);
};


const SeparateImg = styled.div`
	background-image: url("https://scontent.ftpe2-1.fna.fbcdn.net/v/t1.6435-9/72553959_2755501684483345_3581089842450137088_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=i9uwdb2HPh8AX8kIvwD&tn=0Y7ht8dW7WmSj_rt&_nc_ht=scontent.ftpe2-1.fna&oh=00_AT9cKBCY6-sdVMM9aTxuhPAHTLnRjx4TlS5ksxvgcUcmYA&oe=623E947F"); 
	background-size: cover;
	background-attachment: fixed;
	background-position: center center;
	height: 35vh;
	width: 100vw;
	margin-top: 100px;
`


export default Home;
