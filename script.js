// ===== i18n =====
let currentLang = 'zh';

const T = {
  zh: {
    'nav.horoscopes': '十二星座',
    'nav.today': '今日運勢',
    'nav.compatibility': '合盤配對',
    'hero.sub': '✦ 宇宙的指引就在此刻 ✦',
    'hero.h1a': '探索你的',
    'hero.h1b': '星座命運',
    'hero.desc': '每天更新的星座運勢，帶你解讀愛情、事業、財運與健康的宇宙密碼。',
    'hero.btn': '查看今日運勢',
    'date.updated': '每日運勢已更新',
    'date.lunar': '農曆正月',
    'section.horoscopes.title': '選擇你的星座',
    'section.horoscopes.sub': '點擊星座查看今日詳細運勢分析',
    'section.today.title': '今日精選運勢',
    'section.compat.title': '星座愛情配對',
    'section.compat.sub': '選擇兩個星座，探索你們之間的緣分指數',
    'compat.label.a': '你的星座',
    'compat.label.b': '對方的星座',
    'compat.placeholder': '-- 選擇 --',
    'compat.btn': '查看配對結果',
    'modal.overall': '整體運勢',
    'modal.love': '愛情運勢',
    'modal.career': '事業財運',
    'modal.health': '健康運勢',
    'modal.ruler': '守護星',
    'modal.lucky': '幸運色',
    'modal.number': '幸運數字',
    'modal.advice.prefix': '✨ 今日建議：',
    'footer.tagline': '以星辰為引，以命運為途。',
    'footer.copy': '© 2026 AstroZone · 星座運勢',
    'compat.alert': '請選擇兩個星座！',
    'lang.btn': 'EN',
    'page.title': '星座運勢 · AstroZone',
  },
  en: {
    'nav.horoscopes': '12 Signs',
    'nav.today': "Today's Fortune",
    'nav.compatibility': 'Compatibility',
    'hero.sub': '✦ Cosmic Guidance for This Moment ✦',
    'hero.h1a': 'Discover Your',
    'hero.h1b': 'Zodiac Destiny',
    'hero.desc': 'Daily updated horoscopes to decode the cosmic secrets of love, career, wealth, and health.',
    'hero.btn': "View Today's Fortune",
    'date.updated': 'Daily horoscopes updated',
    'date.lunar': '',
    'section.horoscopes.title': 'Choose Your Sign',
    'section.horoscopes.sub': 'Click a sign to see your detailed daily horoscope',
    'section.today.title': "Today's Featured Horoscopes",
    'section.compat.title': 'Zodiac Love Compatibility',
    'section.compat.sub': 'Choose two signs and explore your cosmic connection',
    'compat.label.a': 'Your Sign',
    'compat.label.b': 'Their Sign',
    'compat.placeholder': '-- Select --',
    'compat.btn': 'Check Compatibility',
    'modal.overall': 'Overall',
    'modal.love': 'Love',
    'modal.career': 'Career',
    'modal.health': 'Health',
    'modal.ruler': 'Ruler',
    'modal.lucky': 'Lucky Color',
    'modal.number': 'Lucky Number',
    'modal.advice.prefix': "✨ Today's Advice: ",
    'footer.tagline': 'Guided by stars, shaped by destiny.',
    'footer.copy': '© 2026 AstroZone · Horoscopes',
    'compat.alert': 'Please select two signs!',
    'lang.btn': '中文',
    'page.title': 'Horoscopes · AstroZone',
  },
};

function t(key) {
  return T[currentLang][key] || key;
}

// ===== 星座資料 =====
const ZODIACS = [
  {
    symbol: '♈', name: '牡羊座', nameEn: 'Aries',
    dates: '3/21 – 4/19', datesEn: 'Mar 21 – Apr 19',
    element: 'fire', elementLabel: '火象', elementLabelEn: 'Fire',
    ruler: '火星', rulerEn: 'Mars',
    lucky: '紅色', luckyEn: 'Red', number: 7,
    fortunes: [
      { text: '今天你的行動力特別旺盛，適合主動出擊，無論是事業上的計畫還是感情上的表白，都能獲得正面回應。財運方面有意外之財的跡象，但要注意衝動消費。', advice: '保持熱情，但三思而後行，避免與人爭執。' },
      { text: '工作上遇到挑戰，但你天生的競爭精神會讓你脫穎而出。感情上與伴侶可能有小磨擦，需要多一點耐心。下午有貴人相助的機會。', advice: '適時放慢腳步，傾聽對方的想法。' },
      { text: '創意思維爆發的一天，適合發想新計劃或開展副業。人際關係順暢，社交活動帶來好機遇。健康方面注意頭部與眼睛的疲勞。', advice: '把握靈感，立即記錄下你的想法。' },
    ],
    fortunesEn: [
      { text: "Your energy is at its peak today — perfect for taking bold action. Whether it's a career move or expressing your feelings, expect positive responses. Watch for unexpected financial gains, but resist impulsive spending.", advice: 'Stay passionate, but think before you act. Avoid unnecessary arguments.' },
      { text: "Challenges arise at work, but your competitive spirit will carry you through. A minor friction with your partner calls for extra patience. A helpful ally appears in the afternoon.", advice: "Slow down and truly listen to others' perspectives." },
      { text: "Creative ideas surge today — perfect for brainstorming or launching a side project. Social connections flow smoothly and bring exciting opportunities. Watch for eye and head strain.", advice: 'Capture your inspiration immediately — write it down before it fades.' },
    ],
  },
  {
    symbol: '♉', name: '金牛座', nameEn: 'Taurus',
    dates: '4/20 – 5/20', datesEn: 'Apr 20 – May 20',
    element: 'earth', elementLabel: '土象', elementLabelEn: 'Earth',
    ruler: '金星', rulerEn: 'Venus',
    lucky: '綠色', luckyEn: 'Green', number: 6,
    fortunes: [
      { text: '財運穩健上升，適合進行長期投資規劃。感情方面，單身者可能在熟悉的朋友圈中遇到心儀對象，已有伴侶者關係更加穩固。', advice: '享受當下的美好，不必急於改變現狀。' },
      { text: '今天的運勢以穩定為主調，工作按部就班地進行，能獲得上司的認可。下午有一頓美食相關的社交活動，能帶來愉快心情。', advice: '不要貪心，見好就收是今日最佳策略。' },
      { text: '家庭運勢上揚，與家人的溝通更順暢。財運方面要避免不必要的支出。藝術創作或手工活動能帶來靈感與成就感。', advice: '花時間佈置居家環境，舒適的空間帶來好運。' },
    ],
    fortunesEn: [
      { text: "Financial fortune rises steadily — a good time to plan long-term investments. Singles may find a match within familiar social circles; couples enjoy growing stability.", advice: "Enjoy the present moment. There's no need to rush for change." },
      { text: "Steady energy guides the day. Work progresses smoothly and earns recognition from superiors. A social gathering over good food lifts your spirits this afternoon.", advice: "Don't be greedy — knowing when to stop is today's best strategy." },
      { text: "Family harmony is highlighted. Communication with loved ones flows easily. Avoid unnecessary expenses. Creative or craft activities bring inspiration and satisfaction.", advice: 'Spend time beautifying your space — a comfortable environment invites good fortune.' },
    ],
  },
  {
    symbol: '♊', name: '雙子座', nameEn: 'Gemini',
    dates: '5/21 – 6/20', datesEn: 'May 21 – Jun 20',
    element: 'air', elementLabel: '風象', elementLabelEn: 'Air',
    ruler: '水星', rulerEn: 'Mercury',
    lucky: '黃色', luckyEn: 'Yellow', number: 5,
    fortunes: [
      { text: '今天溝通能力達到頂峰，口才極佳，適合商務談判、面試或公開演講。思緒靈活多變，同時處理多個任務遊刃有餘。', advice: '把握今天多說話，你的想法會受到歡迎。' },
      { text: '社交運旺，新認識的人中藏有未來的合作夥伴。學習新技能的好時機，尤其是語言或數位技術。感情上需要更多深度交流。', advice: '停下腳步，真正傾聽身邊人說的話。' },
      { text: '創意湧現，適合寫作、設計或任何需要發揮想象力的工作。旅遊或短途出行能帶來意外驚喜。注意資訊過載，做好取捨。', advice: '選擇一件事好好完成，而不是同時做十件事。' },
    ],
    fortunesEn: [
      { text: "Your communication skills peak today — ideal for negotiations, interviews, or public speaking. Quick thinking allows you to juggle multiple tasks effortlessly.", advice: 'Speak up boldly today. Your ideas are ready to be heard.' },
      { text: "Your social life thrives, and a new acquaintance may become a future partner. A great time to learn new skills, especially in language or technology. Deepen emotional connections in romance.", advice: 'Pause and truly listen to what those around you are saying.' },
      { text: "Creativity overflows — perfect for writing, design, or any imaginative work. A short trip or outing brings a delightful surprise. Beware of information overload.", advice: 'Choose one thing and do it well, rather than starting ten things at once.' },
    ],
  },
  {
    symbol: '♋', name: '巨蟹座', nameEn: 'Cancer',
    dates: '6/21 – 7/22', datesEn: 'Jun 21 – Jul 22',
    element: 'water', elementLabel: '水象', elementLabelEn: 'Water',
    ruler: '月亮', rulerEn: 'Moon',
    lucky: '銀色', luckyEn: 'Silver', number: 2,
    fortunes: [
      { text: '直覺力特別強，今天的第六感請務必相信。家庭關係溫馨，是與親人共享美食的好時光。財運方面要守住存款，避免衝動消費。', advice: '相信你的直覺，它今天不會讓你失望。' },
      { text: '情感細膩的你今天特別容易受到環境影響，盡量保持正向的社交圈。工作上你的細心與責任感讓人印象深刻，升遷在望。', advice: '照顧好自己的情緒，不必承擔所有人的感受。' },
      { text: '創作靈感來源於過去的記憶與情感，適合整理日記或相片。感情運極佳，舊情人可能重新聯絡，需要謹慎面對。', advice: '給自己一些獨處的時間，內省帶來智慧。' },
    ],
    fortunesEn: [
      { text: "Your intuition is exceptionally sharp today — trust your gut. Family connections warm your heart; it's a perfect time to share a meal with loved ones. Guard your savings against impulsive spending.", advice: "Trust your instincts — they won't let you down today." },
      { text: "Your sensitive nature picks up on environmental cues easily. Surround yourself with positive people. Your diligence at work impresses and hints at a promotion.", advice: "Take care of your own emotions rather than absorbing everyone else's feelings." },
      { text: "Creative inspiration flows from memories and emotions — a perfect day for journaling or photo albums. Love fortune is excellent, but be careful if an ex reaches out.", advice: 'Give yourself some alone time. Introspection brings wisdom.' },
    ],
  },
  {
    symbol: '♌', name: '獅子座', nameEn: 'Leo',
    dates: '7/23 – 8/22', datesEn: 'Jul 23 – Aug 22',
    element: 'fire', elementLabel: '火象', elementLabelEn: 'Fire',
    ruler: '太陽', rulerEn: 'Sun',
    lucky: '金色', luckyEn: 'Gold', number: 1,
    fortunes: [
      { text: '今天全場目光都在你身上！自信心爆棚，適合在公眾場合展現才華。事業上有突破性進展，把握主動權就能成功。感情運也大放異彩。', advice: '大膽展現自己，你的光芒無法被遮蔽。' },
      { text: '領導力備受肯定，團隊中的衝突需要你出面調解。財運方面可考慮投資文化或娛樂相關產業。愛情上要注意驕傲可能傷害伴侶。', advice: '讚美對方，讓愛的人也感受到你的溫暖。' },
      { text: '創作力與表現欲雙雙攀升，任何舞台都是你的天下。朋友尋求你的建議，你的判斷值得信賴。注意不要過度消耗體力。', advice: '適當休息，保存能量迎接更大的舞台。' },
    ],
    fortunesEn: [
      { text: "All eyes are on you today! Confidence soars — perfect for showcasing your talents publicly. A breakthrough in your career awaits. Romance shines brilliantly.", advice: 'Shine boldly — your light cannot be dimmed.' },
      { text: "Your leadership wins recognition. Help mediate team conflicts to strengthen your position. Consider culture or entertainment investments. In love, guard against letting pride hurt your partner.", advice: "Compliment your loved one — let the people you care about feel your warmth." },
      { text: "Creative energy and performance drive both surge. Friends seek your counsel and trust your judgement. Avoid overextending your physical energy.", advice: 'Rest and recharge — save your strength for an even bigger stage ahead.' },
    ],
  },
  {
    symbol: '♍', name: '處女座', nameEn: 'Virgo',
    dates: '8/23 – 9/22', datesEn: 'Aug 23 – Sep 22',
    element: 'earth', elementLabel: '土象', elementLabelEn: 'Earth',
    ruler: '水星', rulerEn: 'Mercury',
    lucky: '米白色', luckyEn: 'Ivory', number: 6,
    fortunes: [
      { text: '分析思維達到頂點，今天適合處理細節繁瑣的工作，你的眼光獨到能發現別人忽略的錯誤。健康運佳，可開始新的養生計劃。', advice: '放下完美主義，80分的行動勝過100分的計劃。' },
      { text: '工作效率超群，計劃中的項目能提前完成。感情上建議多表達內心感受，你的內斂有時讓伴侶感到距離。財運穩健。', advice: '說出心裡話，愛情不需要猜謎。' },
      { text: '今天適合進行健康檢查或整理生活環境。學習與進修方面有好消息。注意不要過度批評他人，以免引起摩擦。', advice: '把挑剔的眼光先用在自我提升上。' },
    ],
    fortunesEn: [
      { text: "Analytical thinking reaches its peak — ideal for tackling detailed, complex work. Your sharp eye catches errors others miss. Health fortune favors starting a new wellness routine.", advice: "Let go of perfectionism. An 80% action beats a 100% plan." },
      { text: "Work efficiency is outstanding — projects finish ahead of schedule. In love, express your feelings more openly; your reserved nature can sometimes feel like distance. Financial fortune is steady.", advice: "Say what's in your heart. Love doesn't need to be a guessing game." },
      { text: "A perfect day for health checkups or decluttering your living space. Good news in learning or professional development. Avoid being overly critical of others.", advice: "Direct that perfectionist eye toward self-improvement first." },
    ],
  },
  {
    symbol: '♎', name: '天秤座', nameEn: 'Libra',
    dates: '9/23 – 10/22', datesEn: 'Sep 23 – Oct 22',
    element: 'air', elementLabel: '風象', elementLabelEn: 'Air',
    ruler: '金星', rulerEn: 'Venus',
    lucky: '粉色', luckyEn: 'Pink', number: 7,
    fortunes: [
      { text: '人際關係和諧，是化解矛盾的最佳時機。美感天賦特別突出，藝術或時尚相關事業蓬勃發展。感情上舊緣復燃或新感情萌芽。', advice: '做一個決定，優柔寡斷今天要畫上句號。' },
      { text: '合作運極強，與他人的協作能帶來意想不到的成果。社交場合中你的魅力傾倒眾生，貴人運旺盛。', advice: '相信自己的品味，你的選擇是正確的。' },
      { text: '今天的重點在於平衡──工作與生活，理性與感性。法律或合約相關事務需要謹慎審查，避免有失公允的條款。', advice: '公平對待每個人，包括對自己也要公平。' },
    ],
    fortunesEn: [
      { text: "Harmony in relationships makes this the perfect time to resolve conflicts. Your aesthetic sense shines — art and fashion ventures flourish. In romance, old sparks may reignite or new feelings emerge.", advice: "Make a decision — end the indecision today." },
      { text: "Collaboration is incredibly strong; partnering with others produces remarkable results. Your charm captivates those around you, and helpful allies abound.", advice: "Trust your taste — your instincts are right." },
      { text: "Today centers on balance — work and life, logic and emotion. Legal or contract matters require careful review; watch for unfair terms.", advice: "Treat everyone fairly, including yourself." },
    ],
  },
  {
    symbol: '♏', name: '天蠍座', nameEn: 'Scorpio',
    dates: '10/23 – 11/21', datesEn: 'Oct 23 – Nov 21',
    element: 'water', elementLabel: '水象', elementLabelEn: 'Water',
    ruler: '冥王星', rulerEn: 'Pluto',
    lucky: '深紅色', luckyEn: 'Deep Red', number: 8,
    fortunes: [
      { text: '洞察力無人能及，今天能看穿事物的本質與人心。適合進行深度研究或心理分析工作。感情上強烈的吸引力讓對方難以抗拒。', advice: '相信直覺，但也給對方解釋的機會。' },
      { text: '財運強勁，投資或談判上的嗅覺特別靈敏。舊秘密可能浮出水面，坦然面對反而能帶來解脫。', advice: '放下控制欲，讓事情自然發展。' },
      { text: '今天適合處理隱秘或幕後的工作，不需要站在台前也能掌握局勢。感情深度增加，與伴侶之間的羈絆更加堅固。', advice: '轉化嫉妒為動力，你的潛能無可限量。' },
    ],
    fortunesEn: [
      { text: "Your insight is unmatched — you see through people and situations with ease. Deep research and psychological analysis shine today. Your magnetic intensity draws others irresistibly.", advice: "Trust your instincts, but give others the benefit of the doubt." },
      { text: "Financial intuition is razor-sharp — your instincts for investment and negotiation are excellent. Old secrets may surface; confronting them honestly brings relief.", advice: "Release the need to control. Let things unfold naturally." },
      { text: "Behind-the-scenes work is where you thrive today. You don't need to stand in the spotlight to command the situation. Emotional depth grows; bonds with your partner deepen.", advice: "Channel jealousy into motivation — your potential is limitless." },
    ],
  },
  {
    symbol: '♐', name: '射手座', nameEn: 'Sagittarius',
    dates: '11/22 – 12/21', datesEn: 'Nov 22 – Dec 21',
    element: 'fire', elementLabel: '火象', elementLabelEn: 'Fire',
    ruler: '木星', rulerEn: 'Jupiter',
    lucky: '紫色', luckyEn: 'Purple', number: 9,
    fortunes: [
      { text: '冒險精神使你今天充滿活力！旅遊、學習或開拓新市場都有好兆頭。樂觀的態度感染身邊的人，貴人自然而來。', advice: '帶著好奇心去探索，答案就在旅途中。' },
      { text: '哲學思考與遠大願景讓你的發言深具影響力。外國人緣特佳，跨國合作帶來豐厚機遇。感情上不拘小節，但記得關注細節。', advice: '把夢想縮小成今天可以做到的第一步。' },
      { text: '幽默感讓你成為今天最受歡迎的人。出版、教育或媒體相關事業有突破。冒險之旅中意外發現珍貴的友誼。', advice: '說話前先想清楚，誠實也要顧及他人感受。' },
    ],
    fortunesEn: [
      { text: "Your adventurous spirit fills you with vitality today! Travel, learning, and expanding into new markets all carry great promise. Your optimism is contagious and attracts helpful people.", advice: "Let curiosity guide you — the answers are found on the journey." },
      { text: "Philosophical thinking and grand visions make your words deeply influential. Foreign connections are especially strong; international collaborations bring rich opportunities.", advice: "Shrink the dream into the first step you can take today." },
      { text: "Your humor makes you the most sought-after person in the room today. Publishing, education, or media ventures see breakthroughs. An adventure unexpectedly reveals a precious new friendship.", advice: "Think before you speak — honesty still needs to consider others' feelings." },
    ],
  },
  {
    symbol: '♑', name: '摩羯座', nameEn: 'Capricorn',
    dates: '12/22 – 1/19', datesEn: 'Dec 22 – Jan 19',
    element: 'earth', elementLabel: '土象', elementLabelEn: 'Earth',
    ruler: '土星', rulerEn: 'Saturn',
    lucky: '黑色', luckyEn: 'Black', number: 10,
    fortunes: [
      { text: '事業運達到頂峰，多年的努力終於得到回報。上司與客戶都給予高度肯定，升職加薪不是夢。財務規劃有精彩的突破。', advice: '放下工作，今晚給自己一個小小的慶祝。' },
      { text: '紀律與毅力是你今天的最大武器。艱難的任務在你面前迎刃而解。感情上伴侶欣賞你的穩重，關係更加成熟。', advice: '偶爾示弱，讓伴侶感受到被需要的溫暖。' },
      { text: '今天適合制定長期目標與五年計劃。財富積累穩健，不動產或固定資產方面有好消息。', advice: '計劃之外，也為生活預留一些自發性的驚喜。' },
    ],
    fortunesEn: [
      { text: "Career fortune peaks — years of hard work finally earn their reward. Praise from superiors and clients puts a promotion and raise within reach. Financial planning produces inspiring breakthroughs.", advice: "Put down the work — give yourself a small celebration tonight." },
      { text: "Discipline and perseverance are your greatest assets today. Even the most daunting tasks yield to your determination. Your partner admires your steadiness.", advice: "Show a little vulnerability — let your partner feel needed and valued." },
      { text: "Today is ideal for setting long-term goals and five-year plans. Steady wealth accumulation continues, with positive news around real estate or fixed assets.", advice: "Beyond the plan, leave room for some spontaneous joy in life." },
    ],
  },
  {
    symbol: '♒', name: '水瓶座', nameEn: 'Aquarius',
    dates: '1/20 – 2/18', datesEn: 'Jan 20 – Feb 18',
    element: 'air', elementLabel: '風象', elementLabelEn: 'Air',
    ruler: '天王星', rulerEn: 'Uranus',
    lucky: '電藍色', luckyEn: 'Electric Blue', number: 11,
    fortunes: [
      { text: '革命性的想法震驚四座！科技、社會議題或創新領域中你的見解遙遙領先。朋友群體給予你強大的支持與共鳴。', advice: '讓你的理想照進現實，從小行動開始。' },
      { text: '人道主義精神讓你今天特別受到群體的愛戴。網路社群或線上活動中有意外的收穫。感情方面需要給對方多一點自由。', advice: '在獨立與親密之間找到平衡點。' },
      { text: '發明創造的靈感源源不絕，適合進行腦力激盪或科技實驗。朋友帶來重要的訊息，改變你對某件事的看法。', advice: '接受不同的意見，多元視角讓你更強大。' },
    ],
    fortunesEn: [
      { text: "Revolutionary ideas astonish everyone around you! Your vision in technology, social issues, or innovation puts you far ahead of the crowd. Your community rallies behind you with strong support.", advice: "Let your ideals meet reality — start with small, concrete actions." },
      { text: "Your humanitarian spirit earns deep admiration today. Unexpected rewards emerge from online communities or virtual events. In romance, give your partner a little more freedom.", advice: "Find the balance between independence and intimacy." },
      { text: "Inventive inspiration flows endlessly — perfect for brainstorming or tech experiments. A friend delivers important information that changes your perspective on something significant.", advice: "Embrace different perspectives — diverse viewpoints make you stronger." },
    ],
  },
  {
    symbol: '♓', name: '雙魚座', nameEn: 'Pisces',
    dates: '2/19 – 3/20', datesEn: 'Feb 19 – Mar 20',
    element: 'water', elementLabel: '水象', elementLabelEn: 'Water',
    ruler: '海王星', rulerEn: 'Neptune',
    lucky: '海藍色', luckyEn: 'Sea Blue', number: 7,
    fortunes: [
      { text: '靈性與感受力達到高峰，藝術創作進入心流狀態。夢境帶來重要的靈感或預兆，值得記錄下來。感情上充滿浪漫的驚喜。', advice: '用藝術表達你內心的世界，這是最真實的你。' },
      { text: '同理心讓你成為今天最溫柔的朋友，但注意不要吸收太多他人的負面情緒。冥想或靈性修行帶來心靈平靜。', advice: '設立界限，保護好自己的能量場。' },
      { text: '想象力天馬行空，音樂、電影或詩歌能帶給你強烈的共鳴。愛情如夢如幻，要區分現實與幻想。財運方面聽取專業意見。', advice: '相信美好終將到來，但也要腳踏實地。' },
    ],
    fortunesEn: [
      { text: "Spiritual sensitivity and creativity peak today, putting you in a state of pure flow with your art. Meaningful dreams carry important messages worth recording. Romance is filled with enchanting surprises.", advice: "Express your inner world through art — this is your most authentic self." },
      { text: "Your empathy makes you the most comforting presence for those around you, but guard against absorbing too much of others' negative energy. Meditation brings profound peace.", advice: "Set boundaries — protect your own energy field." },
      { text: "Imagination runs wild; music, film, or poetry resonates deeply with your soul. Love feels dreamlike and ethereal — keep one foot in reality. Seek professional advice on financial matters.", advice: "Trust that good things are coming, but stay grounded in the present." },
    ],
  },
];

