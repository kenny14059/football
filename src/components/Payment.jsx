import styled from "styled-components"

const Container = styled.div`
   height: 300px;
   width: 300px;
   margin: 10px auto;
   display: flex;
   align-items: center;
   justify-content: center;
`
const PaymentContainer = styled.div`
    background-color: #7dd66b;
    height: 80%;
    text-align: center;
    display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
   border-radius: 5px;
   margin-bottom: 10px;
`
const Title = styled.h2`
    color: #27b30b;
`
const TextContainer = styled.div`
  
`
const Text = styled.p`
    line-height: 30px;
`
const Notification = styled.p`
    /* margin: 50px 0; */
`


const Payment = () => {
  return (
    <Container>
        <PaymentContainer>
            <Title>Pay via Mpesa</Title>
            <TextContainer>
            <Text>Mpesa Till Number 12345</Text>
            <Text>Mpesa Number 0712345678</Text>
            </TextContainer>
            <Notification>
               your account will be updated after payment has been processed.
            </Notification>
        </PaymentContainer>
    </Container>
  )
}

export default Payment