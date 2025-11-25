import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/Container.jsx'
import Header from './components/Header.jsx'
import { TrendingDown, TrendingDownIcon, TrendingUp } from 'lucide-react'
import MainContainer from './components/MainContainer.jsx'
import Card from './components/Card.jsx'
import CardMovimentacao from './components/CardMovimentacao.jsx'
import SetaGanho from './components/SetaGanho.jsx'
import SetaPerda from './components/SetaPerda.jsx'
import ContainerMovimentacoes from './components/ContainerMovimentacoes.jsx'
import Footer from './components/Footer.jsx'



function App() {


  return (
    <Container>
      <Header titulo={'Sua carteira virtual'}/>
        
     

      <MainContainer>
        <h1 className="font-bold text-gray-500">Saldo Total</h1>
        <div className='mb-5 flex space-x-4 items-center'>
          <h2 className='text-4xl'>R$ 100,00</h2>

          <TrendingUp color='#32a852' />
        </div>

        <div className='flex space-x-5'>
          <Card>

            <div className='flex justify-between items-center'>

              <div className='flex flex-col'>
                <p className='text-xs font-medium text-gray-500'>Entradas</p>
                <p className='font-bold'>R$ 100</p>
              </div>
              
                <SetaGanho/>

              
            </div>
          </Card>
          <Card>
            <div className='flex justify-between items-center'>

              <div className='flex flex-col'>
                <p className='text-xs font-medium text-gray-500'>Saídas</p>
                <p className='font-bold'>R$ 100</p>
              </div>
              <SetaPerda/>
            </div>
          </Card>

        </div>

        <h3 className='mt-6 mb-4 font-bold'>Últimas movimentações</h3>

        <ContainerMovimentacoes>

          <CardMovimentacao data={'10/02'} hora={'10:00'} nome={'Extra'} tipo={1} valor={50}/>
          <CardMovimentacao data={'09/02'} hora={'11:20'} nome={'Lanche'} tipo={2} valor={10}/>
        </ContainerMovimentacoes>

       
        
        


      </MainContainer>

      <Footer/>


    </Container>
  )
}

export default App
