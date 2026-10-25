/**
 * advocate-belik engine v2.0
 * GitHub: snesterov/advocate-belik-web
 * Managed by Antigravity Digital Agency
 */
(function() {
  'use strict';

  function patchMeta() {
    var cleanDesc = 'Профессиональный опыт адвоката Белик Г.П. Квалифицированная юридическая помощь гражданам и бизнесу в Воронеже. Гражданские и арбитражные дела.';
    var metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = cleanDesc;

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = cleanDesc;

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && ogTitle.content.indexOf('лучш') !== -1) {
      ogTitle.content = 'Профессиональный опыт адвоката Белик Галины Павловны';
    }

    if (document.title.indexOf('лучш') !== -1) {
      document.title = 'Профессиональный опыт адвоката Белик Галины Павловны | Воронеж';
    }
  }

  function sanitizeNode(node) {
    if (node.nodeType === 3 && node.nodeValue) {
      var val = node.nodeValue;
      var replaced = false;

      if (val.indexOf('адвакат') !== -1 || val.indexOf('Адвакат') !== -1) {
        val = val.replace(/адвакат/g, 'адвокат').replace(/Адвакат/g, 'Адвокат');
        replaced = true;
      }
      if (/лучш(его|ий|ем|ему)\s+адвокат/i.test(val)) {
        val = val.replace(/лучш(его|ий|ем|ему)\s+адвокат/gi, 'адвокат');
        replaced = true;
      }
      if (replaced) {
        node.nodeValue = val;
      }
    } else if (node.nodeType === 1 && node.childNodes) {
      if (node.id === 'belik-trust-widget') return;
      for (var i = 0; i < node.childNodes.length; i++) {
        sanitizeNode(node.childNodes[i]);
      }
    }
  }

  function sanitizeDOM() {
    patchMeta();
    if (document.body) {
      sanitizeNode(document.body);
    }
  }

  function injectTrustWidget() {
    if (document.getElementById('belik-trust-widget')) return;

    var style = document.createElement('style');
    style.id = 'belik-trust-style';
    style.textContent = '#belik-trust-widget { position: fixed; bottom: 24px; right: 24px; z-index: 99999; font-family: Arial, sans-serif; box-shadow: 0 10px 30px rgba(0,0,0,0.18); border-radius: 14px; background: #ffffff; border: 1px solid #e1e8ed; padding: 14px 18px; max-width: 320px; display: flex; flex-direction: column; gap: 10px; transition: transform 0.3s ease, opacity 0.3s ease; animation: belikFadeIn 0.5s ease-out; } @keyframes belikFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } .belik-trust-header { display: flex; align-items: center; justify-content: space-between; font-size: 13px; font-weight: 700; color: #1f2d3d; border-bottom: 1px solid #f0f4f8; padding-bottom: 6px; } .belik-trust-close { cursor: pointer; color: #9aa5b1; font-size: 18px; border: none; background: transparent; line-height: 1; padding: 0 4px; } .belik-trust-close:hover { color: #1f2d3d; } .belik-trust-btn { display: flex; align-items: center; gap: 8px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 9px 12px; font-size: 12px; color: #243b53; text-decoration: none; font-weight: 600; transition: all 0.2s ease; } .belik-trust-btn:hover { background: #58b5ce; color: #ffffff; border-color: #58b5ce; transform: translateY(-1px); } @media (max-width: 600px) { #belik-trust-widget { bottom: 12px; right: 12px; left: 12px; max-width: none; padding: 10px 14px; } }';
    document.head.appendChild(style);

    var widget = document.createElement('div');
    widget.id = 'belik-trust-widget';
    widget.innerHTML = '<div class="belik-trust-header"><span>⚖️ Официальная проверка</span><button class="belik-trust-close" title="Закрыть" onclick="document.getElementById('belik-trust-widget').style.display='none'">&times;</button></div><a class="belik-trust-btn" href="https://advpalata.vrn.ru/registers/reestr_lawyers/" target="_blank" rel="noopener noreferrer"><span>🏛️</span><span>«Адвокат или нет?» Реестр палаты ВО</span></a><a class="belik-trust-btn" href="https://egrul.nalog.ru/" target="_blank" rel="noopener noreferrer"><span>🔍</span><span>Проверка контрагента (ФНС России)</span></a>';

    document.body.appendChild(widget);
  }

  function init() {
    sanitizeDOM();
    injectTrustWidget();

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
          sanitizeNode(mutation.addedNodes[i]);
        }
      });
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('[advocate-belik] active v2.0 (snesterov/advocate-belik-web)');
})();
