import React from 'react'
import styled from 'styled-components'
import Per_Announcement from "./Per_announcement"
import Announcement_Category from "./Announcement_Category"
const Announcement = () => {
    return (
        <Announcement_container>
            <Flex flex="2">
                <Per_Announcement />
            </Flex>
            <Flex flex="1">
                <Announcement_Category />
            </Flex >
        </Announcement_container>

    )
}

const Announcement_container = styled.div`
    display: flex;
    padding:60px 131px 0px 131px;
`
const Flex = styled.div`
    flex:${prop => prop.flex};
`
export default Announcement