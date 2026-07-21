/// <reference types="vite/client" />

// This is a foolproof, runtime check to determine the environment.
// It checks the hostname in the browser. If it's not localhost, it assumes production.
const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

export const config = {
  // In production, we use the VITE_API_BASE_URL environment variable.
  // In local development, we default to the local Django server.
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
};