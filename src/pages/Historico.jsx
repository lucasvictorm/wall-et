
import Container from "../components/Container"
import DiaHistorico from "../components/DiaHistorico"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"

function Historico(){
    return(
        <Container>
            <Header titulo={'Histórico de lançamentos'}/>

            <MainContainer>
                <DiaHistorico/>
                
            </MainContainer>
            <Footer/>
        </Container>
    )

}

export default Historico