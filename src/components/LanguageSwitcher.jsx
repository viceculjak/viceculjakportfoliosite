import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', name: t('language.en'), flag: '🇺🇸' },
    { code: 'hr', name: t('language.hr'), flag: '🇭🇷' },
    { code: 'de', name: t('language.de'), flag: '🇩🇪' },
    { code: 'bg', name: t('language.bg'), flag: '🇧🇬' }
  ];

  return (
    <div className="language-switcher">
      <div className="language-switcher__current">
        <span className="language-switcher__flag">
          {languages.find(lang => lang.code === i18n.language)?.flag || '🇺🇸'}
        </span>
        <span className="language-switcher__name">
          {languages.find(lang => lang.code === i18n.language)?.name || 'English'}
        </span>
      </div>
      
      <div className="language-switcher__dropdown">
        {languages.map((language) => (
          <button
            key={language.code}
            className={`language-switcher__option ${
              i18n.language === language.code ? 'active' : ''
            }`}
            onClick={() => changeLanguage(language.code)}
          >
            <span className="language-switcher__flag">{language.flag}</span>
            <span className="language-switcher__name">{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
