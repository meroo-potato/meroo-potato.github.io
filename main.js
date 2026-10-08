'use strict';

/* ================================================================= */
/* [JS 1: TRANSLATION DICTIONARY] START                              */
/* Every visible string lives here. HTML uses data-i18n="key".       */
/* ================================================================= */
const I18N = {
  ar: {
    doc_title: 'عمر هاني',
    welcome_prefix: 'أهلا بيك في موقعي',
    welcome_suffix: '',

    sec_about: 'عني',
    sec_apps: 'تطبيقات',
    sec_vault: 'الخزنة السرية',

    q1_title: 'انا مين؟',
    q1_text: 'أنا عمر. طالب في مدرسة محمد كريم لغات، في الصف الأول الثانوي. عيد ميلادي 26/7.',
    q2_title: 'بعرف اعمل ايه؟',
    q2_text: 'أنا بحب البرمجة وتصميم المواقع. اتعلمت Front-end وساعات بستخدم الـ AI في شغلي. بعرف أتكلم إنجليزي كويس وفرنساوي مش أوي. مهتم بدراستي فهتلاقيني على طول من أوائل المدرسة، وبسعى دايماً إني أطور من نفسي.',
    q3_title: 'اكونتاتي',
    q4_title: 'صحاب',
    friends_text: 'ابعتلي خاص لو عايز احط صورتك',

    settings_title: 'الإعدادات',
    set_lang: '🌐 اختار اللغة',
    set_theme: '🎨 ألوان الويبسايت',
    set_refresh: '🔄 اعادة تحميل',
    set_reset: '🗑️ مسح بيانات التطبيقات',
    warn_title: '⚠️ تحذير',
    warn_text: '⚠️ تحذير: الضغط على نعم سيمسح جميع بيانات تقدمك في التطبيقات والإجراءات المحفوظة في الموقع.',
    warn_yes: 'نعم، إمسح البيانات',
    warn_no: 'إلغاء',

    theme_random: 'عشوائي',
    egp_label: 'رصيدك',
    egp_unit: 'جنيه',

    app_find: 'دور على الإيموجي',
    app_maths: 'رياضيات',
    app_match: 'ماتش 2',
    app_board: 'سبورة',
    app_block: 'بلوك بلاست',
    app_xo: 'إكس أو',
    app_toktok: 'محاكي التوكتوك',
    app_moto: 'موتو جامب',
    app_monofia: 'محاكي المنوفية',

    vault_hint: 'اكتب الكود السري هنا.',
    vault_placeholder: 'اكتب الكود...',
    vault_btn: 'دخول',
    vault_ok_egp: 'تمام! اتضاف {amount} جنيه لرصيدك.',
    vault_ok_theme: 'اتفتح ثيم سري جديد! جربه من الإعدادات.',
    vault_used: 'الكود ده اتستخدم قبل كده.',
    vault_bad: 'كود غلط. جرب تاني.',
    toast_reset: 'تم مسح بيانات التطبيقات',

    aria_lang: 'تغيير اللغة',
    aria_theme: 'ثيم عشوائي',
    aria_settings: 'الإعدادات',
    aria_close: 'إغلاق',
    aria_warp_about: 'اذهب إلى عني',
    aria_warp_apps: 'اذهب إلى التطبيقات',
    aria_warp_vault: 'اذهب إلى الخزنة السرية'
  },

  en: {
    doc_title: 'Omar Hany',
    welcome_prefix: 'Welcome to my',
    welcome_suffix: 'website',

    sec_about: 'About Me',
    sec_apps: 'Apps',
    sec_vault: 'Secret Vault',

    q1_title: 'WHO AM I?',
    q1_text: "I'm Omar. I'm a student at M.K.L.S, in Senior 1. My birthday is 26/7, and I support Palestine 🇵🇸.",
    q2_title: 'WHAT DO I EVEN DO?',
    q2_text: "I'm into programming and building websites. I know front-end pretty well and I do use AI for a LITTLE help. I speak English fluently and a little French. I study a lot so you'll always see me with high marks. Outside of class I play football as a goalkeeper. Just trying to be a better version of myself.",
    q3_title: 'ACCOUNTS',
    q4_title: 'FRIENDS',
    friends_text: 'dm if you want me to add your picture',

    settings_title: 'Settings',
    set_lang: '🌐 Language',
    set_theme: '🎨 Website Themes',
    set_refresh: '🔄 Refresh Page',
    set_reset: '🗑️ Reset All Progress',
    warn_title: '⚠️ Warning',
    warn_text: '⚠️ Warning: clicking yes will Delete all your apps progress and saved action in the website.',
    warn_yes: 'Yes, Reset Progress',
    warn_no: 'Cancel',

    theme_random: 'Random',
    egp_label: 'Balance',
    egp_unit: 'EGP',

    app_find: 'Find the Emojis',
    app_maths: 'Maths',
    app_match: 'Match 2',
    app_board: 'Whiteboard',
    app_block: 'BlockBlast',
    app_xo: 'Tic Tac Toe',
    app_toktok: 'Toktok Simulator',
    app_moto: 'Moto Jump',
    app_monofia: 'Monofia Simulator',

    vault_hint: 'Type a secret code below.',
    vault_placeholder: 'Enter code...',
    vault_btn: 'Enter',
    vault_ok_egp: 'Nice! {amount} EGP added to your balance.',
    vault_ok_theme: 'New secret theme unlocked! Find it in Settings.',
    vault_used: 'You already used this code.',
    vault_bad: 'Wrong code. Try again.',
    toast_reset: 'App progress cleared',

    aria_lang: 'Switch language',
    aria_theme: 'Random theme',
    aria_settings: 'Settings',
    aria_close: 'Close',
    aria_warp_about: 'Go to About Me',
    aria_warp_apps: 'Go to Apps',
    aria_warp_vault: 'Go to Secret Vault'
  }
};
/* [JS 1: TRANSLATION DICTIONARY] END */


