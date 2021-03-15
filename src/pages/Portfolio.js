import React from 'react';
import '../styles/Portfolio.css';

const projects = [
    {name: "unOfficial witcher", path:"https://bartosz777.github.io/witcher/"},
]

const Portfolio = () => {
    const projectList = projects.map(project => (
        <li key={project.name}>
            <a rel="noopener noreferrer" target="_blank" className='project' href={project.path}>{project.name}</a>
        </li>
    ))
    return ( 
        <div className='content'>
            <h2>Portfolio</h2>
            <span>Look at my current projects</span>
            <ul>{projectList}</ul>
        </div>
     );
}
 
export default Portfolio;