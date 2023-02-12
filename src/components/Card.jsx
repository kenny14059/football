import styled from "styled-components"

const Container = styled.div`
   display: flex;
   width: 90vw;
   margin: 0 auto;
`
const Inner = styled.div`
   background-color: wheat;
   width: 450px;
   margin: 10px;
   padding: 20px 70px 20px 20px;
   height: 450px;
   border-radius: 15px;
`
const List = styled.ul`
   height: 25%;
`
const ListItem = styled.li`
   list-style: none;
   margin: 10px;
`
const ListText = styled.p`
    text-align: center;
`
const ImgContainer = styled.div`
    
`
const ImageTitle = styled.h4`

`
const Image = styled.img`
   width: 100px;
   border-radius: 50%;
`
const Text = styled.div`

`
const ItemText = styled.div`
    text-align: center;
`


const Card = () => {
  return (
    <Container>
      <Inner>
       <List>
        <ListItem>
              <ListText> 09 February 2023 -1800hrs</ListText> 
              <ListText> England</ListText> 
              <ListText> Premier League</ListText> 
        </ListItem>
        <ListItem style={{
            display:"flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            height: "200%"
        }} >
             <ImgContainer>
                 <Image src="images/Leicester_City.png" alt="club"/>
                <ImageTitle>Leicester City</ImageTitle>
             </ImgContainer>
             <Text>VS</Text>
             <ImgContainer>
                <Image src="images/manC.png" alt="club"/>
                <ImageTitle>Manchester City</ImageTitle>
             </ImgContainer>
        </ListItem>
        <ListItem>
            <ItemText>Tip: <br/>Man United wins the match</ItemText>
        </ListItem>
       </List>
       </Inner>
    </Container>
  )
}

export default Card