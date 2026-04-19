// Icons - minimal stroke-based, reusable
// All use currentColor; pass size via props.

const Icon = ({ d, size = 20, fill = 'none', stroke = 'currentColor', strokeWidth = 1.8, style, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
       strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {d ? <path d={d} /> : children}
  </svg>
);

const Icons = {
  Home: p => <Icon {...p}><path d="M4 11 12 4l8 7" /><path d="M6 10v9h12v-9" /></Icon>,
  Pill: p => <Icon {...p}><rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-35 12 12)" /><path d="M8.5 7.5l6 6" /></Icon>,
  Heart: p => <Icon {...p}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" /></Icon>,
  Users: p => <Icon {...p}><circle cx="9" cy="8" r="3" /><path d="M3 19c0-3 3-5 6-5s6 2 6 5" /><circle cx="17" cy="9" r="2.2" /><path d="M15 19c0-2 1.5-3.5 3.5-3.5S22 17 22 19" /></Icon>,
  More: p => <Icon {...p}><circle cx="5" cy="12" r="1.2" fill="currentColor" /><circle cx="12" cy="12" r="1.2" fill="currentColor" /><circle cx="19" cy="12" r="1.2" fill="currentColor" /></Icon>,
  Bell: p => <Icon {...p}><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5L6 16Z" /><path d="M10 20a2 2 0 0 0 4 0" /></Icon>,
  Settings: p => <Icon {...p}><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2l-.4-2.4h-4l-.4 2.4a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2 1.2l.4 2.4h4l.4-2.4a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z" /></Icon>,
  Plus: p => <Icon {...p}><path d="M12 5v14M5 12h14" /></Icon>,
  Check: p => <Icon {...p}><path d="M4 12l5 5L20 6" /></Icon>,
  Cloud: p => <Icon {...p}><path d="M7 17a4 4 0 0 1-.6-7.95A5 5 0 0 1 16 9a4 4 0 0 1 1 7.85L7 17Z" /></Icon>,
  CloudOff: p => <Icon {...p}><path d="M3 3l18 18" /><path d="M16.8 13.8A4 4 0 0 0 16 9a5 5 0 0 0-8.5-1.5M6.2 9.1A4 4 0 0 0 7 17h10" /></Icon>,
  Calendar: p => <Icon {...p}><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M8 3v4M16 3v4M3.5 10h17" /></Icon>,
  Book: p => <Icon {...p}><path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4Z" /><path d="M20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7V4Z" /></Icon>,
  MessageCircle: p => <Icon {...p}><path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.6-3.2A8 8 0 0 1 4 12Z" /></Icon>,
  Search: p => <Icon {...p}><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.5-4.5" /></Icon>,
  ChevronRight: p => <Icon {...p}><path d="M9 6l6 6-6 6" /></Icon>,
  ChevronLeft: p => <Icon {...p}><path d="M15 6l-6 6 6 6" /></Icon>,
  ArrowLeft: p => <Icon {...p}><path d="M20 12H5M10 6l-6 6 6 6" /></Icon>,
  Send: p => <Icon {...p}><path d="M21 4 11 14" /><path d="M21 4l-7 17-3-7-7-3 17-7Z" /></Icon>,
  Globe: p => <Icon {...p}><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5a14 14 0 0 1 0 17M12 3.5a14 14 0 0 0 0 17" /></Icon>,
  Thermometer: p => <Icon {...p}><path d="M10 14.5V5a2 2 0 1 1 4 0v9.5a4 4 0 1 1-4 0Z" /></Icon>,
  Activity: p => <Icon {...p}><path d="M3 12h4l3-8 4 16 3-8h4" /></Icon>,
  Droplet: p => <Icon {...p}><path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z" /></Icon>,
  MapPin: p => <Icon {...p}><path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></Icon>,
  Phone: p => <Icon {...p}><path d="M21 16.5v3a2 2 0 0 1-2.2 2A19 19 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2L8.8 10.4a16 16 0 0 0 4.8 4.8l1.2-1.2a2 2 0 0 1 2-.5c.8.3 1.7.5 2.5.6A2 2 0 0 1 21 16.5Z" /></Icon>,
  X: p => <Icon {...p}><path d="M6 6l12 12M18 6 6 18" /></Icon>,
  Sparkle: p => <Icon {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /></Icon>,
  Shield: p => <Icon {...p}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z" /></Icon>,
  AlertTriangle: p => <Icon {...p}><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v5M12 18v.5" /></Icon>,
  Mic: p => <Icon {...p}><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></Icon>,
  Paperclip: p => <Icon {...p}><path d="M20 12l-8 8a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l7-7" /></Icon>,
  Download: p => <Icon {...p}><path d="M12 4v12M6 11l6 5 6-5M4 20h16" /></Icon>,
  Wifi: p => <Icon {...p}><path d="M2 8.5a16 16 0 0 1 20 0" /><path d="M5 12a12 12 0 0 1 14 0" /><path d="M8.5 15.5a7 7 0 0 1 7 0" /><circle cx="12" cy="19" r="1" fill="currentColor" /></Icon>,
  Battery: p => <Icon {...p}><rect x="3" y="8" width="16" height="8" rx="1.5" /><rect x="20" y="10.5" width="1.5" height="3" rx="0.5" fill="currentColor" /><rect x="5" y="10" width="9" height="4" fill="currentColor" stroke="none" /></Icon>,
  Signal: p => <Icon {...p}><rect x="4" y="14" width="3" height="6" rx="0.5" fill="currentColor" stroke="none" /><rect x="10" y="10" width="3" height="10" rx="0.5" fill="currentColor" stroke="none" /><rect x="16" y="5" width="3" height="15" rx="0.5" fill="currentColor" stroke="none" /></Icon>,
  Refresh: p => <Icon {...p}><path d="M20 12a8 8 0 1 1-3-6.2" /><path d="M20 4v4.5h-4.5" /></Icon>,
};

window.Icons = Icons;
