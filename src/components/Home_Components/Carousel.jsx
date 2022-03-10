import React, { useRef } from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
const Carousel = () => {
    const sliderRightRef = useRef();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        arrows: false,
        cssEase: "linear"
    };
    return (
        <Carousel_container >

            <Right_arrow style={{ fontSize: "30px" }} className="hoverStyle" onClick={() => { sliderRightRef.current.slickNext() }} />
            <Slider {...settings} ref={sliderRightRef}>
                <Img_container>
                    <Image src='https://scontent.ftpe2-2.fna.fbcdn.net/v/t1.6435-9/72538403_2769120303121483_4560961638617841664_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=RTc1K6SDSb4AX-pFFJO&tn=0Y7ht8dW7WmSj_rt&_nc_ht=scontent.ftpe2-2.fna&oh=00_AT_KvnNwHVOtB20130Mmnek6Ru0aGxV7X3wywfOJxdPSyA&oe=623DAF60' />
                </Img_container>
                <Img_container>
                    <Image src='https://scontent.ftpe2-1.fna.fbcdn.net/v/t1.6435-9/73052639_2769114236455423_4428016397758496768_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=RmRRXlXJ1xAAX-5_IMT&_nc_ht=scontent.ftpe2-1.fna&oh=00_AT9eAhTzoedtdle07RfIoyic6J1mKQw21tbtmQgQiyDLag&oe=623F042E' />
                </Img_container>
                <Img_container>
                    <Image src='https://scontent.ftpe2-2.fna.fbcdn.net/v/t1.6435-9/74354272_2780696571963856_1681904885261402112_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=xCDjX6wIY1kAX_ab1Br&_nc_ht=scontent.ftpe2-2.fna&oh=00_AT9CZwrdChM9pR-z2p4hMJcDV0hryMxAWi1fJm2FqjQ5Qw&oe=623CB81A' />
                </Img_container>
            </Slider>
            <Left_arrow style={{ fontSize: "30px" }} className="hoverStyle" onClick={() => { sliderRightRef.current.slickPrev() }} />
        </Carousel_container>
    );
}

const Carousel_container = styled.div`
    position: relative;
    transition: 0.5s;
    &:hover > .hoverStyle{
        opacity: 0.4;
    }
`;


const Img_container = styled.div`
    height: 70vh;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        height: 30vh;

	}


`
const Image = styled.img`
    height: auto;
    max-width: 100%;
`

const Right_arrow = styled(GoChevronRight)`
    position: absolute;
    z-index: 100;
    top: 50%;
    right: 20px;
    opacity: 0;
    transition: 0.5s;
`
const Left_arrow = styled(GoChevronLeft)`
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 20px;
    opacity: 0;
    transition: 0.5s;
    
`

export default Carousel
