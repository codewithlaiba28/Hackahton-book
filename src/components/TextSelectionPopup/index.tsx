import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

interface TextSelectionPopupProps {
    onAskSelected: (selectedText: string) => void;
}

const TextSelectionPopup: React.FC<TextSelectionPopupProps> = ({ onAskSelected }) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [selectedText, setSelectedText] = useState('');
    const location = useLocation();

    // Only enable on docs pages
    const isDocsPage = location.pathname.startsWith('/docs') ||
        location.pathname.startsWith('/urdu') ||
        location.pathname.startsWith('/personalization');

    useEffect(() => {
        if (!isDocsPage) {
            setVisible(false);
            return;
        }

        const handleSelection = () => {
            const selection = window.getSelection();
            const text = selection?.toString().trim();

            if (text && text.length > 0) {
                const range = selection?.getRangeAt(0);
                const rect = range?.getBoundingClientRect();

                if (rect) {
                    setPosition({
                        top: rect.top + window.scrollY - 50,
                        left: rect.left + window.scrollX + rect.width / 2,
                    });
                    setSelectedText(text);
                    setVisible(true);
                }
            } else {
                setVisible(false);
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest(.${styles.popup})) {
                setVisible(false);
            }
        };

        document.addEventListener('mouseup', handleSelection);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mouseup', handleSelection);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDocsPage]);

    const handleAskClick = () => {
        onAskSelected(selectedText);
        setVisible(false);
        window.getSelection()?.removeAllRanges();
    };

    if (!visible) return null;

    return (
        <div
            className={styles.popup}
            style={{
                top: ${position.top}px,
                left: ${position.left}px,
            }}
        >
            <button className={styles.askButton} onClick={handleAskClick}>
                💬 Ask
            </button>
        </div>
    );
};

export default TextSelectionPopup;