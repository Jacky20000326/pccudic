import React from 'react';
import styled from 'styled-components';
const Folio = () => {
    const flexStyle = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "14px",
        padding: "0px 20% 0px 20%",


    }

    const flex_image_style = { flex: 1 }
    const img_big_container_style = { overflow: "hidden", width: "100%", height: "100%" }
    const img_small_container_style = { overflow: "hidden", width: "50%", height: "100%" }

    return (
        <div style={flexStyle}>
            <Folio_txt>2021年度畢業製作作品</Folio_txt>
            <hr />
            <Folio_Container>
                <Folio_Container_row>
                    <div style={img_big_container_style}>
                        <Folio_image_big src="http://www.gcd.pccu.edu.tw/img/homepage_work/work_02/201901.png" />
                    </div>
                    <Folio_Container_child_row>
                        <div style={img_small_container_style}>
                            <Folio_image_small src="http://www.gcd.pccu.edu.tw/img/homepage_work/work_01/canisee2021.jpg" />
                        </div>
                        <div style={img_small_container_style}>
                            <Folio_image_small src="http://www.gcd.pccu.edu.tw/img/homepage_work/work_01/Lost%20and%20Found.jpg" />
                        </div>
                    </Folio_Container_child_row>
                </Folio_Container_row>
                <Folio_Container_row>
                    <Folio_Container_child_row>
                        <div style={img_small_container_style}>
                            <Folio_image_small src="http://www.gcd.pccu.edu.tw/img/homepage_work/work_01/%E9%81%94%E6%96%87%E8%A5%BF_2.jpg" />
                        </div>
                        <div style={img_small_container_style}>
                            <Folio_image_small src="http://www.gcd.pccu.edu.tw/img/project/2018.png" />
                        </div>
                    </Folio_Container_child_row>
                    <div style={img_big_container_style}>
                        <Folio_image_big src="http://www.gcd.pccu.edu.tw/img/project/2017.jpg" />
                    </div>
                </Folio_Container_row>
            </Folio_Container>
            <All_folio_info>more...</All_folio_info>
        </div>);
};

const Folio_txt = styled.h3`
        align-items: center;
        margin-top: 100px;
        color: #0050AE;
        /* color: ${(prop) => prop.theme.color}; */
        font-weight: 400;
        font-size: 45px;
        @media (max-width: ${(prop) => prop.theme.w_576.w}) {
            font-size: 20px;

	}
        `
// const Decorative_line = styled.hr`
//     width:  1em;
// `
const Folio_Container = styled.div`

    width: 600px;
    height: 450px;
    display: flex;
    overflow: hidden;
    box-shadow: -1px 2px 16px -4px rgba(0,0,0,0.65);
    
    @media (max-width: 900px) {
        width: 250px;
        height: 220px;
	}
`
const Folio_Container_row = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    
`



const Folio_Container_child_row = styled.div`
    height: 50%;
    display: flex;
`
const Folio_image_big = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: 0.5s;
    &:hover{
        transform: scale(1.2);
    }
`
const Folio_image_small = styled.img`
    width: 100%;
    height: 100%;
    transition: 0.5s;
    &:hover{
        transform: scale(1.2);
    }
`
const All_folio_info = styled.div`
    font-size: 16px;
    color: #847D7D;
    font-weight: 350;
    width: 100%;
    margin-top: 10px;
    padding: 0px 12% 0px 12%;
    text-align: end;

`


export default Folio;
