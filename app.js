// 우리 가족 한글날 여주 대작전 (원본: 한글날 여주 가족 나들이 일정표.xlsx, 2026-10-09 아침 변경)
(function(){
'use strict';
const DAY = '2026-10-09';
const P = {
  reung: { q:'세종대왕릉', name:'세종대왕릉(영릉)' },
  guneung: { q:'여주 구능촌', name:'구능촌', tel:'031-882-4893' },
  solbat: { q:'여주 솔밭정원', name:'솔밭정원', tel:'031-884-3003' },
  bridge: { q:'여주 남한강 출렁다리', name:'남한강 출렁다리' },
  nadeul: { q:'나들목 여주쌀밥', name:'나들목 여주쌀밥', tel:'031-881-6077' }
};

// ---------- 두 가지 플랜 ----------
const PLANS = {
  B: {
    key:'B', name:'여유 플랜', sub:'티니핑은 오후 4시로', rec:true,
    why:`<b>왜 추천?</b> 연휴 첫날 행사장 주차 + 걷는 시간을 생각하면 10시 40분 도착 후 11시 공연에 맞추려면 아이들을 재촉해야 해요. 티니핑은 <b>오후 4시에 한 번 더</b> 하니까 오전엔 여유 있게 체험, 점심도 원래 식당 그대로.<br>
      <span class="pro">👍 아무것도 안 버림 · 오전 체험부스 한산 · 빵축제는 노을+야간공연 버전</span><br>
      <span class="con">👀 집 도착이 1시간쯤 늦어짐(약 20:30) · 빵글놀이터 체험은 마감됐을 수 있음</span>`,
    items:[
      { t:'08:00', e:'🚗', title:'집 출발 (실제)', desc:'예정보다 40분 늦게 출발. 괜찮아요, 순서만 바꾸면 돼요.', past:true },
      { t:'08:10', e:'🧠', title:'차 안 = 흔한남매 연습 시간', desc:'도착까지 2시간! 🧠 퀴즈 탭으로 한글날 퀴즈 연습, 📣 응원판 문구 미리 정하기.', tag:'new', tip:'마지막 휴게소에서 화장실 + 물·젤리 사두기' },
      { t:'10:40', e:'🅿️', title:'세종대왕릉 도착 · 주차', desc:'서두르지 않아도 돼요. 주차 안내 요원 따라가기.', place:'reung', tel:'031-885-3123', tag:'moved' },
      { t:'10:50', e:'🔤', title:"'오감만족! 한글 놀이터' 체험", desc:'한글 미니 큐브 · 붓펜 캘리그라피 · 한글 서체 디자인 · 꽃산병 · 향기 · 투각등 중 1~2개.', tip:'11시엔 다들 티니핑 보러 가서 부스가 한산해요. 인기 부스부터!', tag:'moved' },
      { t:'11:40', e:'📞', title:'구능촌으로 이동', desc:'지금 전화해서 "12시 전후 5명" 자리 부탁해 두기 (11:30 오픈).', place:'guneung', tel:'031-882-4893' },
      { t:'11:50', e:'🦆', title:'점심 · 구능촌', desc:'오리구이 · 가마솥밥. 12시 50분엔 일어나기!', place:'guneung', tel:'031-882-4893', tip:'자리가 없으면 대안: 솔밭정원 031-884-3003' },
      { t:'12:50', e:'🚻', title:'화장실 들르고 공연장으로', desc:'공연 중엔 화장실 가기 어려워요. 다 같이 한 번 다녀오기.' },
      { t:'13:00', e:'💺', title:'흔한남매 자리잡기', desc:'1시간 전 도착! 3~7번째 줄 가운데, 통로 쪽. 자세한 건 🎤 흔한남매 탭.', star:true, tag:'new' },
      { t:'14:00', e:'🎤', title:'흔한남매 토크쇼 ★오늘의 하이라이트', desc:'한글 퀴즈 · 관객 참여 게임 · 소통 레크리에이션. 손 번쩍, "저요!" 크게!', star:true },
      { t:'14:50', e:'🌳', title:'세종대왕릉 짧게 산책 + 간식', desc:'능까지 걸으며 숨 돌리기. 한글 놀이터 못 한 체험 하나 더 해도 좋아요.' },
      { t:'15:30', e:'🎀', title:'티니핑 자리잡기', desc:'오전 공연 놓친 친구들이 몰릴 수 있어요. 30분 전 도착.', tag:'moved' },
      { t:'16:00', e:'🎀', title:'캐치! 티니핑 싱어롱쇼 (2회차)', desc:'주제곡 · 율동 · 포토타임 · 객석 이벤트. 뒤쪽이어도 서서 율동하면 신나요!', star:true, tag:'moved' },
      { t:'16:50', e:'🚗', title:'남한강 출렁다리로 이동', desc:'차로 약 20분.', place:'bridge' },
      { t:'17:15', e:'🍞', title:'여주골목대빵축제', desc:'여고빵 · 빵 간식, 빵글놀이터(한글쿠키·여주빵·키링, 에어바운스), 버블매직쇼.', place:'bridge', tip:'도착하면 빵글놀이터 체험 마감 여부부터 확인!', tag:'moved' },
      { t:'17:45', e:'🌅', title:'출렁다리 건너며 노을', desc:'오늘 해 지는 시간 18:01. 강 위에서 가족사진!', place:'bridge', tag:'new' },
      { t:'18:30', e:'🏠', title:'귀가 출발', desc:'약 2시간 · 20:30 전후 도착 예상. 저녁은 빵축제 먹거리 또는 나들목 여주쌀밥(031-881-6077, 이 경우 19:30 출발).', tel:'031-881-6077' }
    ]
  },
  A: {
    key:'A', name:'오전 도전 플랜', sub:'11시 티니핑 그대로',
    why:`<b>원래 순서 유지.</b> 도착하자마자 <b>엄마+아이들은 입구에서 먼저 내려 공연장 직행</b>, 아빠는 주차 후 합류. 자리는 욕심내지 말고 뒤쪽에서 율동!<br>
      <span class="pro">👍 귀가 시간 원래대로 · 빵글놀이터 체험 여유</span><br>
      <span class="con">👀 도착 직후 뛰어야 함 · 점심이 빠듯해서 흔한남매 자리잡기와 겹칠 위험</span>`,
    items:[
      { t:'08:00', e:'🚗', title:'집 출발 (실제)', desc:'예정보다 40분 늦게 출발.', past:true },
      { t:'08:10', e:'🧠', title:'차 안 = 흔한남매 연습 시간', desc:'🧠 퀴즈 탭으로 한글날 퀴즈 연습. 내리기 전에 화장실·겉옷 정리 끝내기.', tag:'new', tip:'휴게소에서 점심용 김밥 사두면 점심이 빨라져요' },
      { t:'10:40', e:'🏃', title:'도착 · 엄마+아이들 먼저 하차', desc:'입구에서 내려 공연장 직행. 아빠는 주차하고 합류.', place:'reung', tag:'new' },
      { t:'11:00', e:'🎀', title:'캐치! 티니핑 싱어롱쇼', desc:'주제곡 · 율동 · 포토타임 · 객석 이벤트. 자리 없으면 뒤에서 서서 율동!', star:true },
      { t:'11:50', e:'🦆', title:'점심 (빠르게)', desc:'구능촌(031-882-4893)에 미리 전화해 메뉴까지 주문해 두기. 빠듯하면 사 온 김밥으로.', place:'guneung', tel:'031-882-4893', tip:'12:50에는 무조건 일어나기' },
      { t:'13:00', e:'💺', title:'흔한남매 자리잡기', desc:'1시간 전 도착! 3~7번째 줄 가운데, 통로 쪽.', star:true, tag:'new' },
      { t:'14:00', e:'🎤', title:'흔한남매 토크쇼 ★오늘의 하이라이트', desc:'한글 퀴즈 · 관객 참여 게임. 손 번쩍!', star:true },
      { t:'14:50', e:'🔤', title:"'오감만족! 한글 놀이터' 체험", desc:'오전에 못 한 체험 1~2개.', tag:'moved' },
      { t:'15:30', e:'🚗', title:'남한강 출렁다리로 이동', desc:'차로 약 20분.', place:'bridge' },
      { t:'15:50', e:'🍞', title:'여주골목대빵축제 · 빵글놀이터', desc:'도착 즉시 체험 접수! 한글쿠키 · 여주빵 · 키링, 버블쇼, 빵 간식.', place:'bridge' },
      { t:'17:00', e:'🌉', title:'출렁다리 건너기 · 강변 놀기', desc:'해 지는 시간 18:01.', place:'bridge' },
      { t:'17:30', e:'🏠', title:'귀가 출발 (또는 저녁)', desc:'바로 출발하면 19:30 전후 도착. 나들목 여주쌀밥(031-881-6077) 들르면 19:00 출발.', tel:'031-881-6077' }
    ]
  }
};

const ORIGINAL = [
  ['07:20 출발','08:00 출발 (실제)'],
  ['09:40 도착','10:40 도착'],
  ['10:00 한글 놀이터','10:50 한글 놀이터 (한산할 때)'],
  ['11:00 티니핑','16:00 티니핑 2회차'],
  ['12:00 구능촌 점심','11:50 구능촌 점심 (그대로)'],
  ['14:00 흔한남매','14:00 흔한남매 (13:00 자리잡기)'],
  ['15:30 빵축제','17:15 빵축제 + 노을'],
  ['17:00 귀가','18:30 귀가']
];

const OPS = [
  ['12:50','화장실 다 같이 한 번'],
  ['13:00','공연장 도착 · 자리 고르기 (3~7번째 줄 가운데, 통로 쪽)'],
  ['13:10','방석·겉옷 깔기, 모자 쓰기, 물 한 모금'],
  ['13:20','교대로 한 명씩 화장실 (한 명은 꼭 자리 지키기)'],
  ['13:30','🧠 퀴즈 마지막 연습 + 📣 응원판 문구 고르기'],
  ['13:50','폰 밝기 최대, 무음 모드, 간식 넣기'],
  ['14:00','🎤 시작! 손 번쩍, "저요!" 크게'],
  ['14:50','끝나도 5분 앉아 있기 → 포토타임 있나 확인']
];

const BAG = ['물 (1인 1병)','소리 안 나는 간식 (젤리)','모자 · 선크림 (자외선 보통~높음)','방석 또는 돗자리','겉옷 (저녁 18도까지 내려가요)','보조배터리','물티슈 · 휴지','응원판 띄울 폰 (밝기 최대)'];

const QUIZ = [
  { c:'한글날', q:'한글날은 몇 월 며칠일까요?', o:['10월 3일','10월 9일','5월 5일'], a:1, x:'10월 9일! 그래서 우리가 오늘 여기 왔어요.' },
  { c:'세종대왕', q:'한글을 만든 임금님은 누구일까요?', o:['세종대왕','이순신','단군'], a:0, x:'세종대왕님! 오늘 가는 곳이 세종대왕님이 잠든 세종대왕릉이에요.' },
  { c:'세종대왕', q:'한글의 처음 이름은 무엇일까요?', o:['한국어','훈민정음','가나다'], a:1, x:'훈민정음 = "백성을 가르치는 바른 소리"라는 뜻이에요.' },
  { c:'숫자', q:'올해는 훈민정음을 세상에 알린 지 몇 돌일까요?', o:['100돌','580돌','1000돌'], a:1, x:'1446년에 반포했으니 올해 2026년은 580돌!' },
  { c:'숫자', q:'처음 만들었을 때 한글은 모두 몇 글자였을까요?', o:['24자','28자','40자'], a:1, x:'처음엔 28자! 지금은 4글자가 사라져서 24자를 써요.' },
  { c:'숫자', q:'지금 우리가 쓰는 기본 자음(ㄱ,ㄴ,ㄷ…)은 몇 개일까요?', o:['10개','14개','19개'], a:1, x:'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ, 14개! 기본 모음은 10개예요.' },
  { c:'원리', q:"모음 'ㆍ ㅡ ㅣ' 세 개는 무엇을 본떠 만들었을까요?", o:['하늘 · 땅 · 사람','해 · 달 · 별','산 · 강 · 바다'], a:0, x:'둥근 하늘(ㆍ), 평평한 땅(ㅡ), 서 있는 사람(ㅣ)!' },
  { c:'원리', q:"자음 'ㅁ'은 무엇을 본떠 만들었을까요?", o:['문','입 모양','눈'], a:1, x:"'ㅁ'은 입 모양! 'ㄴ'은 혀끝이 윗잇몸에 닿는 모양이에요." },
  { c:'오늘 장소', q:'세종대왕릉의 다른 이름은 무엇일까요?', o:['영릉','태릉','선릉'], a:0, x:'영릉(英陵)! 세종대왕과 소헌왕후가 함께 잠들어 있어요.' },
  { c:'역사', q:'한글날의 처음 이름은 무엇이었을까요?', o:['가갸날','한글축제','글자날'], a:0, x:'1926년에 "가갸날"로 시작했어요. 올해가 꼭 100년째!' },
  { c:'맞춤법', q:'맞는 말은? "그럼 안 ___요!"', o:['되','돼'], a:1, x:"'돼'가 맞아요. '되어'를 줄이면 '돼'! (안 돼요)" },
  { c:'맞춤법', q:'맞는 말은? "___일이야!"', o:['웬','왠'], a:0, x:"'웬일'이 맞아요. '왠'은 '왠지'에만 써요." },
  { c:'맞춤법', q:'맞는 말은? "숙제를 ___ 끝냈어!"', o:['금새','금세'], a:1, x:"'금세'가 맞아요. '금시에'를 줄인 말이에요." },
  { c:'맞춤법', q:'맞는 말은? "이걸 ___?"', o:['어떡해','어떻해'], a:0, x:"'어떡해'가 맞아요. '어떻게 해'를 줄인 말!" },
  { c:'흔한남매', q:'흔한남매의 두 사람 이름은?', o:['으뜸 & 에이미','뽀로로 & 크롱','하츄핑 & 로미'], a:0, x:'오빠 으뜸이와 동생 에이미! 공연 때 이름 불러 주기 📣' }
];

const CHEERS = [
  ['으뜸 에이미 사랑해요','#ff5a8a'],['흔한남매 최고!','#6b4fd8'],['저요! 저요!','#ff9a3c'],['한글 퀴즈 자신 있어요','#2fbf71'],
  ['ㅎㄴㄴㅁ 최고','#3fb6e8'],['티니핑 사랑해','#ff6fa5'],['세종대왕님 고마워요','#3b3350'],['오늘 진짜 행복해','#ffb400']
];

const KIDS = [ {k:'k1',n:'첫째',e:'🦁'}, {k:'k2',n:'둘째',e:'🐰'}, {k:'k3',n:'막내',e:'🐻'} ];
const STAMPS = [
  {k:'quiz',e:'🧠',n:'퀴즈 박사',d:'차에서 퀴즈 10개 이상 맞히기'},
  {k:'hangeul',e:'🔤',n:'한글 놀이터',d:'체험 1개 이상 완성'},
  {k:'hn',e:'🎤',n:'흔한남매',d:'손 들고 "저요!" 외치기'},
  {k:'ping',e:'🎀',n:'티니핑',d:'율동 끝까지 따라 하기'},
  {k:'reung',e:'👑',n:'세종대왕릉',d:'"고맙습니다" 인사하기'},
  {k:'bread',e:'🍞',n:'빵축제',d:'한글 쿠키 or 여고빵 맛보기'},
  {k:'bridge',e:'🌉',n:'출렁다리',d:'끝까지 건너기'},
  {k:'sunset',e:'🌅',n:'노을',d:'노을 보며 가족사진'},
  {k:'thanks',e:'💛',n:'엄마 아빠께',d:'"오늘 고마워요" 말하기'}
];

// ---------- 상태 ----------
const LS = {
  get(k,d){ try{ const v=localStorage.getItem('hg26_'+k); return v==null?d:JSON.parse(v);}catch(e){return d;} },
  set(k,v){ try{ localStorage.setItem('hg26_'+k, JSON.stringify(v)); }catch(e){} }
};
let plan = LS.get('plan','B');
const $ = s=>document.querySelector(s);
const esc = s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

// 지금 시각 (KST). ?t=13:10 으로 시뮬레이션 가능
function nowInfo(){
  const u = new URL(location.href);
  const sim = u.searchParams.get('t');
  const parts = new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());
  const g = t=>parts.find(p=>p.type===t).value;
  let date = `${g('year')}-${g('month')}-${g('day')}`;
  let mins = (+g('hour')%24)*60 + +g('minute');
  if (sim && /^\d{1,2}:\d{2}$/.test(sim)) { const [h,m]=sim.split(':').map(Number); mins=h*60+m; date=DAY; }
  return { date, mins };
}
const toMin = t=>{ const [h,m]=t.split(':').map(Number); return h*60+m; };
const fmtLeft = m=> m>=60 ? `${Math.floor(m/60)}시간 ${m%60}분` : `${m}분`;

function navBtns(pk){
  const p = P[pk]; if(!p) return '';
  const q = encodeURIComponent(p.q);
  return `<a class="btn kakao" href="https://map.kakao.com/link/search/${q}" target="_blank" rel="noopener">🗺 카카오맵</a>
          <a class="btn naver" href="https://map.naver.com/p/search/${q}" target="_blank" rel="noopener">N 네이버</a>`;
}
function telBtn(t){ return t ? `<a class="btn tel" href="tel:${t.replace(/-/g,'')}">📞 ${t}</a>` : ''; }

// ---------- 렌더 ----------
function renderSwitch(){
  ['#planSwitch','#planSwitch2'].forEach(sel=>{
    const el=$(sel); if(!el) return;
    el.innerHTML = ['B','A'].map(k=>{ const p=PLANS[k];
      return `<button data-plan="${k}" class="${plan===k?'on':''}">${p.rec?'<span class="rec">추천</span>':''}${p.name}<small>${p.sub}</small></button>`; }).join('');
    el.querySelectorAll('button').forEach(b=>b.onclick=()=>{ plan=b.dataset.plan; LS.set('plan',plan); renderAll(); });
  });
  $('#planWhy').innerHTML = `<div class="why">${PLANS[plan].why}</div>`;
}

function curIndex(items, mins){
  let idx=-1;
  items.forEach((it,i)=>{ if(toMin(it.t)<=mins) idx=i; });
  return idx;
}

function renderNow(){
  const {date, mins} = nowInfo();
  const items = PLANS[plan].items;
  const el = $('#nowCard');
  const hnLeft = toMin('14:00') - mins;
  const hnBanner = `<div class="hn-banner" data-go="hn"><div class="e">🎤</div><div><b>흔한남매 토크쇼 작전</b><br><small>자리잡기 13:00 · 공연 14:00 · 눌러서 작전 보기</small></div></div>`;
  if (date < DAY) { el.innerHTML = `<div class="now-top"><div class="now-emoji">🗓</div><div><div class="now-lbl">곧 출발</div><div class="now-title">한글날(10/9) 여주 나들이</div></div></div>${hnBanner}`; return; }
  if (date > DAY || mins >= toMin('21:00')) {
    el.innerHTML = `<div class="now-top"><div class="now-emoji">🌙</div><div><div class="now-lbl">오늘의 모험 끝</div><div class="now-title">수고했어요 우리 가족 💛</div></div></div>
      <p class="now-desc">⭐ 도장 탭에서 삼남매 도장 개수 확인하고, 오늘의 한 줄도 남겨요.</p>`; return;
  }
  const i = curIndex(items, mins);
  const cur = items[i] || items[0];
  const nxt = items[i+1];
  let html = `<div class="now-top"><div class="now-emoji">${cur.e}</div><div><div class="now-lbl">지금 할 일 · ${cur.t}~</div><div class="now-title">${esc(cur.title)}</div></div></div>
    <p class="now-desc">${esc(cur.desc)}</p>${cur.tip?`<div class="ti-tip">💡 ${esc(cur.tip)}</div>`:''}
    <div class="btns">${navBtns(cur.place)}${telBtn(cur.tel)}</div>`;
  if (nxt) html += `<div class="next-box"><div class="lbl">다음 · ${nxt.t} (${fmtLeft(toMin(nxt.t)-mins)} 뒤)</div><div class="nm">${nxt.e} ${esc(nxt.title)}</div></div>`;
  if (hnLeft > 0) {
    const seatLeft = toMin('13:00') - mins;
    html += `<div class="hn-banner" data-go="hn"><div class="e">🎤</div><div>${seatLeft>0?`흔한남매 자리잡기까지 <b>${fmtLeft(seatLeft)}</b>`:`<b>지금 자리 지키는 중!</b> 공연까지 ${fmtLeft(hnLeft)}`}<br><small>눌러서 작전 보기</small></div></div>`;
  }
  el.innerHTML = html;
}

function renderTimeline(){
  const {date, mins} = nowInfo();
  const items = PLANS[plan].items;
  const today = date===DAY;
  const ci = today ? curIndex(items, mins) : -1;
  $('#timeline').innerHTML = items.map((it,i)=>{
    const cls = ['ti', it.star?'star':'', today&&i===ci?'now':'', (today&&i<ci)||it.past?'past':''].join(' ');
    const tag = it.tag==='new'?'<span class="tag new">NEW</span>':it.tag==='moved'?'<span class="tag moved">시간 변경</span>':'';
    return `<div class="${cls}" id="ti${i}">
      <div class="ti-head"><span class="ti-time">${it.t}</span><span class="ti-e">${it.e}</span><span class="ti-title">${esc(it.title)}${tag}</span></div>
      <p class="ti-desc">${esc(it.desc)}</p>${it.tip?`<div class="ti-tip">💡 ${esc(it.tip)}</div>`:''}
      ${(it.place||it.tel)?`<div class="btns">${navBtns(it.place)}${telBtn(it.tel)}</div>`:''}
    </div>`; }).join('');
}

function renderCalls(){
  const list = [ ['구능촌 (점심)','오리구이·가마솥밥 · 11:30 오픈','031-882-4893'], ['솔밭정원 (점심 대안)','','031-884-3003'], ['나들목 여주쌀밥 (저녁 선택)','룸·유아의자 · 예약 권장','031-881-6077'], ['세종대왕릉','주차·현장 문의','031-885-3123'], ['여주세종문화관광재단','행사 문의','031-881-9692'] ];
  $('#calls').innerHTML = list.map(([n,s,t])=>`<div class="call"><div><b>${n}</b>${s?`<small>${s}</small>`:''}</div>${telBtn(t)}</div>`).join('');
}

function renderDiff(){
  $('#diff').innerHTML = (plan==='B'?ORIGINAL:[
    ['07:20 출발','08:00 출발 (실제)'],['09:40 도착','10:40 도착 · 엄마+아이들 먼저 하차'],['10:00 한글 놀이터','14:50 한글 놀이터'],['11:00 티니핑','11:00 티니핑 (그대로)'],['12:00 구능촌','11:50 빠른 점심'],['14:00 흔한남매','14:00 흔한남매 (13:00 자리잡기)'],['15:30 빵축제','15:50 빵축제'],['17:00 귀가','17:30 귀가']
  ]).map(([o,n])=>`<div class="diff-row"><div class="o">${o}</div><div class="ar">→</div><div class="n ${o.slice(6)===n.slice(6)?'same':''}">${n}</div></div>`).join('')
  + `<p class="muted small">빠진 일정 0개. 차 안 퀴즈 연습, 흔한남매 자리잡기${plan==='B'?', 출렁다리 노을':''}이 새로 생겼어요.</p>`;
}

function renderOps(){
  const {date, mins} = nowInfo();
  $('#ops').innerHTML = OPS.map(([t,s],i)=>{
    const st = date===DAY ? (toMin(t)<=mins && (i===OPS.length-1 || toMin(OPS[i+1][0])>mins) ? 'cur' : toMin(t)<mins ? 'done':'') : '';
    return `<li class="${st}"><span class="t">${t}</span><span>${s}</span></li>`; }).join('');
  const left = toMin('14:00')-mins;
  $('#hnCount').innerHTML = date===DAY && left>0 ? `공연까지<span class="big-count">${fmtLeft(left)}</span>` : date===DAY && left>-50 ? '<span class="big-count">지금 공연 중! 🎉</span>' : '';
  // seat map
  const rows=[]; for(let r=1;r<=9;r++){ let s=''; for(let c=1;c<=12;c++){ if(c===7) s+='<i class="gap"></i>'; let cl=''; if(r>=3&&r<=7&&c>=4&&c<=9) cl=(c===6||c===7||c===8&&false)?'good':'ok'; if(r>=3&&r<=7&&(c===6||c===7)) cl='good'; if(r>=3&&r<=6&&(c===5||c===8)) cl='good'; s+=`<i class="${cl}"></i>`; } rows.push(`<div class="row">${s}</div>`); }
  $('#seatRows').innerHTML = rows.join('');
}

function renderBag(){
  const st = LS.get('bag',{});
  $('#bag').innerHTML = BAG.map((b,i)=>`<div class="bag ${st[i]?'on':''}" data-i="${i}"><div class="box">${st[i]?'✓':''}</div><span>${b}</span></div>`).join('');
  $('#bag').querySelectorAll('.bag').forEach(el=>el.onclick=()=>{ const s=LS.get('bag',{}); s[el.dataset.i]=!s[el.dataset.i]; LS.set('bag',s); renderBag(); });
}

// QUIZ
let qi = 0, score = 0, answered = false;
function renderQuiz(){
  const el = $('#quiz');
  if (qi >= QUIZ.length) {
    const best = Math.max(LS.get('best',0), score); LS.set('best',best);
    el.innerHTML = `<div class="now-emoji" style="font-size:3rem">🏆</div><div class="q-text">${QUIZ.length}문제 중 ${score}개 정답!</div>
      <p>${score>=12?'흔한남매 퀴즈, 손 들 준비 완료! 🙋':score>=8?'조금만 더 연습하면 완벽해요!':'한 번 더 해 볼까요? 두 번째엔 훨씬 잘 돼요!'}</p>
      <p class="muted small">최고 기록 ${best}개</p><button class="btn big" id="qRestart">다시 하기</button>`;
    $('#qRestart').onclick=()=>{ qi=0; score=0; answered=false; renderQuiz(); };
    if (score>=10) confetti();
    return;
  }
  const q = QUIZ[qi]; answered=false;
  el.innerHTML = `<div class="q-prog">${qi+1} / ${QUIZ.length} · 맞힌 개수 ${score}</div><span class="q-cat">${q.c}</span>
    <div class="q-text">${esc(q.q)}</div>
    <div class="q-opts">${q.o.map((o,i)=>`<button data-i="${i}">${esc(o)}</button>`).join('')}</div><div id="qAfter"></div>`;
  el.querySelectorAll('.q-opts button').forEach(b=>b.onclick=()=>{
    if(answered) return; answered=true;
    const i=+b.dataset.i, ok=i===q.a; if(ok){ score++; confetti(6); }
    el.querySelectorAll('.q-opts button').forEach((x,j)=>{ if(j===q.a) x.classList.add('right'); else if(j===i) x.classList.add('wrong'); });
    $('#qAfter').innerHTML = `<div class="q-exp">${ok?'⭕ 정답!':'❌ 아쉬워요!'} ${esc(q.x)}</div><div class="btns" style="justify-content:center"><button class="btn big" id="qNext">${qi+1<QUIZ.length?'다음 문제 →':'결과 보기'}</button></div>`;
    $('#qNext').onclick=()=>{ qi++; renderQuiz(); };
  });
}

// CHEER BOARD
function showBoard(text,color){
  const b=$('#board'); $('#boardText').textContent=text; b.style.background=color||'#ff5a8a'; b.hidden=false;
  try{ document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); }catch(e){}
}
function renderCheers(){
  $('#cheers').innerHTML = CHEERS.map(([t,c])=>`<button style="background:${c}" data-t="${esc(t)}" data-c="${c}">${esc(t)}</button>`).join('');
  $('#cheers').querySelectorAll('button').forEach(b=>b.onclick=()=>showBoard(b.dataset.t,b.dataset.c));
  $('#cheerGo').onclick=()=>{ const v=$('#cheerInput').value.trim(); if(v) showBoard(v,'#6b4fd8'); };
  $('#board').onclick=()=>{ $('#board').hidden=true; try{ document.fullscreenElement && document.exitFullscreen(); }catch(e){} };
}

