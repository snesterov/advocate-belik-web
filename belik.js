/**
 * advocate-belik engine v3.2
 * High-Conversion Legal Suite: Dynamic Telegram Feed + Floating HUD + Express Quiz
 * GitHub: snesterov/advocate-belik-web
 */
(function() {
  'use strict';

  // 1. Meta-Tags & SEO Patch
  function patchMeta() {
    var cleanDesc = 'РћС„РёС†РёР°Р»СЊРЅС‹Р№ СЃР°Р№С‚ Р°РґРІРѕРєР°С‚Р° Р‘РµР»РёРє Р“Р°Р»РёРЅС‹ РџР°РІР»РѕРІРЅС‹. РљРІР°Р»РёС„РёС†РёСЂРѕРІР°РЅРЅР°СЏ СЋСЂРёРґРёС‡РµСЃРєР°СЏ РїРѕРјРѕС‰СЊ РіСЂР°Р¶РґР°РЅР°Рј Рё Р±РёР·РЅРµСЃСѓ РІ Р’РѕСЂРѕРЅРµР¶Рµ Рё Р Р¤. 20+ Р»РµС‚ РїСЂР°РєС‚РёРєРё. РђСЂР±РёС‚СЂР°Р¶РЅС‹Рµ Рё РіСЂР°Р¶РґР°РЅСЃРєРёРµ РґРµР»Р°.';
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', cleanDesc);
    var og = document.querySelector('meta[property="og:description"]');
    if (og) og.setAttribute('content', cleanDesc);
  }

  // 2. CSS Styles for Telegram Feed & Floating HUD
  function injectStyles() {
    var css = `
      /* --- TELEGRAM FEED SECTION --- */
      .belik-tg-section {
        background: linear-gradient(180deg, #0b132b 0%, #1c2541 100%);
        color: #f8fafc;
        padding: 70px 20px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        position: relative;
        overflow: hidden;
      }
      .belik-tg-container {
        max-width: 1180px;
        margin: 0 auto;
      }
      .belik-tg-header {
        text-align: center;
        margin-bottom: 45px;
      }
      .belik-tg-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(36, 161, 222, 0.15);
        border: 1px solid rgba(36, 161, 222, 0.4);
        color: #38bdf8;
        padding: 6px 16px;
        border-radius: 50px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-bottom: 14px;
      }
      .belik-tg-title {
        font-size: 32px;
        font-weight: 700;
        color: #ffffff;
        margin: 0 0 12px 0;
        line-height: 1.25;
      }
      .belik-tg-subtitle {
        font-size: 16px;
        color: #94a3b8;
        max-width: 680px;
        margin: 0 auto;
        line-height: 1.5;
      }
      .belik-tg-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 24px;
        margin-bottom: 40px;
      }
      .belik-tg-card {
        background: rgba(30, 41, 59, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        text-decoration: none;
        color: inherit;
        backdrop-filter: blur(8px);
      }
      .belik-tg-card:hover {
        transform: translateY(-5px);
        border-color: #c5a880;
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
      }
      .belik-tg-card-img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        background: #0f172a;
      }
      .belik-tg-card-body {
        padding: 22px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      .belik-tg-card-date {
        font-size: 12px;
        color: #c5a880;
        font-weight: 600;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .belik-tg-card-title {
        font-size: 17px;
        font-weight: 700;
        color: #ffffff;
        margin: 0 0 10px 0;
        line-height: 1.35;
      }
      .belik-tg-card-preview {
        font-size: 14px;
        color: #cbd5e1;
        line-height: 1.55;
        margin: 0 0 16px 0;
        flex-grow: 1;
      }
      .belik-tg-card-footer {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #38bdf8;
        font-size: 13px;
        font-weight: 600;
      }
      .belik-tg-banner {
        background: linear-gradient(135deg, rgba(197, 168, 128, 0.15) 0%, rgba(36, 161, 222, 0.15) 100%);
        border: 1px solid rgba(197, 168, 128, 0.35);
        border-radius: 20px;
        padding: 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
      }
      .belik-tg-banner-text h4 {
        margin: 0 0 6px 0;
        font-size: 20px;
        color: #ffffff;
      }
      .belik-tg-banner-text p {
        margin: 0;
        font-size: 14px;
        color: #94a3b8;
      }
      .belik-tg-banner-btn {
        background: #24A1DE;
        color: #ffffff !important;
        text-decoration: none;
        padding: 12px 26px;
        border-radius: 50px;
        font-weight: 700;
        font-size: 15px;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        transition: background 0.2s, transform 0.2s;
        box-shadow: 0 6px 20px rgba(36, 161, 222, 0.4);
      }
      .belik-tg-banner-btn:hover {
        background: #1b8ec7;
        transform: scale(1.03);
      }

      /* --- FLOATING HUD BUTTONS --- */
      .belik-hud {
        position: fixed;
        bottom: 24px;
        right: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        z-index: 999999;
      }
      .belik-hud-btn {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        text-decoration: none;
        position: relative;
      }
      .belik-hud-btn:hover {
        transform: scale(1.1);
      }
      .belik-hud-tg {
        background: #24A1DE;
        color: #fff;
      }
      .belik-hud-phone {
        background: #10b981;
        color: #fff;
      }
      .belik-hud-tooltip {
        position: absolute;
        right: 64px;
        background: rgba(15, 23, 42, 0.95);
        color: #f8fafc;
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transform: translateX(10px);
        transition: opacity 0.2s, transform 0.2s;
        box-shadow: 0 4px 14px rgba(0,0,0,0.3);
      }
      .belik-hud-btn:hover .belik-hud-tooltip {
        opacity: 1;
        transform: translateX(0);
      }
      .belik-pulse {
        position: absolute;
        top: 0;
        right: 0;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #22c55e;
        border: 2px solid #ffffff;
      }

      @media (max-width: 768px) {
        .belik-tg-title { font-size: 24px; }
        .belik-tg-section { padding: 45px 15px; }
        .belik-tg-banner { flex-direction: column; text-align: center; }
        .belik-hud { bottom: 16px; right: 16px; }
        .belik-hud-btn { width: 48px; height: 48px; }
      }
    `;
    var style = document.createElement('style');
    style.id = 'belik-custom-styles';
    style.innerHTML = css;
    document.head.appendChild(style);
  }

  // 3. Render Telegram Feed
  function initTelegramFeed() {
    fetch('posts.json?v=' + Date.now())
      .then(function(res) { return res.json(); })
      .then(function(posts) {
        if (!posts || !posts.length) return;
        renderFeed(posts);
      })
      .catch(function(e) {
        console.warn('Fallback: posts.json not reachable yet', e);
      });
  }

  function renderFeed(posts) {
    var section = document.createElement('section');
    section.className = 'belik-tg-section';
    section.id = 'belik-telegram-practice';

    var cardsHtml = posts.map(function(p) {
      var imgTag = p.photo ? '<img src="' + p.photo + '" class="belik-tg-card-img" alt="РљРµР№СЃ Р°РґРІРѕРєР°С‚Р°" loading="lazy" />' : '';
      return `
        <a href="${p.url}" target="_blank" rel="noopener" class="belik-tg-card">
          ${imgTag}
          <div class="belik-tg-card-body">
            <div class="belik-tg-card-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              ${p.date} вЂў Telegram
            </div>
            <h3 class="belik-tg-card-title">${p.title}</h3>
            <p class="belik-tg-card-preview">${p.preview}</p>
            <div class="belik-tg-card-footer">
              Р§РёС‚Р°С‚СЊ РІ Telegram
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </div>
        </a>
      `;
    }).join('');

    section.innerHTML = `
      <div class="belik-tg-container">
        <div class="belik-tg-header">
          <div class="belik-tg-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            Р–РёРІР°СЏ РїСЂР°РєС‚РёРєР° Р°РґРІРѕРєР°С‚Р°
          </div>
          <h2 class="belik-tg-title">РџСѓР±Р»РёРєР°С†РёРё Рё СЃСѓРґРµР±РЅС‹Рµ РєРµР№СЃС‹ РёР· Telegram</h2>
          <p class="belik-tg-subtitle">РЎРІРµР¶РёРµ СЂР°Р·Р±РѕСЂС‹ Р·Р°РєРѕРЅРѕРІ, РІС‹РґРµСЂР¶РєРё РёР· СЃСѓРґРµР±РЅС‹С… Р·Р°СЃРµРґР°РЅРёР№ Рё РїСЂР°РєС‚РёС‡РµСЃРєРёРµ СЃРѕРІРµС‚С‹ Р°РґРІРѕРєР°С‚Р° Р‘РµР»РёРє Р“.Рџ.</p>
        </div>
        <div class="belik-tg-grid">
          ${cardsHtml}
        </div>
        <div class="belik-tg-banner">
          <div class="belik-tg-banner-text">
            <h4>РћС„РёС†РёР°Р»СЊРЅС‹Р№ Telegram-РєР°РЅР°Р» Р°РґРІРѕРєР°С‚Р° Р‘РµР»РёРє</h4>
            <p>РџРѕРґРїРёС€РёС‚РµСЃСЊ, С‡С‚РѕР±С‹ РїРµСЂРІС‹РјРё РїРѕР»СѓС‡Р°С‚СЊ СЂР°Р·Р±РѕСЂС‹ РЅРѕРІС‹С… Р·Р°РєРѕРЅРѕРІ Рё СЃСѓРґРµР±РЅСѓСЋ РїСЂР°РєС‚РёРєСѓ.</p>
          </div>
          <a href="https://t.me/galinabelik_advocate" target="_blank" rel="noopener" class="belik-tg-banner-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            РџРѕРґРїРёСЃР°С‚СЊСЃСЏ РЅР° РєР°РЅР°Р»
          </a>
        </div>
      </div>
    `;

    // Inject before the contacts block or before footer
    var target = document.getElementById('rec693562383') || document.querySelector('.t-records') || document.body;
    if (target && target.parentNode && target !== document.body) {
      target.parentNode.insertBefore(section, target);
    } else {
      document.body.appendChild(section);
    }
  }

  // 4. Inject Floating Contact HUD
  function injectHUD() {
    var hud = document.createElement('div');
    hud.className = 'belik-hud';
    hud.innerHTML = `
      <a href="tel:+79202115444" class="belik-hud-btn belik-hud-phone" title="РџРѕР·РІРѕРЅРёС‚СЊ Р°РґРІРѕРєР°С‚Сѓ">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <span class="belik-hud-tooltip">РџРѕР·РІРѕРЅРёС‚СЊ: +7 (920) 211-54-44</span>
      </a>
      <a href="https://t.me/Belik_Galina_Pavlovna" target="_blank" rel="noopener" class="belik-hud-btn belik-hud-tg" title="РќР°РїРёСЃР°С‚СЊ РІ Telegram">
        <span class="belik-pulse"></span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
        <span class="belik-hud-tooltip">РќР°РїРёСЃР°С‚СЊ Р°РґРІРѕРєР°С‚Сѓ РІ Telegram</span>
      </a>
    `;
    document.body.appendChild(hud);
  }

  function init() {
    patchMeta();
    injectStyles();
    initTelegramFeed();
    injectHUD();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
