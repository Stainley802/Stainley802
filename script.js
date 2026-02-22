// ===== 星座資料 =====
const ZODIACS = [
  {
    symbol: '♈', name: '牡羊座', en: 'Aries',
    dates: '3/21 – 4/19', element: 'fire', elementLabel: '火象',
    ruler: '火星', lucky: '紅色', number: 7,
    fortunes: [
      { text: '今天你的行動力特別旺盛，適合主動出擊，無論是事業上的計畫還是感情上的表白，都能獲得正面回應。財運方面有意外之財的跡象，但要注意衝動消費。', advice: '保持熱情，但三思而後行，避免與人爭執。' },
      { text: '工作上遇到挑戰，但你天生的競爭精神會讓你脫穎而出。感情上與伴侶可能有小磨擦，需要多一點耐心。下午有貴人相助的機會。', advice: '適時放慢腳步，傾聽對方的想法。' },
      { text: '創意思維爆發的一天，適合發想新計劃或開展副業。人際關係順暢，社交活動帶來好機遇。健康方面注意頭部與眼睛的疲勞。', advice: '把握靈感，立即記錄下你的想法。' },
    ]
  },
  {
    symbol: '♉', name: '金牛座', en: 'Taurus',
    dates: '4/20 – 5/20', element: 'earth', elementLabel: '土象',
    ruler: '金星', lucky: '綠色', number: 6,
    fortunes: [
      { text: '財運穩健上升，適合進行長期投資規劃。感情方面，單身者可能在熟悉的朋友圈中遇到心儀對象，已有伴侶者關係更加穩固。', advice: '享受當下的美好，不必急於改變現狀。' },
      { text: '今天的運勢以穩定為主調，工作按部就班地進行，能獲得上司的認可。下午有一頓美食相關的社交活動，能帶來愉快心情。', advice: '不要貪心，見好就收是今日最佳策略。' },
      { text: '家庭運勢上揚，與家人的溝通更順暢。財運方面要避免不必要的支出。藝術創作或手工活動能帶來靈感與成就感。', advice: '花時間佈置居家環境，舒適的空間帶來好運。' },
    ]
  },
  {
    symbol: '♊', name: '雙子座', en: 'Gemini',
    dates: '5/21 – 6/20', element: 'air', elementLabel: '風象',
    ruler: '水星', lucky: '黃色', number: 5,
    fortunes: [
      { text: '今天溝通能力達到頂峰，口才極佳，適合商務談判、面試或公開演講。思緒靈活多變，同時處理多個任務遊刃有餘。', advice: '把握今天多說話，你的想法會受到歡迎。' },
      { text: '社交運旺，新認識的人中藏有未來的合作夥伴。學習新技能的好時機，尤其是語言或數位技術。感情上需要更多深度交流。', advice: '停下腳步，真正傾聽身邊人說的話。' },
      { text: '創意湧現，適合寫作、設計或任何需要發揮想象力的工作。旅遊或短途出行能帶來意外驚喜。注意資訊過載，做好取捨。', advice: '選擇一件事好好完成，而不是同時做十件事。' },
    ]
  },
  {
    symbol: '♋', name: '巨蟹座', en: 'Cancer',
    dates: '6/21 – 7/22', element: 'water', elementLabel: '水象',
    ruler: '月亮', lucky: '銀色', number: 2,
    fortunes: [
      { text: '直覺力特別強，今天的第六感請務必相信。家庭關係溫馨，是與親人共享美食的好時光。財運方面要守住存款，避免衝動消費。', advice: '相信你的直覺，它今天不會讓你失望。' },
      { text: '情感細膩的你今天特別容易受到環境影響，盡量保持正向的社交圈。工作上你的細心與責任感讓人印象深刻，升遷在望。', advice: '照顧好自己的情緒，不必承擔所有人的感受。' },
      { text: '創作靈感來源於過去的記憶與情感，適合整理日記或相片。感情運極佳，舊情人可能重新聯絡，需要謹慎面對。', advice: '給自己一些獨處的時間，內省帶來智慧。' },
    ]
  },
  {
    symbol: '♌', name: '獅子座', en: 'Leo',
    dates: '7/23 – 8/22', element: 'fire', elementLabel: '火象',
    ruler: '太陽', lucky: '金色', number: 1,
    fortunes: [
      { text: '今天全場目光都在你身上！自信心爆棚，適合在公眾場合展現才華。事業上有突破性進展，把握主動權就能成功。感情運也大放異彩。', advice: '大膽展現自己，你的光芒無法被遮蔽。' },
      { text: '領導力備受肯定，團隊中的衝突需要你出面調解。財運方面可考慮投資文化或娛樂相關產業。愛情上要注意驕傲可能傷害伴侶。', advice: '讚美對方，讓愛的人也感受到你的溫暖。' },
      { text: '創作力與表現欲雙雙攀升，任何舞台都是你的天下。朋友尋求你的建議，你的判斷值得信賴。注意不要過度消耗體力。', advice: '適當休息，保存能量迎接更大的舞台。' },
    ]
  },
  {
    symbol: '♍', name: '處女座', en: 'Virgo',
    dates: '8/23 – 9/22', element: 'earth', elementLabel: '土象',
    ruler: '水星', lucky: '米白色', number: 6,
    fortunes: [
      { text: '分析思維達到頂點，今天適合處理細節繁瑣的工作，你的眼光獨到能發現別人忽略的錯誤。健康運佳，可開始新的養生計劃。', advice: '放下完美主義，80分的行動勝過100分的計劃。' },
      { text: '工作效率超群，計劃中的項目能提前完成。感情上建議多表達內心感受，你的內斂有時讓伴侶感到距離。財運穩健。', advice: '說出心裡話，愛情不需要猜謎。' },
      { text: '今天適合進行健康檢查或整理生活環境。學習與進修方面有好消息。注意不要過度批評他人，以免引起摩擦。', advice: '把挑剔的眼光先用在自我提升上。' },
    ]
  },
  {
    symbol: '♎', name: '天秤座', en: 'Libra',
    dates: '9/23 – 10/22', element: 'air', elementLabel: '風象',
    ruler: '金星', lucky: '粉色', number: 7,
    fortunes: [
      { text: '人際關係和諧，是化解矛盾的最佳時機。美感天賦特別突出，藝術或時尚相關事業蓬勃發展。感情上舊緣復燃或新感情萌芽。', advice: '做一個決定，優柔寡斷今天要畫上句號。' },
      { text: '合作運極強，與他人的協作能帶來意想不到的成果。社交場合中你的魅力傾倒眾生，貴人運旺盛。', advice: '相信自己的品味，你的選擇是正確的。' },
      { text: '今天的重點在於平衡──工作與生活，理性與感性。法律或合約相關事務需要謹慎審查，避免有失公允的條款。', advice: '公平對待每個人，包括對自己也要公平。' },
    ]
  },
  {
    symbol: '♏', name: '天蠍座', en: 'Scorpio',
    dates: '10/23 – 11/21', element: 'water', elementLabel: '水象',
    ruler: '冥王星', lucky: '深紅色', number: 8,
    fortunes: [
      { text: '洞察力無人能及，今天能看穿事物的本質與人心。適合進行深度研究或心理分析工作。感情上強烈的吸引力讓對方難以抗拒。', advice: '相信直覺，但也給對方解釋的機會。' },
      { text: '財運強勁，投資或談判上的嗅覺特別靈敏。舊秘密可能浮出水面，坦然面對反而能帶來解脫。', advice: '放下控制欲，讓事情自然發展。' },
      { text: '今天適合處理隱秘或幕後的工作，不需要站在台前也能掌握局勢。感情深度增加，與伴侶之間的羈絆更加堅固。', advice: '轉化嫉妒為動力，你的潛能無可限量。' },
    ]
  },
  {
    symbol: '♐', name: '射手座', en: 'Sagittarius',
    dates: '11/22 – 12/21', element: 'fire', elementLabel: '火象',
    ruler: '木星', lucky: '紫色', number: 9,
    fortunes: [
      { text: '冒險精神使你今天充滿活力！旅遊、學習或開拓新市場都有好兆頭。樂觀的態度感染身邊的人，貴人自然而來。', advice: '帶著好奇心去探索，答案就在旅途中。' },
      { text: '哲學思考與遠大願景讓你的發言深具影響力。外國人緣特佳，跨國合作帶來豐厚機遇。感情上不拘小節，但記得關注細節。', advice: '把夢想縮小成今天可以做到的第一步。' },
      { text: '幽默感讓你成為今天最受歡迎的人。出版、教育或媒體相關事業有突破。冒險之旅中意外發現珍貴的友誼。', advice: '說話前先想清楚，誠實也要顧及他人感受。' },
    ]
  },
  {
    symbol: '♑', name: '摩羯座', en: 'Capricorn',
    dates: '12/22 – 1/19', element: 'earth', elementLabel: '土象',
    ruler: '土星', lucky: '黑色', number: 10,
    fortunes: [
      { text: '事業運達到頂峰，多年的努力終於得到回報。上司與客戶都給予高度肯定，升職加薪不是夢。財務規劃有精彩的突破。', advice: '放下工作，今晚給自己一個小小的慶祝。' },
      { text: '紀律與毅力是你今天的最大武器。艱難的任務在你面前迎刃而解。感情上伴侶欣賞你的穩重，關係更加成熟。', advice: '偶爾示弱，讓伴侶感受到被需要的溫暖。' },
      { text: '今天適合制定長期目標與五年計劃。財富積累穩健，不動產或固定資產方面有好消息。', advice: '計劃之外，也為生活預留一些自發性的驚喜。' },
    ]
  },
  {
    symbol: '♒', name: '水瓶座', en: 'Aquarius',
    dates: '1/20 – 2/18', element: 'air', elementLabel: '風象',
    ruler: '天王星', lucky: '電藍色', number: 11,
    fortunes: [
      { text: '革命性的想法震驚四座！科技、社會議題或創新領域中你的見解遙遙領先。朋友群體給予你強大的支持與共鳴。', advice: '讓你的理想照進現實，從小行動開始。' },
      { text: '人道主義精神讓你今天特別受到群體的愛戴。網路社群或線上活動中有意外的收穫。感情方面需要給對方多一點自由。', advice: '在獨立與親密之間找到平衡點。' },
      { text: '發明創造的靈感源源不絕，適合進行腦力激盪或科技實驗。朋友帶來重要的訊息，改變你對某件事的看法。', advice: '接受不同的意見，多元視角讓你更強大。' },
    ]
  },
  {
    symbol: '♓', name: '雙魚座', en: 'Pisces',
    dates: '2/19 – 3/20', element: 'water', elementLabel: '水象',
    ruler: '海王星', lucky: '海藍色', number: 7,
    fortunes: [
      { text: '靈性與感受力達到高峰，藝術創作進入心流狀態。夢境帶來重要的靈感或預兆，值得記錄下來。感情上充滿浪漫的驚喜。', advice: '用藝術表達你內心的世界，這是最真實的你。' },
      { text: '同理心讓你成為今天最溫柔的朋友，但注意不要吸收太多他人的負面情緒。冥想或靈性修行帶來心靈平靜。', advice: '設立界限，保護好自己的能量場。' },
      { text: '想象力天馬行空，音樂、電影或詩歌能帶給你強烈的共鳴。愛情如夢如幻，要區分現實與幻想。財運方面聽取專業意見。', advice: '相信美好終將到來，但也要腳踏實地。' },
    ]
  },
];

