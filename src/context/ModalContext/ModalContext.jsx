import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal((prevModal) => !prevModal);
	};

	return <ModalContext.Provider value={{ modal, toggleModal }}>{children}</ModalContext.Provider>;
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
