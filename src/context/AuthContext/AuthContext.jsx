import { createContext, useContext, useState, useEffect } from 'react';
import { useAxios } from '../../CustomHooks';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const { response: authResponse, operation: authFetch } = useAxios();
	useEffect(() => {
		if (user === null) {
			authFetch({
				method: 'post',
				url: '/api/auth/login',
				data: {
					email: 'adarshbalika@gmail.com',
					password: 'adarshBalika123',
				},
			});
		}
		if (authResponse != undefined) {
			setUser(authResponse);
			localStorage.setItem('token', JSON.stringify(authResponse.encodedToken));
		}
	}, [authResponse]);
	return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
