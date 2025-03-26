'use client';
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const checkLoginStatus = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8130/api/auth/checkLogin", {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({})
      });
      const data = await response.json();

      if (data.data) {
        window.location.href = '/chat';
      } else {
        window.location.href = '/auth/login';
      }
    } catch (error) {
      console.error('Failed to check login status:', error);
      window.location.href = '/auth/login';
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (mounted) {
        await checkLoginStatus();
      }
    };

    init();

    return () => {
      mounted = false;
    };
  }, [checkLoginStatus]);

  return null;
}
