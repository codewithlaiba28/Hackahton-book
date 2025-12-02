import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/landing/HeroSection';
import ValueProposition from '@site/src/components/landing/ValueProposition';
import CourseOutline from '@site/src/components/landing/CourseOutline';
import Testimonials from '@site/src/components/landing/Testimonials';
import CTASection from '@site/src/components/landing/CTASection';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A comprehensive textbook on Physical AI and Humanoid Robotics - from foundations to deployment. Learn ROS 2, NVIDIA Isaac, VLA systems, and more.">
      <HeroSection />
      <ValueProposition />
      <CourseOutline />
      <Testimonials />
      <CTASection />
    </Layout>
  );
}
