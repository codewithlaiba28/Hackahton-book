/**
 * LocalStorage utilities for persisting personalization settings
 * Handles SSR compatibility and error handling
 */

import type { PersonalizationState } from '../types/personalizationTypes';
import { DEFAULT_PERSONALIZATION } from '../types/personalizationTypes';

const STORAGE_KEY = 'docusaurus-personalization';

/**
 * Check if localStorage is available (client-side only)
 */
const isStorageAvailable = (): boolean => {
    if (typeof window === 'undefined') {
        return false;
    }

    try {
        const test = '__storage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Save personalization settings to localStorage
 */
export const savePersonalization = (personalization: PersonalizationState): void => {
    if (!isStorageAvailable()) {
        console.warn('LocalStorage is not available. Personalization will not persist.');
        return;
    }

    try {
        const serialized = JSON.stringify(personalization);
        localStorage.setItem(STORAGE_KEY, serialized);
    } catch (error) {
        console.error('Failed to save personalization settings:', error);
    }
};

/**
 * Load personalization settings from localStorage
 */
export const loadPersonalization = (): PersonalizationState => {
    if (!isStorageAvailable()) {
        return DEFAULT_PERSONALIZATION;
    }

    try {
        const serialized = localStorage.getItem(STORAGE_KEY);

        if (!serialized) {
            return DEFAULT_PERSONALIZATION;
        }

        const parsed = JSON.parse(serialized);

        // Validate and merge with defaults to handle missing fields
        return {
            ...DEFAULT_PERSONALIZATION,
            ...parsed,
        };
    } catch (error) {
        console.error('Failed to load personalization settings:', error);
        return DEFAULT_PERSONALIZATION;
    }
};

/**
 * Clear personalization settings from localStorage
 */
export const clearPersonalization = (): void => {
    if (!isStorageAvailable()) {
        return;
    }

    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Failed to clear personalization settings:', error);
    }
};
