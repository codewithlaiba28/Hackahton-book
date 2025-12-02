/**
 * TypeScript types and interfaces for the personalization system
 */

// Text color options for theme customization (Highlight color)
export type TextColor = 'orangish' | 'pink' | 'green' | 'lightgreen' | 'darkblue';

// Regular text color options (Body text)
export type RegularTextColor = 'grayish' | 'black' | 'off-white' | 'cream';

// Background theme modes
export type BackgroundMode = 'day' | 'night';

// Content difficulty levels
export type ContentDifficulty = 'easy' | 'medium' | 'hard';

// Content language options
export type ContentLanguage = 'en' | 'ur';

// Complete personalization state
export interface PersonalizationState {
    // User's name
    userName: string | null;

    // Theme preferences
    textColor: TextColor; // Highlight color
    regularTextColor: RegularTextColor; // Body text color
    backgroundMode: BackgroundMode;

    // Content preferences
    contentDifficulty: ContentDifficulty | null;
    language: ContentLanguage;

    // Flag to check if personalization has been set
    isPersonalized: boolean;
}

// Default personalization state
export const DEFAULT_PERSONALIZATION: PersonalizationState = {
    userName: null,
    textColor: 'orangish',
    regularTextColor: 'grayish', // Default for day mode
    backgroundMode: 'day',
    contentDifficulty: null,
    language: 'en',
    isPersonalized: false,
};

// Context value type
export interface PersonalizationContextValue {
    personalization: PersonalizationState;
    updatePersonalization: (updates: Partial<PersonalizationState>) => void;
    resetPersonalization: () => void;
    hasPersonalization: () => boolean;
}