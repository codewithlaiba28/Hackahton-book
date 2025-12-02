import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { toast } from 'sonner';
import styles from './styles.module.css';
import { sendMessage } from '../../services/chatService';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
}

export interface ChatbotRef {
    openWithQuery: (query: string) => void;
}

const Chatbot = forwardRef<ChatbotRef>((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Hi! I\'m your book reading assistant. Ask me anything about the textbook!', sender: 'bot' },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);


    useImperativeHandle(ref, () => ({
        openWithQuery: async (query: string) => {


            // Open the chat
            setIsOpen(true);

            // Add user message
            const userMessage: Message = {
                id: Date.now().toString(),
                text: query,
                sender: 'user',
            };
            setMessages((prev) => [...prev, userMessage]);
            setIsLoading(true);

            // Send to API and get response
            try {
                const responseText = await sendMessage(query);
                const botMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    text: responseText,
                    sender: 'bot',
                };
                setMessages((prev) => [...prev, botMessage]);
            } catch (error) {
                console.error('Error sending message:', error);
                const errorMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    text: 'Sorry, something went wrong. Please try again.',
                    sender: 'bot',
                };
                setMessages((prev) => [...prev, errorMessage]);
            } finally {
                setIsLoading(false);
            }
        },
    }));

    const toggleChat = () => {

        setIsOpen(!isOpen);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const responseText = await sendMessage(inputValue);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: 'bot',
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: 'Sorry, something went wrong. Please try again.',
                sender: 'bot',
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className={styles.chatbotContainer}>
            {!isOpen && (
                <button className={styles.launcher} onClick={toggleChat} aria-label="Open Chat">
                    📚
                </button>
            )}

            {isOpen && (
                <div className={styles.window}>
                    <div className={styles.header}>
                        <div className={styles.headerContent}>
                            <span className={styles.headerIcon}>📚</span>
                            <span>Book Reading Assistant</span>
                        </div>
                        <button className={styles.closeButton} onClick={toggleChat} aria-label="Close Chat">
                            ✕
                        </button>
                    </div>

                    <div className={styles.messages}>
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`${styles.message} ${msg.sender === 'user' ? styles.userMessage : styles.botMessage
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && <div className={`${styles.message} ${styles.botMessage}`}>Typing...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Ask about the book..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disabled={isLoading}
                        />
                        <button
                            className={styles.sendButton}
                            onClick={handleSend}
                            disabled={isLoading || !inputValue.trim()}
                            aria-label="Send Message"
                        >
                            ➔
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
});

Chatbot.displayName = 'Chatbot';

export default Chatbot;
