/**
 * PersonalizationModal - Multi-step modal for personalization settings
 * Step 1: User Name
 * Step 2: Theme & Color Selection
 * Step 3: Content Difficulty Selection
 */

import React, { useState, useEffect } from 'react';
import { usePersonalization } from '../../hooks/usePersonalization';
import type {
    TextColor,
    RegularTextColor,
    BackgroundMode,
    ContentDifficulty,
    ContentLanguage,
} from '../../types/personalizationTypes';
import styles from './PersonalizationModal.module.css';

interface PersonalizationModalProps {
    onClose: () => void;
}

type Step = 1 | 2 | 3;

export default function PersonalizationModal({
    onClose,
}: PersonalizationModalProps): React.JSX.Element {
    const { personalization, updatePersonalization } = usePersonalization();

    // Local state for form values
    const [currentStep, setCurrentStep] = useState<Step>(1);
    const [userName, setUserName] = useState<string>(personalization.userName || '');
    const [language, setLanguage] = useState<ContentLanguage>(personalization.language || 'en');
    const [contentDifficulty, setContentDifficulty] = useState<ContentDifficulty | null>(
        personalization.contentDifficulty
    );

    // Handle backdrop click
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Navigation handlers
    const handleNext = () => {
        if (currentStep === 1 && !userName.trim()) {
            alert('Please enter your name to continue');
            return;
        }
        if (currentStep === 3) {
            handleSave();
        } else {
            setCurrentStep((prev) => (prev + 1) as Step);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => (prev - 1) as Step);
        }
    };

    const handleSave = () => {
        if (!contentDifficulty) {
            alert('Please select a content difficulty level');
            return;
        }

        // Update personalization in context
        updatePersonalization({
            userName: userName.trim(),
            textColor: 'orangish',
            regularTextColor: 'grayish',
            backgroundMode: 'day',
            contentDifficulty,
            language,
            isPersonalized: true,
        });

        onClose();
    };

    // Render step content
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className={styles.stepContent}>
                        <h3>Welcome! What's your name?</h3>
                        <p className={styles.stepDescription}>
                            Let's personalize your learning experience
                        </p>
                        <input
                            type="text"
                            className={styles.nameInput}
                            placeholder="Enter your name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            autoFocus
                        />
                    </div>
                );

            case 2:
                return (
                    <div className={styles.stepContent}>
                        <h3>Select Language</h3>
                        <p className={styles.stepDescription}>
                            Choose your preferred language
                        </p>
                        <div className={styles.radioGroup}>
                            <label className={styles.difficultyLabel}>
                                <input
                                    type="radio"
                                    name="language"
                                    value="en"
                                    checked={language === 'en'}
                                    onChange={(e) => setLanguage(e.target.value as ContentLanguage)}
                                />
                                <span className={styles.difficultyText}>English</span>
                                <span className={styles.difficultyDescription}>
                                    Read content in English
                                </span>
                            </label>
                            <label className={styles.difficultyLabel}>
                                <input
                                    type="radio"
                                    name="language"
                                    value="ur"
                                    checked={language === 'ur'}
                                    onChange={(e) => setLanguage(e.target.value as ContentLanguage)}
                                />
                                <span className={styles.difficultyText}>Urdu (اردو)</span>
                                <span className={styles.difficultyDescription}>
                                    Read content in Urdu
                                </span>
                            </label>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className={styles.stepContent}>
                        <h3>Select Content Difficulty</h3>
                        <p className={styles.stepDescription}>
                            Choose your preferred learning level
                        </p>
                        <div className={styles.radioGroup}>
                            {(['easy', 'medium', 'hard'] as ContentDifficulty[]).map((difficulty) => (
                                <label key={difficulty} className={styles.difficultyLabel}>
                                    <input
                                        type="radio"
                                        name="contentDifficulty"
                                        value={difficulty}
                                        checked={contentDifficulty === difficulty}
                                        onChange={(e) => setContentDifficulty(e.target.value as ContentDifficulty)}
                                    />
                                    <span className={styles.difficultyText}>
                                        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                                    </span>
                                    <span className={styles.difficultyDescription}>
                                        {difficulty === 'easy' ? 'Beginner-friendly content with more explanations' :
                                            difficulty === 'medium' ? 'Balanced approach for intermediate learners' :
                                                'Advanced content for experienced learners'}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.modal}>
                {/* Close button */}
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ×
                </button>

                {/* Progress indicator */}
                <div className={styles.progress}>
                    {[1, 2, 3].map((step) => (
                        <div
                            key={step}
                            className={`${styles.progressDot} ${step === currentStep ? styles.progressDotActive :
                                step < currentStep ? styles.progressDotComplete : ''
                                }`}
                        />
                    ))}
                </div>

                {/* Step content */}
                {renderStepContent()}

                {/* Navigation buttons */}
                <div className={styles.buttonGroup}>
                    {currentStep > 1 && (
                        <button
                            className={`${styles.button} ${styles.buttonSecondary}`}
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                    )}
                    <button
                        className={`${styles.button} ${styles.buttonPrimary}`}
                        onClick={handleNext}
                    >
                        {currentStep === 3 ? 'Save & Apply' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
}