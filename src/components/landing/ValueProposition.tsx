import React from 'react';
import { HiCpuChip, HiCog6Tooth, HiCube, HiBolt, HiEye, HiChatBubbleLeftRight } from 'react-icons/hi2';
import styles from './LandingPage.module.css';

const benefits = [
    {
        icon: HiCpuChip,
        title: 'Foundational Principles',
        description: 'Master the six core principles of Physical AI: embodiment, perception, action, learning, autonomy, and context sensitivity.'
    },
    {
        icon: HiCog6Tooth,
        title: 'Hands-On ROS 2',
        description: 'Learn the Robot Operating System 2 — the nervous system powering modern robots from ground up to advanced patterns.'
    },
    {
        icon: HiCube,
        title: 'Digital Twin Simulation',
        description: 'Build precise digital replicas of physical robots for testing, training, and deployment before real-world execution.'
    },
    {
        icon: HiBolt,
        title: 'NVIDIA Isaac Platform',
        description: 'Leverage cutting-edge AI acceleration, GPU-powered simulation, and deployment tools for real-world robotics.'
    },
    {
        icon: HiEye,
        title: 'Vision-Language-Action',
        description: 'Implement VLA systems that combine visual perception, language understanding, and physical manipulation.'
    },
    {
        icon: HiChatBubbleLeftRight,
        title: 'Conversational Robotics',
        description: 'Create robots that understand and respond to natural language while performing complex physical tasks.'
    }
];

export default function ValueProposition() {
    return (
        <section className={styles.valueSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>What You'll Master</h2>
                    <p className={styles.sectionSubtitle}>
                        From theoretical foundations to practical deployment — everything you need to build intelligent physical agents
                    </p>
                </div>

                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, idx) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div key={idx} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <IconComponent />
                                </div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDescription}>{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