/* ================================================================= */
/* [JS 2: DYNAMIC ADJECTIVES] START                                  */
/* Words that rotate inside "Welcome to my ___ website".             */
/* ================================================================= */
const ADJECTIVES = {
  ar: ["الجامد", "المميز", "الفشيخ", "الفخم", "الرهيب", "الأسطوري", "الفاجر", "الخيالي", "العظيم", "الي بينور في الضلمه", "المبهر", "المذهل", "الخارق", "الساحر", "المثالي", "الحلوف", "الاستثنائي", "الملفت", "السوبر", "الملحمي", "الحلو", "الجميل", "الأنيق", "التوب و الباقي كنتلوب", "النظيف", "الجذاب", "الراقي", "الخلاب", "الديناميكي", "الماشي على نظام الطيبات", "المبهر", "الأول", "الكبير", "المرعب"],
  en: ["Good", "Awesome", "Great", "Fabulous", "Amazing", "Outstanding", "Excellent", "Fantastic", "Wonderful", "Brilliant", "Superb", "Splendid", "Magnificent", "Stellar", "Phenomenal", "Incredible", "Spectacular", "Marvelous", "Perfect", "Terrific", "Exceptional", "Impressive", "Remarkable", "Super", "Epic", "Nice", "Lovely", "Delightful", "Grand", "Glorious", "Radiant", "Divine", "Beautiful", "Aesthetic", "Classy", "Elite", "Prime", "Top-notch", "First-rate", "Solid", "Strong", "Powerful", "Quality", "Premium", "Supreme", "Immaculate", "Flawless", "Spotless", "Gorgeous", "Pretty", "Charming", "Elegant", "Graceful", "Polished", "Refined", "Stunning", "Breathtaking", "Joyful", "Blissful", "Thriving", "Vibrant", "Lively", "Dynamic", "Warm", "Kind", "Bright", "Smart", "Clever", "Calm", "Peaceful", "Serene", "Happy", "Cheerful", "Joyous", "Luxurious", "Majestic", "Unique", "Special", "Rare", "Valuable", "Precious", "Priceless", "Fresh", "New", "Modern", "Classic", "Timeless", "Eternal", "Pure", "Honest", "Sincere", "Friendly", "Welcoming", "Creative", "Artistic", "Inspired", "Successful", "Victorious", "Optimistic", "Uplifting", "Admirable", "Dignified", "Promising", "Valiant", "Heroic", "Gallant", "Stylish", "Fashionable", "Glowing", "Shining", "Magical", "Sublime"]
};
/* [JS 2: DYNAMIC ADJECTIVES] END */


