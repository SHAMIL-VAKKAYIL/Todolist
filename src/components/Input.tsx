import { ReactSetState } from "../utils/utils"


type form = {
    inputvalues: string
    setinputvalues: ReactSetState<string>
    type:"text" | "color" | "checkbox"
}

function Input({ inputvalues, setinputvalues,type }: form) {
    return (
        <div>
            <input type={type} className="w-full bg-slate-200 border-2 rounded-md border-black p-2 mb-5 text-black"
                value={inputvalues}
                onChange={(event) => setinputvalues(event.target.value)}
            />
        </div>
    )
}

export default Input
