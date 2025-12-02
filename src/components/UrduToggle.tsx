// src/components/UrduToggle.tsx
import React from 'react';
import { useLocation } from '@docusaurus/router';

function UrduToggle(): React.JSX.Element | null {
  const { pathname } = useLocation();

  console.log('UrduToggle rendered on pathname:', pathname); // Added for debugging

  const isDocsPage = pathname.startsWith('/docs/');
  const isUrduPage = pathname.startsWith('/urdu/');

  console.log('isDocsPage:', isDocsPage, 'isUrduPage:', isUrduPage); // Added for debugging

  if (!isDocsPage && !isUrduPage) {
    console.log('Not a docs or urdu page, returning null'); // Added for debugging
    return null; // Only show on docs or urdu pages
  }

  let targetPath = '';
  let buttonText = '';

  if (isDocsPage) {
    targetPath = pathname.replace('/docs/', '/urdu/');
    buttonText = 'View Urdu Version';
  } else if (isUrduPage) {
    targetPath = pathname.replace('/urdu/', '/docs/');
    buttonText = 'View English Version';
  } else if (pathname.includes('/personalization/')) {
    // Handle personalized paths
    if (pathname.includes('/personalization/urdu/')) {
      // Switch back to English personalized
      targetPath = pathname.replace('/personalization/urdu/', '/personalization/');
      buttonText = 'View English Version';
    } else {
      // Switch to Urdu personalized
      targetPath = pathname.replace('/personalization/', '/personalization/urdu/');
      buttonText = 'View Urdu Version';
    }
  }

  console.log('Rendering button with targetPath:', targetPath); // Added for debugging

  if (!targetPath) return null;

  return (
    <div style={{ marginBottom: '1rem', textAlign: 'right' }}>
      <a href={targetPath} className="button button--secondary">
        {buttonText}
      </a>
    </div>
  );
}

export default UrduToggle;
