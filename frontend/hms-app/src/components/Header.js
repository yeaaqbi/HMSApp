import React from 'react';
const Header = () => {
    return (
        <div className="header">
            <label className="logo">HMS App</label>
            <ul>
                <li><a className="active" href="/">Home</a></li>
            </ul>
        </div>
    );
}

export default Header;
