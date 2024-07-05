// lib/auth.ts
'use client'

import axios from 'axios';
import Cookies from 'js-cookie';

const auth = {
  saveToken: (token: string) => {
    Cookies.set('auth-token', token, { 
      expires: 1, // 1 day
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
  },

  getToken: (): string | undefined => {
    return Cookies.get('auth-token');
  },


  logout: async () => {
    Cookies.remove('auth-token');
    return 1
  },

  isAuthenticated: (): boolean => {
    return !!Cookies.get('auth-token');
  },
}

export default auth;