import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <Content>대충 Footer에 들어갈 내용</Content>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  height: 10vh;
  border-top: 1px solid #ccc;
  box-shadow: 0 -7px 7px #ddd;
`
const Content = styled.p`
  font-size: 20px;
`
export default Footer
