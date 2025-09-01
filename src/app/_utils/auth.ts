export interface User {
  username: string;
  password: string;
  role: 'admin' | 'user';
}

// Data dummy users
export const DUMMY_USERS: User[] = [
  {
    username: 'admin',
    password: 'admin123',
    role: 'admin'
  },
  {
    username: 'user',
    password: 'user123', 
    role: 'user'
  },
  {
    username: 'demo',
    password: 'demo',
    role: 'admin'
  }
];

export function validateUser(username: string, password: string): User | null {
  const user = DUMMY_USERS.find(
    u => u.username === username && u.password === password
  );
  return user || null;
}

export function createAuthToken(user: User): string {
  // Simple token creation (in real app, use JWT)
  return btoa(JSON.stringify({ username: user.username, role: user.role }));
}

export function parseAuthToken(token: string): { username: string; role: string } | null {
  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
}