// 根據日期取得今日運勢索引
function getDailyIndex(max) {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  return dayOfYear % max;
}

// 渲染日期
function renderDate() {
  const el = document.getElementById('today-date');
  if (!el) return;
  const d = new Date();
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  el.textContent = `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日（週${weekdays[d.getDay()]}）`;
}

// 星星評分
function starsHTML(score) {
  const full = Math.floor(score / 20);
  const half = score % 20 >= 10 ? 1 : 0;
  return '★'.repeat(full) + (half ? '☆' : '') + '☆'.repeat(5 - full - half);
}

// 渲染星座卡片
function renderZodiacGrid() {
  const grid = document.querySelector('.zodiac-grid');
  if (!grid) return;
  ZODIACS.forEach((z, i) => {
    const card = document.createElement('div');
    card.className = 'zodiac-card';
    card.innerHTML = `
      <span class="symbol">${z.symbol}</span>
      <div class="name">${z.name}</div>
      <div class="dates">${z.dates}</div>
      <span class="element-badge element-${z.element}">${z.elementLabel}</span>
    `;
    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);
  });
}

// 渲染精選
function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const featured = [0, 3, 6, 9, 1, 7]; // 牡羊、巨蟹、天秤、摩羯 + 特選
  featured.forEach(i => {
    const z = ZODIACS[i];
    const fi = getDailyIndex(z.fortunes.length);
    const fortune = z.fortunes[fi];
    const score = 60 + ((i * 13 + getDailyIndex(40)));
    const cap = Math.min(score, 99);
    const card = document.createElement('div');
    card.className = 'featured-card';
    card.innerHTML = `
      <div class="featured-top">
        <span class="featured-symbol">${z.symbol}</span>
        <div>
          <div class="featured-title">${z.name}</div>
          <div class="featured-sub">${z.dates}</div>
        </div>
      </div>
      <div class="featured-stars">${starsHTML(cap)}</div>
      <div class="featured-preview">${fortune.text.slice(0, 60)}…</div>
    `;
    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);
  });
}

