// EU/EEA + UK + Switzerland — the regions where we show a consent banner and
// gate Pixel loading on explicit accept, rather than loading it by default.
const CONSENT_REQUIRED_COUNTRIES = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", // EU
  "IS", "LI", "NO", // EEA
  "GB", // UK
  "CH", // Switzerland
]);

export function isConsentRequiredCountry(countryCode: string | null | undefined): boolean {
  if (!countryCode) return false;
  return CONSENT_REQUIRED_COUNTRIES.has(countryCode.toUpperCase());
}
