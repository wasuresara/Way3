/**
 * Detects the user's preferred language from browser settings
 * @returns {string} Language code (de, en, fr, es) based on browser preference
 */
export function detectUserLanguage() {
  // Get browser language (returns something like 'en-US', 'de-DE', etc.)
  const browserLang = navigator.language || navigator.userLanguage;
  
  // Extract the primary language code (e.g., 'en' from 'en-US')
  const primaryLang = browserLang.split('-')[0].toLowerCase();
  
  // Map to supported languages, default to German if not supported
  const supportedLanguages = ['de', 'en', 'fr', 'es'];
  
  return supportedLanguages.includes(primaryLang) ? primaryLang : 'de';
}

/**
 * Redirects to the appropriate language route if needed
 * @param {string} currentPath - Current URL path
 */
export function redirectToLanguagePath() {
  // Don't redirect if we're already on a language path
  const currentPath = window.location.pathname;
  if (currentPath === '/en' || currentPath === '/fr' || currentPath === '/es' || 
      currentPath.startsWith('/en/') || currentPath.startsWith('/fr/') || currentPath.startsWith('/es/')) {
    return;
  }
  
  // If we're at root, check user language and redirect if needed
  if (currentPath === '/' || currentPath === '') {
    const userLang = detectUserLanguage();
    
    // Only redirect if not German (which is the default at root path)
    if (userLang !== 'de') {
      window.location.href = `/${userLang}`;
    }
  }
}