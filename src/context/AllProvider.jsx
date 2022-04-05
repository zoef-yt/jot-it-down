import { ArchiveProvider } from './ArchiveContext/ArchiveContext';
import { ThemeProvider, AuthProvider, NotesProvider, ModalProvider } from './index';
import { TrashProvider } from './TrashContext/TrashContext';

const AllProvider = ({ children }) => {
	return (
		<ThemeProvider>
			<AuthProvider>
				<ModalProvider>
					<NotesProvider>
						<ArchiveProvider>
							<TrashProvider>{children}</TrashProvider>
						</ArchiveProvider>
					</NotesProvider>
				</ModalProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};

export { AllProvider };
