import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((res) => setData(res[currency]))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [currency])

  return { data, loading, error }
}

export default useCurrencyInfo
