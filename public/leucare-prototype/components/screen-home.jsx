// LeuCare — Screens. Each is a React component.

const { useState, useEffect, useMemo, useRef } = React;

// ─── HOME ───────────────────────────────────────────────────────
const HomeScreen = ({ t, lang, state, setState, nav }) => {
  const greetings = { fr: 'Mbote Maman', ln: 'Mbote Mama', sw: 'Habari Mama' };
  const moods = [
    { v: 1, e: '😊', label: { fr: 'Bien', ln: 'Malamu', sw: 'Vizuri' } },
    { v: 2, e: '🙂', label: { fr: 'Ça va', ln: 'Na mitindo', sw: 'Sawa' } },
    { v: 3, e: '😐', label: { fr: 'Fatigué', ln: 'Alɛmbi', sw: 'Amechoka' } },
    { v: 4, e: '😟', label: { fr: 'Pas bien', ln: 'Te malamu', sw: 'Si vizuri' } },
    { v: 5, e: '😣', label: { fr: 'Douleur', ln: 'Mpasi', sw: 'Maumivu' } },
  ];
  return (
    <div className="lc-scroll" style={{ padding: '14px 16px 24px' }}>
      {/* Greeting */}
      <div className="col gap-4" style={{ marginBottom: 14 }}>
        <div className="lc-eyebrow">{t.home.today} — 19 avril</div>
        <h2 className="lc-h2">{greetings[lang]}, <br /><em style={{ fontStyle: 'italic', color: 'var(--lc-primary)' }}>Kiese</em>.</h2>
      </div>

      {/* Feeling quick-log */}
      <div className="lc-card primary-soft" style={{ marginBottom: 12 }}>
        <div className="lc-eyebrow" style={{ color: 'var(--lc-primary)', marginBottom: 6 }}>{t.home.quickLog}</div>
        <div style={{ fontFamily: 'var(--lc-font-display)', fontSize: 18, lineHeight: 1.2, marginBottom: 12 }}>
          {t.home.feeling}
        </div>
        <div className="row" style={{ gap: 6, justifyContent: 'space-between' }}>
          {moods.map(m => (
            <button key={m.v}
                    onClick={() => { setState({ ...state, todayMood: m.v }); }}
                    className={'lc-pain-face' + (state.todayMood === m.v ? ' selected' : '')}
                    style={{ flexDirection: 'column', height: 58, width: 'auto', flex: 1, fontSize: 18 }}>
              <span>{m.e}</span>
              <span style={{ fontSize: 9, fontWeight: 600, color: 'var(--lc-ink-soft)' }}>
                {m.label[lang]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Next dose + next appt stacked */}
      <div className="col gap-8" style={{ marginBottom: 12 }}>
        <div className="lc-card" onClick={() => nav('treat')} style={{ cursor: 'pointer' }}>
          <div className="row gap-12 items-center">
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'var(--lc-primary)', color: 'var(--lc-primary-ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icons.Pill size={22} />
            </div>
            <div className="flex-1">
              <div className="lc-eyebrow">{t.home.nextDose}</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>Méthotrexate · 15 mg</div>
              <div className="lc-meta">dans 3h 24 · 12:00</div>
            </div>
            <Icons.ChevronRight size={18} style={{ color: 'var(--lc-ink-mute)' }} />
          </div>
        </div>

        <div className="lc-card" onClick={() => nav('calendar')} style={{ cursor: 'pointer' }}>
          <div className="row gap-12 items-center">
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'var(--lc-accent-soft)', color: 'var(--lc-accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icons.Calendar size={22} />
            </div>
            <div className="flex-1">
              <div className="lc-eyebrow">{t.home.nextAppt}</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>NFS & consultation</div>
              <div className="lc-meta">Jeudi 23 avril · Dr. Mbuyi · CUKin</div>
            </div>
            <Icons.ChevronRight size={18} style={{ color: 'var(--lc-ink-mute)' }} />
          </div>
        </div>
      </div>

      {/* Week glance */}
      <div style={{ marginBottom: 12 }}>
        <div className="row justify-between items-center" style={{ marginBottom: 8 }}>
          <div className="lc-eyebrow">{t.home.weekGlance}</div>
          <span className="lc-meta">Sem. 14 · Entretien</span>
        </div>
        <div className="lc-card tight">
          <div className="row gap-6" style={{ justifyContent: 'space-between' }}>
            {['L','M','M','J','V','S','D'].map((d, i) => {
              const status = [1,1,1,1,0.6,0,0][i]; // 1 taken, 0.6 partial, 0 future
              return (
                <div key={i} className="col items-center gap-4" style={{ flex: 1 }}>
                  <div className="lc-meta" style={{ fontSize: 10 }}>{d}</div>
                  <div style={{
                    width: 30, height: 30, borderRadius: 100,
                    background: status === 1 ? 'var(--lc-primary)' :
                                status === 0.6 ? 'var(--lc-warn-soft)' :
                                'var(--lc-surface-2)',
                    border: i === 4 ? '2px solid var(--lc-ink)' : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: status === 1 ? 'var(--lc-primary-ink)' : 'var(--lc-ink-soft)',
                    fontSize: 11, fontWeight: 700,
                  }}>
                    {status === 1 ? <Icons.Check size={14} /> : (14 + i)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row items-center" style={{ marginTop: 12, gap: 12 }}>
            <div className="col gap-4 flex-1">
              <div className="lc-meta">Adhésion 6-MP</div>
              <div className="lc-bar"><div style={{ width: '86%' }}></div></div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--lc-primary)' }}>86%</div>
          </div>
        </div>
      </div>

      {/* Community snippet */}
      <div style={{ marginBottom: 12 }}>
        <div className="lc-eyebrow" style={{ marginBottom: 8 }}>{t.home.community}</div>
        <div className="lc-card tight" onClick={() => nav('community')} style={{ cursor: 'pointer' }}>
          <div className="row gap-10 items-start">
            <div className="lc-avatar" style={{
              background: 'var(--lc-accent)',
              color: 'var(--lc-primary-ink)',
            }}>BN</div>
            <div className="flex-1">
              <div className="row gap-6 items-center">
                <span style={{ fontSize: 13, fontWeight: 700 }}>Beatrice N.</span>
                <span className="lc-meta">· Il y a 2h</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--lc-ink-soft)', marginTop: 2, lineHeight: 1.4 }}>
                « Quelqu'un connaît un coiffeur doux à Kintambo ? Mon fils perd ses cheveux et il n'ose plus sortir. »
              </div>
              <div className="row gap-12" style={{ marginTop: 8 }}>
                <span className="lc-meta">💬 14 réponses</span>
                <span className="lc-meta">❤️ 28</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tip */}
      <div className="lc-card" style={{ background: 'var(--lc-ink)', color: 'var(--lc-surface)', borderColor: 'transparent' }}>
        <div className="row gap-8 items-center" style={{ marginBottom: 6 }}>
          <Icons.Sparkle size={14} />
          <span className="lc-eyebrow" style={{ color: 'var(--lc-surface)', opacity: 0.7 }}>{t.home.tips}</span>
        </div>
        <div style={{ fontFamily: 'var(--lc-font-display)', fontSize: 17, lineHeight: 1.3 }}>
          Après la méthotrexate, garde Jonas à l'ombre pendant 48h — sa peau brûle plus vite.
        </div>
        <div className="row justify-between items-center" style={{ marginTop: 10 }}>
          <span style={{ fontSize: 11, opacity: 0.6 }}>Source: Protocole LAL-B CUKin</span>
          <button className="lc-chip" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
            Lire
          </button>
        </div>
      </div>
    </div>
  );
};

window.HomeScreen = HomeScreen;
