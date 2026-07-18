import axios from "axios";

// Single client instance used for the contact form — the only
// endpoint this portfolio still talks to a backend for.
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
