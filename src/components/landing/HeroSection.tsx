import React from 'react';
import Link from '@docusaurus/Link';
import { HiSparkles } from 'react-icons/hi2';
import styles from './LandingPage.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                        <HiSparkles className={styles.heroBadgeIcon} />
                        <span>Interactive Textbook</span>
                    </div>

                    <h1 className={styles.heroTitle}>
                        Master Physical AI and Humanoid Robotics
                    </h1>

                    <p className={styles.heroSubtitle}>
                        A comprehensive guide to building intelligent physical agents — from foundational principles
                        to deployment. Learn ROS 2, NVIDIA Isaac, Vision-Language-Action systems, and humanoid development.
                    </p>

                    <div className={styles.heroButtons}>
                        <Link
                            className={`button button--primary button--lg ${styles.heroButton}`}
                            to="/docs/part1-foundations/chapter1-physical-ai-foundations">
                            Start Reading
                        </Link>
                        <Link
                            className={`button button--secondary button--lg ${styles.heroButton}`}
                            to="#course-outline">
                            View Contents
                        </Link>
                    </div>

                    <div className={styles.heroStats}>
                        <div className={styles.heroStat}>
                            <div className={styles.heroStatNumber}>8</div>
                            <div className={styles.heroStatLabel}>Comprehensive Parts</div>
                        </div>
                        <div className={styles.heroStat}>
                            <div className={styles.heroStatNumber}>40+</div>
                            <div className={styles.heroStatLabel}>Detailed Chapters</div>
                        </div>
                        <div className={styles.heroStat}>
                            <div className={styles.heroStatNumber}>100%</div>
                            <div className={styles.heroStatLabel}>Free & Open</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
