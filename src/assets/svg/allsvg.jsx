import React from 'react';

function CreateNewIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 26 26' {...props}>
			<path
				fill='currentColor'
				d='M22.438-.063c-.375 0-.732.17-1.032.47l-.718.687l4.218 4.218l.688-.718c.6-.6.6-1.494 0-2.094L23.5.406c-.3-.3-.688-.469-1.063-.469zM20 1.688l-1.094.907l4.5 4.5l1-1L20 1.687zm-1.688 1.625l-9.03 8.938a.975.975 0 0 0-.126.125l-.062.031a.975.975 0 0 0-.219.438l-1.219 4.281a.975.975 0 0 0 1.219 1.219l4.281-1.219a.975.975 0 0 0 .656-.531l8.876-8.782L21 6v.094l-1.188-1.188h.094l-1.593-1.593zM.813 4A1 1 0 0 0 0 5v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 1 0-2 0v10H2V6h10a1 1 0 1 0 0-2H1a1 1 0 0 0-.094 0a1 1 0 0 0-.094 0zm9.813 9.813l1.375.093l.094 1.5l-1.375.406l-.531-.53l.437-1.47z'
			></path>
		</svg>
	);
}

function SunIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 16 16' {...props}>
			<g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5'>
				<circle cx='8' cy='8' r='3.25'></circle>
				<path d='m2.75 13.25l.5-.5m9.5 0l.5.5m-.5-10l.5-.5m-10 .5l-.5-.5M2.25 8h-1m13.5 0h-1M8 13.75v1m0-13.5v1'></path>
			</g>
		</svg>
	);
}

function HalfMoonIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 20 20' {...props}>
			<path
				fill='currentColor'
				d='M17.39 15.14A7.33 7.33 0 0 1 11.75 1.6c.23-.11.56-.23.79-.34a8.19 8.19 0 0 0-5.41.45a9 9 0 1 0 7 16.58a8.42 8.42 0 0 0 4.29-3.84a5.3 5.3 0 0 1-1.03.69z'
			></path>
		</svg>
	);
}

function TrashIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 256 256' {...props}>
			<path fill='currentColor' d='M200 56v152a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56Z' opacity='.2'></path>
			<path
				fill='currentColor'
				d='M216 48H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16Zm-24 160H64V64h128ZM80 24a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8Z'
			></path>
		</svg>
	);
}

function ArchiveIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm16 6H4v10h16V9zm-.236-2l-1-2H5.237l-1 2h15.527zM13 14h3l-4 4l-4-4h3v-4h2v4z'
			></path>
		</svg>
	);
}

function UnarchiveIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='m20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16zm0 6H4v10h16V9zm-8 1l4 4h-3v4h-2v-4H8l4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z'
			></path>
		</svg>
	);
}

function HomeIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path fill='currentColor' d='M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z'></path>
		</svg>
	);
}

function ColorPaletteIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5c0-.39-.15-.74-.39-1.01c-.23-.26-.38-.61-.38-.99c0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5c0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9S8 9.67 8 10.5S7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z'
			></path>
		</svg>
	);
}

function EditIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z'
			></path>
		</svg>
	);
}

function RestoreIcon(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M12 3a9 9 0 0 0-9 9H0l4 4l4-4H5a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.5 0-2.91-.5-4.06-1.3L6.5 19.14A9.115 9.115 0 0 0 12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9m2 9a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2Z'
			></path>
		</svg>
	);
}
export { CreateNewIcon, SunIcon, HalfMoonIcon, TrashIcon, ArchiveIcon, UnarchiveIcon, HomeIcon, ColorPaletteIcon, EditIcon, RestoreIcon };
