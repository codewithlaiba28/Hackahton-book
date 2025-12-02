/**
 * usePersonalization hook
 * Custom hook to access personalization context
 */

import { useContext } from 'react';
import { PersonalizationContext } from '../contexts/PersonalizationContext';
import type { PersonalizationContextValue } from '../types/personalizationTypes';

/**
 * Hook to access personalization state and actions
 * Must be used within PersonalizationProvider
 */
export const usePersonalization = (): PersonalizationContextValue => {
    const context = useContext(PersonalizationContext);

    if (!context) {
        throw new Error(
            'usePersonalization must be used within PersonalizationProvider'
        );
    }

    return context;
};
