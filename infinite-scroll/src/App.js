import './App.css';
import PhotoComponent from './components/PhotoComponent';
import { useEffect, useState} from "react";

function App() {
  const apiKey = `BadfzF-u-OI43EH2Q3R6wy489WrNA71go5i4HUMS4ls`
  
  
  const [photos,setPhotos] = useState([])
  const [page,setPage] = useState(1) // เก็บเลขหน้า
  const [isLoading,setIsLoading] = useState(false)

  const fetchImage=async()=> {
    setIsLoading(true) // เริ่มโหลดข้อมูล
    try {
      const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`
      const response = await fetch(apiUrl)
      const data = await response.json() // Array ที่เก็บรูปภาพข้อมูลที่ดึงจาก API
      setPhotos((oldData)=> {
        return [...oldData,...data]
      })
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)

  }

  useEffect(()=>{
    fetchImage()
    // eslint-disable-next-line
  },[page])

  // ดักจับการ Scroll
  useEffect(()=> {
    const event = window.addEventListener('scroll',()=> { // ดักจับการ Scroll
      if (window.innerHeight + window.scrollY > document.body.offsetHeight-500 && !isLoading) {
        setPage((oldPage)=> {
          return oldPage+1
        })
      }
    })
    return ()=>window.removeEventListener('scroll',event) // ยกเลิกการ Scroll เอาออกจาก event
    // eslint-disable-next-line
  } , [])

  return (
    <main>
      <h1>Infinite Scroll Photo | Unsplash API</h1>
      <section className="photos">
        <div className="display-photo">
          {photos.map((data,index)=> {
            return <PhotoComponent key={index} {...data}/>
          })}
        </div>
      </section>
    </main>
  );
}

export default App;