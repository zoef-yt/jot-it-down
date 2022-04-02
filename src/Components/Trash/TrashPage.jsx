import React from 'react';
import { useNotes, useTrash } from '../../context';

function TrashPage() {
	const { trashNotes, deleteTrashNotes } = useTrash();
	const { postNotes } = useNotes();
	return (
		<div className='app-content'>
			{trashNotes.length > 0 ? (
				<div>
					{trashNotes.map((note) => {
						return (
							<div className='card ' key={note._id}>
								<h3>{note.title}</h3>
								<p>{note.body}</p>
								<p>{note.createdAt}</p>
								<li>
									{note.tags.map((tag) => {
										return <span key={tag}>{tag}</span>;
									})}
								</li>
								<button onClick={() => deleteTrashNotes(note._id)} className='btn btn-secondary '>
									delete from trash
								</button>
								<button
									onClick={() => {
										postNotes(note);
										deleteTrashNotes(note._id);
									}}
									className='btn btn-secondary '
								>
									Move To Home
								</button>
							</div>
						);
					})}
				</div>
			) : (
				<h1>NO TRASHED NOTES FOUND</h1>
			)}
		</div>
	);
}

export { TrashPage };
