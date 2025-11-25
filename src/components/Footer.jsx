import { History, Home, Plus } from "lucide-react"
import BotaoFooter from "./BotaoFooter"
import { useNavigate } from "react-router"


function Footer(){

  
    const navigate = useNavigate()
    

    return(
        <div className="border-t border-gray-300 flex justify-around p-4 fixed bottom-0 left-0 w-full">
            <BotaoFooter  onClick={()=> navigate('/')} icon={<Home/>} texto={'Principal'}/>
            <BotaoFooter onClick={()=>navigate('/lancamentos')} icon={<Plus/>} texto={'Lançamentos'}/>
            <BotaoFooter onClick={()=>navigate('/historico')} icon={<History/>} texto={'Histórico'}/>

           
        </div>
    )
}

export default Footer