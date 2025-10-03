// /* sample */ entrypoint for frontend bundle
// TODO: mount your UI code here
import { apiGet } from './apiClient.js';

(async () => {
  try {
    const health = await apiGet('/api/health');
    console.log('API health:', health);
  } catch (e) {
    console.warn('API not reachable yet (expected in boilerplate):', e.message);
  }
})();
