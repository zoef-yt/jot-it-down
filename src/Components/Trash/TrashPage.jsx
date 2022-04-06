import React from 'react';
import { useNotes, useTrash } from '../../context';
import { NotesCard } from '../NotesCard/NotesCard';

function TrashPage() {
	const { trashNotes, deleteTrashNotes } = useTrash();
	const { postNotes } = useNotes();
	return (
		<div className='app-content'>
			{trashNotes.length > 0 ? (
				trashNotes.map((note) => {
					return <NotesCard note={note} key={note._id} isTrash={true} />;
				})
			) : (
				<h1>NO TRASHED NOTES FOUND</h1>
			)}
		</div>
	);
}

export { TrashPage };
