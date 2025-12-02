import React from 'react';
import Chatbot from '../components/Chatbot';
import { PersonalizationProvider } from '../contexts/PersonalizationContext';
import ThemeInjector from '../components/ThemeInjector';
import ContentRouter from '../components/ContentRouter';

// Default implementation, that you can customize
export default function Root({ children }) {
    return (
        <PersonalizationProvider>
            <ThemeInjector />
            <ContentRouter />
            {children}
            <Chatbot />
        </PersonalizationProvider>
    );
}