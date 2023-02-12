import { CopyrightOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
  padding: 10px;
  margin: 10px 10px 20px 10px;
  background-color: #000000ba;
  color: white;
`
const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Copyright = () => {
  return (
    <Container>
        <Text> 
            <CopyrightOutlined/> Tiptops.predictions 2023
         </Text>
        <Text>All rights reserved.</Text>
    </Container>
  )
}

export default Copyright