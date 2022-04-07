import { useState } from 'react';
import { ArchiveIcon, EditIcon, RestoreIcon, TrashIcon, UnarchiveIcon } from '../../assets/svg/allsvg';
import { useArchive, useNotes, useTrash, useModal } from '../../context/';
import './NotesCard.css';
const NotesCard = ({ note, isHomePage = false, isArchive = false, isTrash = false, editNoteHandler }) => {
	const { sendNotesToArchive, sendArchiveToNotes, deleteArchiveNotes } = useArchive();
	const { getNotes, deleteNotes, postNotes } = useNotes();
	const { notesToTrash, deleteTrashNotes } = useTrash();
	const { _id, body, createdAt, cardColor, tag, title, priority } = note;
	const date = new Date(createdAt).toLocaleString();

	const archiveNoteHandler = (_id) => {
		sendNotesToArchive(_id);
		getNotes();
	};

	const unArchiveNoteHandler = (_id) => {
		sendArchiveToNotes(_id);
		getNotes();
	};

	const notesToTrashHandler = (_id, note) => {
		deleteNotes(_id);
		notesToTrash(note);
	};

	const archiveToTrashHandler = (_id, note) => {
		notesToTrash(note);
		deleteArchiveNotes(_id);
	};

	const undoDeleteHandler = (_id, note) => {
		deleteTrashNotes(_id);
		postNotes(note);
	};

	const editHandler = (_id) => {
		editNoteHandler(note);
	};

	return (
		<div style={{ backgroundColor: cardColor }} className='card notes-card'>
			<div className='flex-row'>
				<h3 title={title} className='notes-card-title'>
					{title}
				</h3>
				<div className='notes-card-tags'>{tag !== 'None' && `#${tag}`}</div>
			</div>
			<hr />
			<div className='rdw-editor-main width-100' dangerouslySetInnerHTML={{ __html: body }}></div>

			<div className='flex-row space-between width-100 align-items-center'>
				<p className='text-small text-grey'>{date}</p>
				<div className='notes-card-priority'>{priority}</div>
			</div>

			<div className='flex-row space-around width-100'>
				{isHomePage && (
					<>
						<button
							title='Send to trash page'
							onClick={() => notesToTrashHandler(_id, note)}
							className='btn btn-secondary notes-card-btn'
						>
							<TrashIcon />
						</button>

						<button
							title='Send to archive page'
							onClick={() => {
								archiveNoteHandler(_id);
							}}
							className='btn btn-secondary notes-card-btn'
						>
							<ArchiveIcon />
						</button>

						<button
							title='Edit note'
							onClick={() => {
								editHandler();
							}}
							className='btn btn-secondary notes-card-btn'
						>
							<EditIcon />
						</button>
					</>
				)}

				{isArchive && (
					<>
						<button
							title='Send to trash page'
							onClick={() => archiveToTrashHandler(_id, note)}
							className='btn btn-secondary notes-card-btn'
						>
							<TrashIcon />
						</button>

						<button
							title='Unarchive note'
							onClick={() => {
								unArchiveNoteHandler(_id);
							}}
							className='btn btn-secondary notes-card-btn'
						>
							<UnarchiveIcon />
						</button>
					</>
				)}

				{isTrash && (
					<>
						<button
							title='Send card to homepage'
							onClick={() => undoDeleteHandler(_id, note)}
							className='btn btn-secondary notes-card-btn'
						>
							<RestoreIcon />
						</button>

						<button
							title='Permanently delete note'
							onClick={() => {
								deleteTrashNotes(_id);
							}}
							className='btn btn-secondary notes-card-btn'
						>
							<TrashIcon />
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export { NotesCard };
