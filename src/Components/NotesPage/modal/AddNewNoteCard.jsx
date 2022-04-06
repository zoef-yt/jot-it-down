import React from 'react';
import { MyEditor } from '../MyEditor.jsx';

function AddNewNoteCard({ titleValue, titleChangeHandler, onEditorStateChange, editorState, submitNote }) {
	const isBodyEmpty = editorState.getCurrentContent().getPlainText().length === 0;
	const canSubmit = !isBodyEmpty && titleValue.length > 0;
	console.log(canSubmit);
	return (
		<div className='my-editor modal-card'>
			<div className='flex-row flex-start'>
				<label>
					Title:
					<input type='text' name='title' className='text-field' placeholder='TITLE' value={titleValue} onChange={titleChangeHandler} />
				</label>
				<div className='flex-column'>
					{' '}
					<label>Tags:</label>
					<select name='priority'>
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
					{' '}
					<label>Priority:</label>
					<select name='priority'>
						<option value='High'>High</option>
						<option value='Medium'>Medium</option>
						<option value='Low'>Low</option>
					</select>
				</div>
			</div>

			<label>
				Body:
				<MyEditor editorState={editorState} onEditorStateChange={onEditorStateChange} />
			</label>
			<div className='flex-row margin-left'>
				<button
					title={`${canSubmit ? 'Add to notes' : 'Cannot leave the fields blank'}`}
					className={`btn ${canSubmit ? 'btn-primary' : 'btn-disabled'} `}
					onClick={submitNote}
				>
					Add
				</button>
			</div>
		</div>
	);
}

export { AddNewNoteCard };
