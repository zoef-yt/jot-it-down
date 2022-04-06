import { ArchiveIcon, EditIcon, RestoreIcon, TrashIcon, UnarchiveIcon } from '../../assets/svg/allsvg';
import { useArchive, useNotes, useTrash } from '../../context/';
import './NotesCard.css';
const NotesCard = ({ note, isHomePage = false, isArchive = false, isTrash = false }) => {
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

	return (
		<div style={{ backgroundColor: cardColor }} className='card notes-card'>
			<h3>{title}</h3>
			<hr />
			<div className='flex-row space-between width-100'>
				<p>Priority:{priority}</p>
				{tag !== 'None' && <p>Tag:{tag}</p>}
			</div>
			<hr />
			<div style={{ width: '100%' }} className=' rdw-editor-main' dangerouslySetInnerHTML={{ __html: body }}></div>
			<p>{date}</p>
			<div className='flex-row space-around width-100'>
				{isHomePage && (
					<>
						<button onClick={() => notesToTrashHandler(_id, note)} className='btn btn-secondary notes-card-btn'>
							<TrashIcon />
						</button>

						<button
							onClick={() => {
								archiveNoteHandler(_id);
							}}
							className='btn btn-secondary notes-card-btn'
						>
							<ArchiveIcon />
						</button>

						<button onClick={() => {}} className='btn btn-secondary notes-card-btn'>
							<EditIcon />
						</button>
					</>
				)}

				{isArchive && (
					<>
						<button onClick={() => archiveToTrashHandler(_id, note)} className='btn btn-secondary notes-card-btn'>
							<TrashIcon />
						</button>

						<button
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
						<button onClick={() => undoDeleteHandler(_id, note)} className='btn btn-secondary notes-card-btn'>
							<RestoreIcon />
						</button>

						<button
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
