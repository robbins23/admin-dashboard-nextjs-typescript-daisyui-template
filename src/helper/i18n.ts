import moment from "moment";

// Default (fallback) locale
const fallback = "en-us";

const locale = process.env.NEXT_PUBLIC_APP_LOCALE ?? fallback;

let translations: { [key: string]: any } = {};

// Load locale data
if (locale !== fallback) {
  require(`moment/locale/${locale}`);
  moment.locale(locale);
  translations = require(`../../locales/${locale}.json`);
}

/*
Translation function for a specific namespace
  @param namespace Namespace of the translations
  @return Translation function

Usage:
  const t = namespaceTranslation('common');

  console.log(t('Hello!'));
  // "Hello!" -> en-us.json
  // "Olá!" -> pt-br.json

  console.log(t('{} days', 10));
  // "10 days" -> en-us.json
  // "10 dias" -> pt-br.json
*/
const namespaceTranslation = (namespace: string) => {
  return (key: string, ...args: any[]): string => {
    if (locale === fallback) {
      return translationArgsReplace(key, ...args);
    }

    const nsTranslations = translations[namespace];
    const translation = nsTranslations ? nsTranslations[key] : null;
    if (!translation) {
      console.warn(
        `Translation not found: namespace="${namespace}" key="${key}"`,
      );
      return translationArgsReplace(key, ...args);
    }
    return translationArgsReplace(translation, ...args);
  };
};

const translationArgsReplace = (
  translation: string,
  ...args: any[]
): string => {
  let argsReversed = args.reverse();
  while (argsReversed.length) {
    translation = translation.replace(/{}/g, argsReversed.pop());
  }
  return translation;
};

export { locale, moment as momentLocale, namespaceTranslation };
