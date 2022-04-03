import React, { useState } from 'react';
import { useArchive, useAuth, useNotes } from '../../context/';
import { formatDate } from '../../backend/utils/authUtils';

const NotesPage = () => {
	const { user, encodedToken } = useAuth();
	const { notes, postNotes, getNotes } = useNotes();
	const { sendNotesToArchive } = useArchive();
	const [textField, setTextField] = useState({ title: '', body: '' });
	const submitNote = () => {
		postNotes({
			title: textField.title,
			body: textField.body,
			tags: [],
			createdAt: formatDate(),
		});
	};
	const onChangerHandler = (e) => {
		setTextField({ ...textField, [e.target.name]: e.target.value });
	};
	return (
		<div className='app-content'>
			<h1>Notes</h1>
			<input type='text' name='title' className='text-field' onChange={onChangerHandler} />
			<textarea name='body' onChange={onChangerHandler} className='textarea' id='' cols='30' rows='5'></textarea>
			<button className='btn btn-primary' onClick={submitNote}>
				Add
			</button>
			{notes.length > 0 ? (
				<div>
					{notes.map((note) => {
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
										sendNotesToArchive(note._id, note);
										getNotes();
									}}
									className='btn btn-secondary '
								>
									Move to archive
								</button>
							</div>
						);
					})}
				</div>
			) : (
				<h1>Add Notes here</h1>
			)}
		</div>
	);
};

export { NotesPage };
