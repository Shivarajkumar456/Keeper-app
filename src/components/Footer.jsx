import React from 'react';

function Footer(){
    const dateFetch = new Date();
    const year = dateFetch.getFullYear();
    return <footer><p>Copyrightⓒ{ year }</p></footer>;
}

export default Footer;