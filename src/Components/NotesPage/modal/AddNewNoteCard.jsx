import React from 'react';
import { ColorPaletteIcon } from '../../../assets/svg/allsvg.jsx';
import { MyEditor } from '../MyEditor.jsx';
import '../NotesPage.css';
function AddNewNoteCard({
	formData,
	onEditorStateChange,
	editorState,
	submitNote,
	titleChangeHandler,
	tagChangeHandler,
	priorityChangeHandler,
	colorChangeHandler,
}) {
	const { title, body, tag, priority, cardColor, createdAt } = formData;
	const isBodyEmpty = editorState.getCurrentContent().getPlainText().length === 0;
	const canSubmit = !isBodyEmpty && title.length > 0;
	return (
		<div style={{ backgroundColor: cardColor }} className='my-editor modal-card'>
			<div className='flex-row flex-start'>
				<label>
					Title:
					<input type='text' name='title' className='text-field' placeholder='TITLE' value={title} onChange={titleChangeHandler} />
				</label>
				<div className='flex-column'>
					{' '}
					<label>Tag:</label>
					<select value={tag} onChange={tagChangeHandler} className='select-tag' name='tag'>
						<option value='None'>None</option>
						<option value='Work'>Work</option>
						<option value='Exercise'>Exercise</option>
						<option value='Health'>Health</option>
						<option value='Teams'>Teams</option>
						<option value='Creativity'>Creativity</option>
						<option value='Chores'>Chores</option>
						<option value='School'>School</option>
					</select>
				</div>

				<div className='flex-column'>
					<label>Priority:</label>
					<select className='select-tag' value={priority} name='priority' onChange={priorityChangeHandler}>
						<option value='Low'>Low</option>
						<option value='Medium'>Medium</option>
						<option value='High'>High</option>
					</select>
				</div>
			</div>

			<label>
				Body:
				<MyEditor editorState={editorState} onEditorStateChange={onEditorStateChange} />
			</label>
			<div className='flex-row space-between align-items-center'>
				<button
					title={`${canSubmit ? 'Add to notes' : 'Cannot leave the fields blank'}`}
					className={`btn ${canSubmit ? 'btn-primary' : 'btn-disabled'} `}
					onClick={submitNote}
				>
					Add
				</button>
				<div className='colour-palette-holder flex-column '>
					<ColorPaletteIcon />
					<div className='colour-palette'>
						{colorsArray.map((color, index) => (
							<div
								key={index}
								className='colour-palette-item'
								style={{ backgroundColor: color.color }}
								onClick={() => colorChangeHandler(color.color)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export { AddNewNoteCard };

const colorsArray = [
	{ color: '#161b22' },
	{ color: '#21436e' },
	{ color: '#077825' },
	{ color: '#763830' },
	{ color: '#7a6e1a' },
	{ color: '#4a3070' },
];
