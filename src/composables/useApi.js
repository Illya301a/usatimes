const API_BASE = 'https://uat.usatimes.com/api'

const fetchJson = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }
  return response.json()
}

export const fetchArticles = async () => {
  const data = await fetchJson(`${API_BASE}/articles`)
  return data.data || []
}

export const fetchMarket = async () => {
  const data = await fetchJson(`${API_BASE}/market`)
  return data.stocks || []
}
