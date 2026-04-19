// Phone shell — status bar, sync banner, tab bar. Not a pixel-heavy frame.

const StatusBar = ({ time = '08:42', online }) => (
  <div className="lc-status">
    <span>{time}</span>
    <div className="icons">
      {online ? <Icons.Signal size={14} /> : <Icons.CloudOff size={14} />}
      <Icons.Wifi size={14} />
      <Icons.Battery size={18} />
    </div>
  </div>
);

const SyncBanner = ({ online, pending, t }) => {
  if (online && !pending) {
    return (
      <div className="lc-sync-banner">
        <span className="lc-sync-dot"></span>
        <Icons.Cloud size={12} />
        <span>{t.offline.online}</span>
      </div>
    );
  }
  if (!online) {
    return (
      <div className="lc-sync-banner offline">
        <span className="lc-sync-dot"></span>
        <Icons.CloudOff size={12} />
        <span>{t.offline.banner}</span>
      </div>
    );
  }
  return (
    <div className="lc-sync-banner">
      <span className="lc-sync-dot"></span>
      <Icons.Refresh size={12} />
      <span>{t.offline.syncing}</span>
    </div>
  );
};

const AppBar = ({ title, back, onBack, right, scrolled, display = true }) => (
  <div className={'lc-appbar' + (scrolled ? ' scrolled' : '')}>
    {back ? (
      <button className="icon-btn ghost" onClick={onBack} aria-label="back">
        <Icons.ArrowLeft size={20} />
      </button>
    ) : null}
    {display !== false && <h1 style={{ fontFamily: display ? undefined : 'var(--lc-font)' }}>{title}</h1>}
    {right || <div style={{ width: 38 }} />}
  </div>
);

const TabBar = ({ tab, setTab, t }) => {
  const items = [
    { id: 'home', label: t.nav.home, Icon: Icons.Home },
    { id: 'treat', label: t.nav.treat, Icon: Icons.Pill },
    { id: 'pain', label: t.nav.pain, Icon: Icons.Heart },
    { id: 'community', label: t.nav.community, Icon: Icons.Users },
    { id: 'more', label: t.nav.more, Icon: Icons.More },
  ];
  return (
    <div className="lc-tabbar">
      {items.map(({ id, label, Icon }) => (
        <button key={id}
                className={tab === id ? 'active' : ''}
                onClick={() => setTab(id)}>
          <Icon size={22} />
          <span>{label}</span>
          <span className="dot"></span>
        </button>
      ))}
    </div>
  );
};

// Phone bezel
const Phone = ({ children, tweaks }) => {
  const scale = 1;
  return (
    <div style={{
      width: 360, height: 760,
      borderRadius: 38, padding: 8,
      background: '#0d0a07',
      boxShadow: '0 40px 80px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset',
      position: 'relative',
    }}>
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 30, overflow: 'hidden',
        background: 'var(--lc-bg)',
        position: 'relative',
      }}>
        {children}
      </div>
    </div>
  );
};

window.StatusBar = StatusBar;
window.SyncBanner = SyncBanner;
window.AppBar = AppBar;
window.TabBar = TabBar;
window.Phone = Phone;
