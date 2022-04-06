import { useContext, createContext, useState, useEffect } from 'react';
import { useAxios } from '../../CustomHooks';

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
	const [trashNotes, setTrashNotes] = useState([]);
	const sendArchiveToTrash = (notes) => {
		setTrashNotes([...trashNotes, notes]);
	};
	const notesToTrash = (notes) => {
		setTrashNotes([...trashNotes, notes]);
	};

	const deleteTrashNotes = (noteId) => {
		setTrashNotes((prev) => prev.filter((note) => note._id !== noteId));
	};
	return <TrashContext.Provider value={{ trashNotes, sendArchiveToTrash, deleteTrashNotes, notesToTrash }}>{children}</TrashContext.Provider>;
};

const useTrash = () => useContext(TrashContext);

export { useTrash, TrashProvider };
