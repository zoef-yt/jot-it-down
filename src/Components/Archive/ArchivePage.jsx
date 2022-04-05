import React from 'react';
import { useArchive, useNotes, useTrash } from '../../context/';

const ArchivePage = () => {
	const { archiveNotes, deleteArchiveNotes, sendArchiveToNotes } = useArchive();
	const { sendArchiveToTrash } = useTrash();
	const { getNotes } = useNotes();
	return (
		<div className='app-content'>
			{archiveNotes.length > 0 ? (
				<div>
					{archiveNotes.map((note) => {
						const { _id, body, createdAt, tags, title } = note;

						return (
							<div className='card ' key={_id}>
								<h3>{title}</h3>
								<div style={{ width: '100%' }} className=' rdw-editor-main' dangerouslySetInnerHTML={{ __html: body }}></div>
								<p>{createdAt}</p>
								<li>
									{tags.map((tag) => {
										return <span key={tag}>{tag}</span>;
									})}
								</li>
								<button
									onClick={() => {
										deleteArchiveNotes(_id);
										sendArchiveToTrash(note);
									}}
									className='btn btn-secondary '
								>
									Move to TrashPage
								</button>
								<button
									onClick={() => {
										sendArchiveToNotes(_id);
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
