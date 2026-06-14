/* =====================================================================
   숨은 돈 찾기 — 공통 상단 메뉴 (그룹/드롭다운 버전)
   ---------------------------------------------------------------------
   이 파일 하나만 고치면 전체 페이지의 상단 메뉴가 한 번에 바뀝니다.
   메뉴를 추가·수정·삭제하려면 아래 GROUPS 배열만 편집하세요.
   - 단일 메뉴:   { label:'홈', href:'/' }
   - 드롭다운:    { label:'복지·지원금', children:[ {label, href}, ... ] }
   - NEW 뱃지:    { label:'테스트', href:'/test', badge:'NEW' }
   ===================================================================== */
(function () {
  var BRAND = { label: '숨은 돈 찾기', href: '/' };
  var CTA   = { label: '내 혜택 진단하기', href: '/' };

  var GROUPS = [
    { label: '홈', href: '/' },
    { label: '복지·지원금', children: [
      { label: '출산·육아 지원금', href: '/baby/' },
      { label: '청년 지원금',      href: '/youth/' },
      { label: '어르신·노후 지원금', href: '/senior/' },
      { label: '한부모·복지 진단',   href: '/welfare/' }
    ]},
    { label: '근로자', children: [
      { label: '연말정산 환급',   href: '/tax/' },
      { label: '실업급여 계산기', href: '/jobless/' }
    ]},
    { label: '주거·금융', children: [
      { label: '부동산 대출',         href: '/loan/' },
      { label: '장기전세·공공임대',   href: '/rent/' },
      { label: '전세보증보험 계산기', href: '/guarantee/' },
      { label: '숨은 환급금 조회',    href: '/refund/' },
      { label: '요금감면 자격 진단',  href: '/utility/' }
    ]},
    { label: '심리테스트', href: '/test/', badge: 'NEW' },
    { label: '사업자', children: [
      { label: '마케팅 자가진단',     href: '/marketing-check/', badge: 'NEW' },
      { label: '내 가게 경영진단',    href: '/check/' },
      { label: '마케팅 예산 계산기',  href: '/marketing/' },
      { label: '사업자 지원금',       href: '/business/' },
      { label: '폐업·재도전 지원금',  href: '/closure/' }
    ]},
    { label: '더보기', children: [
      { label: '정책 가이드 (칼럼)', href: '/column/' },
      { label: '회사 소개',          href: '/about/' }
    ]}
  ];

  var CSS = `
  .sdn{position:sticky;top:0;z-index:1000;background:#fff;border-bottom:1px solid #e9ecef;font-family:"Pretendard Variable",Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,"Apple SD Gothic Neo","Noto Sans KR",sans-serif;}
  .sdn *{box-sizing:border-box;}
  .sdn-in{max-width:1200px;margin:0 auto;height:64px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;}
  .sdn-brand{font-size:20px;font-weight:800;letter-spacing:-.5px;color:#191f28;display:flex;align-items:center;gap:7px;white-space:nowrap;text-decoration:none;}
  .sdn-menu{display:flex;align-items:center;gap:2px;list-style:none;margin:0;padding:0;}
  .sdn-menu>li{position:relative;}
  .sdn-menu>li>a,.sdn-menu>li>.sdn-top{display:flex;align-items:center;gap:4px;padding:10px 13px;font-size:15.5px;font-weight:600;color:#3a4150;border-radius:10px;cursor:pointer;white-space:nowrap;background:none;border:none;font-family:inherit;text-decoration:none;}
  .sdn-menu>li>a:hover,.sdn-menu>li>.sdn-top:hover{background:#f2f4f6;}
  .sdn-menu>li.sdn-cur>a,.sdn-menu>li.sdn-cur>.sdn-top{color:#3182f6;}
  .sdn-top .sdn-arr{font-size:9px;color:#8b95a1;transition:transform .2s;}
  .sdn-menu>li.open>.sdn-top .sdn-arr{transform:rotate(180deg);}
  .sdn-drop{position:absolute;top:calc(100% + 6px);left:0;min-width:200px;background:#fff;border:1px solid #e9ecef;border-radius:14px;padding:8px;box-shadow:0 12px 32px rgba(0,0,0,.1);opacity:0;visibility:hidden;transform:translateY(6px);transition:.16s;list-style:none;margin:0;}
  .sdn-menu>li:hover .sdn-drop,.sdn-menu>li.open .sdn-drop{opacity:1;visibility:visible;transform:translateY(0);}
  .sdn-drop li a{display:block;padding:10px 12px;font-size:14.5px;font-weight:500;color:#3a4150;border-radius:9px;white-space:nowrap;text-decoration:none;}
  .sdn-drop li a:hover{background:#eef4ff;color:#3182f6;}
  .sdn-badge{font-size:10px;font-weight:700;color:#fff;background:#3182f6;padding:2px 6px;border-radius:99px;margin-left:6px;vertical-align:middle;}
  .sdn-cta{background:#3182f6;color:#fff;font-weight:700;font-size:15px;padding:11px 18px;border-radius:11px;white-space:nowrap;transition:.15s;text-decoration:none;}
  .sdn-cta:hover{background:#1b64da;}
  .sdn-hamb{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:8px;}
  .sdn-hamb span{width:22px;height:2px;background:#191f28;border-radius:2px;}
  .sdn-mob{display:none;}
  @media (max-width:920px){
    .sdn-menu,.sdn-in>.sdn-cta{display:none;}
    .sdn-hamb{display:flex;}
    .sdn-mob{border-top:1px solid #e9ecef;background:#fff;max-height:calc(100vh - 64px);overflow-y:auto;}
    .sdn-mob.show{display:block;}
    .sdn-mg{border-bottom:1px solid #f2f4f6;}
    .sdn-mtop{width:100%;display:flex;justify-content:space-between;align-items:center;padding:16px 20px;font-size:16px;font-weight:700;color:#191f28;background:none;border:none;font-family:inherit;cursor:pointer;text-decoration:none;}
    .sdn-mtop .sdn-arr{font-size:11px;color:#8b95a1;transition:transform .2s;}
    .sdn-mg.open .sdn-mtop .sdn-arr{transform:rotate(180deg);}
    .sdn-msub{display:none;padding:0 20px 12px;}
    .sdn-mg.open .sdn-msub{display:block;}
    .sdn-msub a{display:block;padding:11px 12px;font-size:15px;font-weight:500;color:#4a5160;border-radius:9px;text-decoration:none;}
    .sdn-msub a:active{background:#eef4ff;}
    .sdn-mcta{margin:16px 20px 22px;display:block;text-align:center;background:#3182f6;color:#fff;font-weight:700;padding:15px;border-radius:12px;text-decoration:none;}
  }`;

  var path = location.pathname.replace(/index\.html$/,'');
  function isCur(href){ if(href==='/') return path==='/'; return path.indexOf(href)===0; }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function badge(b){ return b ? ' <span class="sdn-badge">'+esc(b)+'</span>' : ''; }

  var deskItems = GROUPS.map(function(g){
    var cur = g.children ? g.children.some(function(c){return isCur(c.href);}) : isCur(g.href);
    if(!g.children){
      return '<li class="'+(cur?'sdn-cur':'')+'"><a href="'+g.href+'">'+esc(g.label)+badge(g.badge)+'</a></li>';
    }
    var sub = g.children.map(function(c){
      return '<li><a href="'+c.href+'">'+esc(c.label)+badge(c.badge)+'</a></li>';
    }).join('');
    return '<li class="'+(cur?'sdn-cur':'')+'"><button class="sdn-top" type="button">'+esc(g.label)+' <span class="sdn-arr">&#9660;</span></button><ul class="sdn-drop">'+sub+'</ul></li>';
  }).join('');

  var mobItems = GROUPS.map(function(g){
    if(!g.children){
      return '<div class="sdn-mg"><a class="sdn-mtop" href="'+g.href+'">'+esc(g.label)+badge(g.badge)+'</a></div>';
    }
    var sub = g.children.map(function(c){
      return '<a href="'+c.href+'">'+esc(c.label)+badge(c.badge)+'</a>';
    }).join('');
    return '<div class="sdn-mg"><button class="sdn-mtop" type="button">'+esc(g.label)+' <span class="sdn-arr">&#9660;</span></button><div class="sdn-msub">'+sub+'</div></div>';
  }).join('');

  var html =
    '<header class="sdn">'+
      '<div class="sdn-in">'+
        '<a class="sdn-brand" href="'+BRAND.href+'"><span>&#128176;</span> '+esc(BRAND.label)+'</a>'+
        '<nav><ul class="sdn-menu">'+deskItems+'</ul></nav>'+
        '<a class="sdn-cta" href="'+CTA.href+'">'+esc(CTA.label)+'</a>'+
        '<button class="sdn-hamb" id="sdnHamb" type="button" aria-label="메뉴"><span></span><span></span><span></span></button>'+
      '</div>'+
      '<div class="sdn-mob" id="sdnMob">'+mobItems+'<a class="sdn-mcta" href="'+CTA.href+'">'+esc(CTA.label)+'</a></div>'+
    '</header>';

  function mount(){
    var style=document.createElement('style'); style.textContent=CSS; document.head.appendChild(style);
    var holder=document.getElementById('site-nav') || document.querySelector('.site-nav');
    if(holder){ holder.outerHTML=html; } else { document.body.insertAdjacentHTML('afterbegin', html); }

    var hamb=document.getElementById('sdnHamb'), mob=document.getElementById('sdnMob');
    if(hamb){ hamb.addEventListener('click', function(){ mob.classList.toggle('show'); }); }

    var mtops=document.querySelectorAll('.sdn-mtop');
    for(var i=0;i<mtops.length;i++){
      if(mtops[i].tagName==='BUTTON'){ mtops[i].addEventListener('click', function(){ this.parentNode.classList.toggle('open'); }); }
    }
    var tops=document.querySelectorAll('.sdn-menu>li>.sdn-top');
    for(var j=0;j<tops.length;j++){
      tops[j].addEventListener('click', function(e){
        e.stopPropagation();
        var li=this.parentNode, was=li.classList.contains('open');
        var open=document.querySelectorAll('.sdn-menu>li.open');
        for(var k=0;k<open.length;k++){ open[k].classList.remove('open'); }
        if(!was){ li.classList.add('open'); }
      });
    }
    document.addEventListener('click', function(){
      var open=document.querySelectorAll('.sdn-menu>li.open');
      for(var k=0;k<open.length;k++){ open[k].classList.remove('open'); }
    });
  }

  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', mount); } else { mount(); }
})();
