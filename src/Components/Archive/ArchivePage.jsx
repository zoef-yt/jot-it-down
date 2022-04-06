import React from 'react';
import { useArchive, useNotes, useTrash } from '../../context/';
import { NotesCard } from '../NotesCard/NotesCard';

const ArchivePage = () => {
	const { archiveNotes, deleteArchiveNotes, sendArchiveToNotes } = useArchive();
	const { sendArchiveToTrash } = useTrash();
	const { getNotes } = useNotes();
	return (
		<div className='app-content'>
			{archiveNotes.length > 0 ? (
				archiveNotes.map((note) => {
					return <NotesCard note={note} key={note._id} isArchive={true} />;
				})
			) : (
				<h1>NO ARCHIVE NOTES FOUND</h1>
			)}
		</div>
	);
};

export { ArchivePage };
