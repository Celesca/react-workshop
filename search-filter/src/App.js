import './App.css';
import {useEffect, useState} from "react"

function App() {

  // State เอาไว้เก็บ List ของประเทศต่างๆ
  const [countries,setCountries] = useState([])

  // State เอาไว้เก็บ Search Filter
  const [word,setWord] = useState("")

  // เป็นตัวแทน กำหนดในการค้นหาอีกทีนึง (กรองข้อมูล state Country)
  const [dataFilter] = useState(["name","capital"])

  useEffect(()=> {
    fetch('https://restcountries.com/v2/all').then(res=>res.json()).then(data=> {
      setCountries(data)
    })
  },[]) 

  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  const searchCountries=(countries)=> {
    return countries.filter((item)=> {
      return dataFilter.some((filter)=> {
        if (item[filter]) {
          return item[filter].toString().toLowerCase().indexOf(word.toLowerCase()) > -1
        }
      })
    })
}

  return (
    <div className="container">
      <div className="search-container">
        <label htmlFor="search-form">
          <input type="text" className="search-input" placeholder="ค้นหาข้อมูลประเทศที่คุณสนใจ (เมืองหลวง,ชื่อประเทศ)"
          value={word} onChange={(e)=>setWord(e.target.value)}></input>
        </label>
      </div>
      <ul className="row">
      {searchCountries(countries).map((item,index)=> {
        return (
            
            <li key={index}>
              <div className="card">
                <div className="card-title">
                  <img src={item.flags.png} alt={item.name.common}/>
                </div>
                <div className="card-body">
                  <div className='card-description'>
                    <h2>{item.name}</h2>
                    <ol className="card-list">
                      <li>ประชากร : <span>{formatNumber(item.population)} คน</span></li>
                      <li>ภูมิภาค : <span>{item.region}</span></li>
                      <li>เมืองหลวง : <span>{item.capital}</span></li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
        )
      })}
      </ul>
    </div>
  )
}

export default App;