import type { HealthResponse } from '../types/health';

export async function fetchHealthStatus(): Promise<HealthResponse> {
  const response = await fetch('/api/health');

  if (!response.ok) {
    throw new Error('Failed to fetch health status');
  }

  return response.json();
}
