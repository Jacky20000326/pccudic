import React from 'react'
import styled from 'styled-components'
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const All_topics = ({ topic }) => {

    return (
        <All_topics_container>
            {
                topic.map((item) => {
                    return (
                        <Topics_item_container direction="row-reverse" key={item.id}>
                            <Topics_image_container>
                                <Topics_image src={require(`../../assets/Topic_img/topic${item.img_url}.jpeg`)} />
                            </Topics_image_container>
                            <Topics_item_constiner>
                                <Flex_container>
                                    <Topics_item_txt>{item.name}</Topics_item_txt>
                                    <AiFillYoutube_icon />
                                    <AiFillFacebook_icon />
                                </Flex_container>
                                <Topics_item_copy>{item.copy}</Topics_item_copy>
                            </Topics_item_constiner>
                        </Topics_item_container>
                    )
                })
            }

        </All_topics_container>
    )
}
const All_topics_container = styled.div`
    
`
const Topics_item_container = styled.div`
    display: flex;

    margin-bottom: 50px;
`
const Topics_image_container = styled.div`
    display: flex;
    margin-right: 40px;
    justify-content: center;
    align-items: center;
    
    /* background-size: contain; */
    /* border: 1px solid #000; */
    
    
`
const Topics_image = styled.img`
    width: 140px;
    height: auto;
`

const Flex_container = styled.div`
    display: flex;
`
const Topics_item_constiner = styled.div`
    flex: 1;
`
const Topics_item_txt = styled.div``
const Topics_item_copy = styled.div`
    font-size: 12px;
    color: #555555;
    margin-top: 10px;
    line-height: 1.6;
`
// icon
const AiFillYoutube_icon = styled(AiFillYoutube)`
    font-size: 24px;
    margin-left: 20px;
    color: #ff0000;
`
const AiFillFacebook_icon = styled(AiFillFacebook)`
    margin-left: 10px;
    font-size: 24px;
    color:#3c5998;
`
export default All_topics