// STAMPS
let kid = LS.get('kid','k1');
function renderStamps(){
  const st = LS.get('stamps',{});
  $('#kidTabs').innerHTML = KIDS.map(k=>{ const n=STAMPS.filter(s=>st[k.k+'_'+s.k]).length; return `<button class="${kid===k.k?'on':''}" data-k="${k.k}"><span>${k.e}</span>${k.n} ${n}개</button>`; }).join('');
  $('#kidTabs').querySelectorAll('button').forEach(b=>b.onclick=()=>{ kid=b.dataset.k; LS.set('kid',kid); renderStamps(); });
  const have = STAMPS.filter(s=>st[kid+'_'+s.k]).length;
  $('#stampProgress').innerHTML = `<div style="width:${Math.round(have/STAMPS.length*100)}%"></div>`;
  $('#stamps').innerHTML = STAMPS.map(s=>`<div class="stamp ${st[kid+'_'+s.k]?'on':''}" data-k="${s.k}"><div class="se">${s.e}</div><b>${s.n}</b><small>${s.d}</small></div>`).join('');
  $('#stamps').querySelectorAll('.stamp').forEach(el=>el.onclick=()=>{ const s=LS.get('stamps',{}); const key=kid+'_'+el.dataset.k; s[key]=!s[key]; LS.set('stamps',s); if(s[key]) confetti(10); renderStamps(); });
  const d=$('#diary'); d.value = LS.get('diary',''); d.oninput=()=>LS.set('diary',d.value);
}

