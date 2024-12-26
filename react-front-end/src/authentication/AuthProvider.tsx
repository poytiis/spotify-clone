import { createContext, useContext, ReactNode, useState } from 'react';

interface AuthContextType {
  user: string;
  login: (user: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string >('');
  const login = (user: string) => {
    setUser(user);
  };

  const logout = () => {
    setUser('');
  };

  const isAuthenticated = user !== '';

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};