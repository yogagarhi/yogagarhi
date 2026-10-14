// Utility for pushing tracking events to existing GTM dataLayer

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined") {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}
