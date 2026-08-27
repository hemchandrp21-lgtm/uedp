/**
 * Google Analytics 4 (GA4) Utility Helper with DebugView Support
 * Stream Name: sales dashboard design system
 * Stream URL: https://uedp-x31b.vercel.app
 * Stream ID: 15510899234
 * Measurement ID: G-1P37KN4T26
 */

export const GA_MEASUREMENT_ID = 'G-1P37KN4T26';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Initialize GA4 script dynamically
 * @param measurementId Target GA4 Measurement ID (Default: G-1P37KN4T26)
 * @param debugMode Enables GA4 DebugView for real-time local debugging
 */
export const initGA = (
  measurementId: string = GA_MEASUREMENT_ID,
  debugMode: boolean = true
) => {
  if (typeof window === 'undefined') return;

  if (!document.getElementById('ga-gtag-script')) {
    const script = document.createElement('script');
    script.id = 'ga-gtag-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: true,
      debug_mode: debugMode,
    });
  }
};

/** Track custom analytics event */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      send_to: GA_MEASUREMENT_ID,
      debug_mode: true,
      ...eventParams,
    });
  }
};

/** Track component view or user interaction */
export const trackComponentInteraction = (
  componentName: string,
  action: string,
  extraParams?: Record<string, any>
) => {
  trackEvent('component_interaction', {
    component_name: componentName,
    interaction_type: action,
    ...extraParams,
  });
};
