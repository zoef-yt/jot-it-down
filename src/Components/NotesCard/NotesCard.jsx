import { useArchive, useNotes } from '../../context/';

const NotesCard = ({ note }) => {
	const { sendNotesToArchive } = useArchive();
	const { getNotes } = useNotes();
	const { _id, body, createdAt, tags, title } = note;
	return (
		<div className='card'>
			<h3>{title}</h3>
			<div style={{ width: '100%' }} className=' rdw-editor-main' dangerouslySetInnerHTML={{ __html: body }}></div>
			<p>{createdAt}</p>
			<p>{tags}</p>
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
		</div>
	);
};

export { NotesCard };
