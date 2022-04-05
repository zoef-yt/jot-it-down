import React, { useState, useEffect } from 'react';
import { useModal, useNotes } from '../../context/';
import { formatDate } from '../../backend/utils/authUtils';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './MyEditor.css';
import 'draft-js/dist/Draft.css';
import { Modal } from './modal/Modal';
import { AddNewNoteCard } from './modal/AddNewNoteCard.jsx';
import { CreateNewIcon } from '../../assets/svg/allsvg';
import { NotesCard } from '../NotesCard/NotesCard';

const NotesPage = () => {
	const { toggleModal, modal } = useModal();
	const initialValue = { title: '', body: '', tag: '', priority: '', date: '' };
	const { notes, postNotes, getNotes } = useNotes();
	const [textField, setTextField] = useState(initialValue);
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const submitNote = () => {
		postNotes({
			title: textField.title,
			body: textField.body,
			tags: 'tags',
			createdAt: formatDate(),
			priority: 'high',
		});
		setEditorState(EditorState.createEmpty());
		setTextField(initialValue);
		toggleModal();
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

	useEffect(() => {
		setTextField({ ...textField, body: draftToHtml(convertToRaw(editorState.getCurrentContent())) });
	}, [editorState]);

	return (
		<div className='app-content'>
			<button onClick={() => toggleModal()} className='btn btn-fab'>
				<CreateNewIcon />
			</button>
			<Modal showModal={modal}>
				<AddNewNoteCard
					onEditorStateChange={onEditorStateChange}
					titleValue={textField.title}
					submitNote={submitNote}
					editorState={editorState}
					titleChangeHandler={titleChangeHandler}
				/>
			</Modal>

			{notes.length > 0 ? (
				notes.map((note) => {
					return <NotesCard note={note} key={note._id} />;
				})
			) : (
				<h1>Add Notes here</h1>
			)}
		</div>
	);
};

export { NotesPage };
