import { useContext, createContext, useState, useEffect } from 'react';
import { useAxios } from '../../CustomHooks';
import { useFilter } from '../FilterContext/FilterContext';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);
	const { response: notesResponse, operation: fetchNotes } = useAxios();
	const { filterDispatch } = useFilter();
	useEffect(() => {
		if (notesResponse?.notes) {
			setNotes(notesResponse.notes);
			filterDispatch({ type: 'SET_DATA', payload: notesResponse.notes });
		} else {
			getNotes();
		}
	}, [notesResponse]);

	const getNotes = () => {
		fetchNotes({
			method: 'GET',
			url: '/api/notes',
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	};

	const postNotes = (note) => {
		fetchNotes({
			method: 'POST',
			url: '/api/notes',
			data: {
				note,
			},
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	};
	const updateNotes = (_id, note) => {
		fetchNotes({
			method: 'POST',
			url: `/api/notes/${_id}`,
			headers: {
				authorization: localStorage.getItem('token'),
			},
			data: {
				note,
			},
		});
	};

	const deleteNotes = (_id) => {
		fetchNotes({
			method: 'DELETE',
			url: `/api/notes/${_id}`,
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	};

	return <NotesContext.Provider value={{ notes, getNotes, postNotes, updateNotes, deleteNotes }}>{children}</NotesContext.Provider>;
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
