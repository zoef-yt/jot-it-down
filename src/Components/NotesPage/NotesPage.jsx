import React, { useState, useEffect } from 'react';
import { useArchive, useAuth, useNotes } from '../../context/';
import { formatDate } from '../../backend/utils/authUtils';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './MyEditor.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { MyEditor } from './MyEditor';
import 'draft-js/dist/Draft.css';
import './MyEditor.css';
import { Fragment } from 'react/cjs/react.production.min';

const NotesPage = () => {
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
		setTextField({ ...textField, title: e.target.value });
	};

	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);
	};
	console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
	const isBodyEmpty = editorState.getCurrentContent().getPlainText().length === 0;
	useEffect(() => {
		setTextField({ ...textField, body: draftToHtml(convertToRaw(editorState.getCurrentContent())) });
	}, [editorState]);

	return (
		<div className='app-content'>
			<h1>Notes</h1>

			<div className='my-editor'>
				<label>
					Title:
					<input type='text' name='title' className='text-field' onChange={onChangerHandler} />
				</label>
				<label>
					Body:
					<MyEditor editorState={editorState} onEditorStateChange={onEditorStateChange} />
				</label>
			</div>
			<button className='btn btn-primary' onClick={submitNote}>
				Add
			</button>
			{notes.length > 0 ? (
				<div>
					{notes.map((note) => {
						const body = { __html: note.body };
						return (
							<div className='card ' key={note._id}>
								<h3>{note.title}</h3>
								<Fragment dangerouslySetInnerHtml={body}></Fragment>
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
