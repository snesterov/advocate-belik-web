(function() {
  'use strict';
  function run() {
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', 'Профессиональный опыт адвоката Белик Г.П. Юридическая помощь гражданам и бизнесу в Воронеже.');
    var og = document.querySelector('meta[property="og:description"]');
    if (og) og.setAttribute('content', 'Профессиональный опыт адвоката Белик Г.П. Юридическая помощь гражданам и бизнесу в Воронеже.');
    console.log('[advocate-belik] engine active');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();