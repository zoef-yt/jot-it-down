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
				placeholder='Enter your note here...'
				hashtag={{
					separator: ' ',
					trigger: '#',
				}}
				toolbar={{
					// options: ['inline', 'list', 'textAlign', 'history', 'link'],
					options: ['inline', 'textAlign', 'history', 'link', 'image'],
					inline: { inDropdown: false, options: ['bold', 'italic', 'underline', 'strikethrough'] },
					image: {
						urlEnabled: true,
						uploadEnabled: true,
						alignmentEnabled: true,
						uploadCallback: undefined,
						previewImage: false,
						inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
						alt: { present: false, mandatory: false },
						defaultSize: {
							height: 'auto',
							width: 'auto',
						},
					},
					list: { inDropdown: false },
					textAlign: { inDropdown: false },
					history: { inDropdown: false },
				}}
			/>
		</div>
	);
};

export { MyEditor };
