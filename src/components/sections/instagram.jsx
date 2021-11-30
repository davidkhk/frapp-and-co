import React, { useState } from 'react';
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50rem;
`

function Instagram() {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url, media_type,caption,permalink";
    
    const [instaData, setInstaData] = useState([]);
    
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setInstaData(json);
        });

    let instaFeed = '<div>';

    for (let i=0; i <= 5; i++) {
        let instaFeed = instaData[i];
        let postCaption = instaFeed.caption !== null ? instaFeed.caption : '';
        let type = instaFeed.media_type;
        if (type === 'VIDEO') {
            instaFeed += <video controls><source src={instaFeed.media_url} type="video/mp4" onClick={window.open(instaFeed.permalink)}></source></video>
        }
        else if (type === 'IMAGE') {
            instaFeed += <img title={postCaption} alt="Post caption" src={instaFeed.media_url} onClick={window.open(instaFeed.permalink)}></img>
        }
    }
        instaFeed =+ '</div>';

        console.log(instaFeed);

    return (
        <Section id="instagram">
            <h1>Segue a gente no Instagram!</h1>
            {instaFeed}
        </Section>
    )
}

export default Instagram;