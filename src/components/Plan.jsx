import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: rgba(225, 225, 225, 0.144);
    width: 650px;
    height: 650px;
    position: relative;
    margin-top: 20px;
    border-radius: 5px;
`
const PricingContainer = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
 position: absolute;
 top: 0;
 text-transform: uppercase;
   text-align: center;
   margin: 20px;
`
const List = styled.ul`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  padding: 10px 40px;
`
const ListItem = styled.li`
   line-height: 40px;
   border-bottom: 1px solid black;
   display: ${ props => props.display };
   flex-direction: ${ props => props.direction};
   align-items: ${ props => props.align};
   justify-content: ${ props => props.justify};
   background-color: ${ props => props.bgcolor};
   color: ${ props => props.color};
   padding: ${ props => props.padding};
   border: ${ props => props.border};
   opacity: ${ props => props.opacity };
`
const ItemTitle = styled.h2`

`
const Text = styled.p`

`
const Button = styled.button`
  outline: none;
  border: none;
  padding: 5px 10px;
  border-radius: 20px;
`


const Plan = () => {
  return (
    <Container>
        <PricingContainer>
            <Title>Pricing Plan</Title>
            <List>
                <ListItem display="flex" bgcolor="#3b5998" color="white" direction="column"
                justify="center" align="center" padding="10px" border="none" >
                        <ItemTitle>Basic Plan</ItemTitle>
                        <Text>minimal access</Text>
                        <Button style={{
                            backgroundColor: "#0b3ba1"
                        }}>Subscribe</Button> 
                </ListItem>
                <ListItem>
                    Access to all categories
                </ListItem>
                <ListItem>
                    Receive two sure set daily
                </ListItem>
                <ListItem>
                    Email Notification
                </ListItem>
                <ListItem>
                    Total Risk Management
                </ListItem>
                <ListItem opacity="0">
                    empty
                </ListItem>
                <ListItem>
                    1 week Basic ksh1000 
                </ListItem>
                <ListItem>
                    2 week Basic ksh1500
                </ListItem>
                <ListItem>
                    1 Month Basic ksh2000
                </ListItem>
                <ListItem>
                    3Months Basic ksh5000
                </ListItem>
            </List>
            <List>
                <ListItem display="flex" bgcolor="#7dd66b" color="white" direction="column"
                justify="center" align="center" padding="10px" border="none" >
                        <ItemTitle>Basic Plan</ItemTitle>
                        <Text>minimal access</Text>
                        <Button style={{
                            backgroundColor: "#27b30b"
                        }}>Subscribe</Button> 
                </ListItem>
                <ListItem>
                    Access to all categories
                </ListItem>
                <ListItem>
                    Receive two sure set daily
                </ListItem>
                <ListItem>
                    Email Notification
                </ListItem>
                <ListItem>
                    Total Risk Management
                </ListItem>
                <ListItem opacity="0">
                    empty
                </ListItem>
                <ListItem>
                    1 week Basic ksh1000 
                </ListItem>
                <ListItem>
                    2 week Basic ksh1500
                </ListItem>
                <ListItem>
                    1 Month Basic ksh2000
                </ListItem>
                <ListItem>
                    3Months Basic ksh5000
                </ListItem>
            </List>
        </PricingContainer>
    </Container>
  )
}

export default Plan