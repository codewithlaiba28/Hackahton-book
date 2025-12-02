import React from 'react';
import Link from '@docusaurus/Link';
import styles from './LandingPage.module.css';

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Ready to Master Physical AI?</h2>
                    <p className={styles.ctaSubtitle}>
                        Start your journey from foundational principles to deploying intelligent physical agents
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link
                            className={`button button--primary button--lg ${styles.ctaButton}`}
                            to="/docs/part1-foundations/chapter1-physical-ai-foundations">
                            Start Reading Now
                        </Link>
                        <Link
                            className={`button button--secondary button--lg ${styles.ctaButton}`}
                            to="#course-outline">
                            Explore Curriculum
                        </Link>
                    </div>
                    <p className={styles.ctaNote}>
                        ✨ Completely free • No sign-up required • Updated regularly
                    </p>
                </div>
            </div>
        </section>
    );
}
