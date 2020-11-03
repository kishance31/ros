import { useRouteMatch, useLocation } from 'react-router-dom';

// Custom hook to manage the active link on clicking a link
export const useActiveLinks = (navLinks) => {
    const { pathname } = useLocation();
    const { path } = useRouteMatch();
    const currentPath = pathname.split(path)[1]; //.split('/')[1];
    let newLinks = [...navLinks];

    if (currentPath.length > 1) {
        newLinks = navLinks.map(links => {
            if (links.url === pathname) {
                return {
                    ...links,
                    active: true
                }
            }
            return {
                ...links,
                active: false
            }
        })
    }

    return [...newLinks];
}