/* ================================================================= */
/* [JS 3: THEMES] START                                              */
/* To add a theme: copy one block, change the values.                */
/* avatar: optional image path (e.g. 'img/omar-ocean.jpg').          */
/*   If empty or the file is missing, a generated "OH" avatar is     */
/*   used instead.                                                   */
/* locked: true = hidden until unlocked with a Secret Vault code.    */
/* ================================================================= */
const THEMES = [
  {
    id: 'ocean',
    name: { ar: 'المحيط', en: 'Ocean' },
    accent: '#4facfe', glow: 'rgba(79,172,254,0.45)', base: '#0f2027',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 45%, #2c5364 100%)',
    c1: '#4facfe', c2: '#00f2fe', avatar: ''
  },
  {
    id: 'sunset',
    name: { ar: 'الغروب', en: 'Sunset' },
    accent: '#ff7a59', glow: 'rgba(255,122,89,0.45)', base: '#2d1b3d',
    gradient: 'linear-gradient(135deg, #2d1b3d 0%, #8a3b4f 55%, #e8744f 100%)',
    c1: '#ff7a59', c2: '#ffc371', avatar: ''
  },
  {
    id: 'forest',
    name: { ar: 'الغابة', en: 'Forest' },
    accent: '#3ddc97', glow: 'rgba(61,220,151,0.42)', base: '#06201a',
    gradient: 'linear-gradient(135deg, #06201a 0%, #0f4a3a 50%, #1d7a5f 100%)',
    c1: '#3ddc97', c2: '#a8e063', avatar: ''
  },
  {
    id: 'royal',
    name: { ar: 'الملكي', en: 'Royal' },
    accent: '#b388ff', glow: 'rgba(179,136,255,0.45)', base: '#150a2e',
    gradient: 'linear-gradient(135deg, #150a2e 0%, #3b1e78 50%, #6a3fb5 100%)',
    c1: '#b388ff', c2: '#7c4dff', avatar: ''
  },
  {
    id: 'rose',
    name: { ar: 'الوردي', en: 'Rose' },
    accent: '#ff6fa5', glow: 'rgba(255,111,165,0.45)', base: '#2a0a1c',
    gradient: 'linear-gradient(135deg, #2a0a1c 0%, #7a1f4d 55%, #c2477f 100%)',
    c1: '#ff6fa5', c2: '#ffb3d1', avatar: ''
  },
  {
    id: 'neon',
    name: { ar: 'نيون (سري)', en: 'Neon (Secret)' },
    accent: '#39ff14', glow: 'rgba(57,255,20,0.45)', base: '#05050f',
    gradient: 'linear-gradient(135deg, #02020a 0%, #0a0a2a 50%, #2a0044 100%)',
    c1: '#39ff14', c2: '#00e5ff', avatar: '', locked: true
  }
];
const DEFAULT_THEME_ID = 'ocean';
const THEME_COOLDOWN_MS = 1500;
const WORD_INTERVAL_MS = 2500;
/* [JS 3: THEMES] END */


/* ================================================================= */
/* [JS 4: SECRET CODES] START                                        */
/* Add new codes here. Codes are matched in UPPERCASE.               */
/* ================================================================= */
const SECRET_CODES = {
  EGP100: { type: 'egp', amount: 100 },
  THEME:  { type: 'theme', themeId: 'neon' }
};
/* [JS 4: SECRET CODES] END */


/* ================================================================= */
/* [JS 5: STATE & STORAGE HELPERS] START                             */
/* ================================================================= */
const state = {
  lang: 'ar',
  themeId: DEFAULT_THEME_ID,
  unlocked: [],
  egp: 0,
  themeCooling: false,
  wordIndex: 0,
  wordTimer: null,
  activeBg: 'a'
};

const store = {
  get(key, fallback = null) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : v; }
    catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage blocked */ }
  },
  clear() {
    try { localStorage.clear(); } catch (e) { /* storage blocked */ }
  }
};

function readJSON(key, fallback) {
  try { return JSON.parse(store.get(key, '')) ?? fallback; }
  catch (e) { return fallback; }
}

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const t = key => (I18N[state.lang] && I18N[state.lang][key] !== undefined) ? I18N[state.lang][key] : key;

