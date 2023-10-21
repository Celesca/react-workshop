import FoodComponent from './components/FoodComponent';
import { useEffect, useState } from "react"
import MenuData from './data/MenuData';
import './App.css'

function App() {

  const [foodData,setFoodData] = useState(MenuData)
  const [dataInPage,setDataInPage] = useState([])
  const [page,setPage] = useState(0)

  // จำนวนข้อมูลทั้งหมด 10 จำนวน
  // จำนวนข้อมูลต่อหน้า เช่น 5 รูป ต่อ หน้า
  // จำนวนเลขหน้า = จำนวนข้อมูลทั้งหมด / จำนวนข้อมูลแต่ละหน้า

  const pagination=()=> {
    const foodPerPage = 3; // แสดงรายการอาการ 3 รายการต่อ 1 หน้า
    
    const pages = Math.ceil(MenuData.length / foodPerPage)
    console.log("จำนวนเลขหน้า =" , pages);

    const newFood = Array.from({length:pages},(data,index)=>{
      const start = index * foodPerPage // [0..] , [7..]
      return MenuData.slice(start,start+foodPerPage)
    })

    return newFood
  
  }

  const handlePage=(index)=> {
    setPage(index)
  }

  useEffect(()=> {
    const paginate = pagination()
    setDataInPage(paginate)
    // paginate คือ Page ที่ถูกแยกหน้าเรียบร้อยแล้ว
    setFoodData(paginate[page])
  },[page])

  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      <div className="container">
      {foodData.map((data,index)=> { 
        return <FoodComponent key={index} {...data}/>
      })}
      </div>

      <div className="pagination-container">
        {dataInPage.map((data,index)=>{
          return (
            <button 
            key={index} 
            className={`page-btn  ${index === page ? "active-btn" : null}`}
            onClick={()=>handlePage(index)}>{index+1}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;