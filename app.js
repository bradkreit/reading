(function () {

  /* ══════════════════════════════════════
     DATA — injected at build time
  ══════════════════════════════════════ */
  var HIGHLIGHTS = [];

  /* ══════════════════════════════════════
     THEMES (25 granular)
  ══════════════════════════════════════ */
  var THEMES = [
    "Accountability & Systems Failure",
    "Technology & Power",
    "Platforms & Digital Culture",
    "Money & Financial Systems",
    "Economics & Markets",
    "Decision-Making & Judgment",
    "Persuasion & Influence",
    "Narrative & Storytelling",
    "Metrics, Standards & Measurement",
    "American Politics & Power",
    "Mortality & Meaning",
    "Time, Future & Self",
    "Maintenance & Making",
    "Medicine & Care",
    "Truth, Fiction & Reality",
    "Vonnegut — War & Absurdity",
    "Vonnegut — Love & Loneliness",
    "Motivation & Human Behavior",
    "Inequality & Class",
    "Language & Communication",
    "Signal Detection & Foresight",
    "Corporate Behavior & Ethics",
    "Memory & Identity",
    "Wisdom & Living Well",
    "Capitalism & Its Discontents"
  ];

  var THEME_COLORS = {
    "Accountability & Systems Failure": "#8b2e2e",
    "Technology & Power":               "#1a3a5c",
    "Platforms & Digital Culture":      "#2d4a6b",
    "Money & Financial Systems":        "#5a4010",
    "Economics & Markets":              "#7a4010",
    "Decision-Making & Judgment":       "#2d5a3d",
    "Persuasion & Influence":           "#4a2d5a",
    "Narrative & Storytelling":         "#3a5a1a",
    "Metrics, Standards & Measurement": "#2d5a5a",
    "American Politics & Power":        "#6b2d2d",
    "Mortality & Meaning":              "#4a4a2d",
    "Time, Future & Self":              "#2d4a4a",
    "Maintenance & Making":             "#5a4a2d",
    "Medicine & Care":                  "#2d5a4a",
    "Truth, Fiction & Reality":         "#6b2d6b",
    "Vonnegut — War & Absurdity":       "#8b3030",
    "Vonnegut — Love & Loneliness":     "#8b4060",
    "Motivation & Human Behavior":      "#3a4a2d",
    "Inequality & Class":               "#5a2d1a",
    "Language & Communication":         "#1a4a5a",
    "Signal Detection & Foresight":     "#2d3a5a",
    "Corporate Behavior & Ethics":      "#4a2d1a",
    "Memory & Identity":                "#5a3a5a",
    "Wisdom & Living Well":             "#3a5a3a",
    "Capitalism & Its Discontents":     "#6b3a1a"
  };

  /* ══════════════════════════════════════
     CROSS-BOOK THREADS (12)
  ══════════════════════════════════════ */
  var THREADS = [
    { id:"accountability", name:"How Accountability Fails", color:"#8b2e2e",
      description:"Systems, organizations, and individuals that evade responsibility — and why it keeps happening.",
      keywords:["accountab","responsib","blame","unaccount","culpab","consequences","institution","bureauc","systemic","oversight"] },
    { id:"narrative_power", name:"The Power of Narrative", color:"#2d5a3d",
      description:"How stories shape belief, drive decisions, and construct reality — in business, politics, and everyday life.",
      keywords:["story","narrative","myth","framing","persuad","belief","meaning","metaphor","rhetoric","fiction"] },
    { id:"incentives", name:"Incentives & Perverse Outcomes", color:"#7a4010",
      description:"When the structures designed to motivate good behavior produce the opposite.",
      keywords:["incentiv","motivat","reward","perverse","unintended","measure","metric","gamif","profit","rational"] },
    { id:"finitude", name:"Living with Limits", color:"#2d5a5a",
      description:"Time, mortality, and what finitude reveals about how we should live.",
      keywords:["mortal","death","finite","limit","time","weeks","meaning","legacy","imperman","life"] },
    { id:"tech_power", name:"Technology & Power", color:"#1a3a5c",
      description:"How technology concentrates power, reshapes society, and what we lose in the process.",
      keywords:["platform","technolog","silicon","digital","internet","algorithm","data","surveillance","monopol","disruption"] },
    { id:"money_fiction", name:"Money as Social Fiction", color:"#5a4a2d",
      description:"The constructed, consensus-based nature of money and how that shapes everything.",
      keywords:["money","debt","credit","currency","barter","value","exchange","financ","capital","wealth"] },
    { id:"bullshit", name:"Bullshit, Deception & Performance", color:"#6b2d6b",
      description:"The gap between appearance and reality — in politics, business, media, and daily life.",
      keywords:["bullshit","deceiv","perform","pretend","image","illusion","mislead","spin","authentic","fake"] },
    { id:"inequality", name:"Inequality & Who Gets What", color:"#3a5a1a",
      description:"How societies distribute resources, opportunity, and risk — and who decides.",
      keywords:["inequal","rich","poor","class","wealth","privilege","distribut","power","elite","ordinary"] },
    { id:"uncertainty", name:"Deciding Under Uncertainty", color:"#2d5a3d",
      description:"How to make good decisions when you don't have all the information you need.",
      keywords:["uncertain","probabili","risk","bet","predict","unknown","chance","judgment","forecast","confident"] },
    { id:"identity", name:"Identity, Memory & Self", color:"#8b2e2e",
      description:"How we construct who we are from memory, narrative, and the roles we inhabit.",
      keywords:["identity","memory","self","character","past","remember","persona","pretend","role","who we"] },
    { id:"maintenance", name:"The Undervalued & Invisible", color:"#5a4a2d",
      description:"Things that keep the world running but receive no glory — maintenance, care, infrastructure.",
      keywords:["maintain","maintenance","repair","care","invisible","unglamor","sustain","infrastructure","labor","upkeep"] },
    { id:"future", name:"Futures & Foresight", color:"#1a3a5c",
      description:"How we anticipate, imagine, and prepare for what comes next.",
      keywords:["future","foresight","signal","trend","anticipat","forecast","scenario","change","emerging","imagine"] }
  ];

  var TITLE_TO_THEMES = {
    "The Unaccountability Machine: Why Big Systems Make Terrible Decisions\u2014and How the World Lost Its Mind": ["Accountability & Systems Failure","Corporate Behavior & Ethics"],
    "Exxon: The Road Not Taken (Kindle Single)": ["Accountability & Systems Failure","Corporate Behavior & Ethics"],
    "Survival of the Richest: Escape Fantasies of the Tech Billionaires": ["Technology & Power","Inequality & Class","Capitalism & Its Discontents"],
    "Why I (Still) Love Tech: In Defense of a Difficult Industry": ["Technology & Power"],
    "Enshittification: Why Everything Suddenly Got Worse and What to Do About It": ["Technology & Power","Capitalism & Its Discontents","Platforms & Digital Culture"],
    "The Year in Slop": ["Technology & Power","Platforms & Digital Culture"],
    "The Modem World: A Prehistory of Social Media": ["Platforms & Digital Culture","Memory & Identity"],
    "Stupid TV, Be More Funny: How the Golden Era of The Simpsons Changed Television-and America-Forever": ["Platforms & Digital Culture","Memory & Identity"],
    "The Nineties: A Book": ["Platforms & Digital Culture","Memory & Identity","American Politics & Power"],
    "Money: The True Story of a Made-Up Thing": ["Money & Financial Systems"],
    "Debt: The First 5,000 Years": ["Money & Financial Systems","Inequality & Class","Capitalism & Its Discontents"],
    "The End of Money: Counterfeiters, Preachers, Techies, Dreamers--and the Coming Cashless Society": ["Money & Financial Systems"],
    "Speculative Communities: Living with Uncertainty in a Financialized World": ["Money & Financial Systems","Inequality & Class","Capitalism & Its Discontents"],
    "The Undercover Economist Strikes Back: How to Run--or Ruin--an Economy": ["Economics & Markets"],
    "The Algebra of Wealth: A Simple Formula for Financial Security": ["Economics & Markets","Wisdom & Living Well"],
    "Narrative and Numbers: The Value of Stories in Business (Columbia Business School Publishing)": ["Economics & Markets","Narrative & Storytelling","Corporate Behavior & Ethics"],
    "Payoff: The Hidden Logic That Shapes Our Motivations (TED Books)": ["Economics & Markets","Motivation & Human Behavior"],
    "Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts": ["Decision-Making & Judgment","Signal Detection & Foresight"],
    "Mental Models:  30 Thinking Tools that Separate the Average From the Exceptional. Improved Decision-Making, Logical Analysis, and Problem-Solving.": ["Decision-Making & Judgment","Signal Detection & Foresight"],
    "The Family Firm: A Data-Driven Guide to Better Decision Making in the Early School Years (The ParentData Series Book 3)": ["Decision-Making & Judgment","Medicine & Care"],
    "Pre-Suasion: A Revolutionary Way to Influence and Persuade": ["Persuasion & Influence","Language & Communication"],
    "How Magicians Think: Misdirection, Deception, and Why Magic Matters": ["Persuasion & Influence","Truth, Fiction & Reality"],
    "On Bullshit": ["Persuasion & Influence","Truth, Fiction & Reality","Language & Communication"],
    "The Secret Life of Pronouns: What Our Words Say About Us": ["Narrative & Storytelling","Language & Communication"],
    "The Science of First: Catching Early Signals Before They Become News": ["Narrative & Storytelling","Signal Detection & Foresight"],
    "The Score: How to Stop Playing Somebody Else's Game": ["Metrics, Standards & Measurement"],
    "Adrift: America in 100 Charts": ["Metrics, Standards & Measurement","American Politics & Power","Capitalism & Its Discontents","Inequality & Class"],
    "The Aftermath: The Last Days of the Baby Boom and the Future of Power in America": ["American Politics & Power"],
    "Romney: A Reckoning": ["American Politics & Power"],
    "Ringmaster: Vince McMahon and the Unmaking of America": ["American Politics & Power","Platforms & Digital Culture"],
    "When Breath Becomes Air": ["Mortality & Meaning","Medicine & Care","Wisdom & Living Well"],
    "Four Thousand Weeks: Time Management for Mortals": ["Mortality & Meaning","Time, Future & Self","Wisdom & Living Well"],
    "The Night the Lights Went Out: A Memoir of Life After Brain Damage": ["Mortality & Meaning","Memory & Identity","Medicine & Care"],
    "Your Future Self: How to Make Tomorrow Better Today": ["Time, Future & Self","Motivation & Human Behavior"],
    "The Algebra of Happiness: Notes on the Pursuit of Success, Love, and Meaning": ["Time, Future & Self","Wisdom & Living Well"],
    "Excellent Advice for Living: Wisdom I Wish I'd Known Earlier": ["Time, Future & Self","Wisdom & Living Well"],
    "Maintenance of Everything: Part One (Maintenance: Of Everything Book 1)": ["Maintenance & Making"],
    "The Heart of Caring: A Life in Pediatrics": ["Medicine & Care","Corporate Behavior & Ethics"],
    "Cat's Cradle: A Novel": ["Truth, Fiction & Reality","Vonnegut — Love & Loneliness"],
    "Mother Night: A Novel": ["Truth, Fiction & Reality","Vonnegut — War & Absurdity","Memory & Identity"],
    "Slaughterhouse-Five: A Novel (Modern Library 100 Best Novels)": ["Mortality & Meaning","Vonnegut — War & Absurdity"],
    "Hocus Pocus": ["Vonnegut — War & Absurdity","Inequality & Class"],
    "Slapstick": ["Vonnegut — Love & Loneliness"],
    "Timequake": ["Vonnegut — Love & Loneliness","Time, Future & Self"],
    "So the Wind Won't Blow It All Away": ["Vonnegut — Love & Loneliness","Memory & Identity"],
  };

  function assignThemes(title) {
    if (TITLE_TO_THEMES[title]) return TITLE_TO_THEMES[title];
    for (var t in TITLE_TO_THEMES) {
      if (title.slice(0,25) === t.slice(0,25)) return TITLE_TO_THEMES[t];
    }
    return ["Other"];
  }

  function threadScore(h, thread) {
    var text = (h.text + ' ' + (h.note||'')).toLowerCase();
    var score = 0;
    thread.keywords.forEach(function(kw){ if (text.indexOf(kw) !== -1) score++; });
    return score;
  }

  /* ══════════════════════════════════════
     STATE
  ══════════════════════════════════════ */
  var S = {
    phase: 'token',
    tab: 'highlights',     // highlights | threads | map | network
    view: 'excerpts',      // excerpts | grouped | flat | conn
    search: '',
    theme: null,
    thread: null,
    book: null,
    author: null,
    sel: null,
    ri: null,
    conceptQuery: ''
  };
  var TOKEN = '';
  var openDD = null;
  var connCache = {};

  /* ══════════════════════════════════════
     UTILS
  ══════════════════════════════════════ */
  function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function fdate(d){ if(!d)return''; try{return new Date(d+'T00:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});}catch(e){return d;} }
  function primaryColor(h){ return THEME_COLORS[(h.themes&&h.themes[0])||h.theme]||'#2d5a3d'; }

  /* ══════════════════════════════════════
     SCREEN MANAGEMENT
  ══════════════════════════════════════ */
  function showPhase(phase){
    S.phase=phase;
    document.getElementById('token-screen').style.display  = phase==='token'   ?'flex' :'none';
    document.getElementById('loading-screen').style.display= phase==='loading' ?'flex' :'none';
    document.getElementById('app').style.display           = phase==='dashboard'?'flex':'none';
  }
  function setLoadingMsg(msg){ var el=document.getElementById('loading-msg'); if(el) el.textContent=msg; }
  function showTokenError(msg){ document.getElementById('token-error').innerHTML='<div class="error-box">'+esc(msg)+'</div>'; }

  /* ══════════════════════════════════════
     API
  ══════════════════════════════════════ */
  async function rwFetch(endpoint, page){
    var url='/api/readwise?endpoint='+endpoint+'&page='+(page||1);
    var res;
    try{ res=await fetch(url,{headers:{'x-readwise-token':TOKEN}}); }
    catch(e){ throw new Error('Network error: '+e.message); }
    var text=await res.text();
    if(!res.ok){
      var detail=''; try{detail=JSON.parse(text).error||text;}catch(_){detail=text;}
      if(res.status===401) throw new Error('Invalid token — check readwise.io/access_token.');
      if(res.status===404) throw new Error('Function not found (404) — is the site deployed on Cloudflare Pages?');
      throw new Error('Error '+res.status+': '+detail);
    }
    try{ return JSON.parse(text); }catch(e){ throw new Error('Bad response: '+text.slice(0,80)); }
  }

  async function fetchAll(endpoint, onProgress){
    var results=[],page=1;
    while(true){
      var data=await rwFetch(endpoint,page);
      results=results.concat(data.results||[]);
      if(onProgress) onProgress(results.length);
      if(!data.next) break;
      page++;
    }
    return results;
  }

  /* ══════════════════════════════════════
     CONNECT / LOAD
  ══════════════════════════════════════ */
  async function connect(){
    var inp=document.getElementById('token-input');
    var token=inp?inp.value.trim():'';
    if(!token){ showTokenError('Please paste your Readwise access token.'); return; }
    TOKEN=token;
    document.getElementById('token-error').innerHTML='';
    var btn=document.getElementById('connect-btn');
    btn.disabled=true; btn.textContent='Connecting…';
    try{
      await rwFetch('highlights',1);
      localStorage.setItem('rw_token',token);
      await loadData();
    }catch(e){
      TOKEN=''; btn.disabled=false; btn.textContent='Connect';
      showTokenError(e.message);
    }
  }

  async function loadData(){
    showPhase('loading');
    try{
      setLoadingMsg('Fetching highlights…');
      var rawHL=await fetchAll('highlights',function(n){ setLoadingMsg('Loaded '+n+' highlights…'); });
      setLoadingMsg('Fetching books…');
      var rawBooks=await fetchAll('books');
      var bookMap={};
      rawBooks.forEach(function(b){ bookMap[b.id]=b; });
      HIGHLIGHTS=rawHL.map(function(h,i){
        var book=bookMap[h.book_id]||{};
        var title=(book.title||'Unknown').replace(/&#39;/g,"'").replace(/&amp;/g,'&').replace(/&quot;/g,'"');
        var author=(book.author||'').replace(/&#39;/g,"'");
        var themes=assignThemes(title);
        return{
          id:i, text:h.text||'', title:title, author:author,
          note:h.note||'', color:h.color||'',
          date:(h.highlighted_at||h.updated||'').slice(0,10),
          themes:themes, theme:themes[0]
        };
      });
      showPhase('dashboard');
      render();
    }catch(e){
      showPhase('token');
      showTokenError(e.message);
    }
  }

  function disconnect(){
    localStorage.removeItem('rw_token');
    TOKEN=''; HIGHLIGHTS=[];
    S.tab='highlights'; S.view='excerpts'; S.search='';
    S.theme=null; S.thread=null; S.book=null; S.author=null;
    S.sel=null; S.ri=null; S.conceptQuery='';
    document.getElementById('token-input').value='';
    showPhase('token');
  }

  /* ══════════════════════════════════════
     FILTERING
  ══════════════════════════════════════ */
  function filtered(){
    var h=HIGHLIGHTS;
    if(S.search){
      var q=S.search.toLowerCase();
      h=h.filter(function(x){
        return (x.text||'').toLowerCase().indexOf(q)!==-1
          ||(x.title||'').toLowerCase().indexOf(q)!==-1
          ||(x.author||'').toLowerCase().indexOf(q)!==-1
          ||(x.note||'').toLowerCase().indexOf(q)!==-1;
      });
    }
    if(S.theme)  h=h.filter(function(x){ return x.themes&&x.themes.indexOf(S.theme)!==-1; });
    if(S.book)   h=h.filter(function(x){ return x.title===S.book; });
    if(S.author) h=h.filter(function(x){ return x.author===S.author; });
    if(S.thread){
      var thread=THREADS.find(function(t){ return t.id===S.thread; });
      if(thread){
        h=h.filter(function(x){ return threadScore(x,thread)>0; });
        h=h.slice().sort(function(a,b){ return threadScore(b,thread)-threadScore(a,thread); });
      }
    }
    if(S.conceptQuery){
      var cq=S.conceptQuery.toLowerCase().split(' ').filter(function(w){ return w.length>2; });
      h=h.filter(function(x){
        var txt=(x.text+' '+(x.note||'')).toLowerCase();
        return cq.some(function(w){ return txt.indexOf(w)!==-1; });
      });
      h=h.slice().sort(function(a,b){
        var sa=cq.filter(function(w){ return (a.text+' '+(a.note||'')).toLowerCase().indexOf(w)!==-1; }).length;
        var sb=cq.filter(function(w){ return (b.text+' '+(b.note||'')).toLowerCase().indexOf(w)!==-1; }).length;
        return sb-sa;
      });
    }
    return h;
  }

  /* ══════════════════════════════════════
     WORD-BASED CONNECTIONS (fallback)
  ══════════════════════════════════════ */
  function wordConnections(h){
    var words=new Set((h.text||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(' ').filter(function(w){return w.length>5;}));
    return HIGHLIGHTS.filter(function(x){return x.id!==h.id;})
      .map(function(x){
        var score=(x.text||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(' ').filter(function(w){return w.length>5&&words.has(w);}).length;
        return{h:x,score:score};
      })
      .filter(function(x){return x.score>=2;})
      .sort(function(a,b){return b.score-a.score;})
      .slice(0,8);
  }

  /* ══════════════════════════════════════
     DROPDOWNS
  ══════════════════════════════════════ */
  function closeAllDDs(){ document.querySelectorAll('.dd-menu').forEach(function(m){m.classList.remove('open');}); openDD=null; }
  document.addEventListener('click',function(e){ if(!e.target.closest('.dd-wrap')) closeAllDDs(); });

  function toggleDD(name){
    var menu=document.getElementById(name+'-dd-menu'); if(!menu) return;
    var wasOpen=menu.classList.contains('open');
    closeAllDDs();
    if(!wasOpen){
      menu.classList.add('open'); openDD=name;
      var si=document.getElementById(name+'-dd-search');
      if(si){si.value='';filterDDOptions(name,'');si.focus();}
    }
  }
  function filterDDOptions(name,q){
    var c=document.getElementById(name+'-dd-options'); if(!c) return;
    q=q.toLowerCase();
    c.querySelectorAll('.dd-option').forEach(function(o){ o.style.display=(!q||(o.dataset.label||'').toLowerCase().indexOf(q)!==-1)?'':'none'; });
  }

  /* ══════════════════════════════════════
     BUILD BOOK DROPDOWN
  ══════════════════════════════════════ */
  function buildBookDD(){
    var books={};
    HIGHLIGHTS.forEach(function(h){ if(!books[h.title]) books[h.title]={author:h.author,themes:h.themes,count:0}; books[h.title].count++; });
    var byTheme={};
    Object.entries(books).forEach(function(e){
      var t=(e[1].themes&&e[1].themes[0])||'Other';
      if(!byTheme[t]) byTheme[t]=[];
      byTheme[t].push({title:e[0],author:e[1].author,count:e[1].count});
    });
    var html='';
    THEMES.forEach(function(theme){
      var group=byTheme[theme]; if(!group||!group.length) return;
      group.sort(function(a,b){return b.count-a.count;});
      html+='<div class="dd-section-label">'+esc(theme)+'</div>';
      group.forEach(function(b){
        var short=b.title.length>50?b.title.slice(0,48)+'…':b.title;
        html+='<div class="dd-option'+(S.book===b.title?' selected':'')+'" data-label="'+esc(b.title)+'" data-book="'+esc(b.title)+'">'
          +'<span class="dd-opt-name" title="'+esc(b.title)+'">'+esc(short)+'</span>'
          +'<span class="dd-opt-n">'+b.count+'</span></div>';
      });
      html+='<div class="dd-divider"></div>';
    });
    document.getElementById('book-dd-options').innerHTML=html;
    var lbl=S.book?(S.book.length>32?S.book.slice(0,30)+'…':S.book):'All books';
    document.getElementById('book-dd-label').textContent=lbl;
    document.getElementById('book-dd-btn').classList.toggle('active',!!S.book);
  }

  /* ══════════════════════════════════════
     BUILD THEME DROPDOWN
  ══════════════════════════════════════ */
  function buildThemeDD(){
    var counts={};
    HIGHLIGHTS.forEach(function(h){ (h.themes||[h.theme]).forEach(function(t){ counts[t]=(counts[t]||0)+1; }); });
    document.getElementById('theme-dd-options').innerHTML=THEMES.map(function(t){
      var color=THEME_COLORS[t]||'#666';
      return '<div class="dd-option'+(S.theme===t?' selected':'')+'" data-label="'+esc(t)+'" data-theme="'+esc(t)+'">'
        +'<span class="dd-theme-dot" style="background:'+color+'"></span>'
        +'<span class="dd-opt-name">'+esc(t)+'</span>'
        +'<span class="dd-opt-n">'+(counts[t]||0)+'</span></div>';
    }).join('');
    var lbl=S.theme?(S.theme.length>22?S.theme.slice(0,20)+'…':S.theme):'All themes';
    document.getElementById('theme-dd-label').textContent=lbl;
    document.getElementById('theme-dd-btn').classList.toggle('active',!!S.theme);
  }

  /* ══════════════════════════════════════
     SIDEBAR
  ══════════════════════════════════════ */
  function buildSidebar(f){
    document.getElementById('badge').textContent=f.length.toLocaleString()+' highlights';
    var tcounts={};
    HIGHLIGHTS.forEach(function(h){ (h.themes||[h.theme]).forEach(function(t){ tcounts[t]=(tcounts[t]||0)+1; }); });
    document.getElementById('theme-sidebar').innerHTML=THEMES.map(function(t){
      var on=S.theme===t, color=THEME_COLORS[t]||'#666';
      return '<div class="sb-item'+(on?' on':'')+'" data-theme="'+esc(t)+'"'+(on?' style="background:'+color+'18;color:'+color+';"':'')+' title="'+esc(t)+'">'
        +'<span class="sb-dot" style="background:'+color+'"></span>'
        +'<span class="sb-name">'+esc(t)+'</span>'
        +'<span class="sb-n"'+(on?' style="background:'+color+';color:#fff"':'')+'>'+( tcounts[t]||0)+'</span></div>';
    }).join('');
    var acounts={};
    HIGHLIGHTS.forEach(function(h){ if(h.author) acounts[h.author]=(acounts[h.author]||0)+1; });
    var as=Object.entries(acounts).sort(function(a,b){return b[1]-a[1];});
    document.getElementById('author-sidebar').innerHTML=as.map(function(a){
      return '<div class="sb-item'+(S.author===a[0]?' on':'')+'" data-author="'+esc(a[0])+'">'
        +'<span class="sb-name">'+esc(a[0])+'</span><span class="sb-n">'+a[1]+'</span></div>';
    }).join('');
  }

  /* ══════════════════════════════════════
     FILTER BAR
  ══════════════════════════════════════ */
  function renderFilterBar(){
    var chips='';
    if(S.thread){ var thr=THREADS.find(function(t){return t.id===S.thread;}); if(thr) chips+='<div class="fchip" data-clear="thread" style="background:'+thr.color+'18;color:'+thr.color+';">Thread: '+esc(thr.name)+' <span>✕</span></div>'; }
    if(S.theme)  chips+='<div class="fchip" data-clear="theme" style="background:'+(THEME_COLORS[S.theme]||'#2d5a3d')+'18;color:'+(THEME_COLORS[S.theme]||'#2d5a3d')+';">Theme: '+esc(S.theme)+' <span>✕</span></div>';
    if(S.book)   chips+='<div class="fchip" data-clear="book">Book: '+esc(S.book.slice(0,40))+(S.book.length>40?'…':'')+' <span>✕</span></div>';
    if(S.author) chips+='<div class="fchip" data-clear="author">Author: '+esc(S.author)+' <span>✕</span></div>';
    if(S.conceptQuery) chips+='<div class="fchip" data-clear="concept">Concept: &ldquo;'+esc(S.conceptQuery)+'&rdquo; <span>✕</span></div>';
    if(S.search) chips+='<div class="fchip" data-clear="search">Search: &ldquo;'+esc(S.search)+'&rdquo; <span>✕</span></div>';
    return chips?'<div class="filter-bar">'+chips+'</div>':'';
  }

  /* ══════════════════════════════════════
     HIGHLIGHT CARD
  ══════════════════════════════════════ */
  function hlCard(h, showBook){
    var color=primaryColor(h);
    return '<div class="hl">'
      +(showBook?'<div class="hl-bk"><span class="hl-theme-dot" style="background:'+color+'"></span>'+esc(h.title)+(h.author?' &middot; '+esc(h.author):'')+' </div>':'')
      +'<div class="hl-text">'+esc(h.text||'')+'</div>'
      +(h.note?'<div class="hl-note">'+esc(h.note)+'</div>':'')
      +'<div class="hl-meta">'
      +'<span class="hl-theme-pill" style="background:'+color+'18;color:'+color+'">'+esc((h.themes&&h.themes[0])||h.theme||'')+'</span>'
      +'<span class="hl-date">'+fdate(h.date)+'</span></div></div>';
  }

  /* ══════════════════════════════════════
     EXCERPTS VIEW (default — by theme)
  ══════════════════════════════════════ */
  function renderExcerpts(h){
    if(!h.length) return '<div class="empty">No highlights match.</div>';

    // Random highlight card at top
    if(S.ri===null||S.ri>=h.length) S.ri=Math.floor(Math.random()*h.length);
    var rh=h[S.ri]; var rcolor=primaryColor(rh);
    var top='<div class="random-card" style="border-left:3px solid '+rcolor+'">'
      +'<div class="random-body">'
      +'<div class="random-theme" style="color:'+rcolor+'">'+esc((rh.themes&&rh.themes[0])||rh.theme||'')+'</div>'
      +'<div class="rq">'+esc((rh.text||'').slice(0,300))+((rh.text||'').length>300?'…':'')+'</div>'
      +'<div class="rs">'+esc(rh.author)+' — '+esc(rh.title.slice(0,60))+'</div>'
      +'</div><button class="btn-sm" id="random-btn">&#8635; Another</button></div>';

    // Group by primary theme
    var groups={},order=[];
    h.forEach(function(x){
      var t=(x.themes&&x.themes[0])||x.theme||'Other';
      if(!groups[t]){groups[t]=[];order.push(t);}
      groups[t].push(x);
    });

    return top+order.map(function(theme){
      var hls=groups[theme], color=THEME_COLORS[theme]||'#888';
      return '<div class="grp">'
        +'<div class="grp-hdr">'
        +'<span class="grp-color-dot" style="background:'+color+'"></span>'
        +'<span class="grp-title">'+esc(theme)+'</span>'
        +'<span class="grp-n">'+hls.length+'</span>'
        +'<span class="chev">▾</span></div>'
        +'<div class="grp-body">'+hls.map(function(x){return hlCard(x,true);}).join('')+'</div>'
        +'</div>';
    }).join('');
  }

  /* ══════════════════════════════════════
     GROUPED BY BOOK
  ══════════════════════════════════════ */
  function renderGrouped(h){
    if(!h.length) return '<div class="empty">No highlights match.</div>';
    var groups={},order=[];
    h.forEach(function(x){
      if(!groups[x.title]){groups[x.title]=[];order.push(x.title);}
      groups[x.title].push(x);
    });
    return order.map(function(title){
      var hls=groups[title], color=primaryColor(hls[0]);
      return '<div class="grp">'
        +'<div class="grp-hdr">'
        +'<span class="grp-color-dot" style="background:'+color+'"></span>'
        +'<span class="grp-title">'+esc(title)+'</span>'
        +'<span class="grp-author">'+esc(hls[0].author)+'</span>'
        +'<span class="grp-n">'+hls.length+'</span>'
        +'<span class="chev">▾</span></div>'
        +'<div class="grp-body">'+hls.map(function(x){return hlCard(x,false);}).join('')+'</div>'
        +'</div>';
    }).join('');
  }

  /* ══════════════════════════════════════
     FLAT VIEW
  ══════════════════════════════════════ */
  function renderFlat(h){
    if(!h.length) return '<div class="empty">No highlights match.</div>';
    return '<div class="flat-wrap">'+h.map(function(x){return hlCard(x,true);}).join('')+'</div>';
  }

  /* ══════════════════════════════════════
     CONNECTIONS VIEW
  ══════════════════════════════════════ */
  function renderConn(h){
    if(!S.sel){
      return '<div class="conn-intro"><h3>Connections Explorer</h3>'
        +'<p>Click any highlight to find conceptually related ones across your library.</p></div>'
        +h.slice(0,60).map(function(x){
          return '<div class="grp conn-pick" data-sel="'+x.id+'">'
            +'<div class="grp-hdr"><span class="grp-title">'+esc(x.title)+'</span><span class="grp-author">'+esc(x.author)+'</span></div>'
            +'<div class="grp-body"><div class="hl"><div class="hl-text">'+esc((x.text||'').slice(0,200))+((x.text||'').length>200?'…':'')+'</div></div></div>'
            +'</div>';
        }).join('');
    }
    var sel=HIGHLIGHTS.find(function(x){return x.id===S.sel;});
    if(!sel) return '';
    var color=primaryColor(sel);
    var conns=wordConnections(sel);
    return '<div class="back" id="conn-back">← Back</div>'
      +'<div class="conn-sel">'
      +'<div class="conn-lbl" style="color:'+color+'">'+esc((sel.themes&&sel.themes[0])||sel.theme||'')+'</div>'
      +'<div class="conn-src">'+esc(sel.title)+' &middot; '+esc(sel.author)+'</div>'
      +'<div class="conn-qt">'+esc(sel.text||'')+'</div></div>'
      +'<div class="results-box"><div class="results-hdr">Related highlights ('+conns.length+')</div>'
      +(conns.length===0?'<div class="empty-sm">No strong matches found — try a different highlight.</div>'
        :conns.map(function(c){
          var col=primaryColor(c.h);
          return '<div class="rel-item">'
            +'<span class="rel-score">'+c.score+' shared</span>'
            +'<div class="rel-body"><div class="rel-text">'+esc((c.h.text||'').slice(0,200))+((c.h.text||'').length>200?'…':'')+'</div>'
            +'<div class="rel-src"><span class="rel-theme-dot" style="background:'+col+'"></span>'+esc(c.h.title)+' &middot; '+esc(c.h.author)+'</div></div></div>';
        }).join('')
      )+'</div>';
  }

  /* ══════════════════════════════════════
     CROSS-BOOK THREADS TAB
  ══════════════════════════════════════ */
  function renderThreadsTab(){
    if(!S.thread){
      // Thread browser
      return '<div class="threads-intro">'
        +'<h2>Cross-Book Threads</h2>'
        +'<p>Ideas that run through your entire library, surfacing connections across books you might never have linked together.</p>'
        +'</div>'
        +'<div class="threads-grid">'
        +THREADS.map(function(t){
          var scored=HIGHLIGHTS.filter(function(h){return threadScore(h,t)>0;});
          var books=new Set(scored.map(function(h){return h.title;}));
          return '<div class="thread-card" data-thread="'+t.id+'">'
            +'<div class="thread-card-accent" style="background:'+t.color+'"></div>'
            +'<div class="thread-card-body">'
            +'<div class="thread-name">'+esc(t.name)+'</div>'
            +'<div class="thread-desc">'+esc(t.description)+'</div>'
            +'<div class="thread-stats">'
            +'<span class="thread-stat">'+scored.length+' highlights</span>'
            +'<span class="thread-stat">'+books.size+' books</span>'
            +'</div></div></div>';
        }).join('')
        +'</div>';
    }

    // Thread detail view
    var thread=THREADS.find(function(t){return t.id===S.thread;});
    if(!thread) return '';
    var scored=HIGHLIGHTS.filter(function(h){return threadScore(h,thread)>0;});
    scored.sort(function(a,b){return threadScore(b,thread)-threadScore(a,thread);});
    var books=Array.from(new Set(scored.map(function(h){return h.title;})));

    return '<div class="back" id="thread-back">← All threads</div>'
      +'<div class="thread-detail-header" style="border-left:4px solid '+thread.color+'">'
      +'<div class="thread-detail-name" style="color:'+thread.color+'">'+esc(thread.name)+'</div>'
      +'<div class="thread-detail-desc">'+esc(thread.description)+'</div>'
      +'<div class="thread-detail-stats">'+scored.length+' highlights across '+books.length+' books</div>'
      +'</div>'
      +'<div class="thread-book-pills">'
      +books.map(function(b){
        return '<span class="thread-book-pill">'+esc(b.length>40?b.slice(0,38)+'…':b)+'</span>';
      }).join('')
      +'</div>'
      +'<div class="flat-wrap">'+scored.map(function(h){return hlCard(h,true);}).join('')+'</div>';
  }

  /* ══════════════════════════════════════
     CONCEPT SEARCH PANEL
  ══════════════════════════════════════ */
  function renderConceptSearch(){
    var results=S.conceptQuery?filtered():[];
    var books=Array.from(new Set(results.map(function(h){return h.title;})));
    return '<div class="concept-wrap">'
      +'<div class="concept-header">'
      +'<h2>Concept Search</h2>'
      +'<p>Search by idea — find the most relevant highlights across your entire library.</p>'
      +'<div class="concept-input-wrap">'
      +'<input type="text" id="concept-input" placeholder="e.g. accountability, perverse incentives, mortality, foresight…" value="'+esc(S.conceptQuery)+'"/>'
      +'<button id="concept-clear" class="btn-sm" style="'+(S.conceptQuery?'':'display:none')+'">Clear</button>'
      +'</div>'
      +'</div>'
      +(S.conceptQuery&&results.length?
        '<div class="concept-meta">'+results.length+' highlights across '+books.length+' books</div>'
        +'<div class="concept-book-pills">'+books.map(function(b){
          return '<span class="thread-book-pill">'+esc(b.length>40?b.slice(0,38)+'…':b)+'</span>';
        }).join('')+'</div>'
        +'<div class="flat-wrap">'+results.map(function(h){return hlCard(h,true);}).join('')+'</div>'
        :S.conceptQuery?'<div class="empty">No highlights match "'+esc(S.conceptQuery)+'".</div>':'')
      +'</div>';
  }

  /* ══════════════════════════════════════
     MAP (dynamic layout)
  ══════════════════════════════════════ */
  var MAP={canvas:null,ctx:null,width:0,height:0,animFrame:null,hover:null,dragging:null,dragOffX:0,dragOffY:0,isPanning:false,lastPanX:0,lastPanY:0,scale:1,panX:0,panY:0,expandedBook:null,hlNodes:[],hoveredHL:null};

  function computeMapPositions(){
    var books={};
    HIGHLIGHTS.forEach(function(h){ if(!books[h.title]) books[h.title]={author:h.author,themes:h.themes,theme:h.theme,count:0}; books[h.title].count++; });
    var ANCHORS={
      'Accountability & Systems Failure': {x:30,y:-45},
      'Technology & Power':               {x:60,y:-30},
      'Platforms & Digital Culture':      {x:55,y:-5},
      'Money & Financial Systems':        {x:15,y:20},
      'Economics & Markets':              {x:35,y:15},
      'Decision-Making & Judgment':       {x:-15,y:-50},
      'Persuasion & Influence':           {x:-5,y:-30},
      'Narrative & Storytelling':         {x:10,y:-40},
      'Metrics, Standards & Measurement': {x:5,y:-15},
      'American Politics & Power':        {x:65,y:45},
      'Mortality & Meaning':              {x:-40,y:50},
      'Time, Future & Self':              {x:-35,y:25},
      'Maintenance & Making':             {x:-20,y:10},
      'Medicine & Care':                  {x:-50,y:30},
      'Truth, Fiction & Reality':         {x:-25,y:-20},
      'Vonnegut — War & Absurdity':       {x:-70,y:-30},
      'Vonnegut — Love & Loneliness':     {x:-75,y:15},
      'Motivation & Human Behavior':      {x:-10,y:5},
      'Inequality & Class':               {x:40,y:50},
      'Language & Communication':         {x:0,y:-60},
      'Signal Detection & Foresight':     {x:-30,y:-55},
      'Corporate Behavior & Ethics':      {x:45,y:-55},
      'Memory & Identity':                {x:-55,y:-10},
      'Wisdom & Living Well':             {x:-50,y:55},
      'Capitalism & Its Discontents':     {x:50,y:35},
      'Other':                            {x:0,y:65}
    };
    var byTheme={};
    Object.entries(books).forEach(function(e){
      var t=(e[1].themes&&e[1].themes[0])||e[1].theme||'Other';
      if(!byTheme[t]) byTheme[t]=[];
      byTheme[t].push({title:e[0],author:e[1].author,theme:t,count:e[1].count});
    });
    var positions=[];
    Object.entries(byTheme).forEach(function(entry){
      var theme=entry[0], group=entry[1];
      var anchor=ANCHORS[theme]||{x:0,y:0};
      group.sort(function(a,b){return b.count-a.count;});
      group.forEach(function(b,i){
        if(i===0){ positions.push({title:b.title,author:b.author,theme:b.theme,count:b.count,x:anchor.x,y:anchor.y}); }
        else {
          var ring=Math.ceil(i/6), posInRing=(i-1)%6;
          var angle=(posInRing/6)*Math.PI*2+(ring*0.4);
          var radius=ring*16;
          positions.push({title:b.title,author:b.author,theme:b.theme,count:b.count,
            x:Math.max(-95,Math.min(95,anchor.x+Math.cos(angle)*radius)),
            y:Math.max(-95,Math.min(95,anchor.y+Math.sin(angle)*radius))});
        }
      });
    });
    return Promise.resolve(positions);
  }

  var mapPositions=null;

  function renderIdeaMap(){
    var mc=document.getElementById('main');
    mc.innerHTML='<div id="map-wrap">'
      +'<div id="map-toolbar">'
      +'<span id="map-status">Loading map…</span>'
      +'<div id="map-tools"><button class="map-tool-btn" id="map-reset-btn">Reset view</button></div>'
      +'</div>'
      +'<div id="map-hint">Scroll to zoom &middot; Drag to pan &middot; Click a book to see its highlights</div>'
      +'<canvas id="map-canvas"></canvas>'
      +'<div id="map-detail"></div></div>';

    var canvas=document.getElementById('map-canvas');
    MAP.canvas=canvas; MAP.ctx=canvas.getContext('2d');

    function resize(){
      var wrap=document.getElementById('map-wrap'); if(!wrap) return;
      MAP.width=wrap.clientWidth;
      MAP.height=Math.max(480,window.innerHeight-200);
      canvas.width=MAP.width*window.devicePixelRatio;
      canvas.height=MAP.height*window.devicePixelRatio;
      canvas.style.width=MAP.width+'px';
      canvas.style.height=MAP.height+'px';
      MAP.ctx.setTransform(1,0,0,1,0,0);
      MAP.ctx.scale(window.devicePixelRatio,window.devicePixelRatio);
      if(mapPositions) drawMap();
    }
    resize();
    window.addEventListener('resize',function(){resize();drawMap();});
    document.getElementById('map-reset-btn').addEventListener('click',function(){
      MAP.scale=1;MAP.panX=0;MAP.panY=0;MAP.expandedBook=null;MAP.hlNodes=[];
      document.getElementById('map-detail').innerHTML='';drawMap();
    });

    computeMapPositions().then(function(pos){
      mapPositions=pos;
      document.getElementById('map-status').textContent='Your library — '+pos.length+' books mapped by conceptual proximity. Works with new books automatically.';
      MAP.scale=1;MAP.panX=0;MAP.panY=0;
      drawMap();bindMapEvents();
    }).catch(function(e){
      document.getElementById('map-status').textContent='Map error: '+e.message;
    });
  }

  function worldToScreen(wx,wy){
    var cx=MAP.width/2+MAP.panX, cy=MAP.height/2+MAP.panY;
    var spread=Math.min(MAP.width,MAP.height)*0.42*MAP.scale;
    return{x:cx+wx/100*spread, y:cy+wy/100*spread};
  }

  function bookRadius(b){ return Math.max(14,Math.min(40,10+b.count*0.06))*Math.sqrt(MAP.scale); }

  function drawMap(){
    if(!mapPositions||!MAP.ctx) return;
    var ctx=MAP.ctx, W=MAP.width, H=MAP.height;
    ctx.clearRect(0,0,W,H);
    // theme labels (faint)
    ctx.globalAlpha=0.08;
    ctx.font='bold 11px DM Sans, sans-serif';
    ctx.textAlign='center';
    var ANCHORS_SCREEN={
      'Decision-Making & Judgment':{x:-15,y:-50},'Signal Detection & Foresight':{x:-30,y:-55},
      'Technology & Power':{x:60,y:-30},'Economics & Markets':{x:35,y:15},
      'Vonnegut — Love & Loneliness':{x:-75,y:15},'American Politics & Power':{x:65,y:45},
      'Wisdom & Living Well':{x:-50,y:55}
    };
    Object.entries(ANCHORS_SCREEN).forEach(function(e){
      var pos=worldToScreen(e[1].x,e[1].y);
      ctx.fillStyle='#1a1814';
      ctx.fillText(e[0].toUpperCase(),pos.x,pos.y);
    });
    ctx.globalAlpha=1;

    // books
    mapPositions.forEach(function(b){
      var pos=worldToScreen(b.x,b.y);
      var r=bookRadius(b);
      var color=THEME_COLORS[b.theme]||'#888';
      var isHov=MAP.hoveredBook&&MAP.hoveredBook.title===b.title;
      var isExp=MAP.expandedBook&&MAP.expandedBook.title===b.title;
      var isDim=MAP.expandedBook&&!isExp;
      ctx.globalAlpha=isDim?0.3:1;
      if(isHov||isExp){ctx.shadowColor=color;ctx.shadowBlur=16;}
      ctx.beginPath();ctx.arc(pos.x,pos.y,r,0,Math.PI*2);
      ctx.fillStyle=isExp?color+'dd':color+'28'; ctx.fill();
      ctx.strokeStyle=color; ctx.lineWidth=isExp?2.5:isHov?2:1.5; ctx.stroke();
      ctx.shadowBlur=0;
      var words=b.title.split(' ');
      var half=Math.ceil(words.length/3);
      var lines=[words.slice(0,half).join(' ')];
      if(words.length>half) lines.push(words.slice(half,half*2).join(' '));
      if(words.length>half*2) lines.push(words.slice(half*2).join(' '));
      ctx.fillStyle=isExp?color:(isDim?color+'80':color+'cc');
      ctx.font=(isExp?'500 ':'')+Math.max(9,Math.min(12,r*0.65))+'px DM Sans, sans-serif';
      ctx.textAlign='center'; ctx.textBaseline='middle';
      var lh=13;
      lines.forEach(function(line,i){ ctx.fillText(line.slice(0,20),pos.x,pos.y+(i-(lines.length-1)/2)*lh); });
      ctx.font='10px DM Sans, sans-serif'; ctx.fillStyle=color+'88';
      ctx.fillText(b.count,pos.x,pos.y+r+12);
      ctx.globalAlpha=1;
    });

    // expanded highlight dots
    if(MAP.hlNodes.length){
      var bookPos=mapPositions.find(function(b){return b.title===MAP.expandedBook.title;});
      if(bookPos){
        var bPos=worldToScreen(bookPos.x,bookPos.y);
        MAP.hlNodes.forEach(function(node){
          ctx.beginPath();ctx.moveTo(bPos.x,bPos.y);ctx.lineTo(node.sx,node.sy);
          ctx.strokeStyle=(THEME_COLORS[MAP.expandedBook.theme]||'#888')+'30';
          ctx.lineWidth=1;ctx.stroke();
          var isHov=MAP.hoveredHL===node;
          ctx.beginPath();ctx.arc(node.sx,node.sy,isHov?7:4,0,Math.PI*2);
          ctx.fillStyle=THEME_COLORS[MAP.expandedBook.theme]||'#888';
          ctx.globalAlpha=isHov?1:0.5;ctx.fill();ctx.globalAlpha=1;
        });
      }
    }
  }

  function expandBook(book){
    MAP.expandedBook=book;
    var hls=HIGHLIGHTS.filter(function(h){return h.title===book.title;});
    var pos=worldToScreen(book.x,book.y);
    var r=bookRadius(book)+55+Math.min(hls.length*2,50);
    MAP.hlNodes=hls.map(function(h,i){
      var angle=(i/hls.length)*Math.PI*2-Math.PI/2;
      return{h:h,sx:pos.x+Math.cos(angle)*r,sy:pos.y+Math.sin(angle)*r};
    });
    var color=THEME_COLORS[book.theme]||'#2d5a3d';
    var detail=document.getElementById('map-detail');
    detail.innerHTML='<div class="map-detail-inner">'
      +'<div class="map-detail-header" style="border-left:3px solid '+color+'">'
      +'<div class="map-detail-title">'+esc(book.title)+'</div>'
      +'<div class="map-detail-meta">'+esc(book.author)+' &middot; <span style="color:'+color+'">'+esc(book.theme)+'</span> &middot; '+book.count+' highlights</div>'
      +'</div>'
      +'<div class="map-detail-hls">'
      +hls.map(function(h){
        return '<div class="map-hl-item" data-id="'+h.id+'">'
          +'<div class="map-hl-text">'+esc(h.text.slice(0,180))+(h.text.length>180?'…':'')+'</div>'
          +(h.note?'<div class="map-hl-note">'+esc(h.note)+'</div>':'')
          +'<div class="map-hl-date">'+fdate(h.date)+'</div>'
          +'</div>';
      }).join('')
      +'</div></div>';

    detail.querySelectorAll('.map-hl-item').forEach(function(el){
      el.addEventListener('click',function(){
        S.tab='highlights';S.view='conn';S.sel=parseInt(el.dataset.id);
        if(MAP.animFrame){cancelAnimationFrame(MAP.animFrame);MAP.animFrame=null;}
        render();
      });
    });
    drawMap();
  }

  function bindMapEvents(){
    var canvas=MAP.canvas; if(!canvas) return;
    function getXY(e){ var rect=canvas.getBoundingClientRect(),touch=e.touches?e.touches[0]:e; return{x:touch.clientX-rect.left,y:touch.clientY-rect.top}; }
    function getBookAt(x,y){
      if(!mapPositions) return null;
      for(var i=mapPositions.length-1;i>=0;i--){
        var b=mapPositions[i],pos=worldToScreen(b.x,b.y),r=bookRadius(b),dx=x-pos.x,dy=y-pos.y;
        if(dx*dx+dy*dy<=r*r) return b;
      }
      return null;
    }
    canvas.addEventListener('wheel',function(e){
      e.preventDefault();
      var delta=e.deltaY>0?0.9:1.1;
      var rect=canvas.getBoundingClientRect(),mx=e.clientX-rect.left,my=e.clientY-rect.top;
      var wx=mx-MAP.width/2-MAP.panX,wy=my-MAP.height/2-MAP.panY;
      MAP.scale=Math.max(0.4,Math.min(5,MAP.scale*delta));
      MAP.panX=mx-MAP.width/2-wx*delta;MAP.panY=my-MAP.height/2-wy*delta;
      if(MAP.expandedBook) expandBook(MAP.expandedBook); else drawMap();
    },{passive:false});
    canvas.addEventListener('mousedown',function(e){
      var p=getXY(e),book=getBookAt(p.x,p.y);
      if(book){expandBook(book);return;}
      MAP.isPanning=true;MAP.lastPanX=p.x;MAP.lastPanY=p.y;canvas.style.cursor='grabbing';
    });
    canvas.addEventListener('mousemove',function(e){
      var p=getXY(e);
      if(MAP.isPanning){MAP.panX+=p.x-MAP.lastPanX;MAP.panY+=p.y-MAP.lastPanY;MAP.lastPanX=p.x;MAP.lastPanY=p.y;drawMap();return;}
      var book=getBookAt(p.x,p.y);
      if(book!==MAP.hoveredBook){MAP.hoveredBook=book;canvas.style.cursor=book?'pointer':'grab';drawMap();}
    });
    canvas.addEventListener('mouseup',function(){MAP.isPanning=false;canvas.style.cursor=MAP.hoveredBook?'pointer':'grab';});
    canvas.addEventListener('mouseleave',function(){MAP.isPanning=false;MAP.hoveredBook=null;drawMap();});
    canvas.style.cursor='grab';
  }

  /* ══════════════════════════════════════
     NETWORK GRAPH
  ══════════════════════════════════════ */
  var NET={canvas:null,ctx:null,width:0,height:0,animFrame:null,hover:null,dragging:null,dragOffX:0,dragOffY:0};

  function buildNetworkData(){
    var STOPWORDS=new Set('the and for are but not you all can had her was one our out did get has him his how its may now off only say she too use via who yet your from that this with they been have into more also when where what were about after before some than them then their there these those such much many most used just like will even well said each made both time back over'.split(' '));
    var wordToThemes={};
    HIGHLIGHTS.forEach(function(h){
      var words=new Set((h.text||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(' ').filter(function(w){return w.length>5&&!STOPWORDS.has(w);}));
      words.forEach(function(w){ if(!wordToThemes[w]) wordToThemes[w]=[]; wordToThemes[w].push((h.themes&&h.themes[0])||h.theme); });
    });
    var linkMap={};
    Object.values(wordToThemes).forEach(function(themes){
      if(themes.length<2||themes.length>50) return;
      for(var i=0;i<themes.length;i++){
        for(var j=i+1;j<themes.length;j++){
          if(themes[i]===themes[j]) continue;
          var key=themes[i]<themes[j]?themes[i]+'|||'+themes[j]:themes[j]+'|||'+themes[i];
          linkMap[key]=(linkMap[key]||0)+1;
        }
      }
    });
    var counts={};
    HIGHLIGHTS.forEach(function(h){ var t=(h.themes&&h.themes[0])||h.theme; counts[t]=(counts[t]||0)+1; });
    return{
      nodes:THEMES.map(function(t){return{id:t,count:counts[t]||0,color:THEME_COLORS[t]||'#888',x:0,y:0,vx:0,vy:0};}),
      links:Object.entries(linkMap).map(function(e){var p=e[0].split('|||');return{source:p[0],target:p[1],value:e[1]};})
    };
  }

  function renderNetwork(){
    var mc=document.getElementById('main');
    mc.innerHTML='<div id="net-wrap">'
      +'<div id="net-header"><div id="net-legend"></div>'
      +'<div id="net-info"><div id="net-info-inner"><p>Circles = themes, sized by highlight count.<br>Lines = shared vocabulary.<br><strong>Hover</strong> to inspect &middot; <strong>Drag</strong> to rearrange.</p></div></div>'
      +'</div><canvas id="net-canvas"></canvas></div>';

    document.getElementById('net-legend').innerHTML=THEMES.map(function(t){
      return '<div class="net-leg-item"><span class="net-leg-dot" style="background:'+THEME_COLORS[t]+'"></span><span>'+esc(t)+'</span></div>';
    }).join('');

    var data=buildNetworkData();
    var nodes=data.nodes,links=data.links;
    var nodeMap={};
    nodes.forEach(function(n){nodeMap[n.id]=n;});
    links.forEach(function(l){l.s=nodeMap[l.source];l.t=nodeMap[l.target];});
    var maxVal=Math.max.apply(null,links.map(function(l){return l.value;}));
    links.forEach(function(l){l.norm=l.value/maxVal;});

    var canvas=document.getElementById('net-canvas');
    NET.canvas=canvas; NET.ctx=canvas.getContext('2d');

    function resize(){
      var wrap=document.getElementById('net-wrap'); if(!wrap) return;
      NET.width=wrap.clientWidth;
      NET.height=Math.max(480,window.innerHeight-200);
      canvas.width=NET.width*window.devicePixelRatio;
      canvas.height=NET.height*window.devicePixelRatio;
      canvas.style.width=NET.width+'px';
      canvas.style.height=NET.height+'px';
      NET.ctx.setTransform(1,0,0,1,0,0);
      NET.ctx.scale(window.devicePixelRatio,window.devicePixelRatio);
    }
    resize();
    window.addEventListener('resize',function(){resize();drawNet();});

    var cx=NET.width/2,cy=NET.height/2,r=Math.min(NET.width,NET.height)*0.32;
    nodes.forEach(function(n,i){
      var angle=(i/nodes.length)*Math.PI*2-Math.PI/2;
      n.x=cx+Math.cos(angle)*r; n.y=cy+Math.sin(angle)*r;
    });

    function nodeRadius(n){return Math.max(14,Math.min(42,10+n.count*0.04));}

    function tick(){
      for(var i=0;i<nodes.length;i++){
        for(var j=i+1;j<nodes.length;j++){
          var dx=nodes[j].x-nodes[i].x,dy=nodes[j].y-nodes[i].y,dist=Math.sqrt(dx*dx+dy*dy)||1;
          var force=18000/(dist*dist),fx=dx/dist*force*0.08,fy=dy/dist*force*0.08;
          nodes[i].vx-=fx;nodes[i].vy-=fy;nodes[j].vx+=fx;nodes[j].vy+=fy;
        }
      }
      links.forEach(function(l){
        if(!l.s||!l.t) return;
        var dx=l.t.x-l.s.x,dy=l.t.y-l.s.y,dist=Math.sqrt(dx*dx+dy*dy)||1;
        var target=180+l.norm*40,force=(dist-target)*0.03*l.norm,fx=dx/dist*force,fy=dy/dist*force;
        l.s.vx+=fx;l.s.vy+=fy;l.t.vx-=fx;l.t.vy-=fy;
      });
      var cx2=NET.width/2,cy2=NET.height/2;
      nodes.forEach(function(n){ n.vx+=(cx2-n.x)*0.008;n.vy+=(cy2-n.y)*0.008; });
      nodes.forEach(function(n){
        if(n===NET.dragging) return;
        n.vx*=0.82;n.vy*=0.82;n.x+=n.vx;n.y+=n.vy;
        var pad=nodeRadius(n)+8;
        n.x=Math.max(pad,Math.min(NET.width-pad,n.x));
        n.y=Math.max(pad,Math.min(NET.height-pad,n.y));
      });
      drawNet();
    }

    function drawNet(){
      var ctx=NET.ctx,W=NET.width,H=NET.height;
      ctx.clearRect(0,0,W,H);
      links.forEach(function(l){
        if(!l.s||!l.t) return;
        var isHov=NET.hover&&(NET.hover.id===l.source||NET.hover.id===l.target);
        ctx.beginPath();ctx.moveTo(l.s.x,l.s.y);ctx.lineTo(l.t.x,l.t.y);
        ctx.strokeStyle=isHov?l.s.color:'#b0a898';
        ctx.globalAlpha=isHov?0.85:0.18+l.norm*0.35;
        ctx.lineWidth=isHov?2+l.norm*8:0.5+l.norm*4;
        ctx.stroke();ctx.globalAlpha=1;
      });
      if(NET.hover){
        links.forEach(function(l){
          if(!l.s||!l.t||(l.source!==NET.hover.id&&l.target!==NET.hover.id)) return;
          var mx=(l.s.x+l.t.x)/2,my=(l.s.y+l.t.y)/2;
          ctx.font='bold 10px DM Sans, sans-serif';ctx.fillStyle='#7a7568';
          ctx.textAlign='center';ctx.textBaseline='middle';
          ctx.fillText(Math.round(l.norm*100)+'%',mx,my);
        });
      }
      nodes.forEach(function(n){
        var r2=nodeRadius(n),isHov=NET.hover&&NET.hover.id===n.id;
        var isDim=NET.hover&&!isHov;
        if(isDim){var conn=links.some(function(l){return(l.source===n.id&&l.target===NET.hover.id)||(l.target===n.id&&l.source===NET.hover.id);});if(conn)isDim=false;}
        ctx.globalAlpha=isDim?0.3:1;
        if(isHov){ctx.shadowColor=n.color;ctx.shadowBlur=18;}
        ctx.beginPath();ctx.arc(n.x,n.y,r2,0,Math.PI*2);
        ctx.fillStyle=n.color+'22';ctx.fill();
        ctx.strokeStyle=n.color;ctx.lineWidth=isHov?2.5:1.5;ctx.stroke();
        ctx.shadowBlur=0;
        var words=n.id.split(' ');var half=Math.ceil(words.length/2);
        var l1=words.slice(0,half).join(' '),l2=words.slice(half).join(' ');
        ctx.fillStyle=n.color;ctx.font=(isHov?'500 ':'')+Math.max(9,Math.min(11,r2*0.55))+'px DM Sans, sans-serif';
        ctx.textAlign='center';ctx.textBaseline='middle';
        if(l2){ctx.fillText(l1,n.x,n.y-7);ctx.fillText(l2,n.x,n.y+7);}
        else ctx.fillText(l1,n.x,n.y);
        ctx.font='10px DM Sans, sans-serif';ctx.fillStyle=n.color+'99';
        ctx.fillText(n.count,n.x,n.y+r2+13);
        ctx.globalAlpha=1;
      });
    }

    function getNodeAt(x,y){
      for(var i=nodes.length-1;i>=0;i--){var n=nodes[i],r2=nodeRadius(n),dx=x-n.x,dy=y-n.y;if(dx*dx+dy*dy<=r2*r2)return n;}
      return null;
    }
    function getXY(e){var rect=canvas.getBoundingClientRect(),touch=e.touches?e.touches[0]:e;return{x:touch.clientX-rect.left,y:touch.clientY-rect.top};}

    canvas.addEventListener('mousemove',function(e){
      var p=getXY(e);
      if(NET.dragging){NET.dragging.x=p.x+NET.dragOffX;NET.dragging.y=p.y+NET.dragOffY;NET.dragging.vx=0;NET.dragging.vy=0;drawNet();return;}
      var node=getNodeAt(p.x,p.y);
      if(node!==NET.hover){NET.hover=node;canvas.style.cursor=node?'grab':'default';drawNet();}
      var info=document.getElementById('net-info-inner');
      if(node&&info){
        var connLinks=links.filter(function(l){return l.source===node.id||l.target===node.id;}).sort(function(a,b){return b.value-a.value;});
        info.innerHTML='<div class="net-info-title" style="color:'+node.color+'">'+esc(node.id)+'</div>'
          +'<div class="net-info-count">'+node.count+' highlights</div>'
          +'<div class="net-info-sub">Strongest connections:</div>'
          +connLinks.slice(0,5).map(function(l){
            var other=l.source===node.id?l.target:l.source;
            return '<div class="net-info-link"><span class="net-leg-dot" style="background:'+(THEME_COLORS[other]||'#666')+'"></span><span>'+esc(other)+'</span><span class="net-info-pct">'+Math.round(l.norm*100)+'%</span></div>';
          }).join('');
      } else if(info){
        info.innerHTML='<p>Circles = themes, sized by highlight count.<br>Lines = shared vocabulary.<br><strong>Hover</strong> to inspect &middot; <strong>Drag</strong> to rearrange.</p>';
      }
    });
    canvas.addEventListener('mousedown',function(e){var p=getXY(e),node=getNodeAt(p.x,p.y);if(node){NET.dragging=node;NET.dragOffX=node.x-p.x;NET.dragOffY=node.y-p.y;canvas.style.cursor='grabbing';}});
    canvas.addEventListener('mouseup',function(){NET.dragging=null;canvas.style.cursor=NET.hover?'grab':'default';});
    canvas.addEventListener('mouseleave',function(){NET.dragging=null;NET.hover=null;drawNet();});

    var ticks=0;
    function loop(){if(ticks<300){tick();ticks++;}else drawNet();NET.animFrame=requestAnimationFrame(loop);}
    if(NET.animFrame) cancelAnimationFrame(NET.animFrame);
    loop();
  }

  /* ══════════════════════════════════════
     MAIN RENDER
  ══════════════════════════════════════ */
  function render(){
    var f=filtered();
    buildSidebar(f);
    buildBookDD();
    buildThemeDD();

    document.querySelectorAll('.tab-btn').forEach(function(b){b.classList.toggle('on',b.dataset.tab===S.tab);});
    var hlc=document.getElementById('hl-controls');
    if(hlc) hlc.style.display=(S.tab==='highlights')?'contents':'none';

    var mc=document.getElementById('main');

    if(S.tab==='network'){
      if(NET.animFrame) cancelAnimationFrame(NET.animFrame);
      renderNetwork(); return;
    }
    if(S.tab==='map'){
      if(NET.animFrame){cancelAnimationFrame(NET.animFrame);NET.animFrame=null;}
      renderIdeaMap(); return;
    }
    if(S.tab==='threads'){
      if(NET.animFrame){cancelAnimationFrame(NET.animFrame);NET.animFrame=null;}
      mc.innerHTML=renderFilterBar()+renderThreadsTab(); bindThreadEvents(); return;
    }
    if(S.tab==='concept'){
      if(NET.animFrame){cancelAnimationFrame(NET.animFrame);NET.animFrame=null;}
      mc.innerHTML=renderConceptSearch(); bindConceptEvents(); return;
    }

    if(NET.animFrame){cancelAnimationFrame(NET.animFrame);NET.animFrame=null;}

    var body = S.view==='conn'    ? renderConn(f)
             : S.view==='grouped' ? renderGrouped(f)
             : S.view==='flat'    ? renderFlat(f)
             : renderExcerpts(f);
    mc.innerHTML=renderFilterBar()+body;
  }

  function bindThreadEvents(){
    document.querySelectorAll('.thread-card').forEach(function(el){
      el.addEventListener('click',function(){ S.thread=el.dataset.thread; render(); });
    });
    var back=document.getElementById('thread-back');
    if(back) back.addEventListener('click',function(){ S.thread=null; render(); });
  }

  function bindConceptEvents(){
    var inp=document.getElementById('concept-input');
    var clr=document.getElementById('concept-clear');
    if(inp){
      inp.focus();
      inp.addEventListener('input',function(){
        S.conceptQuery=this.value;
        S.ri=null;
        if(clr) clr.style.display=this.value?'':'none';
        render();
      });
    }
    if(clr) clr.addEventListener('click',function(){ S.conceptQuery=''; S.ri=null; render(); });
  }

  /* ══════════════════════════════════════
     EVENT DELEGATION
  ══════════════════════════════════════ */
  document.addEventListener('click',function(e){
    if(e.target.id==='connect-btn'){connect();return;}
    if(e.target.id==='disconnect-btn'){disconnect();return;}
    if(e.target.id==='conn-back'){S.sel=null;render();return;}
    if(e.target.id==='random-btn'){S.ri=Math.floor(Math.random()*filtered().length);render();return;}

    var tb=e.target.closest('.tab-btn');
    if(tb){S.tab=tb.dataset.tab;S.sel=null;if(NET.animFrame&&S.tab!=='network'){cancelAnimationFrame(NET.animFrame);NET.animFrame=null;}render();return;}

    var vb=e.target.closest('.vbtns button');
    if(vb){setView(vb.dataset.view);return;}

    var chip=e.target.closest('.fchip');
    if(chip&&e.target.tagName==='SPAN'){
      var w=chip.dataset.clear;
      if(w==='theme')  S.theme=null;
      if(w==='book')   S.book=null;
      if(w==='author') S.author=null;
      if(w==='thread') S.thread=null;
      if(w==='concept') S.conceptQuery='';
      if(w==='search'){S.search='';var si=document.getElementById('search');if(si)si.value='';}
      S.ri=null;render();return;
    }

    var bOpt=e.target.closest('#book-dd-options .dd-option');
    if(bOpt){var bv=bOpt.dataset.book;S.book=(S.book===bv)?null:bv;S.author=null;S.theme=null;S.ri=null;closeAllDDs();render();return;}

    var tOpt=e.target.closest('#theme-dd-options .dd-option');
    if(tOpt){var tv=tOpt.dataset.theme;S.theme=(S.theme===tv)?null:tv;S.book=null;S.ri=null;closeAllDDs();render();return;}

    if(e.target.closest('.dd-clear')){
      var dw=e.target.closest('.dd-wrap');
      if(dw&&dw.id==='book-dd-wrap'){S.book=null;S.ri=null;closeAllDDs();render();return;}
      if(dw&&dw.id==='theme-dd-wrap'){S.theme=null;S.ri=null;closeAllDDs();render();return;}
    }

    var ddBtn=e.target.closest('.dd-btn');
    if(ddBtn){var dw2=ddBtn.closest('.dd-wrap');if(dw2)toggleDD(dw2.id.replace('-dd-wrap',''));return;}

    var sbt=e.target.closest('#theme-sidebar .sb-item');
    if(sbt){var t2=sbt.dataset.theme;S.theme=(S.theme===t2)?null:t2;S.book=null;S.ri=null;if(S.tab!=='highlights')S.tab='highlights';render();return;}

    var sba=e.target.closest('#author-sidebar .sb-item');
    if(sba){var a2=sba.dataset.author;S.author=(S.author===a2)?null:a2;S.book=null;S.ri=null;if(S.tab!=='highlights')S.tab='highlights';render();return;}

    var gh=e.target.closest('.grp-hdr');
    if(gh&&!e.target.closest('.conn-pick')){gh.closest('.grp').classList.toggle('closed');return;}

    var cp=e.target.closest('.conn-pick');
    if(cp){S.sel=parseInt(cp.dataset.sel,10);render();return;}
  });

  document.getElementById('token-input').addEventListener('keydown',function(e){if(e.key==='Enter')connect();});
  document.getElementById('search').addEventListener('input',function(){
    S.search=this.value;S.ri=null;
    if(S.tab!=='highlights')S.tab='highlights';
    render();
  });
  document.getElementById('book-dd-search').addEventListener('input',function(){filterDDOptions('book',this.value);});

  // Keyboard shortcut: / to focus search
  document.addEventListener('keydown',function(e){
    if(e.key==='/'&&e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA'){
      e.preventDefault();
      var si=document.getElementById('search');
      if(si){si.focus();if(S.tab!=='highlights'){S.tab='highlights';render();}}
    }
  });

  function setView(v){
    S.view=v;S.sel=null;
    document.querySelectorAll('.vbtns button').forEach(function(b){b.classList.toggle('on',b.dataset.view===v);});
    render();
  }

  /* ══════════════════════════════════════
     BOOT
  ══════════════════════════════════════ */
  var saved=localStorage.getItem('rw_token');
  if(saved){TOKEN=saved;loadData();}
  else showPhase('token');

})();
