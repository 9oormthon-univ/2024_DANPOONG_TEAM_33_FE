interface AuthUser {
  id: string;
  name: string;
  profileImage?: string;
  email?: string;
}

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, userData: AuthUser) => void;
  logout: () => void;
  updateUser: (userData: Partial<AuthUser>) => void;
  updateToken: (newToken: string) => void;
}
