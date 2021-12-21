import React from 'react';
import './Header.scss';
import Link from './Link';

const Header = () => {
    return (
        <div className='Navigation'>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/AboutUs">About Us</Link>
                </li>
                <li>
                    <Link href="/Services">Services</Link>
                </li>
                <li>
                    <Link href="/Products">Products</Link>
                </li>
                <li>
                    <Link href="/ContactUs">Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;