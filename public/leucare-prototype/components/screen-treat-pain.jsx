// Treatment, Pain, and related sub-screens

const { useState: useStateT } = React;

const TreatmentScreen = ({ t, lang, state, setState, nav }) => {
  const [filter, setFilter] = useStateT('today');
  const meds = state.meds;

  const toggleMed = (id) => {
    setState({
      ...state,
      meds: state.meds.map(m => m.id === id ? { ...m, status: m.status === 'taken' ? 'due' : 'taken' } : m),
    });
  };

  return (
    <div className="lc-scroll" style={{ padding: '6px 16px 24px' }}>
      <div style={{ marginBottom: 14 }}>
        <div className="lc-eyebrow">{t.treatment.phase} · {t.treatment.week.replace('{n}','14')}</div>
        <h2 className="lc-h2" style={{ marginTop: 4 }}>{t.treatment.todayMeds}</h2>
      </div>

      {/* Segmented */}
      <div className="lc-segctl" style={{ marginBottom: 14 }}>
        {['today','week','history'].map(f => (
          <button key={f}
                  onClick={() => setFilter(f)}
                  className={filter === f ? 'active' : ''}>
            {f === 'today' ? t.home.today : f === 'week' ? t.home.weekGlance : t.treatment.history}
          </button>
        ))}
      </div>

      {filter === 'today' && (
        <div className="col gap-8">
          {meds.map(m => (
            <div key={m.id} className="lc-card tight" style={{
              opacity: m.status === 'taken' ? 0.7 : 1,
              borderColor: m.status === 'late' ? 'var(--lc-warn)' : 'var(--lc-line)',
            }}>
              <div className="row gap-12 items-center">
                <button onClick={() => toggleMed(m.id)}
                        aria-label="toggle"
                        style={{
                          width: 32, height: 32, borderRadius: 100,
                          border: m.status === 'taken' ? 'none' : '2px solid var(--lc-line-strong)',
                          background: m.status === 'taken' ? 'var(--lc-accent)' : 'transparent',
                          color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          cursor: 'pointer', flexShrink: 0,
                }}>
                  {m.status === 'taken' && <Icons.Check size={18} />}
                </button>
                <div className="flex-1">
                  <div className="row gap-6 items-center">
                    <span style={{ fontSize: 15, fontWeight: 700, textDecoration: m.status === 'taken' ? 'line-through' : 'none' }}>
                      {m.name}
                    </span>
                    <span className="lc-meta">· {m.dose}</span>
                  </div>
                  <div className="row gap-8 items-center" style={{ marginTop: 2 }}>
                    <span className="lc-meta">🕐 {m.time}</span>
                    {m.withFood && <span className="lc-meta">🍽 {lang === 'fr' ? 'Avec repas' : lang === 'ln' ? 'Na bilei' : 'Na chakula'}</span>}
                    {m.status === 'late' && (
                      <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--lc-warn)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {t.treatment.late}
                      </span>
                    )}
                  </div>
                </div>
                <button className="icon-btn ghost" style={{ color: 'var(--lc-ink-mute)' }}>
                  <Icons.Bell size={16} />
                </button>
              </div>
            </div>
          ))}

          <button className="lc-btn ghost full" style={{ marginTop: 4 }}>
            <Icons.AlertTriangle size={16} />
            {t.treatment.reportSide}
          </button>

          {/* Offline note */}
          <div className="row gap-8 items-center" style={{ padding: '8px 4px', color: 'var(--lc-ink-mute)' }}>
            <Icons.Shield size={14} />
            <span style={{ fontSize: 11.5 }}>Chaque prise est enregistrée — même hors-ligne.</span>
          </div>
        </div>
      )}

      {filter === 'week' && (
        <div className="lc-card">
          <div className="lc-eyebrow" style={{ marginBottom: 10 }}>6-Mercaptopurine · adhésion</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
            {[1,1,1,1,0.7,1,0.5,1,0,1,1,1,1,0.8].map((v, i) => (
              <div key={i} style={{
                height: 36, borderRadius: 8,
                background: v === 1 ? 'var(--lc-primary)' :
                            v === 0 ? 'var(--lc-danger-soft)' :
                            `color-mix(in oklch, var(--lc-primary) ${v*100}%, var(--lc-surface-2))`,
              }} />
            ))}
          </div>
          <div className="row justify-between" style={{ marginTop: 14 }}>
            <div><div className="lc-meta">Prises</div><div style={{ fontSize: 20, fontWeight: 700 }}>12/14</div></div>
            <div><div className="lc-meta">Manquées</div><div style={{ fontSize: 20, fontWeight: 700, color: 'var(--lc-danger)' }}>1</div></div>
            <div><div className="lc-meta">En retard</div><div style={{ fontSize: 20, fontWeight: 700, color: 'var(--lc-warn)' }}>1</div></div>
          </div>
        </div>
      )}

      {filter === 'history' && (
        <div className="col gap-8">
          {[
            { date: '18 avril', cycle: 'Entretien · S14 J1', adh: 100 },
            { date: '11 avril', cycle: 'Entretien · S13', adh: 92 },
            { date: '4 avril', cycle: 'Entretien · S12', adh: 85 },
            { date: '28 mars', cycle: 'Entretien · S11', adh: 100 },
          ].map((h, i) => (
            <div key={i} className="lc-card tight">
              <div className="row justify-between items-center">
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{h.cycle}</div>
                  <div className="lc-meta">Semaine du {h.date}</div>
                </div>
                <div style={{
                  fontSize: 14, fontWeight: 700,
                  color: h.adh === 100 ? 'var(--lc-accent)' : h.adh >= 90 ? 'var(--lc-primary)' : 'var(--lc-warn)',
                }}>
                  {h.adh}%
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── PAIN JOURNAL ─────────────────────────────────────────────
const PainScreen = ({ t, lang, state, setState, nav }) => {
  const [view, setView] = useStateT('history');
  return (
    <div className="lc-scroll" style={{ padding: '6px 16px 24px' }}>
      <div className="row justify-between items-end" style={{ marginBottom: 14 }}>
        <div>
          <div className="lc-eyebrow">{t.pain.title}</div>
          <h2 className="lc-h2" style={{ marginTop: 4 }}>
            {lang === 'fr' ? '4 entrées cette semaine' : lang === 'ln' ? 'Ba entrées 4 pɔsɔ oyo' : 'Ingizo 4 wiki hii'}
          </h2>
        </div>
      </div>

      <div className="lc-segctl" style={{ marginBottom: 14 }}>
        <button className={view === 'history' ? 'active' : ''} onClick={() => setView('history')}>
          {t.pain.history}
        </button>
        <button className={view === 'chart' ? 'active' : ''} onClick={() => setView('chart')}>
          {lang === 'fr' ? 'Tendance' : lang === 'ln' ? 'Makanisi' : 'Mwelekeo'}
        </button>
      </div>

      {view === 'history' && (
        <div className="col gap-8">
          {state.painEntries.map((p, i) => (
            <div key={i} className="lc-card tight">
              <div className="row gap-12 items-start">
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: p.level >= 7 ? 'var(--lc-danger-soft)' :
                              p.level >= 4 ? 'var(--lc-warn-soft)' :
                              'var(--lc-accent-soft)',
                  color: p.level >= 7 ? 'var(--lc-danger)' :
                         p.level >= 4 ? 'var(--lc-warn)' :
                         'var(--lc-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 18, flexShrink: 0,
                }}>{p.level}</div>
                <div className="flex-1">
                  <div className="row gap-6 items-center">
                    <span style={{ fontSize: 14, fontWeight: 700 }}>{p.where}</span>
                    <span className="lc-meta">· {p.when}</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--lc-ink-soft)', marginTop: 2 }}>
                    {p.note}
                  </div>
                  {p.offline && (
                    <div className="row gap-4 items-center" style={{ marginTop: 6 }}>
                      <Icons.CloudOff size={11} style={{ color: 'var(--lc-warn)' }} />
                      <span style={{ fontSize: 10.5, color: 'var(--lc-warn)', fontWeight: 600 }}>
                        {t.offline.savedLocally}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === 'chart' && (
        <div className="lc-card">
          <div className="lc-eyebrow" style={{ marginBottom: 10 }}>
            {lang === 'fr' ? '14 derniers jours' : lang === 'ln' ? 'Mikolo 14 eleki' : 'Siku 14 zilizopita'}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 120, marginBottom: 10 }}>
            {[2,3,1,0,0,4,6,7,3,2,0,1,2,5].map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{
                  width: '100%', height: `${v*10}%`, minHeight: v > 0 ? 2 : 0,
                  background: v >= 7 ? 'var(--lc-danger)' : v >= 4 ? 'var(--lc-warn)' : 'var(--lc-accent)',
                  borderRadius: 3,
                }} />
              </div>
            ))}
          </div>
          <div className="row justify-between">
            <span className="lc-meta">6 avr</span>
            <span className="lc-meta">12 avr</span>
            <span className="lc-meta">19 avr</span>
          </div>
          <div style={{ marginTop: 14, padding: 12, background: 'var(--lc-surface-2)', borderRadius: 10 }}>
            <div className="lc-eyebrow" style={{ color: 'var(--lc-primary)' }}>Observation</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>
              Les douleurs ont augmenté le lendemain de la méthotrexate. Partage cette tendance avec Dr. Mbuyi.
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      <button onClick={() => nav('pain-new')}
        style={{
          position: 'absolute', bottom: 80, right: 18,
          width: 54, height: 54, borderRadius: 100,
          background: 'var(--lc-primary)', color: 'var(--lc-primary-ink)',
          border: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 5,
        }}>
        <Icons.Plus size={24} />
      </button>
    </div>
  );
};

// ─── PAIN NEW ENTRY ───────────────────────────────────────────
const PainNewScreen = ({ t, lang, state, setState, nav, online }) => {
  const [level, setLevel] = useStateT(5);
  const [part, setPart] = useStateT(null);
  const [when, setWhen] = useStateT('now');
  const [note, setNote] = useStateT('');
  const [saved, setSaved] = useStateT(false);

  const parts = [
    { id: 'head', label: { fr:'Tête', ln:'Motó', sw:'Kichwa' } },
    { id: 'mouth', label: { fr:'Bouche', ln:'Monoko', sw:'Mdomo' } },
    { id: 'chest', label: { fr:'Poitrine', ln:'Ntolo', sw:'Kifua' } },
    { id: 'belly', label: { fr:'Ventre', ln:'Libumu', sw:'Tumbo' } },
    { id: 'legs', label: { fr:'Jambes', ln:'Makolo', sw:'Miguu' } },
    { id: 'arms', label: { fr:'Bras', ln:'Mabɔkɔ', sw:'Mikono' } },
    { id: 'back', label: { fr:'Dos', ln:'Mokɔngɔ', sw:'Mgongo' } },
    { id: 'joints', label: { fr:'Articulations', ln:'Ba joints', sw:'Viungo' } },
  ];

  const faces = [
    { v: 0, e: '😀' }, { v: 2, e: '🙂' }, { v: 4, e: '😐' },
    { v: 6, e: '😟' }, { v: 8, e: '😣' }, { v: 10, e: '😭' },
  ];

  const save = () => {
    const newEntry = {
      level, where: part ? parts.find(p => p.id === part).label[lang] : 'Général',
      when: lang === 'fr' ? 'À l\'instant' : lang === 'ln' ? 'Sikoyo' : 'Sasa hivi',
      note: note || '—',
      offline: !online,
    };
    setState({ ...state, painEntries: [newEntry, ...state.painEntries] });
    setSaved(true);
    setTimeout(() => nav('pain'), 900);
  };

  return (
    <div className="lc-scroll" style={{ padding: '6px 16px 24px' }}>
      {saved && (
        <div style={{
          position: 'absolute', top: 96, left: 16, right: 16,
          padding: 14, background: 'var(--lc-accent)', color: 'white',
          borderRadius: 14, display: 'flex', alignItems: 'center', gap: 10,
          zIndex: 10, boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        }}>
          <Icons.Check size={20} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{t.pain.saved}</div>
            {!online && <div style={{ fontSize: 12, opacity: 0.9 }}>{t.offline.savedLocally}</div>}
          </div>
        </div>
      )}

      {/* Level */}
      <div style={{ marginBottom: 16 }}>
        <div className="lc-eyebrow" style={{ marginBottom: 8 }}>{t.pain.howMuch}</div>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 10 }}>
          {faces.map(f => (
            <button key={f.v}
                    onClick={() => setLevel(f.v)}
                    className={'lc-pain-face' + (level === f.v ? ' selected' : '')}
                    style={{ fontSize: 22 }}>
              {f.e}
            </button>
          ))}
        </div>
        <input type="range" min="0" max="10" value={level}
               onChange={e => setLevel(+e.target.value)}
               style={{ width: '100%', accentColor: 'var(--lc-primary)' }} />
        <div className="row justify-between">
          <span className="lc-meta">{t.pain.mild}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--lc-primary)' }}>
            {level}/10
          </span>
          <span className="lc-meta">{t.pain.severe}</span>
        </div>
      </div>

      {/* Body map */}
      <div style={{ marginBottom: 16 }}>
        <div className="lc-eyebrow" style={{ marginBottom: 8 }}>{t.pain.where}</div>
        <div className="lc-card tight">
          <div className="row gap-12">
            <BodyMap selected={part} setSelected={setPart} />
            <div className="col gap-6" style={{ flex: 1 }}>
              {parts.slice(0,6).map(p => (
                <button key={p.id}
                        onClick={() => setPart(p.id)}
                        className={'lc-chip' + (part === p.id ? ' active' : '')}
                        style={{ justifyContent: 'flex-start', width: '100%' }}>
                  {p.label[lang]}
                </button>
              ))}
            </div>
          </div>
          <div className="lc-meta text-center" style={{ marginTop: 10, fontStyle: 'italic' }}>
            {t.pain.bodyHint}
          </div>
        </div>
      </div>

      {/* When */}
      <div style={{ marginBottom: 16 }}>
        <div className="lc-eyebrow" style={{ marginBottom: 8 }}>{t.pain.whenStart}</div>
        <div className="row gap-6" style={{ flexWrap: 'wrap' }}>
          {[
            { id:'now', l:{ fr:'Maintenant', ln:'Sikoyo', sw:'Sasa' } },
            { id:'1h', l:{ fr:'Il y a 1h', ln:'Ngonga 1', sw:'Saa 1 iliyopita' } },
            { id:'morning', l:{ fr:'Ce matin', ln:'Na ntɔ́ngɔ́', sw:'Asubuhi hii' } },
            { id:'night', l:{ fr:'La nuit', ln:'Na butu', sw:'Usiku' } },
          ].map(o => (
            <button key={o.id}
                    onClick={() => setWhen(o.id)}
                    className={'lc-chip' + (when === o.id ? ' active' : '')}>
              {o.l[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Note */}
      <div style={{ marginBottom: 16 }}>
        <div className="lc-eyebrow" style={{ marginBottom: 8 }}>{t.pain.notes}</div>
        <textarea className="lc-input"
                  rows="3"
                  value={note}
                  onChange={e => setNote(e.target.value)}
                  placeholder={lang === 'fr' ? 'Quelques mots pour Dr. Mbuyi…' :
                               lang === 'ln' ? 'Makambo moke mpo na monganga…' :
                               'Maelezo mafupi kwa daktari…'}
                  style={{ resize: 'none' }} />
        <button className="lc-chip" style={{ marginTop: 8 }}>
          <Icons.Mic size={14} />
          {lang === 'fr' ? 'Enregistrer la voix' : lang === 'ln' ? 'Koma na mongongo' : 'Rekodi sauti'}
        </button>
      </div>

      <button className="lc-btn primary full" onClick={save}>
        {online ? t.pain.save : t.pain.saveOffline}
      </button>
    </div>
  );
};

// ─── BODY MAP SVG ──────────────────────────────────────────────
const BodyMap = ({ selected, setSelected }) => (
  <div className="lc-bodymap" style={{ width: 100, flexShrink: 0 }}>
    <svg viewBox="0 0 80 180" width="100" height="220">
      {/* head */}
      <circle data-part="head" cx="40" cy="18" r="12"
              fill={selected==='head'?'var(--lc-primary)':'var(--lc-surface-2)'}
              stroke="var(--lc-line-strong)" strokeWidth="1"
              onClick={() => setSelected('head')}
              style={{cursor:'pointer'}} />
      {/* mouth dot */}
      <rect data-part="mouth" x="36" y="22" width="8" height="3" rx="1"
            fill={selected==='mouth'?'var(--lc-primary)':'var(--lc-ink-mute)'}
            onClick={(e)=>{e.stopPropagation();setSelected('mouth');}}
            style={{cursor:'pointer'}} />
      {/* neck */}
      <rect x="36" y="29" width="8" height="6" fill="var(--lc-surface-2)" stroke="var(--lc-line-strong)" />
      {/* chest */}
      <path data-part="chest" d="M22 38 Q22 36 24 35 L56 35 Q58 36 58 38 L58 70 L22 70 Z"
            fill={selected==='chest'?'var(--lc-primary)':'var(--lc-surface-2)'}
            stroke="var(--lc-line-strong)" strokeWidth="1"
            onClick={() => setSelected('chest')}
            style={{cursor:'pointer'}} />
      {/* belly */}
      <path data-part="belly" d="M24 70 L56 70 L54 92 L26 92 Z"
            fill={selected==='belly'?'var(--lc-primary)':'var(--lc-surface-2)'}
            stroke="var(--lc-line-strong)" strokeWidth="1"
            onClick={() => setSelected('belly')}
            style={{cursor:'pointer'}} />
      {/* arms */}
      <path data-part="arms" d="M22 40 L12 42 L10 78 L18 78 L20 46 Z"
            fill={selected==='arms'?'var(--lc-primary)':'var(--lc-surface-2)'}
            stroke="var(--lc-line-strong)"
            onClick={() => setSelected('arms')}
            style={{cursor:'pointer'}} />
      <path data-part="arms" d="M58 40 L68 42 L70 78 L62 78 L60 46 Z"
            fill={selected==='arms'?'var(--lc-primary)':'var(--lc-surface-2)'}
            stroke="var(--lc-line-strong)"
            onClick={() => setSelected('arms')}
            style={{cursor:'pointer'}} />
      {/* legs */}
      <path data-part="legs" d="M26 92 L26 160 L36 160 L38 92 Z"
            fill={selected==='legs'?'var(--lc-primary)':'var(--lc-surface-2)'}
            stroke="var(--lc-line-strong)"
            onClick={() => setSelected('legs')}
            style={{cursor:'pointer'}} />
      <path data-part="legs" d="M42 92 L44 160 L54 160 L54 92 Z"
            fill={selected==='legs'?'var(--lc-primary)':'var(--lc-surface-2)'}
            stroke="var(--lc-line-strong)"
            onClick={() => setSelected('legs')}
            style={{cursor:'pointer'}} />
    </svg>
  </div>
);

Object.assign(window, { TreatmentScreen, PainScreen, PainNewScreen, BodyMap });