let toastTimer = null;
function showToast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}
/* [JS 5: STATE & STORAGE HELPERS] END */


/* ================================================================= */
/* [JS 6: LANGUAGE (i18n + RTL/LTR)] START                           */
/* ================================================================= */
function applyLanguage(lang, save = true) {
  if (!I18N[lang]) lang = 'ar';
  state.lang = lang;

  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = t('doc_title');

  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });

  $$('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));

  renderThemeCards();
  renderEGP();
  startWordRotation();

  if (save) store.set('lang', lang);
}

function toggleLanguage() {
  applyLanguage(state.lang === 'ar' ? 'en' : 'ar');
}
/* [JS 6: LANGUAGE (i18n + RTL/LTR)] END */


/* ================================================================= */
/* [JS 7: DYNAMIC WELCOME WORD] START                                */
/* Fades the word out, swaps it, fades it in. Layout space is        */
/* reserved in CSS so nothing jumps.                                 */
/* ================================================================= */
function startWordRotation() {
  const el = $('#dynamic-word');
  const list = ADJECTIVES[state.lang];
  clearInterval(state.wordTimer);

  state.wordIndex = 0;
  el.classList.remove('is-out');
  el.textContent = list[0];

  state.wordTimer = setInterval(() => {
    el.classList.add('is-out');
    setTimeout(() => {
      state.wordIndex = (state.wordIndex + 1) % list.length;
      el.textContent = list[state.wordIndex];
      el.classList.remove('is-out');
    }, 300);
  }, WORD_INTERVAL_MS);
}
/* [JS 7: DYNAMIC WELCOME WORD] END */


/* ================================================================= */
/* [JS 8: THEMES (apply / random / cards / avatar)] START            */
/* ================================================================= */
function getTheme(id) {
  return THEMES.find(th => th.id === id) || THEMES[0];
}

function availableThemes() {
  return THEMES.filter(th => !th.locked || state.unlocked.includes(th.id));
}

/* Builds a fallback avatar (SVG data URI) in the theme colours */
function buildAvatar(theme) {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="' + theme.c1 + '"/>' +
    '<stop offset="1" stop-color="' + theme.c2 + '"/></linearGradient></defs>' +
    '<rect width="200" height="200" fill="url(#g)"/>' +
    '<text x="100" y="124" text-anchor="middle" font-family="Arial, sans-serif" ' +
    'font-size="80" font-weight="800" fill="#0b0f1a">OH</text></svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function setAvatar(theme) {
  const img = $('#profile-img');
  const fallback = buildAvatar(theme);
  if (!theme.avatar) { img.src = fallback; return; }
  const probe = new Image();
  probe.onload = () => { img.src = theme.avatar; };
  probe.onerror = () => { img.src = fallback; };
  probe.src = theme.avatar;
}

function crossfadeBackground(gradient) {
  const next = state.activeBg === 'a' ? 'b' : 'a';
  const nextEl = $('#bg-' + next);
  const currentEl = $('#bg-' + state.activeBg);
  nextEl.style.background = gradient;
  nextEl.classList.add('active');
  currentEl.classList.remove('active');
  state.activeBg = next;
}

function applyTheme(id, save = true) {
  const theme = getTheme(id);
  state.themeId = theme.id;

  const root = document.documentElement.style;
  root.setProperty('--accent-color', theme.accent);
  root.setProperty('--accent-glow', theme.glow);
  root.setProperty('--bg-gradient', theme.gradient);
  root.setProperty('--text-color', '#ffffff');

  crossfadeBackground(theme.gradient);
  setAvatar(theme);
  $('#meta-theme-color').setAttribute('content', theme.base);

  $$('.theme-card').forEach(card => card.classList.toggle('active', card.dataset.theme === theme.id));

  if (save) store.set('theme_id', theme.id);
}

/* Random theme with 1.5s cooldown (shared by navbar + drawer) */
function randomTheme() {
  if (state.themeCooling) return;
  state.themeCooling = true;
  const btn = $('#btn-theme');
  btn.classList.add('cooling');

  const pool = availableThemes().filter(th => th.id !== state.themeId);
  const pick = pool[Math.floor(Math.random() * pool.length)];
  if (pick) applyTheme(pick.id);

  setTimeout(() => {
    state.themeCooling = false;
    btn.classList.remove('cooling');
  }, THEME_COOLDOWN_MS);
}

