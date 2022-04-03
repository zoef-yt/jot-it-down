import { useContext, createContext, useState, useEffect } from 'react';
import { useAxios } from '../../CustomHooks';

const ArchiveContext = createContext();

const ArchiveProvider = ({ children }) => {
	const [archiveNotes, setArchiveNotes] = useState([]);
	const { response: archiveResponse, operation: archiveOperation } = useAxios();

	useEffect(() => {
		if (archiveResponse != null && archiveResponse.archives) {
			setArchiveNotes(archiveResponse.archives);
		} else {
			getArchive();
		}
	}, [archiveResponse]);

	const getArchive = () => {
		archiveOperation({
			method: 'GET',
			url: '/api/archives',
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	};

	const sendNotesToArchive = (noteId, notes) => {
		archiveOperation({
			method: 'POST',
			url: `/api/notes/archives/${noteId}`,
			data: {
				notes,
			},
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	};

	const deleteArchiveNotes = (noteId) => {
		archiveOperation({
			method: 'DELETE',
			url: `/api/archives/delete/${noteId}`,
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	};

	const sendArchiveToNotes = (notesId) => {
		archiveOperation({
			method: 'POST',
			url: `/api/archives/restore/${notesId}`,
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	};

	return (
		<ArchiveContext.Provider value={{ archiveNotes, sendNotesToArchive, getArchive, sendArchiveToNotes, deleteArchiveNotes }}>
			{children}
		</ArchiveContext.Provider>
	);
};

const useArchive = () => useContext(ArchiveContext);

export { ArchiveProvider, useArchive };
