import { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onUrlChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popState', onUrlChange);

        return () => {
            window.removeEventListener('popState', onUrlChange)
        }
    }, [])

    return currentPath === path ? children : null;
}
export default Route;