import { ArchiveProvider } from './ArchiveContext/ArchiveContext';
import { ThemeProvider, AuthProvider, NotesProvider } from './index';
import { TrashProvider } from './TrashContext/TrashContext';

const AllProvider = ({ children }) => {
	return (
		<AuthProvider>
			<ThemeProvider>
				<NotesProvider>
					<ArchiveProvider>
						<TrashProvider>{children}</TrashProvider>
					</ArchiveProvider>
				</NotesProvider>
			</ThemeProvider>
		</AuthProvider>
	);
};

export { AllProvider };
