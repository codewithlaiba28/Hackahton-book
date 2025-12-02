/**
 * PersonalizationContext - Global state management for personalization settings
 * Provides context for theme, content difficulty, and user preferences
 */

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import type {
    PersonalizationState,
    PersonalizationContextValue,
} from '../types/personalizationTypes';
import { DEFAULT_PERSONALIZATION } from '../types/personalizationTypes';
import {
    savePersonalization,
    loadPersonalization,
    clearPersonalization,
} from '../utils/storageUtils';

// Create context with default value
export const PersonalizationContext = createContext<PersonalizationContextValue>({
    personalization: DEFAULT_PERSONALIZATION,
    updatePersonalization: () => { },
    resetPersonalization: () => { },
    hasPersonalization: () => false,
});

interface PersonalizationProviderProps {
    children: ReactNode;
}

/**
 * PersonalizationProvider component
 * Wraps the application and provides personalization state
 */
export const PersonalizationProvider: React.FC<PersonalizationProviderProps> = ({
    children,
}) => {
    const [personalization, setPersonalization] = useState<PersonalizationState>(
        DEFAULT_PERSONALIZATION
    );

    // Load personalization from localStorage on mount (client-side only)
    useEffect(() => {
        const loaded = loadPersonalization();
        setPersonalization(loaded);
    }, []);

    /**
     * Update personalization settings
     * Merges partial updates with existing state and persists to localStorage
     */
    const updatePersonalization = (updates: Partial<PersonalizationState>): void => {
        setPersonalization((prev) => {
            const updated = {
                ...prev,
                ...updates,
                isPersonalized: true, // Always mark as personalized when updating
            };

            // Persist to localStorage
            savePersonalization(updated);

            return updated;
        });
    };

    /**
     * Reset personalization to defaults
     * Clears localStorage and resets state
     */
    const resetPersonalization = (): void => {
        clearPersonalization();
        setPersonalization(DEFAULT_PERSONALIZATION);
    };

    /**
     * Check if user has personalized settings
     */
    const hasPersonalization = (): boolean => {
        return personalization.isPersonalized;
    };

    const value: PersonalizationContextValue = {
        personalization,
        updatePersonalization,
        resetPersonalization,
        hasPersonalization,
    };

    return (
        <PersonalizationContext.Provider value={value}>
            {children}
        </PersonalizationContext.Provider>
    );
};
