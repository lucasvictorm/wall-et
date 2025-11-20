import { History, Home, Plus } from "lucide-react"
import BotaoFooter from "./BotaoFooter"

function Footer(){
    return(
        <div className="border-t border-gray-300 flex justify-around p-4 fixed bottom-0 left-0 w-full">
            <BotaoFooter icon={<Home/>} texto={'Principal'}/>
            <BotaoFooter icon={<Plus/>} texto={'Lançamentos'}/>
            <BotaoFooter icon={<History/>} texto={'Histórico'}/>

           
        </div>
    )
}

export default Footer