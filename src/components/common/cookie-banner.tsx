import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(() => {
    // Check if we have a cookie acceptance stored
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cookieAccepted') === 'true';
    }
    return true; // Default to showing if we can't check
  });

  useEffect(() => {
    if (showBanner) {
      // If we've accepted, hide the banner
      if (localStorage.getItem('cookieAccepted') === 'true') {
        setShowBanner(false);
      }
    }
  }, [showBanner]);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowBanner(false);
  };

  if (showBanner) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-(--color-bg-dark)/95 backdrop-blur-sm text-(--color-text-muted) text-sm z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </div>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-hover) transition-colors"
            >
              Accept
            </button>
            <a
              href="/privacy"
              className="text-(--color-primary) hover:text-white underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }

  return null;
};