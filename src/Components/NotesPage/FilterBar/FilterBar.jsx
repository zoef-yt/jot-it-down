import React, { useState } from 'react';
import { useFilter } from '../../../context';
import { priorities } from '../../../data/priorities';
import { tags } from '../../../data/tags';
import './FilterBar.css';
const FilterDropDownbutton = ({ buttonName, scroll, children }) => {
	return (
		<div className='dropdown'>
			<button className='btn btn-filter btn-primary dropdown-btn'>{buttonName}</button>
			<div style={{ transform: `translateX(-${scroll}px)` }} className='dropdown-content'>
				{children}
			</div>
		</div>
	);
};

const FilterBar = () => {
	const { filterState, filterDispatch } = useFilter();
	const [scroll, setScrolled] = useState('');
	const scrollHandler = (event) => {
		setScrolled((scroll) => (scroll = event.target.scrollLeft));
	};

	return (
		<aside className='filter-section'>
			<div className='product-filter-bar'>
				<div className='filter-items' onScroll={scrollHandler}>
					<h3>Filter By:</h3>
					<FilterDropDownbutton
						key='Sort-By-Date'
						scroll={scroll}
						buttonName='Sort By Date'
						children={
							<>
								<label>
									<input
										type='radio'
										name='sort-by-date'
										checked={filterState.sortByDate === 'OLDEST_TO_NEWEST'}
										onChange={() => filterDispatch({ type: 'SORT_BY_DATE', payload: 'OLDEST_TO_NEWEST' })}
									/>
									Sort Oldest to Newest
								</label>

								<label>
									<input
										type='radio'
										name='sort-by-date'
										checked={filterState.sortByDate === 'NEWEST_TO_OLDEST'}
										onChange={() => filterDispatch({ type: 'SORT_BY_DATE', payload: 'NEWEST_TO_OLDEST' })}
									/>
									Sort Newest to Oldest
								</label>
							</>
						}
					/>

					<FilterDropDownbutton
						key='Tags'
						scroll={scroll}
						buttonName='Tags'
						children={
							<>
								{tags.map((tag, index) => (
									<label key={index}>
										<input
											type='radio'
											name='platform'
											value={filterState.tags === tag}
											onChange={() => filterDispatch({ type: 'SELECTED_TAG', payload: tag })}
										/>
										{tag}
									</label>
								))}
							</>
						}
					/>

					<FilterDropDownbutton
						key='Priorities'
						buttonName='Priorities'
						scroll={scroll}
						children={
							<>
								{priorities.map((priority, index) => (
									<label key={index}>
										<input
											type='radio'
											name='priority'
											value={filterState.priorities === priority}
											onChange={() => filterDispatch({ type: 'SELECTED_PRIORITY', payload: priority })}
										/>
										{priority}
									</label>
								))}
							</>
						}
					/>

					<button className='btn btn-link btn-products' onClick={() => filterDispatch({ type: 'CLEAR_FILTER' })}>
						Clear Filters
					</button>
				</div>
			</div>
		</aside>
	);
};

export { FilterBar };
