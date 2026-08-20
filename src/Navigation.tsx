import { CalendarDays, CircleHelp, Gauge, Settings, Sparkles, UsersRound } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const links = [
	{ to: '/', label: 'Overview', icon: Gauge, end: true },
	{ to: '/calendar', label: 'Calendar', icon: CalendarDays },
	{ to: '/workers', label: 'Workers', icon: UsersRound },
	{ to: '/settings', label: 'Settings', icon: Settings },
];

export default function Navigation() {
	return (
		<div className="sidebar-content">
			<div className="brand">
				<span className="brand-mark"><Sparkles size={16} strokeWidth={2.2} /></span>
				<span>Workforce Hub</span>
			</div>

			<p className="nav-label">Workspace</p>
			<nav className="app-nav" aria-label="Main navigation">
				{links.map(({ to, label, icon: Icon, end }) => (
					<NavLink
						key={to}
						to={to}
						end={end}
						className={({ isActive }) => `app-nav-link${isActive ? ' active' : ''}`}
					>
						<Icon size={16} strokeWidth={1.9} aria-hidden="true" />
						<span>{label}</span>
					</NavLink>
				))}
			</nav>

			<div className="sidebar-footer">
				<div className="coverage-card">
					<div className="coverage-top"><span>Weekly coverage</span><strong>92%</strong></div>
					<div className="mini-progress"><span style={{ width: '92%' }} /></div>
				</div>
				<a className="nav-help" href="mailto:help@workforce.dev">
					<CircleHelp size={15} aria-hidden="true" />
					<span>Help center</span>
				</a>
			</div>
		</div>
	);
}
