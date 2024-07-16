import { PlusCircleIcon } from "lucide-react"


const PagesLayout = ({ headerText, buttonText,onClick, children}) => {
  return (
    <div className="p-10 flex-col gap-y-16">
        <div className="flex ">
            <h1 className="text-3xl font-bold">{headerText}</h1>
            <button className="bg-primary text-white px-6 py-2 ml-auto rounded-lg flex gap-x-2" onClick={onClick}>
                <PlusCircleIcon/>
                {buttonText}
                </button>
        </div>
        <div>{children}</div>
    </div>
  )
}

export default PagesLayout