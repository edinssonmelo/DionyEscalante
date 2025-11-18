export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      page_location: window.location.href,
      ...params,
    })
  }
}

// Predefined events from the brief
export const events = {
  ctaHeroClick: (label: string) =>
    trackEvent("cta_hero_click", {
      event_category: "engagement",
      event_label: label,
    }),
  quizStarted: () =>
    trackEvent("quiz_started", {
      event_category: "lead_gen",
      event_label: "quiz_iniciado",
    }),
  quizCompleted: () =>
    trackEvent("quiz_completed", {
      event_category: "conversion",
      event_label: "quiz_completado",
      value: 1,
    }),
  whatsappClick: (source: string) =>
    trackEvent("whatsapp_click", {
      event_category: "engagement",
      event_label: `whatsapp_${source}`,
    }),
  leadMagnetDownload: (type: string) =>
    trackEvent("lead_magnet_download", {
      event_category: "lead_gen",
      event_label: `${type}_descargado`,
    }),
  calendlyOpened: (source: string) =>
    trackEvent("calendly_opened", {
      event_category: "conversion",
      event_label: `calendario_${source}`,
    }),
  faqExpanded: (topic: string) =>
    trackEvent("faq_expanded", {
      event_category: "engagement",
      event_label: `faq_${topic}`,
    }),
}

// Extend Window type for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
