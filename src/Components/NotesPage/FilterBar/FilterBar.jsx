import React, { useState } from 'react';
import { useFilter } from '../../../context';
import { priorities } from '../../../data/priorities';
import { tags } from '../../../data/tags';
import './FilterBar.css';
const FilterDropDownbutton = (props) => {
	return (
		<div className='dropdown'>
			<button className='btn btn-filter btn-primary dropdown-btn'>{props.buttonName}</button>
			<div style={{ transform: `translateX(-${props.scroll}px)` }} className='dropdown-content'>
				{props.children}
			</div>
		</div>
	);
};

const FilterBar = () => {
	const { FilterState, FilterDispatch } = useFilter();
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
										checked={FilterState.sortByDate === 'OLDEST_TO_NEWEST'}
										onChange={() => FilterDispatch({ type: 'SORT_BY_DATE', payload: 'OLDEST_TO_NEWEST' })}
									/>
									Sort Oldest to Newest
								</label>

								<label>
									<input
										type='radio'
										name='sort-by-date'
										checked={FilterState.sortByDate === 'NEWEST_TO_OLDEST'}
										onChange={() => FilterDispatch({ type: 'SORT_BY_DATE', payload: 'NEWEST_TO_OLDEST' })}
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
											value={FilterState.tags === tag}
											onChange={() => FilterDispatch({ type: 'SELECTED_TAG', payload: tag })}
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
											value={FilterState.priorities === priority}
											onChange={() => FilterDispatch({ type: 'SELECTED_PRIORITY', payload: priority })}
										/>
										{priority}
									</label>
								))}
							</>
						}
					/>

					<button className='btn btn-link btn-products' onClick={() => FilterDispatch({ type: 'CLEAR_FILTER' })}>
						Clear Filters
					</button>
				</div>
			</div>
		</aside>
	);
};

export { FilterBar };
