import { mountStandalone } from '@r01al/mfe-workforce-common-client/standalone';
import '@r01al/mfe-workforce-common-client/standalone.css';
import Navigation from './Navigation';

mountStandalone({
	component: Navigation,
	layout: 'navigation',
});
