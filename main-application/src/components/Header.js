import React from 'react';
import logo from '../images/sideimg.png';
const username = window.prompt('What\'s your Name?: ');

const Header = () => {
    return (
        <header>
            <h1>Hello,<br/> I'm Madhan</h1>
            <h3>Hi, {username}.</h3>
            <a id="know-more" href="#about">Know more</a>
            <a id="github" target="_blank" href="https://github.com/MadhanDevlpr">Github</a>
            <img src={logo} alt=""></img>
        </header>
    )
}

export default Header
