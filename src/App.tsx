import { useState } from "react"
import "./App.css"

function App() {
  const getCurrentDate = function () {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, "0") // Months are zero-based
    const day = String(today.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}T00:00`
  }

  const parseTime = function (milliseconds: number) {
    const totalSeconds = Math.floor(milliseconds / 1000) // Convert milliseconds to seconds
    const hours = Math.floor(totalSeconds / 3600) // 1 hour = 3600 seconds
    const minutes = Math.floor((totalSeconds % 3600) / 60) // Remaining seconds converted to minutes
    return `${hours} hours, ${minutes} minutes`
  }

  const [start, setStart] = useState(getCurrentDate())
  const [end, setEnd] = useState(getCurrentDate())

  const handleChangeStart = function (e: React.ChangeEvent<HTMLInputElement>) {
    setStart(e.target.value)
  }
  const handleChangeEnd = function (e: React.ChangeEvent<HTMLInputElement>) {
    setEnd(e.target.value)
  }
  const result = parseTime(Date.parse(end) - Date.parse(start))

  // 1994-12-12T12:12

  return (
    <>
      <div>
        start:{" "}
        <input
          type="datetime-local"
          value={start}
          onChange={handleChangeStart}
        ></input>
      </div>
      <div>
        end:{" "}
        <input
          type="datetime-local"
          value={end}
          onChange={handleChangeEnd}
        ></input>
      </div>
      <div>
        time between: <textarea value={result}></textarea>
      </div>
    </>
  )
}

export default App
