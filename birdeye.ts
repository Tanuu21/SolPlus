
const API_KEY = process.env.NEXT_PUBLIC_BIRDEYE_API_KEY

export async function fetchTrendingTokens() {
  const response = await fetch(
    'https://public-api.birdeye.so/defi/token_trending',
    {
      headers: {
        'X-API-KEY': API_KEY || ''
      }
    }
  )

  return response.json()
}
