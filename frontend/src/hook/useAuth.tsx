import apiService, { setAuthToken } from '@/app/api/ApiService';
import { Constants } from '@/constants';
import { useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';

export default function useAuth() {
  const router = useRouter();
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const redirectUri = window.location.origin + '/auth/callback';
        const response = await apiService.post(Constants.Route.auth.signIn, {
          code: codeResponse.code,
          redirect_uri: redirectUri,
        });

        const { access_token } = response.data;
        setAuthToken(access_token);
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
