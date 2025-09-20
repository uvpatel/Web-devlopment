import { useEffect, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const { data: currencyInfo, loading, error } = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    const tempAmount = amount
    const tempFrom = from
    setFrom(to)
    setTo(tempFrom)
    setAmount(convertedAmount)
    setConvertedAmount(tempAmount)
  }

  // Automatically update convertedAmount whenever dependencies change
  useEffect(() => {
    if (!loading && !error && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    }
  }, [amount, from, to, currencyInfo, loading, error])

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {loading ? (
            <p className="text-center text-gray-700">Loading rates...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : (
            <form onSubmit={(e) => e.preventDefault()}>
              {/* From Input */}
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              {/* Swap Button */}
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>

              {/* To Input */}
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
