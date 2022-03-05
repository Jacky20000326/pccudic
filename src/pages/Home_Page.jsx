import React from "react";
import styled from "styled-components";
import Announcement from "../components/Home_Components/Announcement";
import Folio from "../components/Home_Components/Folio";
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
// Loading
// import Loading from "../components/Global_Components/Loading"
const Home = () => {
	return (
		<>

			<CarouselContainer>
				<Carousel src={require("../../src/assets/Carousel.jpeg")} />
			</CarouselContainer>
			<Announcement></Announcement>
			<SeparateContainer>
				<SeparateImg src={require("../../src/assets/Carousel.jpeg")} />
			</SeparateContainer>
			<Folio />
		</>
	);
};
const CarouselContainer = styled.div`
	width: 100vw;
	height: 580px;
	border: 1px solid #000;
	background-size: cover;
`;
const Carousel = styled.img`
	width: 100%;
	height: 100%;
	background-attachment: fixed;
`;
const SeparateContainer = styled.div`
	width: 100vw;
	height: 240px;
	border: 1px solid #000;
	margin-top: 80px;
`
const SeparateImg = styled.img`
	width: 100%;
	height: 100%;
`
export default Home;
