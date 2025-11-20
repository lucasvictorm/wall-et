
import Card from "./Card"
import SetaGanho from "./SetaGanho"
import SetaPerda from "./SetaPerda"
function CardMovimentacao({tipo, nome, data, hora, valor}){
    return(
        <Card>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">

                    {tipo == 1 ? (
                        <SetaGanho/>
                    ) : (
                        <SetaPerda/>
                    )}

                    
                    <div className="flex flex-col">

                        <p className="font-medium">{nome}</p>
                        <small className="text-xs text-gray-400">{data}, {hora}</small>
                    </div>
                </div>
                <div>
                    {tipo == 1 ? (<p className="text-sm font-medium text-green-500">+{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>) 
                    :(
                        <p className="text-sm font-medium text-red-500">-{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    )}
                    

                </div>
            </div>
           

        </Card>
    )
}

export default CardMovimentacao