import React from 'react'
import styled from 'styled-components'
const All_announcement = () => {
    return (
        <Announcement_container>
            <Announcement_title>最佳部落格網站：找到完美的部落格平台</Announcement_title>
            <Announcement_post_container>
                <Announcement_post_timer>2022/03/26</Announcement_post_timer>
                <b style={{ margin: "0px 5px 0px 5px" }}>/</b>
                <Announcement_post_publisher>post by Jacky</Announcement_post_publisher>
                <Announcement_tag BtnWidth="80px">講座與參訪</Announcement_tag>
            </Announcement_post_container>

            <Announcement_img src="http://www.gcd.pccu.edu.tw/img/news_pict/news_null.png" />
            <Announcement_content>
                &emsp;&emsp;在簡化網站架設方面，Strikingly是業內非常出色的部落格架設平台。它具有用戶友好的網站編輯器，可以讓你在幾分鐘內快速啟動你的最佳部落格網站。該網站架構平台提供了多種風格的網站設計模板，幾乎適用於你想要撰寫的任何主題以及你想要打入的任何細分行業市場。
                <br />
                <br />
                &emsp;&emsp;不僅如此，Strikingly還能為你的部落格提供SEO優化功能。SEO優化對我們的部落格來說非常重要！想要出眾多撰寫了相同主題的部落格中脫穎而出，SEO優化是必不可少的。在Google輸入你的部落格主題的關鍵字，你就可以找到哪些部落格或者網站討論的主題與你的主題是非常相似的。搜尋關鍵字可以讓你快速找到你在網路上的競爭對手。簡而言之，你將在網路上與總多個人及企業進行競爭，如果你希望人們更先找到你的最佳部落格網站，或者說你希望在搜尋引擎頁面的第一頁看到你的最佳部落格網站的，那麼你必須優化你部落格的SEO。
                <br />
                <br />
                不過，你可以在Medium上建立自己的出版物或雜誌。正如上文提及的，Medium是一個社群平台，那麼你可以透過它與其他作者建立聯繫，進行共同創作。在Medium上，你還有機會透過寫作賺錢。你可以加入Medium的合作夥伴計劃，讓你的部落格文章僅對Medium的高級會員開放。每當一位會員閱讀你的文章並為妳按讚時，你都會獲得一定的收入。
            </Announcement_content>
        </Announcement_container>
    )
}
const Announcement_container = styled.div`

`
const Announcement_title = styled.h3`
    font-size: 32px;
`
const Announcement_post_container = styled.div`
    display: flex;
    color: #555555;
    font-size: 13px;
    margin-top: 1em;
`
const Announcement_post_timer = styled.p`

`
const Announcement_post_publisher = styled.p``
const Announcement_tag = styled.button`
    width: ${prop => prop.BtnWidth};
    border: none;
	height: 24px;
	background-color: #F69393;
	border-radius: 15.5px;
	color: #FFFFFF;
	font-size: 8px;
    margin-left: 20px;
`
const Announcement_img = styled.img`
    margin: 2em 0px 5em 0px;
    height: 240px;

    border: 1px solid #000;

`
const Announcement_content = styled.div`
    font-size: 14px;
    max-width: 90%;
`
export default All_announcement