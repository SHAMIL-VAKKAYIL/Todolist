import { MdDeleteOutline } from "react-icons/md"
import Button from "./Button"
import { Items, ReactSetState } from "../utils/utils"

type Itemlist = {

    items: Items[],
    setitems:ReactSetState<Items[]>
  }
  
function ItemList({items,setitems}:Itemlist) {


  const handledelete = (id: string) => {
    setitems((prev) => prev.filter((data) => data.id !== id))
  }
  return (
    <div>
       {items.map((item:any) => {
            return (
              <div key={item.id} className=" w-full  border-2 rounded-md border-white p-2 flex justify-between items-start mb-2">
                <p className="font-semibold">{item.title}</p>
                <Button onClick={() => { handledelete(item.id) }} type="button">          
                  <MdDeleteOutline className="fill-red-500 hover:scale-110 duration-150 " size={20} />
                </Button>
              </div>
            )
          })}
    </div>
  )
}

export default ItemList
