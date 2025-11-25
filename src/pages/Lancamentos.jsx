import { CircleArrowDown, CircleArrowUp } from "lucide-react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import { useState } from "react";
import Input from "../components/Input";

function Lancamentos() {

    const [tipo, setTipo] = useState('')


    return (

        <Container>
            <Header titulo={'Novo lançamento'} />

            <MainContainer>
                <div className=" flex space-x-3">
                    <button onClick={()=>setTipo('entrada')} className={`flex space-x-1 w-full rounded-xl  p-3 outline-2  cursor-pointer ${tipo == 'entrada' ? 'outline-green-800 text-green-800 bg-green-50 ' : 'outline-slate-300 text-slate-500'}`}>
                        <CircleArrowUp />
                        <p>Entrada</p>


                    </button>

                    <button onClick={()=>setTipo('saida')} className={`cursor-pointer flex space-x-1 w-full rounded-xl outline-2 p-3   ${tipo == 'saida' ? 'outline-red-800 text-red-800 bg-red-50' : 'outline-slate-300 text-slate-500'}`}>
                        <CircleArrowDown />
                        <p>Saída</p>


                    </button>

                </div>

                <div className="shadow mt-5 p-4 rounded-2xl">
                    <div className="space-y-4">
                        
                        <Input label={'Descrição' }name={'descricao'} type={'text'} placeholder={'Roupas, mercado...'}/>

                        <Input type={'number'} label={'Valor (R$)' }name={'descricao'} placeholder={'0,00'}/>

                        <Input label={'Data'} name={'data'} placeholder={'Informe a data'} type={'date'}/>

                        <button className="bg-green-900 rounded-sm p-2 text-white font-medium w-full">
                            Registrar

                        </button>
                    </div>
                </div>
            </MainContainer>

            <Footer />
        </Container>
    )

}

export default Lancamentos