// Community, Resources, Messages, Calendar, Profile, Onboarding, More

const { useState: useStateC } = React;

// ─── COMMUNITY ────────────────────────────────────────────────
const CommunityScreen = ({ t, lang, state, nav }) => {
  const [tab, setTab] = useStateC('feed');
  const posts = [
    { a:'BN', name:'Beatrice N.', loc:'Kintambo', when:'Il y a 2h', color:'var(--lc-accent)',
      text:'Quelqu\'un connaît un coiffeur doux à Kintambo ? Mon fils perd ses cheveux et il n\'ose plus sortir.',
      replies:14, likes:28, tag:'École & sorties' },
    { a:'GM', name:'Grâce M.', loc:'Lemba', when:'Hier', color:'var(--lc-primary)',
      text:'Astuce qui a sauvé mon mois : je coupe les 6-MP en 4 quarts, je les donne avec une banane écrasée. Ma fille les prend sans pleurer.',
      replies:22, likes:47, tag:'Astuces', pinned:true },
    { a:'DK', name:'Dr. Mbuyi', loc:'CUKin · Modérateur', when:'2 jours', color:'var(--lc-ink)',
      text:'RAPPEL : si fièvre ≥ 38.5°C, venez immédiatement aux urgences. Ne donnez PAS de paracétamol avant de nous appeler.',
      replies:8, likes:63, tag:'Urgences', official:true },
  ];
  const groups = [
    { n:'Entretien LAL-B', m:47, c:'var(--lc-primary)' },
    { n:'Nouveaux diagnostics', m:23, c:'var(--lc-accent)' },
    { n:'Frères et sœurs', m:31, c:'var(--lc-warn)' },
    { n:'Après traitement', m:18, c:'var(--lc-danger)' },
  ];
  return (
    <div className="lc-scroll" style={{ padding: '6px 16px 24px' }}>
      <div style={{ marginBottom: 10 }}>
        <h2 className="lc-h2">{t.community.title}</h2>
        <div className="lc-meta" style={{ marginTop: 4 }}>{t.community.mod}</div>
      </div>
      <div className="lc-segctl" style={{ marginBottom: 14 }}>
        <button className={tab==='feed'?'active':''} onClick={()=>setTab('feed')}>{t.community.recent}</button>
        <button className={tab==='groups'?'active':''} onClick={()=>setTab('groups')}>{t.community.groups}</button>
      </div>

      {tab === 'feed' && (
        <div className="col gap-8">
          {posts.map((p,i)=>(
            <div key={i} className="lc-card" style={{
              borderColor: p.official ? 'var(--lc-primary)' : 'var(--lc-line)',
              borderWidth: p.official ? 1.5 : 1,
            }}>
              {p.pinned && (
                <div className="lc-eyebrow" style={{ color:'var(--lc-primary)', marginBottom:6 }}>
                  📌 Épinglé par la communauté
                </div>
              )}
              <div className="row gap-10 items-start">
                <div className="lc-avatar" style={{ background:p.color, color:'white', borderColor:'transparent' }}>{p.a}</div>
                <div className="flex-1">
                  <div className="row gap-6 items-center" style={{ flexWrap:'wrap' }}>
                    <span style={{ fontSize:13, fontWeight:700 }}>{p.name}</span>
                    {p.official && (
                      <span style={{ fontSize:9, fontWeight:700, padding:'2px 6px', borderRadius:100, background:'var(--lc-primary)', color:'white', letterSpacing:'0.05em' }}>
                        SOIGNANT
                      </span>
                    )}
                  </div>
                  <div className="lc-meta">{p.loc} · {p.when}</div>
                </div>
                <span className="lc-chip soft" style={{ fontSize: 10 }}>{p.tag}</span>
              </div>
              <div style={{ fontSize:14, color:'var(--lc-ink)', marginTop:10, lineHeight:1.45 }}>
                {p.text}
              </div>
              <div className="row gap-16" style={{ marginTop:12, paddingTop:10, borderTop:'1px solid var(--lc-line)' }}>
                <span className="lc-meta">💬 {p.replies}</span>
                <span className="lc-meta">❤️ {p.likes}</span>
                <span className="lc-meta ml-auto">↪ Partager</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'groups' && (
        <div className="col gap-8">
          {groups.map((g,i)=>(
            <div key={i} className="lc-card tight">
              <div className="row gap-12 items-center">
                <div style={{ width:40, height:40, borderRadius:12, background:g.c, color:'white', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Icons.Users size={20} />
                </div>
                <div className="flex-1">
                  <div style={{ fontSize:14, fontWeight:700 }}>{g.n}</div>
                  <div className="lc-meta">{g.m} familles · modéré</div>
                </div>
                <button className="lc-btn soft" style={{ padding:'8px 14px', fontSize:12 }}>Rejoindre</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <button style={{
        position:'absolute', bottom:80, right:18,
        width:54, height:54, borderRadius:100,
        background:'var(--lc-primary)', color:'var(--lc-primary-ink)',
        border:'none', boxShadow:'0 6px 20px rgba(0,0,0,0.2)',
        display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', zIndex:5,
      }}>
        <Icons.Plus size={24} />
      </button>
    </div>
  );
};

// ─── RESOURCES ─────────────────────────────────────────────────
const ResourcesScreen = ({ t, lang, nav }) => {
  const cats = t.resources.categories;
  const featured = [
    { title:'Les effets secondaires de la méthotrexate', read:'5 min', cat:'Traitement', offline:true, color:'var(--lc-primary-soft)', accent:'var(--lc-primary)' },
    { title:'Que manger quand la bouche fait mal ?', read:'4 min', cat:'Alimentation', offline:true, color:'var(--lc-accent-soft)', accent:'var(--lc-accent)' },
    { title:'Expliquer la leucémie à un enfant de 7 ans', read:'8 min', cat:'Émotions', offline:false, color:'var(--lc-warn-soft)', accent:'var(--lc-warn)' },
    { title:'Quand aller aux urgences — les 5 signaux', read:'3 min', cat:'Urgences', offline:true, color:'var(--lc-danger-soft)', accent:'var(--lc-danger)', urgent:true },
  ];
  return (
    <div className="lc-scroll" style={{ padding: '6px 16px 24px' }}>
      <div style={{ marginBottom: 12 }}>
        <h2 className="lc-h2">{t.resources.title}</h2>
        <div className="lc-meta" style={{ marginTop: 4 }}>{t.resources.sub}</div>
      </div>

      <div className="lc-card tight" style={{ padding:'4px 12px', marginBottom: 14, display:'flex', alignItems:'center', gap:8 }}>
        <Icons.Search size={18} style={{ color:'var(--lc-ink-mute)' }} />
        <input placeholder={t.resources.search}
               style={{ border:0, outline:0, background:'transparent', flex:1, padding:'10px 0', fontFamily:'var(--lc-font)', fontSize:14, color:'var(--lc-ink)' }} />
      </div>

      <div style={{ display:'flex', gap:6, overflowX:'auto', marginBottom:14, marginLeft:-16, marginRight:-16, padding:'0 16px' }}>
        {['Tout', ...cats].map((c,i) => (
          <button key={i} className={'lc-chip' + (i===0?' active':'')} style={{ flexShrink:0 }}>{c}</button>
        ))}
      </div>

      <div className="col gap-10">
        {featured.map((r,i)=>(
          <div key={i} className="lc-card" style={{
            background: r.color,
            borderColor: r.urgent ? r.accent : 'transparent',
            borderWidth: r.urgent ? 2 : 1,
          }}>
            <div className="row gap-6 items-center" style={{ marginBottom:6 }}>
              {r.urgent && <Icons.AlertTriangle size={14} style={{ color:r.accent }} />}
              <span className="lc-eyebrow" style={{ color: r.accent }}>{r.cat}</span>
            </div>
            <div style={{ fontFamily:'var(--lc-font-display)', fontSize:18, lineHeight:1.2, color:'var(--lc-ink)', marginBottom:10 }}>
              {r.title}
            </div>
            <div className="row justify-between items-center">
              <div className="row gap-10 items-center">
                <span className="lc-meta">📖 {r.read}</span>
                {r.offline && (
                  <span className="row gap-4 items-center lc-meta">
                    <Icons.Download size={11} /> {t.resources.offline}
                  </span>
                )}
              </div>
              <Icons.ChevronRight size={18} style={{ color:'var(--lc-ink-mute)' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── MESSAGES ──────────────────────────────────────────────────
const MessagesScreen = ({ t, lang, online }) => {
  const [input, setInput] = useStateC('');
  const [msgs, setMsgs] = useStateC([
    { from:'them', name:'Dr. Mbuyi', text:'Bonsoir Maman Kiese. J\'ai vu l\'entrée de douleur de Jonas. Donne-lui du paracétamol 250mg et note si ça passe en 1h.', when:'Hier 19:12' },
    { from:'me', text:'Merci docteur. Je le fais maintenant.', when:'Hier 19:15', status:'delivered' },
    { from:'them', name:'Infirmière Ngoie', text:'Petit rappel : NFS vendredi à 8h, à jeun. N\'oubliez pas la carte.', when:'Aujourd\'hui 08:04' },
    { from:'me', text:'Bien reçu. À vendredi 🙏', when:'Aujourd\'hui 08:42', status: online ? 'delivered' : 'queued' },
  ]);
  const send = () => {
    if (!input.trim()) return;
    setMsgs([...msgs, { from:'me', text:input, when:'À l\'instant', status: online?'sent':'queued' }]);
    setInput('');
  };
  return (
    <div className="lc-screen">
      {/* team strip */}
      <div style={{ padding:'6px 16px 14px', borderBottom:'1px solid var(--lc-line)', background:'var(--lc-surface)' }}>
        <div className="lc-eyebrow" style={{ marginBottom:8 }}>{t.messages.team}</div>
        <div className="row gap-8">
          {[
            { a:'DM', n:'Dr. Mbuyi', r:'Oncologue', c:'var(--lc-primary)', on:true },
            { a:'IN', n:'Ngoie', r:'Infirmière', c:'var(--lc-accent)', on:true },
            { a:'PS', n:'Psy. Sala', r:'Psy.', c:'var(--lc-warn)', on:false },
          ].map((m,i)=>(
            <div key={i} className="col items-center gap-4" style={{ flex:1 }}>
              <div style={{ position:'relative' }}>
                <div className="lc-avatar" style={{ background:m.c, color:'white', borderColor:'transparent' }}>{m.a}</div>
                {m.on && <div style={{ position:'absolute', bottom:0, right:0, width:10, height:10, borderRadius:100, background:'var(--lc-accent)', border:'2px solid var(--lc-surface)' }}/>}
              </div>
              <span style={{ fontSize:11, fontWeight:600 }}>{m.n}</span>
              <span style={{ fontSize:9, color:'var(--lc-ink-mute)' }}>{m.r}</span>
            </div>
          ))}
        </div>
      </div>

      {/* thread */}
      <div className="lc-scroll" style={{ padding:'16px 14px', background:'var(--lc-bg)' }}>
        {msgs.map((m,i)=>(
          <div key={i} style={{ display:'flex', justifyContent: m.from==='me'?'flex-end':'flex-start', marginBottom:10 }}>
            <div style={{ maxWidth:'78%' }}>
              {m.from==='them' && <div className="lc-meta" style={{ marginLeft:10, marginBottom:2 }}>{m.name}</div>}
              <div style={{
                padding:'10px 12px', borderRadius:14,
                background: m.from==='me' ? 'var(--lc-primary)' : 'var(--lc-surface)',
                color: m.from==='me' ? 'var(--lc-primary-ink)' : 'var(--lc-ink)',
                border: m.from==='me' ? 'none' : '1px solid var(--lc-line)',
                borderBottomRightRadius: m.from==='me'?4:14,
                borderBottomLeftRadius: m.from==='me'?14:4,
                fontSize:13.5, lineHeight:1.4,
              }}>
                {m.text}
              </div>
              <div className="row gap-4 items-center" style={{ marginTop:2, justifyContent: m.from==='me'?'flex-end':'flex-start', padding:'0 8px' }}>
                <span className="lc-meta" style={{ fontSize:10 }}>{m.when}</span>
                {m.status==='queued' && (
                  <>
                    <Icons.CloudOff size={10} style={{ color:'var(--lc-warn)' }} />
                    <span style={{ fontSize:10, color:'var(--lc-warn)', fontWeight:600 }}>{t.messages.queued}</span>
                  </>
                )}
                {m.status==='delivered' && (
                  <Icons.Check size={10} style={{ color:'var(--lc-accent)' }} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* input */}
      <div style={{ padding:'8px 12px 12px', background:'var(--lc-surface)', borderTop:'1px solid var(--lc-line)', display:'flex', gap:8, alignItems:'center' }}>
        <button className="icon-btn ghost" style={{ color:'var(--lc-ink-mute)' }}>
          <Icons.Paperclip size={18} />
        </button>
        <input className="lc-input"
               value={input}
               onChange={e=>setInput(e.target.value)}
               onKeyDown={e=> e.key==='Enter' && send()}
               placeholder={t.messages.reply}
               style={{ borderRadius:100, padding:'10px 14px', background:'var(--lc-bg)' }}/>
        <button className="icon-btn" onClick={send}
                style={{ background:'var(--lc-primary)', color:'var(--lc-primary-ink)', borderColor:'transparent' }}>
          <Icons.Send size={18} />
        </button>
      </div>
    </div>
  );
};

// ─── CALENDAR ──────────────────────────────────────────────────
const CalendarScreen = ({ t, lang }) => {
  const days = ['L','M','M','J','V','S','D'];
  const month = Array.from({length: 35}, (_, i) => i - 1);
  const today = 19;
  const events = [14, 16, 19, 23, 25, 28];
  const upcoming = [
    { d:'Jeu. 23 avr', time:'08:00', title:'NFS & consultation', who:'Dr. Mbuyi', loc:'CUKin · Pavillon 7', c:'var(--lc-primary)' },
    { d:'Sam. 25 avr', time:'14:00', title:'Groupe parents', who:'Psy. Sala', loc:'En ligne', c:'var(--lc-warn)' },
    { d:'Mar. 28 avr', time:'09:30', title:'Méthotrexate IT', who:'Salle 3', loc:'CUKin', c:'var(--lc-accent)' },
  ];
  return (
    <div className="lc-scroll" style={{ padding:'6px 16px 24px' }}>
      <div className="row justify-between items-end" style={{ marginBottom:14 }}>
        <div>
          <div className="lc-eyebrow">Avril 2026</div>
          <h2 className="lc-h2" style={{ marginTop:4 }}>{t.calendar.title}</h2>
        </div>
        <div className="row gap-6">
          <button className="icon-btn"><Icons.ChevronLeft size={16} /></button>
          <button className="icon-btn"><Icons.ChevronRight size={16} /></button>
        </div>
      </div>

      <div className="lc-card tight" style={{ padding:12, marginBottom:14 }}>
        <div className="lc-cal-grid" style={{ marginBottom:6 }}>
          {days.map(d => <div key={d} style={{ textAlign:'center', fontSize:10, fontWeight:700, color:'var(--lc-ink-mute)', letterSpacing:'0.08em' }}>{d}</div>)}
        </div>
        <div className="lc-cal-grid">
          {month.map((d, i) => {
            const valid = d >= 1 && d <= 30;
            const isToday = d === today;
            const hasEvent = events.includes(d);
            return (
              <div key={i} className={'lc-cal-cell' + (isToday?' today':'') + (hasEvent?' has-event':'') + (!valid?' muted':'')}>
                {valid ? d : ''}
              </div>
            );
          })}
        </div>
      </div>

      <div className="lc-eyebrow" style={{ marginBottom:8 }}>{t.calendar.upcoming}</div>
      <div className="col gap-8">
        {upcoming.map((e,i) => (
          <div key={i} className="lc-card tight">
            <div className="row gap-12 items-start">
              <div style={{ width:4, borderRadius:2, background:e.c, alignSelf:'stretch' }}/>
              <div className="flex-1">
                <div className="row gap-6 items-center">
                  <span className="lc-eyebrow">{e.d}</span>
                  <span className="lc-meta">· {e.time}</span>
                </div>
                <div style={{ fontSize:15, fontWeight:700, marginTop:2 }}>{e.title}</div>
                <div className="lc-meta">{e.who} · {e.loc}</div>
              </div>
              <button className="icon-btn ghost"><Icons.Bell size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── PROFILE / MORE ────────────────────────────────────────────
const MoreScreen = ({ t, lang, state, nav }) => (
  <div className="lc-scroll" style={{ padding:'6px 16px 24px' }}>
    {/* Child profile card */}
    <div className="lc-card primary" style={{ marginBottom:14, position:'relative', overflow:'hidden' }}>
      <div className="lc-pattern" style={{ position:'absolute', inset:0, opacity:0.15 }}/>
      <div style={{ position:'relative' }}>
        <div className="lc-eyebrow" style={{ color:'rgba(255,255,255,0.75)' }}>{t.profile.child}</div>
        <div style={{ fontFamily:'var(--lc-font-display)', fontSize:28, marginTop:6 }}>Jonas Kiese</div>
        <div style={{ fontSize:13, opacity:0.85, marginTop:2 }}>7 ans · LAL-B · Phase d'entretien S14</div>
        <div className="row gap-16" style={{ marginTop:14, paddingTop:14, borderTop:'1px solid rgba(255,255,255,0.15)' }}>
          <div><div style={{ fontSize:10, opacity:0.7, letterSpacing:'0.1em', textTransform:'uppercase' }}>Diagnostic</div><div style={{ fontSize:13, fontWeight:700 }}>Mars 2025</div></div>
          <div><div style={{ fontSize:10, opacity:0.7, letterSpacing:'0.1em', textTransform:'uppercase' }}>Groupe</div><div style={{ fontSize:13, fontWeight:700 }}>A+ · 22 kg</div></div>
        </div>
      </div>
    </div>

    <div className="lc-eyebrow" style={{ marginBottom:8 }}>{t.profile.caregivers}</div>
    <div className="lc-card tight" style={{ marginBottom:14 }}>
      {[
        { a:'MK', n:'Maman Kiese', r:'Tutrice principale', c:'var(--lc-primary)' },
        { a:'PK', n:'Papa Kiese', r:'Aidant', c:'var(--lc-accent)' },
        { a:'MK', n:'Mamu Mado', r:'Grand-mère', c:'var(--lc-warn)' },
      ].map((p,i)=>(
        <div key={i} className="lc-row">
          <div className="lc-avatar" style={{ background:p.c, color:'white', borderColor:'transparent' }}>{p.a}</div>
          <div className="flex-1">
            <div style={{ fontSize:14, fontWeight:700 }}>{p.n}</div>
            <div className="lc-meta">{p.r}</div>
          </div>
          <Icons.Phone size={16} style={{ color:'var(--lc-ink-mute)' }}/>
        </div>
      ))}
    </div>

    <div className="lc-eyebrow" style={{ marginBottom:8 }}>{t.profile.settings}</div>
    <div className="lc-card tight">
      {[
        { i: <Icons.Book size={18}/>, l:t.resources.title, action:()=>nav('resources') },
        { i: <Icons.MessageCircle size={18}/>, l:t.messages.title, action:()=>nav('messages') },
        { i: <Icons.Calendar size={18}/>, l:t.calendar.title, action:()=>nav('calendar') },
        { i: <Icons.Globe size={18}/>, l:t.profile.language, right: lang.toUpperCase() },
        { i: <Icons.Cloud size={18}/>, l:t.profile.sync, right: t.offline.online },
        { i: <Icons.Settings size={18}/>, l: lang==='fr'?'Paramètres avancés':lang==='ln'?'Paramètres mosusu':'Mipangilio' },
      ].map((r,i) => (
        <div key={i} className="lc-row" style={{ cursor:'pointer' }} onClick={r.action}>
          <div style={{ width:36, height:36, borderRadius:10, background:'var(--lc-surface-2)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--lc-ink)' }}>
            {r.i}
          </div>
          <div className="flex-1" style={{ fontSize:14, fontWeight:600 }}>{r.l}</div>
          {r.right && <span className="lc-meta">{r.right}</span>}
          <Icons.ChevronRight size={16} style={{ color:'var(--lc-ink-mute)' }}/>
        </div>
      ))}
    </div>

    <div className="text-center" style={{ marginTop:20, opacity:0.5 }}>
      <div style={{ fontFamily:'var(--lc-font-display)', fontSize:14 }}>LeuCare</div>
      <div className="lc-mono">v0.3.2 · Kinshasa · CUKin Partners</div>
    </div>
  </div>
);

// ─── ONBOARDING ────────────────────────────────────────────────
const OnboardingScreen = ({ t, lang, setLang, onDone, step, setStep }) => {
  if (step === 0) {
    return (
      <div className="lc-splash" style={{ padding:32 }}>
        <div className="lc-pattern" style={{ position:'absolute', inset:0, opacity:0.15 }}/>
        <div style={{ position:'relative', zIndex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:20 }}>
          <div style={{
            width:88, height:88, borderRadius:24,
            background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.18)',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <Icons.Heart size={42} />
          </div>
          <div>
            <div style={{ fontFamily:'var(--lc-font-display)', fontSize:40, lineHeight:1, letterSpacing:'-0.02em' }}>
              Leu<em style={{ fontStyle:'italic', opacity:0.85 }}>Care</em>
            </div>
            <div style={{ fontSize:14, opacity:0.85, marginTop:10, fontFamily:'var(--lc-font-display)', fontStyle:'italic' }}>
              {t.tagline}
            </div>
          </div>
          <div style={{ fontSize:13, opacity:0.75, maxWidth:240, lineHeight:1.5, marginTop:12 }}>
            {t.onboarding.sub}
          </div>
          <button className="lc-btn" onClick={()=>setStep(1)}
                  style={{ background:'white', color:'var(--lc-primary)', marginTop:10, padding:'14px 28px' }}>
            {t.onboarding.start}
            <Icons.ChevronRight size={16}/>
          </button>
          <div className="row gap-6" style={{ opacity:0.8, fontSize:11, marginTop:30 }}>
            <Icons.Shield size={12}/>
            <span>CUKin · Cliniques Universitaires de Kinshasa</span>
          </div>
        </div>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="lc-scroll" style={{ padding:'30px 22px' }}>
        <div className="lc-eyebrow" style={{ color:'var(--lc-primary)', marginBottom:4 }}>Étape 1 / 3</div>
        <h2 className="lc-h2" style={{ marginBottom:6 }}>{t.onboarding.language}</h2>
        <div className="lc-meta" style={{ marginBottom:20 }}>{t.onboarding.languageSub}</div>
        <div className="col gap-10">
          {[
            { c:'fr', n:'Français', sub:'Langue officielle' },
            { c:'ln', n:'Lingala', sub:'Lokota ya mboka' },
            { c:'sw', n:'Kiswahili', sub:'Lugha ya pwani' },
          ].map(l => (
            <button key={l.c} onClick={()=>setLang(l.c)}
                    className="lc-card tight"
                    style={{
                      textAlign:'left',
                      borderColor: lang===l.c?'var(--lc-primary)':'var(--lc-line)',
                      borderWidth: lang===l.c?2:1,
                      cursor:'pointer', background:lang===l.c?'var(--lc-primary-soft)':'var(--lc-surface)',
                    }}>
              <div className="row justify-between items-center">
                <div>
                  <div style={{ fontFamily:'var(--lc-font-display)', fontSize:20 }}>{l.n}</div>
                  <div className="lc-meta">{l.sub}</div>
                </div>
                {lang===l.c && <Icons.Check size={20} style={{ color:'var(--lc-primary)' }}/>}
              </div>
            </button>
          ))}
        </div>
        <button className="lc-btn primary full" style={{ marginTop:24 }} onClick={()=>setStep(2)}>
          {t.onboarding.next}
        </button>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="lc-scroll" style={{ padding:'30px 22px' }}>
        <div className="lc-eyebrow" style={{ color:'var(--lc-primary)', marginBottom:4 }}>Étape 2 / 3</div>
        <h2 className="lc-h2" style={{ marginBottom:6 }}>{t.onboarding.profile}</h2>
        <div className="lc-meta" style={{ marginBottom:20 }}>{t.onboarding.profileSub}</div>
        <div className="col gap-12">
          <div><div className="lc-eyebrow" style={{marginBottom:6}}>{t.onboarding.name}</div><input className="lc-input" defaultValue="Jonas"/></div>
          <div className="row gap-10">
            <div className="flex-1"><div className="lc-eyebrow" style={{marginBottom:6}}>{t.onboarding.age}</div><input className="lc-input" defaultValue="7 ans"/></div>
            <div className="flex-1"><div className="lc-eyebrow" style={{marginBottom:6}}>Poids</div><input className="lc-input" defaultValue="22 kg"/></div>
          </div>
          <div><div className="lc-eyebrow" style={{marginBottom:6}}>{t.onboarding.diagnosis}</div>
            <div className="row gap-6" style={{flexWrap:'wrap'}}>
              {['LAL-B','LAL-T','LAM','Autre'].map((d,i)=>(
                <button key={i} className={'lc-chip' + (i===0?' active':'')}>{d}</button>
              ))}
            </div>
          </div>
          <div><div className="lc-eyebrow" style={{marginBottom:6}}>{t.onboarding.hospital}</div>
            <input className="lc-input" defaultValue="CUKin · Pavillon 7"/>
          </div>
        </div>
        <button className="lc-btn primary full" style={{ marginTop:24 }} onClick={()=>setStep(3)}>
          {t.onboarding.next}
        </button>
      </div>
    );
  }
  // step 3 - consent
  return (
    <div className="lc-scroll" style={{ padding:'30px 22px' }}>
      <div className="lc-eyebrow" style={{ color:'var(--lc-primary)', marginBottom:4 }}>Étape 3 / 3</div>
      <h2 className="lc-h2" style={{ marginBottom:6 }}>{t.onboarding.consent}</h2>
      <div className="lc-card" style={{ marginTop:16, background:'var(--lc-surface-2)', borderColor:'transparent' }}>
        <div className="row gap-10 items-start">
          <Icons.Shield size={22} style={{color:'var(--lc-primary)', flexShrink:0, marginTop:2}}/>
          <div style={{fontSize:13, lineHeight:1.5, color:'var(--lc-ink-soft)'}}>
            {t.onboarding.consentBody}
          </div>
        </div>
      </div>
      <div className="col gap-8" style={{ marginTop:16 }}>
        {[
          { i:<Icons.CloudOff size={16}/>, t:'Fonctionne sans connexion', s:'Tes données sont chiffrées sur ton téléphone.' },
          { i:<Icons.Users size={16}/>, t:'Tu choisis avec qui partager', s:'Seuls les soignants que tu ajoutes voient le carnet.' },
          { i:<Icons.Download size={16}/>, t:'Export possible à tout moment', s:'En PDF, imprimable pour les consultations.' },
        ].map((r,i)=>(
          <div key={i} className="row gap-10 items-start" style={{padding:'10px 0'}}>
            <div style={{width:30, height:30, borderRadius:8, background:'var(--lc-accent-soft)', color:'var(--lc-accent)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>
              {r.i}
            </div>
            <div>
              <div style={{fontSize:13, fontWeight:700}}>{r.t}</div>
              <div className="lc-meta" style={{fontSize:11.5}}>{r.s}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="lc-btn primary full" style={{ marginTop:20 }} onClick={onDone}>
        {t.onboarding.accept}
      </button>
    </div>
  );
};

Object.assign(window, { CommunityScreen, ResourcesScreen, MessagesScreen, CalendarScreen, MoreScreen, OnboardingScreen });
