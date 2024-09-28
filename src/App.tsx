import ImageHeader from "./components/ImageHeader"
import React, { useState } from "react"
import Input from "./components/Input"
import Button from "./components/Button"
import ItemList from "./components/ItemList"
import { Items } from "./utils/utils"


function App() {

  const [items, setitems] = useState<Items[]>([])
  const [inputvalues, setinputvalues] = useState<string>("")

  const handlesubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setitems((prev) => [...prev, { title: inputvalues, id: Date.now().toString() }])
    setinputvalues("")
  }
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] ">
      <ImageHeader />
      <div className=" w-[400px]">
        <form onSubmit={handlesubmit}>
          <Input
            type="text"
            inputvalues={inputvalues}
            setinputvalues={setinputvalues}
          />
          <Button
            className="w-full bg-teal-900 border-black rounded-md p-2 font-semibold  mb-5"
            type="submit"
          >Add</Button>
        </form>
        <div className="h-52 overflow-y-auto">
          <ItemList 
          setitems={setitems}
          items={items}
          />
        </div>
      </div>
    </div>
  )
}
export default App
