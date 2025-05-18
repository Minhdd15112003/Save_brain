'use client'

import { useGoogleLogin } from '@react-oauth/google'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function SignIn() {
  const router = useRouter()

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const redirectUri = window.location.origin + '/auth/callback'
        const response = await axios.post('http://localhost:8000/auth/google', {
          code: codeResponse.code,
          redirect_uri: redirectUri,
        })

        const { access_token } = response.data
        localStorage.setItem('token', access_token)
        router.push('/dashboard')
      } catch (error) {
        console.error('Login failed:', error)
      }
    },
    onError: (error) => console.error('Google Login Error:', error),
    flow: 'auth-code',
  })

  return (
    <div>
      <h1>Đăng nhập</h1>
      <button
        onClick={() => login()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Đăng nhập với Google
      </button>
    </div>
  )
}