// WEATHER
async function loadWeather(){
  try{
    const r = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.30&longitude=127.61&hourly=temperature_2m,precipitation_probability,weathercode&daily=sunset&timezone=Asia%2FSeoul&start_date='+DAY+'&end_date='+DAY);
    const j = await r.json();
    const pick=[10,12,14,16,18];
    const ic=c=>c===0?'☀️':c<=2?'🌤':c===3?'☁️':c<=48?'🌫':c<=67?'🌧':c<=77?'❄️':c<=82?'🌦':'⛈';
    $('#weather').innerHTML = pick.map(h=>`<div class="wh"><div>${h}시</div><div class="e">${ic(j.hourly.weathercode[h])}</div><b>${Math.round(j.hourly.temperature_2m[h])}°</b><div class="muted">☔${j.hourly.precipitation_probability[h]??0}%</div></div>`).join('')
      + `<div class="wnote">해 지는 시간 ${j.daily.sunset[0].slice(11)} · 낮엔 반팔도 OK, 저녁엔 겉옷 꼭!</div>`;
  }catch(e){ $('#weather').innerHTML='<div class="muted">날씨를 못 불러왔어요. 낮 최고 23~24도, 맑음 예보.</div>'; }
}

function confetti(n=24){
  const box=$('#confetti'); const em=['🎉','⭐','💛','🎀','🍞','ㄱ','ㅎ'];
  for(let i=0;i<n;i++){ const s=document.createElement('i'); s.textContent=em[i%em.length]; s.style.left=Math.random()*100+'vw'; s.style.animationDelay=Math.random()*.5+'s'; box.appendChild(s); setTimeout(()=>s.remove(),2400); }
}

function sky(){ const s=$('#sky'); const ch=['ㄱ','ㄴ','ㄷ','ㅎ','ㅏ','ㅗ','⭐','🍞']; for(let i=0;i<10;i++){ const x=document.createElement('i'); x.textContent=ch[i%ch.length]; x.style.left=Math.random()*100+'vw'; x.style.fontSize=(14+Math.random()*16)+'px'; x.style.animationDelay=(-Math.random()*16)+'s'; s.appendChild(x);} }

function go(tab){
  document.querySelectorAll('.tab-page').forEach(p=>p.classList.toggle('active', p.id==='page-'+tab));
  document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  window.scrollTo({top:0});
  if(tab==='plan'){ const n=document.querySelector('.ti.now'); if(n) setTimeout(()=>n.scrollIntoView({block:'center'}),60); }
}
document.querySelectorAll('#nav button').forEach(b=>b.onclick=()=>go(b.dataset.tab));
document.addEventListener('click',e=>{ const g=e.target.closest('[data-go]'); if(g) go(g.dataset.go); });

function renderAll(){ renderSwitch(); renderNow(); renderTimeline(); renderDiff(); renderOps(); }
sky(); renderAll(); renderCalls(); renderBag(); renderQuiz(); renderCheers(); renderStamps(); loadWeather();
const startTab = new URL(location.href).searchParams.get('tab'); if (startTab) go(startTab);
setInterval(()=>{ renderNow(); renderOps(); }, 30000);
})();
