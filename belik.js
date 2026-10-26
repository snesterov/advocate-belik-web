/**
 * advocate-belik engine v3.0 (silent)
 * GitHub: snesterov/advocate-belik-web
 */
(function() {
  'use strict';

  function patch() {
    // 1. РњРµС‚Р°-С‚РµРіРё
    var cleanDesc = 'РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Р№ РѕРїС‹С‚ Р°РґРІРѕРєР°С‚Р° Р‘РµР»РёРє Р“.Рџ. РљРІР°Р»РёС„РёС†РёСЂРѕРІР°РЅРЅР°СЏ СЋСЂРёРґРёС‡РµСЃРєР°СЏ РїРѕРјРѕС‰СЊ РіСЂР°Р¶РґР°РЅР°Рј Рё Р±РёР·РЅРµСЃСѓ РІ Р’РѕСЂРѕРЅРµР¶Рµ. Р“СЂР°Р¶РґР°РЅСЃРєРёРµ Рё Р°СЂР±РёС‚СЂР°Р¶РЅС‹Рµ РґРµР»Р°.';
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', cleanDesc);
    var og = document.querySelector('meta[property="og:description"]');
    if (og) og.setAttribute('content', cleanDesc);

    // 2. Р?СЃРїСЂР°РІР»РµРЅРёРµ РѕРїРµС‡Р°С‚РѕРє РІ С‚РµРєСЃС‚Рµ, РµСЃР»Рё РµСЃС‚СЊ
    var walker = document.createTreeWalker(document.body || document.documentElement, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue) {
        if (node.nodeValue.indexOf('Р°РґРІР°РєР°С‚') !== -1) {
          node.nodeValue = node.nodeValue.replace(/Р°РґРІР°РєР°С‚/gi, 'Р°РґРІРѕРєР°С‚');
        }
        if (node.nodeValue.indexOf('Р»СѓС‡С€РµРіРѕ Р°РґРІРѕРєР°С‚Р°') !== -1) {
          node.nodeValue = node.nodeValue.replace(/Р»СѓС‡С€РµРіРѕ Р°РґРІРѕРєР°С‚Р°/gi, 'Р°РґРІРѕРєР°С‚Р°');
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