import React from 'react'
import styled from 'styled-components'

const SideNav = ({ topic }) => {
    return (
        <Sidenav_container>
            <Sidenav_txt>畢業專題</Sidenav_txt>
            <All_topic_container>
                {
                    topic.map((item) => {
                        return (
                            <Topic_item>{item.name}</Topic_item>
                        )
                    })
                }

            </All_topic_container>
        </Sidenav_container>
    )
}
const Sidenav_container = styled.div``
const Sidenav_txt = styled.div`
    font-weight: 500;
    font-size: 18px;
`
const All_topic_container = styled.div`
    margin-top: 20px;
`
const Topic_item = styled.div`
    margin-top: 18px;
    color: #666666;
    font-size: 14px;
    transition: 0.3s;
    &:hover{
        color: #F69393;
    }
`
export default SideNav