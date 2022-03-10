import React from 'react'
import styled from 'styled-components'
const Teacher = () => {
    return (
        <Teacher_container>
            <Teacher_title>系主任</Teacher_title>
            <Teacher_master_container>
                <Teacher_master_image_container>
                    <Teacher_image src='http://www.gcd.pccu.edu.tw/img/member/SHARON.jpg' />
                </Teacher_master_image_container>
                <Teacher_master_block_container>
                    <Teacher_name>派大星博士加教授先生</Teacher_name>
                    <Teacher_job_title>系主任/教授</Teacher_job_title>
                    <Teacher_school>英國南安普敦大學資訊科學博士</Teacher_school>
                    <Teacher_specialized>電子商務 網路應用與行動通訊 分散式與網格計算
                        雲端運算及商業模式 軟體工程
                    </Teacher_specialized>
                    <Teacher_more_info>瞭解更多</Teacher_more_info>
                </Teacher_master_block_container>

            </Teacher_master_container>
        </Teacher_container>


    )
}
const Teacher_container = styled.div``
const Teacher_title = styled.div`
    font-weight: 600;
    font-size: 20px;
`
const Teacher_master_container = styled.div`
    display: flex;
    margin-top: 30px;
    box-shadow: 4px 5px 13px -4px rgba(0,0,0,0.1);

`
const Teacher_master_image_container = styled.div`
    flex: 1.5;

    height: auto;
`
const Teacher_image = styled.img`
    width: 100%;
    height: 100%;
`
const Teacher_master_block_container = styled.div`
    flex: 5;
    padding: 20px 30px 0px 30px;
  
`
const Teacher_name = styled.div`
    font-weight: 600;
    font-size: 22px;
    
`
const Teacher_job_title = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
`
const Teacher_school = styled.div`
    font-weight: 300;
    font-size: 10px;
   
`
const Teacher_specialized = styled.div`
    margin-top: 15px;
    font-weight: 300;
    font-size: 10px;
`
const Teacher_more_info = styled.button`
    border:none;
    width: 90px;
    height: 30px;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 12px;
    background-color: #F69393;
    color: #fff
`
export default Teacher