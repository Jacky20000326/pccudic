import React from 'react';
import styled from 'styled-components';
const Folio = () => {
    const flexStyle = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "14px",
        padding: "0px 20% 0px 20%"

    }
    return (
        <div style={flexStyle}>
            <Folio_txt>2021年度畢業製作作品</Folio_txt>
            <hr />
            <Folio_Container>
                <Folio_Container_row>
                    <Folio_image_big src="" />
                    <Folio_Container_child_row>
                        <Folio_image_small src="" />
                        <Folio_image_small src="" />
                    </Folio_Container_child_row>
                </Folio_Container_row>
                <Folio_Container_row>
                    <Folio_Container_child_row>
                        <Folio_image_small src="" />
                        <Folio_image_small src="" />
                    </Folio_Container_child_row>
                    <Folio_image_big src="" />
                </Folio_Container_row>
            </Folio_Container>
            <All_folio_info>more...</All_folio_info>
        </div>);
};

const Folio_txt = styled.h3`
        align-items: center;
        margin-top: 100px;
        color: #0050AE;
        font-weight: 400;
        `
// const Decorative_line = styled.hr`
//     width:  1em;
// `
const Folio_Container = styled.div`
    width: 800px;
    height: 508px;
    background-color: #000;
    display: flex;
`
const Folio_Container_row = styled.div`
    flex: 1;
    
`
const Folio_Container_child_row = styled.div`
    display: flex;
`
const Folio_image_big = styled.img`
    width: 400px;
    height: 308px;
`
const Folio_image_small = styled.img`
    width: 200px;
    height: 200px;
`
const All_folio_info = styled.div`
    font-size: 16px;
    color: #847D7D;
    font-weight: 350;
    width: 100%;
    text-align: end;

`
export default Folio;