// 開啟 Modal
function openModal(index) {
  const z = ZODIACS[index];
  const fi = getDailyIndex(z.fortunes.length);
  const fortune = z.fortunes[fi];

  // 動態生成分數（每天不同）
  const seed = index * 7 + getDailyIndex(100);
  const scores = {
    '整體運勢': 55 + (seed * 3) % 45,
    '愛情運勢': 50 + (seed * 5) % 50,
    '事業財運': 60 + (seed * 2) % 40,
    '健康運勢': 55 + (seed * 4) % 40,
  };

  document.getElementById('modal-symbol').textContent = z.symbol;
  document.getElementById('modal-name').textContent = z.name;
  document.getElementById('modal-date-range').textContent = `${z.dates} · 守護星：${z.ruler} · 幸運色：${z.lucky} · 幸運數字：${z.number}`;

  const scoresEl = document.getElementById('modal-scores');
  scoresEl.innerHTML = Object.entries(scores).map(([label, val]) => `
    <div class="score-item">
      <label><span>${label}</span><span>${val}%</span></label>
      <div class="score-bar"><div class="score-fill" style="width:${val}%"></div></div>
    </div>
  `).join('');

  document.getElementById('modal-fortune').textContent = fortune.text;
  document.getElementById('modal-advice').textContent = fortune.advice;

  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 關閉 Modal
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// 填充配對選單
function populateCompatSelects() {
  ['sign-a', 'sign-b'].forEach(id => {
    const sel = document.getElementById(id);
    ZODIACS.forEach((z, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = `${z.symbol} ${z.name}`;
      sel.appendChild(opt);
    });
  });
}

// 配對計算
const COMPAT_MATRIX = {
  fire:  { fire: 85, earth: 55, air: 90, water: 60 },
  earth: { fire: 55, earth: 80, air: 65, water: 88 },
  air:   { fire: 90, earth: 65, air: 82, water: 70 },
  water: { fire: 60, earth: 88, air: 70, water: 85 },
};

const COMPAT_LABELS = [
  [95, '天作之合 💖', '你們是星辰認可的靈魂伴侶，彼此之間的默契與吸引力無與倫比。命運將你們帶到一起，宇宙為你們的愛情送上祝福。'],
  [80, '非常般配 💕', '你們有著極強的互補性，彼此能激發出對方最好的一面。雖然偶有摩擦，但感情基礎堅實，只要用心經營，必定長久。'],
  [65, '互有吸引 ✨', '你們之間有著獨特的吸引力，相處充滿新鮮感。需要多一些包容與理解，差異反而能成為關係中最有趣的部分。'],
  [0,  '挑戰配對 🌙', '你們的個性與需求存在明顯差異，但這並不代表無緣。只要雙方願意努力溝通，化解分歧，愛情一樣可以綻放光芒。'],
];

function getCompatResult(a, b) {
  const za = ZODIACS[a], zb = ZODIACS[b];
  let base = COMPAT_MATRIX[za.element][zb.element];
  // 同星座加分
  if (a === b) base = 90;
  // 隨機微調（基於兩個索引）
  const tweak = ((a * 7 + b * 13) % 11) - 5;
  const score = Math.min(99, Math.max(40, base + tweak));
  const [, label, desc] = COMPAT_LABELS.find(([min]) => score >= min);
  return { score, label, desc, za, zb };
}

function checkCompatibility() {
  const a = document.getElementById('sign-a').value;
  const b = document.getElementById('sign-b').value;
  if (a === '' || b === '') { alert('請選擇兩個星座！'); return; }
  const { score, label, desc, za, zb } = getCompatResult(Number(a), Number(b));
  const result = document.getElementById('compat-result');
  result.innerHTML = `
    <div class="compat-box">
      <div class="compat-hearts">${za.symbol} 💫 ${zb.symbol}</div>
      <div class="compat-percent">${score}%</div>
      <div class="compat-label">${label}</div>
      <div class="compat-desc">${desc}</div>
      <div style="margin-top:1rem;font-size:.82rem;color:var(--text-muted)">
        ${za.name}（${za.elementLabel}）× ${zb.name}（${zb.elementLabel}）
      </div>
    </div>
  `;
  result.classList.add('show');
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  renderDate();
  renderZodiacGrid();
  renderFeatured();
  populateCompatSelects();

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.getElementById('check-compat').addEventListener('click', checkCompatibility);
});
