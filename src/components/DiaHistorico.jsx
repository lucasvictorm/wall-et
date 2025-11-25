import CardMovimentacao from "./CardMovimentacao"

function DiaHistorico(){
    return(
        <div>
            <p className="font-medium text-gray-600 pb-2">18 de novembro de 2025</p>
            <CardMovimentacao data={'10/20'} hora={'10:00'} nome={'Roupas'} tipo={2} valor={150}/>


        </div>
    )

}

export default DiaHistorico