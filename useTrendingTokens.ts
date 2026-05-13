
export async function useTrendingTokens() {
  const response = await fetch('/api/trending')
  return response.json()
}
