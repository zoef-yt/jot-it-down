import { useContext, createContext, useState, useEffect } from 'react';
import { useAxios } from '../../CustomHooks';

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
	const [trashNotes, setTrashNotes] = useState([]);
	const archiveToTrash = (notes) => {
		setTrashNotes([...trashNotes, notes]);
	};

	const trashToNotes = () => {};
	const deleteTrashNotes = (noteId) => {
		setTrashNotes((prev) => prev.filter((note) => note._id !== noteId));
	};
	return <TrashContext.Provider value={{ trashNotes, archiveToTrash, deleteTrashNotes }}>{children}</TrashContext.Provider>;
};

const useTrash = () => useContext(TrashContext);

export { useTrash, TrashProvider };
