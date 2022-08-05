export enum TokenType {
  ACCESS = "accessToken",
  REFRESH = "refreshToken"
}

export const setToken = (type: TokenType, token: string): void => {
  sessionStorage.setItem(type, token);
};

export const getToken = (token: TokenType): string | null => {
  const fetchedToken = sessionStorage.getItem(token);
  return fetchedToken ?? null;
};

export const terminateToken = (token: TokenType): void => {
  sessionStorage.removeItem(token);
};
