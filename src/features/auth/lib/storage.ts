const authStorageKey = 'accessToken';

export const storage = {
  getToken: () => window.localStorage.getItem(authStorageKey),
  setToken: (value: string) =>
    window.localStorage.setItem(authStorageKey, value),
  clearToken: () => window.localStorage.removeItem(authStorageKey),
};

export function getAuthorizationHeaders() {
  const token = storage.getToken();

  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
}