/* Builds the theme cards inside the settings drawer */
function renderThemeCards() {
  const list = $('#theme-list');
  list.innerHTML = '';

  availableThemes().forEach(theme => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'theme-card' + (theme.id === state.themeId ? ' active' : '');
    card.dataset.theme = theme.id;
    card.innerHTML =
      '<span class="theme-dots">' +
      '<span class="theme-dot" style="background:' + theme.c1 + '"></span>' +
      '<span class="theme-dot" style="background:' + theme.c2 + '"></span></span>' +
      '<span>' + theme.name[state.lang] + '</span>';
    card.addEventListener('click', () => applyTheme(theme.id));
    list.appendChild(card);
  });

  /* Random theme card: black square with a question mark */
  const rand = document.createElement('button');
  rand.type = 'button';
  rand.className = 'theme-card';
  rand.innerHTML = '<span class="theme-random-box">?</span><span>' + t('theme_random') + '</span>';
  rand.addEventListener('click', randomTheme);
  list.appendChild(rand);
}
/* [JS 8: THEMES (apply / random / cards / avatar)] END */


/* ================================================================= */
/* [JS 9: FOLD / UNFOLD + SECTION WARP] START                        */
/* Anything with [data-fold-toggle] toggles its closest .foldable.   */
/* ================================================================= */
function setFold(box, open) {
  box.classList.toggle('is-open', open);
  const trigger = $('[data-fold-toggle]', box);
  if (trigger) trigger.setAttribute('aria-expanded', String(open));

  /* Settings drawer behaves like an exclusive accordion */
  if (open && box.classList.contains('acc')) {
    $$('.acc.is-open', box.parentElement).forEach(other => {
      if (other !== box) setFold(other, false);
    });
  }
}

function initFolding() {
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-fold-toggle]');
    if (!trigger) return;
    const box = trigger.closest('.foldable');
    if (box) setFold(box, !box.classList.contains('is-open'));
  });
}

function warpTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const wasClosed = !section.classList.contains('is-open');
  if (wasClosed) setFold(section, true);
  /* wait for the unfold animation so the scroll lands correctly */
  setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), wasClosed ? 380 : 0);
}

function initWarpButtons() {
  $$('[data-warp]').forEach(btn => {
    btn.addEventListener('click', () => warpTo(btn.dataset.warp));
  });
}
/* [JS 9: FOLD / UNFOLD + SECTION WARP] END */


