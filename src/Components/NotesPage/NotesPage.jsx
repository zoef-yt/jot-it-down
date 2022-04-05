import React, { useState, useEffect } from 'react';
import { useArchive, useAuth, useNotes } from '../../context/';
import { formatDate } from '../../backend/utils/authUtils';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { MyEditor } from './MyEditor';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './MyEditor.css';
import 'draft-js/dist/Draft.css';

const NotesPage = () => {
	const initialValue = { title: '', body: '' };
	const { notes, postNotes, getNotes } = useNotes();
	const { sendNotesToArchive } = useArchive();
	const [textField, setTextField] = useState(initialValue);
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const submitNote = () => {
		postNotes({
			title: textField.title,
			body: textField.body,
			tags: [],
			createdAt: formatDate(),
		});
		setEditorState(EditorState.createEmpty());
		setTextField(initialValue);
	};

	const titleChangeHandler = (e) => {
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
	console.log(isBodyEmpty);
	useEffect(() => {
		setTextField({ ...textField, body: draftToHtml(convertToRaw(editorState.getCurrentContent())) });
	}, [editorState]);

	return (
		<div className='app-content'>
			<div className='my-editor'>
				<div className='flex-row  '>
					<label>
						Title:
						<input type='text' name='title' className='text-field' value={textField.title} onChange={titleChangeHandler} />
					</label>
					{/* //! Commented for future */}
					{/* <label>
						tags:
						<input type='text' name='title' className='text-field' onChange={titleChangeHandler} />
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
										sendNotesToArchive(_id, note);
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
