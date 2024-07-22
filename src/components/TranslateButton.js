import React, { useEffect } from 'react';

function TranslateButton() {
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
  }, []);

  const handleTranslate = (lang) => {
    const googleTranslateElement = document.querySelector('.goog-te-combo');
    if (googleTranslateElement) {
      googleTranslateElement.value = lang;
      googleTranslateElement.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="language-toggle">
      <button onClick={() => handleTranslate('en')}>English</button>
      <button onClick={() => handleTranslate('fr')}>Français</button>
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </div>
  );
}

export default TranslateButton;
