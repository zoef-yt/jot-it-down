import React from 'react';
import { ColorPaletteIcon } from '../../../assets/svg/allsvg.jsx';
import { colorsArray } from '../../../data/colorsData.jsx';
import { priorities } from '../../../data/priorities.jsx';
import { tags } from '../../../data/tags.jsx';
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
	updateNoteHandler,
}) {
	const { title, tag, priority, cardColor, isEdit, _id } = formData;
	const isBodyEmpty = editorState.getCurrentContent().getPlainText().length === 0;
	const canSubmit = !isBodyEmpty && title.trim().length > 0;
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
						{tags.map((tag) => (
							<option key={tag} value={tag}>
								{tag}
							</option>
						))}
					</select>
				</div>

				<div className='flex-column'>
					<label>Priority:</label>
					<select className='select-tag' value={priority} name='priority' onChange={priorityChangeHandler}>
						{priorities.map((priority) => (
							<option key={priority} value={priority}>
								{priority}
							</option>
						))}
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
					onClick={canSubmit ? (isEdit ? () => updateNoteHandler(_id, formData) : () => submitNote()) : null}
				>
					{isEdit ? 'Update' : 'Add'}
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
