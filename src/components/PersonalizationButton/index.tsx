/**
 * PersonalizationButton - Navbar button to open personalization modal
 */

import React, { useState } from 'react';
import { usePersonalization } from '../../hooks/usePersonalization';
import PersonalizationModal from '../PersonalizationModal';

export default function PersonalizationButton(): React.JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { hasPersonalization } = usePersonalization();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button
                className="personalization-button"
                onClick={handleOpenModal}
                aria-label="Personalize website"
                title="Customize your experience"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v6m0 6v6m9.66-9H16.5m-9 0H1.34M18.36 18.36l-4.24-4.24m-4.24 0L5.64 18.36M18.36 5.64l-4.24 4.24m-4.24 0L5.64 5.64" />
                </svg>
                <span className="personalization-button-text">
                    {hasPersonalization() ? 'Edit' : 'Personalize'}
                </span>
            </button>

            {isModalOpen && (
                <PersonalizationModal onClose={handleCloseModal} />
            )}

            <style>{`
        .personalization-button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: transparent;
          border: 1px solid var(--ifm-color-emphasis-300);
          border-radius: 6px;
          color: var(--ifm-font-color-base);
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s ease;
          margin-left: 8px;
        }

        .personalization-button:hover {
          background: var(--ifm-color-emphasis-100);
          border-color: var(--ifm-color-primary);
          color: var(--ifm-color-primary);
        }

        .personalization-button svg {
          flex-shrink: 0;
        }

        .personalization-button-text {
          white-space: nowrap;
        }

        @media (max-width: 996px) {
          .personalization-button-text {
            display: none;
          }
          .personalization-button {
            padding: 8px;
          }
        }
      `}</style>
        </>
    );
}
