import { ArchiveProvider } from './ArchiveContext/ArchiveContext';
import { ThemeProvider, AuthProvider, NotesProvider } from './index';
import { TrashProvider } from './TrashContext/TrashContext';

const AllProvider = ({ children }) => {
	return (
		<ThemeProvider>
			<AuthProvider>
				<NotesProvider>
					<ArchiveProvider>
						<TrashProvider>{children}</TrashProvider>
					</ArchiveProvider>
				</NotesProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};

export { AllProvider };
