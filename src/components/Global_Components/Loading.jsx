import React from 'react'
import styled from 'styled-components'
const Loading = () => {
    return (
        <Loading_container>
            <img src={require("../../assets/Loading.gif")} alt="" />
        </Loading_container>
    )
}
const Loading_container = styled.div`
    width: 100vw;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background-color: #f1f2f3;
    opacity: 0.9;
    top: 0px;
    left: 0px;

`

export default Loading