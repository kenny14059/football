import styled from "styled-components"
import Payment from "../components/Payment"
import Plan from "../components/Plan"

const Container = styled.div`
    
`

const Pricing = () => {
  return (
    <Container>
       <Plan/> 
       <Payment/>
    </Container>
  )
}

export default Pricing