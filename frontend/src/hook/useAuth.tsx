import apiService, { setAuthCookies } from '@/app/api/ApiService';
import { Constants } from '@/constants';
import { useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';

export default function useAuth() {
  const router = useRouter();
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const redirectUri = window.location.origin;

        const response = await apiService.post(Constants.Route.auth.signIn, {
          token: codeResponse.code,
          redirect_uri: redirectUri,
        });

        const { access_token, expires_in } = response.data;
        setAuthCookies('access_token', access_token, parseInt(expires_in));
        setAuthCookies('expires_in', expires_in, parseInt(expires_in));
        router.push('/home');
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    onError: (error) => console.error('Google Login Error:', error),
    flow: 'auth-code',
  });

  return {
    handleGoogleLogin,
  };
}