// ===== 配對標籤 =====
const COMPAT_LABELS = {
  zh: [
    [95, '天作之合 💖', '你們是星辰認可的靈魂伴侶，彼此之間的默契與吸引力無與倫比。命運將你們帶到一起，宇宙為你們的愛情送上祝福。'],
    [80, '非常般配 💕', '你們有著極強的互補性，彼此能激發出對方最好的一面。雖然偶有摩擦，但感情基礎堅實，只要用心經營，必定長久。'],
    [65, '互有吸引 ✨', '你們之間有著獨特的吸引力，相處充滿新鮮感。需要多一些包容與理解，差異反而能成為關係中最有趣的部分。'],
    [0,  '挑戰配對 🌙', '你們的個性與需求存在明顯差異，但這並不代表無緣。只要雙方願意努力溝通，化解分歧，愛情一樣可以綻放光芒。'],
  ],
  en: [
    [95, 'Perfect Match 💖', 'You are star-crossed soulmates — your connection and attraction are beyond compare. Fate brought you together, and the universe blesses your love.'],
    [80, 'Great Match 💕', 'You complement each other wonderfully, bringing out the best in one another. Though small frictions arise, your bond is solid — nurture it and love will endure.'],
    [65, 'Mutual Attraction ✨', 'A unique chemistry draws you together, keeping things fresh and exciting. A little patience and understanding goes a long way — your differences make the relationship fascinating.'],
    [0,  'Challenging Match 🌙', "Differences in personality and needs create real challenges, but this doesn't mean you're incompatible. With open communication and genuine effort, love can still blossom beautifully."],
  ],
};

