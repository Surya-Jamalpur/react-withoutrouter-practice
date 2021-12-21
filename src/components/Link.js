import React from 'react';

const Link = ({ href, children }) => {
    const linkClicked = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popState');
        window.dispatchEvent(navEvent);
    }

    return <a href={href} onClick={linkClicked}>{children}</a>
}

export default Link;