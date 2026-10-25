/**
 * advocate-belik engine v3.0 (silent)
 * GitHub: snesterov/advocate-belik-web
 */
(function() {
  'use strict';

  function patch() {
    // 1. Мета-теги
    var cleanDesc = 'Профессиональный опыт адвоката Белик Г.П. Квалифицированная юридическая помощь гражданам и бизнесу в Воронеже. Гражданские и арбитражные дела.';
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', cleanDesc);
    var og = document.querySelector('meta[property="og:description"]');
    if (og) og.setAttribute('content', cleanDesc);

    // 2. Исправление опечаток в тексте, если есть
    var walker = document.createTreeWalker(document.body || document.documentElement, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue) {
        if (node.nodeValue.indexOf('адвакат') !== -1) {
          node.nodeValue = node.nodeValue.replace(/адвакат/gi, 'адвокат');
        }
        if (node.nodeValue.indexOf('лучшего адвоката') !== -1) {
          node.nodeValue = node.nodeValue.replace(/лучшего адвоката/gi, 'адвоката');
        }
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patch);
  } else {
    patch();
  }
})();
