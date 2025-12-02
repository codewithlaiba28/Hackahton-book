/**
 * ContentRouter - Component to handle dynamic content routing based on difficulty
 * Routes to appropriate content folder: easy/medium/hard/quiz
 */

import { useEffect } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import { usePersonalization } from '../hooks/usePersonalization';

export default function ContentRouter(): null {
    const { personalization } = usePersonalization();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const currentPath = location.pathname;
        const difficulty = personalization.contentDifficulty;
        const language = personalization.language || 'en';

        // Define paths
        const docsPrefix = '/docs';
        const personalizationPrefix = '/personalization';

        // Helper to get the relative path after the prefix
        const getRelativePath = (path: string) => {
            if (path.startsWith(docsPrefix)) {
                return path.slice(docsPrefix.length);
            }
            // Check for personalization paths
            const match = path.match(/^\/personalization\/(?:urdu\/)?[^/]+(.*)/);
            if (match) {
                return match[1];
            }
            return null;
        };

        const relativePath = getRelativePath(currentPath);

        // If we're not in a content page (docs or personalization), don't redirect
        if (!relativePath) {
            return;
        }

        // Case 1: Personalization is active
        if (difficulty) {
            let targetPrefix = '';

            if (language === 'ur') {
                targetPrefix = `/personalization/urdu/${difficulty}`;
            } else {
                targetPrefix = `/personalization/${difficulty}`;
            }

            // If not already on the target path
            if (!currentPath.startsWith(targetPrefix)) {
                const newPath = `${targetPrefix}${relativePath}`;
                console.log(`Redirecting to personalized content: ${newPath}`);
                history.replace(newPath);
            }
        }
        // Case 2: Personalization is NOT active (default)
        else {
            // If currently on a personalized path, redirect back to default docs
            if (currentPath.startsWith(personalizationPrefix)) {
                const newPath = `${docsPrefix}${relativePath}`;
                console.log(`Redirecting to default content: ${newPath}`);
                history.replace(newPath);
            }
        }
    }, [personalization.contentDifficulty, personalization.language, location.pathname, history]);

    return null;
}