import React from 'react'
import styled from "styled-components";
const All_Announcement = () => {
    const flexStyle = {
        display: "flex",
    };
    const fakeArray = [
        {
            title: "系所公告",
            test: "部分內文部分內文部分內文部分內文分內文部分內文部分內文部分內文部分內文部分內文",
            time: "May 6, 2022",
            lable: "競賽/實習",
        },
        {
            title: "系所公告",
            test: "部分內文部分內文部分內文部分內文分內文部分內文部分內文部分內文部分內文部分內文",
            time: "May 6, 2022",
            lable: "競賽/實習",
        },
        {
            title: "系所公告",
            test: "部分內文部分內文部分內文部分內文分內文部分內文部分內文部分內文部分內文部分內文",
            time: "May 6, 2022",
            lable: "競賽/實習",
        },
        {
            title: "系所公告",
            test: "部分內文部分內文部分內文部分內文分內文部分內文部分內文部分內文部分內文部分內文",
            time: "May 6, 2022",
            lable: "競賽/實習",
        },
        {
            title: "系所公告",
            test: "部分內文部分內文部分內文部分內文分內文部分內文部分內文部分內文部分內文部分內文",
            time: "May 6, 2022",
            lable: "競賽/實習",
        },
    ];
    return (
        <AnnouncementContainer>
            <AnnouncementTxt>所有公告</AnnouncementTxt>
            <Separate_line />
            <AnnouncementBlock>
                <Content>
                    {fakeArray.map((item) => {
                        return (
                            <div style={flexStyle}>
                                <AnnouncementStyled>
                                    <Title>{item.title}</Title>
                                    <Test>{item.test}</Test>
                                    <Info>
                                        <Time>{item.time}</Time>
                                        <Separator></Separator>
                                        <Label>{item.lable}</Label>
                                    </Info>
                                </AnnouncementStyled>
                                <AnnouncementImage></AnnouncementImage>
                            </div>
                        );
                    })}
                </Content>
                <Category>
                    <div style={flexStyle}>
                        <SearchPng src={require("../assets/search.png")}></SearchPng>
                        <Separator></Separator>
                        <SearchInput placeholder="Search"></SearchInput>
                    </div>
                    <CategoryTxt>公告分類</CategoryTxt>
                    <CategoryBtnContainer MT="22px">
                        <CategoryBtn BtnWidth="52px">全部
                        </CategoryBtn>
                        <CategoryBtn BtnWidth="105px">課程與各項系務</CategoryBtn>
                    </CategoryBtnContainer>
                    <CategoryBtnContainer MT="16px">
                        <CategoryBtn BtnWidth="91px">獲獎訊息</CategoryBtn>
                        <CategoryBtn BtnWidth="91px">獎助學金</CategoryBtn>

                    </CategoryBtnContainer>
                    <CategoryBtnContainer MT="16px">
                        <CategoryBtn BtnWidth="102px">競賽/實習</CategoryBtn>
                        <CategoryBtn BtnWidth="102px">講座與參訪</CategoryBtn>
                    </CategoryBtnContainer>
                    <CategoryBtnContainer MT="16px">
                        <CategoryBtn BtnWidth="57px">逾期</CategoryBtn>

                    </CategoryBtnContainer>

                </Category>

            </AnnouncementBlock>

        </AnnouncementContainer>
    )
}
const AnnouncementContainer = styled.div`
	width: 100%;
	padding: 0px 132px 0px 132px;
`;
const AnnouncementTxt = styled.div`
	&:after {
		content: "";
		display: block;
		width: 50px;
		height: 10px;
		background-color: #2b62a2;
		margin-top: 7px;
	}
	margin-top: 55px;
	font-size: 32px;
	position: relative;
	color: #2b62a2;
	font-weight: 400;
`;

const AnnouncementBlock = styled.div`
	display: flex;

	
`;
const Content = styled.div`
	flex: 7;
	margin-top: 56px;
	display: inline-block;
`;
const AnnouncementStyled = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 552px;
	margin-bottom: 44px;
	font-size: 54px;
`;
const Title = styled.div`
	font-weight: 500;
	font-size: 0.5em;
	&:after {
		content: "";
		display: block;
		width: 42px;
		height: 10px;
		background-color: #f69393;
		margin-top: 12px;
	}
`;
const Test = styled.div`
	color: #9c9c9c;
	font-size: 0.3em;
	margin-top: 21px;
`;

const Info = styled.div`
	display: flex;
	margin-top: 20px;
`;
const Time = styled.div`
	color: #949494;
	font-size: 0.2em;
`;
const Label = styled.div`
	width: 82px;
	height: 20px;
	background-color: #f69393;
	border-radius: 15.5px;
	font-size: 0.5rem;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Separator = styled.div`
	width: 20px;
	height: 2px;
	transform: rotate(90deg);
	background-color: #9c9c9c;
	margin-left: 10px;
	margin-right: 10px;
	margin-top: 10px;
`;

const Separate_line = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));

	margin-top: 55px;
	height: 1px;
	border: none;
	background-color: #555555;
`


const AnnouncementImage = styled.img`
	width: 280px;
	height: 188px;
	margin: 30px 0px 0px 20px;
	border-radius: 20px;
`;
const Category = styled.div`
	flex: 3; 
	padding: 80px 0px 0px 240px;

`;

const SearchPng = styled.img`
	width: 32px;
	height: 32px;
`;
const SearchInput = styled.input`
	border: none;
	border-bottom: 1px solid #9c9c9c;
	padding-left: 5px;
	font-size: 16px;
	width: 100px;
	height: 28px;
	outline: none;
	
`;
const CategoryTxt = styled.h3`
	font-size: 22px;
	line-height: 26px;
	color:  #F69393;
	margin-top: 18px;
	font-weight:200;
`
const CategoryBtnContainer = styled.div`
	display: "flex";
	margin-top: ${prop => prop.MT};

`

const CategoryBtn = styled.button`
	width: ${prop => prop.BtnWidth};
	border: none;
	height: 24px;
	background-color: #F69393;
	border-radius: 15.5px;
	color: #FFFFFF;
	font-size: 12px;
	margin-right: 8px;
`
const All_announcements_container = styled.div`
	margin-top: 30px;
`

export default All_Announcement