/* ================================================================= */
/* [JS 10: SETTINGS DRAWER + CONFIRM MODAL] START                    */
/* ================================================================= */
function openDrawer() {
  $('#drawer').classList.add('is-open');
  $('#drawer').setAttribute('aria-hidden', 'false');
  $('#drawer-backdrop').classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function closeDrawer() {
  $('#drawer').classList.remove('is-open');
  $('#drawer').setAttribute('aria-hidden', 'true');
  $('#drawer-backdrop').classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

function openModal() {
  $('#confirm-modal').classList.add('is-open');
  $('#confirm-modal').setAttribute('aria-hidden', 'false');
}

function closeModal() {
  $('#confirm-modal').classList.remove('is-open');
  $('#confirm-modal').setAttribute('aria-hidden', 'true');
}

/* Wipes ALL saved progress, then re-saves language + theme choice */
function resetAllProgress() {
  store.clear();
  state.unlocked = [];
  state.egp = 0;

  if (getTheme(state.themeId).locked) applyTheme(DEFAULT_THEME_ID, false);
  store.set('lang', state.lang);
  store.set('theme_id', state.themeId);

  renderEGP();
  renderThemeCards();
  $('#vault-feedback').textContent = '';
  $('#vault-input').value = '';

  closeModal();
  showToast(t('toast_reset'));
}

function initDrawer() {
  $('#btn-settings').addEventListener('click', openDrawer);
  $('#drawer-close').addEventListener('click', closeDrawer);
  $('#drawer-backdrop').addEventListener('click', closeDrawer);

  $$('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  $('#btn-refresh').addEventListener('click', () => location.reload());
  $('#btn-reset').addEventListener('click', openModal);
  $('#modal-confirm').addEventListener('click', resetAllProgress);
  $('#modal-cancel').addEventListener('click', closeModal);
  $('#confirm-modal').addEventListener('click', e => {
    if (e.target.id === 'confirm-modal') closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeModal();
    closeDrawer();
  });
}
/* [JS 10: SETTINGS DRAWER + CONFIRM MODAL] END */


/* ================================================================= */
/* [JS 11: EGP CURRENCY] START                                       */
/* updateEGP(amount) ADDS amount (use a negative number to spend).  */
/* Games can call it from anywhere:  updateEGP(5.5)                  */
/* ================================================================= */
function formatEGP(value) {
  const locale = state.lang === 'ar' ? 'ar-EG' : 'en-US';
  return new Intl.NumberFormat(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

function renderEGP(animate = false) {
  $('#egp-amount').textContent = formatEGP(state.egp);
  if (animate) {
    const wrap = $('.egp-value');
    wrap.classList.remove('bump');
    void wrap.offsetWidth;            /* restart animation */
    wrap.classList.add('bump');
  }
}

function getEGP() {
  const saved = parseFloat(store.get('egp_balance', '0'));
  return Number.isFinite(saved) ? saved : 0;
}

function updateEGP(amount) {
  const delta = Number(amount);
  if (!Number.isFinite(delta)) return state.egp;
  const next = Math.round((state.egp + delta) * 100) / 100;
  state.egp = Math.max(0, next);
  store.set('egp_balance', String(state.egp));
  renderEGP(true);
  return state.egp;
}

window.updateEGP = updateEGP;
window.getEGP = () => state.egp;
/* [JS 11: EGP CURRENCY] END */


/* ================================================================= */
/* [JS 12: SECRET VAULT] START                                       */
/* ================================================================= */
function vaultMessage(kind, key, vars) {
  const box = $('#vault-feedback');
  let text = t(key);
  if (vars) Object.keys(vars).forEach(k => { text = text.replace('{' + k + '}', formatEGP(vars[k])); });
  box.textContent = text;
  box.className = 'vault-feedback ' + kind;
}

function redeemCode() {
  const input = $('#vault-input');
  const code = input.value.trim().toUpperCase();
  if (!code) return;

  const def = SECRET_CODES[code];
  if (!def) { vaultMessage('err', 'vault_bad'); return; }

  const used = readJSON('used_codes', []);
  if (used.includes(code)) { vaultMessage('err', 'vault_used'); return; }

  if (def.type === 'egp') {
    updateEGP(def.amount);
    vaultMessage('ok', 'vault_ok_egp', { amount: def.amount });
  } else if (def.type === 'theme') {
    if (!state.unlocked.includes(def.themeId)) state.unlocked.push(def.themeId);
    store.set('unlocked_themes', JSON.stringify(state.unlocked));
    renderThemeCards();
    applyTheme(def.themeId);
    vaultMessage('ok', 'vault_ok_theme');
  }

  used.push(code);
  store.set('used_codes', JSON.stringify(used));
  input.value = '';
}

function initVault() {
  $('#vault-submit').addEventListener('click', redeemCode);
  $('#vault-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') redeemCode();
  });
}
/* [JS 12: SECRET VAULT] END */


/* ================================================================= */
/* [JS 13: INIT] START                                               */
/* ================================================================= */
function init() {
  state.lang = store.get('lang', 'ar');
  state.unlocked = readJSON('unlocked_themes', []);
  state.egp = getEGP();

  const savedTheme = store.get('theme_id', DEFAULT_THEME_ID);
  state.themeId = availableThemes().some(th => th.id === savedTheme) ? savedTheme : DEFAULT_THEME_ID;

  initFolding();
  initWarpButtons();
  initDrawer();
  initVault();

  $('#btn-lang').addEventListener('click', toggleLanguage);
  $('#btn-theme').addEventListener('click', randomTheme);

  applyLanguage(state.lang, false);
  applyTheme(state.themeId, false);
}

document.addEventListener('DOMContentLoaded', init);
/* [JS 13: INIT] END */
