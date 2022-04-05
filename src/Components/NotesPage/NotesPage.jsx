import React, { useState, useEffect } from 'react';
import { useModal, useNotes } from '../../context/';
import { formatDate } from '../../backend/utils/authUtils';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Modal } from './modal/Modal';
import { AddNewNoteCard } from './modal/AddNewNoteCard.jsx';
import { CreateNewIcon } from '../../assets/svg/allsvg';
import { NotesCard } from '../NotesCard/NotesCard';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './MyEditor.css';
import 'draft-js/dist/Draft.css';

const NotesPage = () => {
	const { toggleModal, modal } = useModal();
	const initialValue = { title: '', body: '', tag: 'None', priority: 'Low', date: '', cardColor: '#161b22' };
	const { notes, postNotes } = useNotes();
	const [formData, setFormData] = useState(initialValue);
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const submitNote = () => {
		postNotes({
			title: formData.title,
			body: formData.body,
			tag: formData.tag,
			priority: formData.priority,
			cardColor: formData.cardColor,
			createdAt: formatDate(),
		});
		setEditorState(EditorState.createEmpty());
		setFormData(initialValue);
		toggleModal();
	};

	const titleChangeHandler = (e) => {
		setFormData({ ...formData, title: e.target.value });
	};

	const tagChangeHandler = (e) => {
		setFormData({ ...formData, tag: e.target.value });
	};

	const priorityChangeHandler = (e) => {
		setFormData({ ...formData, priority: e.target.value });
	};

	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);
	};

	const colorChangeHandler = (color) => {
		setFormData({ ...formData, cardColor: color });
	};

	const bodyFieldHandler = (body) => {
		const html = body;
		const contentBlock = htmlToDraft(html);
		const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
		const editorState = EditorState.createWithContent(contentState);
		setEditorState(editorState);
	};

	useEffect(() => {
		setFormData({ ...formData, body: draftToHtml(convertToRaw(editorState.getCurrentContent())) });
	}, [editorState]);

	return (
		<div className='app-content'>
			<button onClick={() => toggleModal()} className='btn btn-fab flex-column justify-content-center align-items-center'>
				<CreateNewIcon />
			</button>
			<Modal showModal={modal}>
				<AddNewNoteCard
					formData={formData}
					editorState={editorState}
					onEditorStateChange={onEditorStateChange}
					submitNote={submitNote}
					titleChangeHandler={titleChangeHandler}
					tagChangeHandler={tagChangeHandler}
					priorityChangeHandler={priorityChangeHandler}
					colorChangeHandler={colorChangeHandler}
				/>
			</Modal>

			{notes.length > 0 ? (
				notes.map((note) => {
					return <NotesCard note={note} key={note._id} isHomePage={true} />;
				})
			) : (
				<h1>Add Notes here</h1>
			)}
		</div>
	);
};

export { NotesPage };
