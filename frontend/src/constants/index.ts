export class Constants {
  static readonly BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  static readonly PORT = process.env.NEXT_PUBLIC_PORT || 4000;
  static readonly API_TIMEOUT = 5000; // 5 seconds
  static readonly DEFAULT_PAGE_SIZE = 10;
  static readonly MAX_PAGE_SIZE = 100;

  static readonly AUTH_TOKEN_KEY = process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY;
  static readonly NEXT_PUBLIC_GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  static readonly Route = {
    auth: {
      signIn: '/auth/google',
      signOut: '/auth/signout',
    },
  };
}
