import { useContext, createContext, useState, useEffect } from 'react';
import { useAxios } from '../../CustomHooks';

const ArchiveContext = createContext();

const ArchiveProvider = ({ children }) => {
	const [archiveNotes, setArchiveNotes] = useState([]);
	const { response: archiveResponse, operation: fetchArchive } = useAxios();

	useEffect(() => {
		if (archiveResponse != null) {
			if (archiveResponse.archives) {
				setArchiveNotes(archiveResponse.archives);
			}
		} else {
			getArchive();
		}
	}, [archiveResponse]);
	const getArchive = () => {
		fetchArchive({
			method: 'GET',
			url: '/api/archives',
			headers: {
				authorization:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0OGJmMzFiYi1iYWQyLTQ3N2EtYmRhNy1kZDc4NDIxNDZhODgiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.kH6xXhMMvQ0sgsCz7e8vrSh1pVddplgC3IMzUSlTFsQ',
			},
		});
	};
	const notesToArchive = (noteId, notes) => {
		fetchArchive({
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
		fetchArchive({
			method: 'DELETE',
			url: `/api/archives/delete/${noteId}`,
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	};

	const archiveToNotes = (notesId) => {
		fetchArchive({
			method: 'POST',
			url: `/api/archives/restore/${notesId}`,
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	};

	return (
		<ArchiveContext.Provider value={{ archiveNotes, notesToArchive, getArchive, archiveToNotes, deleteArchiveNotes }}>
			{children}
		</ArchiveContext.Provider>
	);
};

const useArchive = () => useContext(ArchiveContext);

export { ArchiveProvider, useArchive };
