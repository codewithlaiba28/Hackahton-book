import React from 'react';
import Link from '@docusaurus/Link';
import styles from './LandingPage.module.css';

const courseParts = [
    {
        number: '01',
        title: 'Foundations of Physical AI',
        description: 'Introduction to embodied intelligence, six core principles, and the role of humanoid robots in physical AI.',
        link: '/docs/part1-foundations/chapter1-physical-ai-foundations'
    },
    {
        number: '02',
        title: 'The Robotic Nervous System – ROS 2',
        description: 'Master ROS 2 architecture, topics, services, actions, and build distributed robotic systems.',
        link: '/docs/part2-ros2/chapter4-ros2-architecture'
    },
    {
        number: '03',
        title: 'Robot Description and Modeling',
        description: 'Create accurate robot models using URDF, XACRO, and understand kinematics chains.',
        link: '/docs/part3-robot-modeling/chapter8-urdf'
    },
    {
        number: '04',
        title: 'The Digital Twin – Simulation',
        description: 'Build digital replicas for testing and training using Gazebo and physics simulation.',
        link: '/docs/part4-digital-twin-simulation/chapter11-gazebo-fundamentals'
    },
    {
        number: '05',
        title: 'The AI-Robot Brain - NVIDIA Isaac',
        description: 'Leverage GPU-accelerated simulation, synthetic data generation, and AI deployment tools.',
        link: '/docs/part5-nvidia-isaac/chapter16-nvidia-isaac-platform'
    },
    {
        number: '06',
        title: 'Vision-Language-Action (VLA) Systems',
        description: 'Integrate visual perception, language models, and physical actions for embodied AI.',
        link: '/docs/part6-vla-systems/chapter22-vla-models'
    },
    {
        number: '07',
        title: 'Conversational Robotics',
        description: 'Build robots that understand natural language and execute physical tasks through dialogue.',
        link: '/docs/part7-conversational-robotics/chapter27-voice-to-action-systems'
    },
    {
        number: '08',
        title: 'Humanoid Robot Development',
        description: 'End-to-end development of humanoid robots from design to deployment in real-world scenarios.',
        link: '/docs/part8-humanoid-robot-development/chapter32-humanoid-robot-anatomy'
    }
];

export default function CourseOutline() {
    return (
        <section id="course-outline" className={styles.outlineSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Complete Curriculum</h2>
                    <p className={styles.sectionSubtitle}>
                        8 comprehensive parts covering every aspect of Physical AI and Humanoid Robotics
                    </p>
                </div>

                <div className={styles.courseGrid}>
                    {courseParts.map((part, idx) => (
                        <Link
                            key={idx}
                            to={part.link}
                            className={styles.courseCard}>
                            <div className={styles.courseNumber}>Part {part.number}</div>
                            <h3 className={styles.courseTitle}>{part.title}</h3>
                            <p className={styles.courseDescription}>{part.description}</p>
                            <div className={styles.courseArrow}>→</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
