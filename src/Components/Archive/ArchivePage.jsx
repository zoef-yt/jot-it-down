import React from 'react';
import { useArchive, useNotes, useTrash } from '../../context/';

const ArchivePage = () => {
	const { archiveNotes, deleteArchiveNotes, archiveToNotes } = useArchive();
	const { archiveToTrash } = useTrash();
	const { getNotes } = useNotes();
	return (
		<div className='app-content'>
			{archiveNotes.length > 0 ? (
				<div>
					{archiveNotes.map((note) => {
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
								<button
									onClick={() => {
										deleteArchiveNotes(note._id);
										archiveToTrash(note);
									}}
									className='btn btn-secondary '
								>
									Move to TrashPage
								</button>
								<button
									onClick={() => {
										archiveToNotes(note._id);
										getNotes();
									}}
									className='btn btn-secondary '
								>
									Move to notes page
								</button>
							</div>
						);
					})}
				</div>
			) : (
				<h1>NO ARCHIVE NOTES FOUND</h1>
			)}
		</div>
	);
};

export { ArchivePage };
