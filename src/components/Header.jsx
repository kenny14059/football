import styled from "styled-components"

const Container = styled.div`
   padding: 5px;
  background-color: whitesmoke;
  
`
const Logo = styled.div`
    text-align: center;
    margin: 10px;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 2px;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Navbar = styled.div`
   
`
const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center; 
`
const ListItem = styled.li`
    list-style: none;
    margin-right: 30px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 5px 10px;
`
const ItemLink = styled.a`
    
`

const Header = () => {
  return (
    <Container>
        <Logo>
            Tiptops
        </Logo>
        <Navbar>
            <List>
                <ListItem>
                   <ItemLink>Home</ItemLink>
                </ListItem>
                <ListItem>
                    <ItemLink>TipStore</ItemLink>
                </ListItem>
                <ListItem>
                    <ItemLink>SuperTips</ItemLink>
                </ListItem>
                <ListItem>
                    <ItemLink>Extra pICKS</ItemLink>
                </ListItem>
                <ListItem>
                    <ItemLink>Pricing</ItemLink>
                </ListItem>
            </List>
        </Navbar>
    </Container>
  )
}

export default Header