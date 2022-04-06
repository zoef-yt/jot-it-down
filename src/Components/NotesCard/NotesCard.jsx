import { useArchive, useNotes } from '../../context/';
import './NotesCard.css';
const NotesCard = ({ note, isHomePage = false, isArchive = false, isTrash = false }) => {
	const { sendNotesToArchive } = useArchive();
	const { getNotes } = useNotes();
	const { _id, body, createdAt, cardColor, tag, title, priority } = note;
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
			<p>{createdAt}</p>
			{isHomePage && (
				<>
					<button
						onClick={() => {
							sendNotesToArchive(_id, note);
							getNotes();
						}}
						className='btn btn-secondary '
					>
						Move to archive
					</button>
					<button onClick={() => {}} className='btn btn-secondary '>
						Edit
					</button>
				</>
			)}

			{isArchive && (
				<>
					<button onClick={() => {}} className='btn btn-secondary '>
						Move to archive
					</button>
					<button onClick={() => {}} className='btn btn-secondary '>
						Edit
					</button>
				</>
			)}

			{isTrash && (
				<>
					<button onClick={() => {}} className='btn btn-secondary '>
						Move to archive
					</button>
					<button onClick={() => {}} className='btn btn-secondary '>
						Delete
					</button>
				</>
			)}
		</div>
	);
};

export { NotesCard };
