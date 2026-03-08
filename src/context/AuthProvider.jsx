import React from 'react';
import { AuthContext } from './authContext';

const AuthProvider = ({children}) => {
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;