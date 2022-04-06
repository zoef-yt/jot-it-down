import { ArchiveProvider } from './ArchiveContext/ArchiveContext';
import { FilterProvider } from './FilterContext/FilterContext';
import { ThemeProvider, AuthProvider, NotesProvider, ModalProvider } from './index';
import { TrashProvider } from './TrashContext/TrashContext';

const AllProvider = ({ children }) => {
	return (
		<ThemeProvider>
			<AuthProvider>
				<ModalProvider>
					<FilterProvider>
						<NotesProvider>
							<ArchiveProvider>
								<TrashProvider>{children}</TrashProvider>
							</ArchiveProvider>
						</NotesProvider>
					</FilterProvider>
				</ModalProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};

export { AllProvider };