// ===== 語言切換 =====
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('astrozone-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
  document.title = t('page.title');

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = T[lang][el.getAttribute('data-i18n')] || '';
  });

  // Update lang button
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = t('lang.btn');

  // Show/hide lunar info in English
  const lunarInfo = document.getElementById('lunar-info');
  const lunarDot = document.getElementById('lunar-dot');
  if (lunarInfo) lunarInfo.style.display = lang === 'en' ? 'none' : '';
  if (lunarDot) lunarDot.style.display = lang === 'en' ? 'none' : '';

  // Re-render dynamic content
  renderDate();
  renderZodiacGrid();
  renderFeatured();
  populateCompatSelects();

  // Clear stale compat result
  const compatResult = document.getElementById('compat-result');
  if (compatResult) compatResult.classList.remove('show');
}

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
  if (currentLang === 'zh') {
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    el.textContent = `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日（週${weekdays[d.getDay()]}）`;
  } else {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    el.textContent = `${weekdays[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
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
  grid.innerHTML = '';
  const isEn = currentLang === 'en';
  ZODIACS.forEach((z, i) => {
    const card = document.createElement('div');
    card.className = 'zodiac-card';
    card.innerHTML = `
      <span class="symbol">${z.symbol}</span>
      <div class="name">${isEn ? z.nameEn : z.name}</div>
      <div class="dates">${isEn ? z.datesEn : z.dates}</div>
      <span class="element-badge element-${z.element}">${isEn ? z.elementLabelEn : z.elementLabel}</span>
    `;
    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);
  });
}

// 渲染精選
function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const isEn = currentLang === 'en';
  const featured = [0, 3, 6, 9, 1, 7];
  featured.forEach(i => {
    const z = ZODIACS[i];
    const fi = getDailyIndex(z.fortunes.length);
    const fortune = isEn ? z.fortunesEn[fi] : z.fortunes[fi];
    const score = 60 + ((i * 13 + getDailyIndex(40)));
    const cap = Math.min(score, 99);
    const card = document.createElement('div');
    card.className = 'featured-card';
    card.innerHTML = `
      <div class="featured-top">
        <span class="featured-symbol">${z.symbol}</span>
        <div>
          <div class="featured-title">${isEn ? z.nameEn : z.name}</div>
          <div class="featured-sub">${isEn ? z.datesEn : z.dates}</div>
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
  const isEn = currentLang === 'en';
  const fi = getDailyIndex(z.fortunes.length);
  const fortune = isEn ? z.fortunesEn[fi] : z.fortunes[fi];

  const seed = index * 7 + getDailyIndex(100);
  const scores = {
    [t('modal.overall')]: 55 + (seed * 3) % 45,
    [t('modal.love')]: 50 + (seed * 5) % 50,
    [t('modal.career')]: 60 + (seed * 2) % 40,
    [t('modal.health')]: 55 + (seed * 4) % 40,
  };

  document.getElementById('modal-symbol').textContent = z.symbol;
  document.getElementById('modal-name').textContent = isEn ? z.nameEn : z.name;
  document.getElementById('modal-date-range').textContent =
    `${isEn ? z.datesEn : z.dates} · ${t('modal.ruler')}：${isEn ? z.rulerEn : z.ruler} · ${t('modal.lucky')}：${isEn ? z.luckyEn : z.lucky} · ${t('modal.number')}：${z.number}`;

  const scoresEl = document.getElementById('modal-scores');
  scoresEl.innerHTML = Object.entries(scores).map(([label, val]) => `
    <div class="score-item">
      <label><span>${label}</span><span>${val}%</span></label>
      <div class="score-bar"><div class="score-fill" style="width:${val}%"></div></div>
    </div>
  `).join('');

  document.getElementById('modal-fortune').textContent = fortune.text;
  document.getElementById('modal-advice').innerHTML =
    `<strong class="advice-prefix">${t('modal.advice.prefix')}</strong>${fortune.advice}`;

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
  const isEn = currentLang === 'en';
  ['sign-a', 'sign-b'].forEach(id => {
    const sel = document.getElementById(id);
    sel.innerHTML = `<option value="">${t('compat.placeholder')}</option>`;
    ZODIACS.forEach((z, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = `${z.symbol} ${isEn ? z.nameEn : z.name}`;
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

function getCompatResult(a, b) {
  const za = ZODIACS[a], zb = ZODIACS[b];
  let base = COMPAT_MATRIX[za.element][zb.element];
  if (a === b) base = 90;
  const tweak = ((a * 7 + b * 13) % 11) - 5;
  const score = Math.min(99, Math.max(40, base + tweak));
  const labels = COMPAT_LABELS[currentLang];
  const [, label, desc] = labels.find(([min]) => score >= min);
  return { score, label, desc, za, zb };
}

function checkCompatibility() {
  const a = document.getElementById('sign-a').value;
  const b = document.getElementById('sign-b').value;
  if (a === '' || b === '') { alert(t('compat.alert')); return; }
  const isEn = currentLang === 'en';
  const { score, label, desc, za, zb } = getCompatResult(Number(a), Number(b));
  const result = document.getElementById('compat-result');
  result.innerHTML = `
    <div class="compat-box">
      <div class="compat-hearts">${za.symbol} 💫 ${zb.symbol}</div>
      <div class="compat-percent">${score}%</div>
      <div class="compat-label">${label}</div>
      <div class="compat-desc">${desc}</div>
      <div style="margin-top:1rem;font-size:.82rem;color:var(--text-muted)">
        ${isEn ? za.nameEn : za.name}（${isEn ? za.elementLabelEn : za.elementLabel}）× ${isEn ? zb.nameEn : zb.name}（${isEn ? zb.elementLabelEn : zb.elementLabel}）
      </div>
    </div>
  `;
  result.classList.add('show');
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  // 偵測語言：localStorage > 瀏覽器語言 > 英文
  const saved = localStorage.getItem('astrozone-lang');
  if (saved) {
    currentLang = saved;
  } else {
    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    currentLang = browserLang.startsWith('zh') ? 'zh' : 'en';
  }

  applyLang(currentLang);

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.getElementById('check-compat').addEventListener('click', checkCompatibility);
  document.getElementById('lang-btn').addEventListener('click', () => {
    applyLang(currentLang === 'zh' ? 'en' : 'zh');
  });
});
