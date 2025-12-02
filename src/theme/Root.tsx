import React, { useRef } from 'react';
import Chatbot, { ChatbotRef } from '../components/Chatbot';
import { PersonalizationProvider } from '../contexts/PersonalizationContext';
import { AuthProvider } from '../contexts/AuthContext';
import ThemeInjector from '../components/ThemeInjector';
import ContentRouter from '../components/ContentRouter';
import TextSelectionPopup from '../components/TextSelectionPopup';

// Default implementation, that you can customize
export default function Root({ children }) {
    const chatbotRef = useRef<ChatbotRef>(null);

    const handleAskSelected = (selectedText: string) => {
        chatbotRef.current?.openWithQuery(Explain this : "${selectedText}");
    };

    return (
        // <AuthProvider>
        <PersonalizationProvider>
            <ThemeInjector />
            <ContentRouter />
            {children}
            <TextSelectionPopup onAskSelected={handleAskSelected} />
            <Chatbot ref={chatbotRef} />
        </PersonalizationProvider>
        // </AuthProvider>
    );
}