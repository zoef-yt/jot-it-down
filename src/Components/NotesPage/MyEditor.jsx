import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './MyEditor.css';

const MyEditor = ({ editorState, onEditorStateChange }) => {
	return (
		<div>
			<Editor
				editorState={editorState}
				wrapperClassName='wrapper-class'
				editorClassName='editor-class'
				toolbarClassName='toolbar-class'
				onEditorStateChange={onEditorStateChange}
				hashtag={{
					separator: ' ',
					trigger: '#',
				}}
				toolbar={{
					options: ['inline', 'list', 'textAlign', 'history', 'link'],
					inline: { inDropdown: false, options: ['bold', 'italic', 'underline', 'strikethrough'] },
					list: { inDropdown: false },
					textAlign: { inDropdown: false },
					history: { inDropdown: false },
				}}
			/>
		</div>
	);
};
export { MyEditor };
