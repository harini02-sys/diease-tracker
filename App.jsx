import { useState, useEffect } from 'react'


function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/all')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="App">
      <h1>COVID-19 Tracker</h1>
      {data && (
        <div className="stats">
          <div className="stat">
            <h2>Total Cases</h2>
            <p>{data.cases.toLocaleString()}</p>
          </div>
          <button>getdata</button>
        </div>
      )}
    </div>
  )
}
<button>
  setdata.onclick("");
  dara.onclick(""
</button>
export default App
