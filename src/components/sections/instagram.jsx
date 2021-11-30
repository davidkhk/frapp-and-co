import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50rem;
`

function Instagram() {
    // const token = "IGQVJWeUZAEclM4UmF2NWdWWi0yYzFOM0pCd2p4Ql85bEROcWlIZAFBvTEJwM1FXdjE0cWRpWkR2UENzVnJtU0gwelhqeW9qU1NncTIzUG1DZAmZAvaXFuVU9tMWg1WFpWRi0wQlNxT1pXUWZAUMW1EV0RqagZDZD";
    const url = "https://graph.instagram.com/me/media?access_token=IGQVJWeUZAEclM4UmF2NWdWWi0yYzFOM0pCd2p4Ql85bEROcWlIZAFBvTEJwM1FXdjE0cWRpWkR2UENzVnJtU0gwelhqeW9qU1NncTIzUG1DZAmZAvaXFuVU9tMWg1WFpWRi0wQlNxT1pXUWZAUMW1EV0RqagZDZD&fields=media_url, media_type,caption,permalink";
    const [instaData, setInstaData] = useState([]);

    axios.get(url)
        .then(response => {
            setInstaData(response.data)
        })

    return (
        <Section id="instagram">
            <h1>Segue a gente no Instagram!</h1>
            <h2>{instaData.caption}</h2>
        </Section>
    )
}

export default Instagram;