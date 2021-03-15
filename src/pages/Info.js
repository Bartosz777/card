import React from 'react';
import { NavLink } from 'react-router-dom';

const Info = () => {
    return ( 
        <div className='content'>
            <h2>Hello everyone!</h2>
            <span>I'm beginner in programming. I started learn a few months ago HTML, CSS, JavaScript and now I develop my skills in React. Programming for me is very exciting and I have fun when I create web application. Programming is not my only one passion, I like take a photos, play guitar, music and automotive. I like good books, good movies and very tasty food ;) . I hope one day we will cooperation and it will be really good adventure and pleasure for us. This is my simply card app but I will make more projects and I will share them here. If you want to ask me about cooperation you can use <NavLink className="link" to="/contact">contact form</NavLink>. Take care!</span>
            <p className="sign">Greetings Bartek</p>

        </div>
     );
}
 
export default Info;