import React from 'react';
import './EventPlanner.css';

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
    return (
        <>
            <footer>
                <section>
                    <hr></hr>
                    <div>&copy; {year} - All rights reserved.</div>
                </section>
            </footer>
        </>
    )};

export default Footer;