import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
}
export const ROUTES: RouteInfo[] = [
	{ path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },

	{
		path: '/arduino',
		title: 'Arduino',
		icon: 'device_thermostat',
		class: '',
	},
	{
		path: '/rasp',
		title: 'Raspberry',
		icon: 'air',
		class: '',
	},
	{
		path: '/beagle',
		title: 'Beagle',
		icon: 'developer_board',
		class: '',
	},
	{
		path: '/esp',
		title: 'Esp 32',
		icon: 'settings_remote',
		class: '',
	},
];

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
	menuItems: any[];

	constructor() {}

	ngOnInit() {
		this.menuItems = ROUTES.filter((menuItem) => menuItem);
	}
	isMobileMenu() {
		if ($(window).width() > 991) {
			return false;
		}
		return true;
	}
}
