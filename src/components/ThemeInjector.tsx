/**
 * ThemeInjector component
 * Applies personalization theme classes to the document root
 * Handles dynamic theme switching based on user preferences
 */

import { useEffect } from 'react';
import { usePersonalization } from '../hooks/usePersonalization';
import type { TextColor, BackgroundMode, RegularTextColor } from '../types/personalizationTypes';

/**
 * Get CSS class name for text color (Highlight)
 */
const getTextColorClass = (color: TextColor): string => {
    const classMap: Record<TextColor, string> = {
        orangish: '', // Default
        pink: 'theme-text-pink',
        green: 'theme-text-green',
        lightgreen: 'theme-text-lightgreen',
        darkblue: 'theme-text-darkblue',
    };
    return classMap[color] || '';
};

/**
 * Get CSS class name for regular text color
 */
const getRegularTextColorClass = (color: RegularTextColor): string => {
    const classMap: Record<RegularTextColor, string> = {
        'grayish': '', // Default for day
        'black': 'theme-text-black',
        'off-white': '', // Default for night
        'cream': 'theme-text-cream',
    };
    return classMap[color] || '';
};



/**
 * ThemeInjector component
 * No visual output, only applies classes to document
 */
export default function ThemeInjector(): null {
    const { personalization } = usePersonalization();

    useEffect(() => {
        // Only run on client-side
        if (typeof document === 'undefined') {
            return;
        }

        const html = document.documentElement;

        // Remove all existing theme classes
        const allThemeClasses = [
            'theme-text-pink',
            'theme-text-green',
            'theme-text-lightgreen',
            'theme-text-darkblue',
            'theme-text-black',
            'theme-text-cream',
            'theme-text-cream',
        ];

        html.classList.remove(...allThemeClasses);

        // Apply new theme classes if personalized
        if (personalization.isPersonalized) {
            const textColorClass = getTextColorClass(personalization.textColor);
            const regularTextColorClass = getRegularTextColorClass(personalization.regularTextColor);
            if (textColorClass) html.classList.add(textColorClass);
            if (regularTextColorClass) html.classList.add(regularTextColorClass);
        }
    }, [personalization]);

    return null;
}
