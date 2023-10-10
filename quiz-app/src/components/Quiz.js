import QuestionsData from "../data/QuestionsData"
import { useState , useEffect , useContext } from "react"
import { DataContext } from "../App"

const Quiz = () => {
    // ลำดับของคำถามในข้อสอบ Index คำถามนั้นเอง
    const [current,setCurrent] = useState(0)

    // เอาไว้ดึงข้อมูลมาจาก App โดยใช้ ContextAPI
    const {score,setScore,setAppState} = useContext(DataContext)

    const [selectChoice , setSelectChoice] = useState("")
    // เมื่อมีการเปลี่ยนแปลงที่ selectChoice
    useEffect(()=> {
        checkAnswer() 
        // eslint-disable-next-line

    },[selectChoice])

    // Function checkAnswer
    const checkAnswer=()=> {
        if (selectChoice !== "") {
            if (selectChoice === QuestionsData[current].answer) {
                setScore(score+1)
                nextQuestion()
            } else {
                nextQuestion()
            }
        }
    }

    // คำถามข้อถัดไป
    const nextQuestion=()=> {
        setSelectChoice("")
        if (current === QuestionsData.length - 1) { // 0-4
            setAppState("score")
        }
        else {
            setCurrent(current+1)
        }
        
    }

    return (
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectChoice("A")}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChoice("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz;