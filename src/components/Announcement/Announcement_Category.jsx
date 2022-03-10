import React from 'react'
import styled from 'styled-components'
const Announcement_Category = () => {
    const fakeArray = [
        {

            contenr: "我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥",
        },
        {

            contenr: "我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥",
        },
        {

            contenr: "我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥我好帥",
        }
    ]
    return (
        <Announcement_Category_container>
            <Announcement_other_Category_txt>查看公告</Announcement_other_Category_txt>
            {
                fakeArray.map(item => (

                    <>

                        <Announcement_other_Category_container>
                            <Announcement_Category_image src="http://www.gcd.pccu.edu.tw/img/news_pict/news_null.png"></Announcement_Category_image>
                            <Announcement_Category_title>{item.contenr}</Announcement_Category_title>
                        </Announcement_other_Category_container>

                    </>))

            }
            <Announcement_Category_allcaregory>查看所有公告</Announcement_Category_allcaregory>
        </Announcement_Category_container>
    )
}
const Announcement_Category_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50px;
    margin-top: 20px;

`
const Announcement_other_Category_txt = styled.h4`
    font-size: 16px;
    color: #555555;
    font-weight: 500;
`
const Announcement_other_Category_container = styled.div`
    display: flex;
    margin: 20px 0px 30px 0px;
`
const Announcement_Category_image = styled.img`
    height: 60px;
    margin-right: 20px;
`
const Announcement_Category_title = styled.div`
    font-size: 12px;
`
const Announcement_Category_allcaregory = styled.h4`
    font-size: 16px;
    font-weight: 500;
    color: #555555;
    transition: 0.3s;
    &:hover{
        color: #F69393;
    }
`

export default Announcement_Category