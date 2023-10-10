import CurrencyComponent from "./components/CurrencyComponent";
import money from "./img/money.png"
import { useEffect , useState } from "react"

function App() {
  
  
  // State ที่เอาไว้เก็บตัวเลือก option
  const [currencyChoice,setCurrencyChoice] = useState([])

  // State ที่เอาไว้เก็บค่าสกุลเงินเริ่มต้น และ ปลายทางในตอนแรก
  const [fromCurrency,setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("THB")

  // State จำนวนเงินที่ป้อนและอัตราการแลกเปลี่ยน
  const [amount , setAmount ] = useState(1)
  const [ExchangeRate, setExchangeRate] = useState(0)
  
  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url)
    .then(res=>res.json())
    .then(data=> {
      setCurrencyChoice([...Object.keys(data.rates)])
      setExchangeRate(data.rates[toCurrency])
    })
  } , [fromCurrency,toCurrency])

  // ส่วนของการคำนวณ
  
  // กรอกสกุลเงินต้นทางเป็นเริ่มต้น
  const [checkFromCurrency,setCheckFromCurrency] = useState(true)

  let fromAmount,toAmount;

  if(checkFromCurrency) { // กรอกมาจาก From Input
    fromAmount = amount
    toAmount = (amount*ExchangeRate).toFixed(2)
  }
  else {
    toAmount = amount
    fromAmount = (amount/ExchangeRate).toFixed(2)
  }

  // 2 Function เพื่อเก็บจำนวนเงินที่เปลี่ยนไป

  const amountFromCurrency=(e)=> {
    setAmount(e.target.value)
    setCheckFromCurrency(true)
  }

  const amountToCurrency=(e)=> {
    setAmount(e.target.value)
    setCheckFromCurrency(false)
  }

  return (
    <div className="App">
      <img src={money} alt="logo" className="money-img"/>
      <h1>แอพแปลงสกุลเงิน (API)</h1>
      <div className="container"> 
        {/* สกุลเงินต้นทาง */}
        <CurrencyComponent currencyChoice={currencyChoice} 
          selectCurrency={fromCurrency}
          changeCurrency={(e)=>setFromCurrency(e.target.value)}
          amount = {fromAmount}
          onChangeAmount = {amountFromCurrency}
        />
        <div className="equal"> = </div>
        {/* สกุลเงินปลายทาง */}
        <CurrencyComponent currencyChoice={currencyChoice} 
          selectCurrency={toCurrency}
          changeCurrency={(e)=>setToCurrency(e.target.value)}
          amount = {toAmount}
          onChangeAmount = {amountToCurrency}
        />
      </div>
    </div>
  );
}

export default App;