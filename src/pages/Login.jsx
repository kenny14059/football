import styled from "styled-components"
import {  Link} from 'react-router-dom'

const Container = styled.div`
    width: 300px;
    height: 400px;
    margin: 10px auto;
    margin-bottom: -70px;
`
const Wrapper = styled.div`
  padding: 30px 20px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  text-align: center;
  font-weight: 500;
  color: #636161;
`
const Input = styled.input`
    padding: 10px;
    margin: 10px 0;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    margin: 10px 0;
    background-color: #00b241;
    color: white;
    cursor: pointer;
`
const Create = styled.div`
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Anchor = styled.a`
    color: ${(props)=> props.color};

    &:hover {
      text-decoration: underline;
    }
`

const Login = () => {
  return (
    <Container>
               <Wrapper>
       <Title>LOGIN YOUR ACCOUNT</Title>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button>LOGIN</Button>
        <Button style={{backgroundColor: "rgba(255,0,0,1)"}}>LOGOUT</Button>
        <Create>
            <Anchor color="red">Forgot password?</Anchor>
            {/* <Anchor color="blue"><Link to="/">Create new account!</Link></Anchor> */}
            <Anchor color="blue">Create new Account</Anchor>
        </Create>
       </Wrapper>
    </Container>
  )
}

export default Login