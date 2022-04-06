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
								<button onClick={() => deleteTrashNotes(_id)} className='btn btn-secondary '>
									delete from trash
								</button>
								<button
									onClick={() => {
										postNotes(note);
										deleteTrashNotes(_id);
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
