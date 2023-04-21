import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Pokedex</Link>
                </li>
                <li>
                    <Link to="/about">About this app</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;