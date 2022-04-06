import { useContext, createContext, useState, useEffect } from 'react';
import { useAxios } from '../../CustomHooks';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);
	const { response: notesResponse, operation: fetchNotes } = useAxios();

	useEffect(() => {
		if (notesResponse != null && notesResponse.notes) {
			setNotes(notesResponse.notes);
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

	return <NotesContext.Provider value={{ notes, getNotes, postNotes, updateNotes }}>{children}</NotesContext.Provider>;
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
