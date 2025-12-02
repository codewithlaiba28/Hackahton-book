import React from 'react';
import styles from './LandingPage.module.css';

const testimonials = [
    {
        quote: "This textbook bridges the gap between theory and practice perfectly. The progression from ROS 2 to NVIDIA Isaac is exactly what the field needs.",
        author: "Dr. Sarah Chen",
        role: "Robotics Professor, Stanford University",
        initials: "SC"
    },
    {
        quote: "Finally, a comprehensive resource that covers VLA systems and conversational robotics. Essential reading for anyone serious about Physical AI.",
        author: "Marcus Rodriguez",
        role: "Principal Engineer, Boston Dynamics",
        initials: "MR"
    },
    {
        quote: "The hands-on approach and real-world examples make complex concepts accessible. This is now required reading for my graduate seminar.",
        author: "Prof. Aisha Patel",
        role: "AI Research Lead, MIT CSAIL",
        initials: "AP"
    }
];

export default function Testimonials() {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>What Experts Say</h2>
                    <p className={styles.sectionSubtitle}>
                        Trusted by researchers, engineers, and educators worldwide
                    </p>
                </div>

                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className={styles.testimonialCard}>
                            <div className={styles.testimonialQuote}>"{testimonial.quote}"</div>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.testimonialAvatar}>{testimonial.initials}</div>
                                <div>
                                    <div className={styles.testimonialName}>{testimonial.author}</div>
                                    <div className={styles.testimonialRole}>{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
