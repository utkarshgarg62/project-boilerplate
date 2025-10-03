import dotenv from 'dotenv';

export function loadEnv() {
  dotenv.config();
  // TODO: validate required env vars (e.g., PORT, DB_URL)
}
