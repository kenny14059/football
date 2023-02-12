import { FacebookOutlined, Instagram, Twitter, WhatsApp } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
   margin: 10px;
   background-color: whitesmoke;
`
const FooterContainer = styled.div`
   margin : 10px;
   padding: 10px;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
`
const List = styled.ul`
    display: ${ props => props.display};
`
const Title = styled.p`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
`
const ListItem = styled.li`
    margin: 10px;
`
const ItemLink = styled.a`
     background-color: ${ props => props.bgcolor};
     display: ${ props => props.display};
     align-items: ${ props => props.align};
     justify-content: ${ props => props.justify};
     border-radius: ${ props => props.radius};
`

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
         <List>
         <Title>About</Title>
            <ListItem>
                <ItemLink>About Us</ItemLink>
            </ListItem>
            <ListItem>
                <ItemLink>Terms and Conditions</ItemLink>
            </ListItem>
            <ListItem>
                <ItemLink>Privacy Policy</ItemLink>
            </ListItem>
            <ListItem>
                <ItemLink>FAQs</ItemLink>
            </ListItem>
            <ListItem>
                <ItemLink>Contact Us</ItemLink>
            </ListItem>
            <ListItem>
                <ItemLink>How to Subscribe</ItemLink>
            </ListItem>
         </List>
         <List>
         <Title>Key Links</Title>
            <ListItem>
                <ItemLink>View All Matches</ItemLink>
            </ListItem>
            <ListItem>
                <ItemLink>Super Tips</ItemLink>
            </ListItem>
            <ListItem>
                <ItemLink>Extra Picks</ItemLink>
            </ListItem>
         </List>
         <List display="flex" >
            <ListItem>
                <ItemLink radius="50%" align="center" justify="center" display="flex" bgcolor="#3b5998">
                    <FacebookOutlined/>
                </ItemLink>
            </ListItem>
            <ListItem>
                <ItemLink radius="50%" align="center" justify="center" display="flex" bgcolor="#0b08b4">
                    <Twitter/>
                </ItemLink>
            </ListItem>
            <ListItem>
                <ItemLink radius="50%" align="center" justify="center" display="flex" bgcolor="#64e47a">
                    <WhatsApp/>
                </ItemLink>
            </ListItem>
            <ListItem>
                <ItemLink radius="50%" align="center" justify="center" display="flex" bgcolor="red">
                    <Instagram/>
                </ItemLink>
            </ListItem>
         </List>
      </FooterContainer>
    </Container>
  )
}

export default Footer