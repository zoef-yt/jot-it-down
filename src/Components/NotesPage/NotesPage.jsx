import React, { useState, useEffect } from 'react';
import { useArchive, useAuth, useNotes } from '../../context/';
import { formatDate } from '../../backend/utils/authUtils';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './MyEditor.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { MyEditor } from './MyEditor';
import 'draft-js/dist/Draft.css';
import './MyEditor.css';

const NotesPage = () => {
	const { notes, postNotes, getNotes } = useNotes();
	const { sendNotesToArchive } = useArchive();
	const [textField, setTextField] = useState({ title: '', body: '' });
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const submitNote = () => {
		postNotes({
			title: textField.title,
			body: textField.body,
			tags: [],
			createdAt: formatDate(),
		});
		setEditorState(EditorState.createEmpty());
		setTextField({ title: '', body: '' });
	};
	const onChangerHandler = (e) => {
		setTextField({ ...textField, title: e.target.value });
	};

	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);
	};

	const editField = (body) => {
		const html = body;
		const contentBlock = htmlToDraft(html);
		const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
		const editorState = EditorState.createWithContent(contentState);
		setEditorState(editorState);
	};

	console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
	const isBodyEmpty = editorState.getCurrentContent().getPlainText().length === 0;
	useEffect(() => {
		setTextField({ ...textField, body: draftToHtml(convertToRaw(editorState.getCurrentContent())) });
	}, [editorState]);

	return (
		<div className='app-content'>
			<div className='my-editor'>
				<div className='flex-row  '>
					<label>
						Title:
						<input type='text' name='title' className='text-field' onChange={onChangerHandler} />
					</label>
					{/* //! Commented for future */}
					{/* <label>
						tags:
						<input type='text' name='title' className='text-field' onChange={onChangerHandler} />
					</label> */}
				</div>

				<label>
					Body:
					<MyEditor editorState={editorState} onEditorStateChange={onEditorStateChange} />
				</label>
				<div className='flex-row justify-content-center'>
					<button className='btn btn-primary' onClick={submitNote}>
						Add
					</button>
				</div>
			</div>

			{notes.length > 0 ? (
				<div>
					{notes.map((note) => {
						return (
							<div className='card ' key={note._id}>
								<h3>{note.title}</h3>
								<div style={{ width: '100%' }} className=' rdw-editor-main' dangerouslySetInnerHTML={{ __html: note.body }}></div>
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
