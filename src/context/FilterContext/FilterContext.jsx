import { useContext, createContext, useState, useEffect, useReducer } from 'react';

const initialData = {
	search: '',
	sortByDate: '',
	tag: '',
	priority: '',
	dataToShow: [],
	originalData: [],
};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
	const [FilterState, FilterDispatch] = useReducer(filterReducer, initialData);
	console.log(FilterState);
	return <FilterContext.Provider value={{ FilterState, FilterDispatch }}>{children}</FilterContext.Provider>;
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };

const filterReducer = (state, action) => {
	switch (action.type) {
		case 'SET_DATA':
			return {
				...state,
				dataToShow: action.payload,
				originalData: action.payload,
			};
		case 'CLEAR_FILTER':
			return {
				...state,
				dataToShow: [...state.originalData],
				search: state.search,
				sortByDate: '',
				tag: '',
				priority: '',
			};

		case 'SEARCH':
			return {
				...state,
				search: action.payload,
			};

		case 'SORT_BY_DATE':
			if (action.payload === 'OLDEST_TO_NEWEST') {
				return {
					...state,
					sortByDate: 'OLDEST_TO_NEWEST',
					dataToShow: [...state.dataToShow].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
				};
			} else if (action.payload === 'NEWEST_TO_OLDEST') {
				return {
					...state,
					sortByDate: 'NEWEST_TO_OLDEST',
					dataToShow: [...state.dataToShow].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
				};
			}
		case 'SELECTED_TAG':
			return {
				...state,
				tag: action.payload,
			};
		case 'SELECTED_PRIORITY':
			return {
				...state,
				priority: action.payload,
			};
		default:
			return state;
	}
};
