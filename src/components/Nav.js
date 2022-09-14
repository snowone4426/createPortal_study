import styled from 'styled-components'

const Nav = () => {
  const publicUrl = process.env.PUBLIC_URL
  const btnArr = ['버튼1', '버튼2', '버튼2', '버튼3']
  return (
    <NavContainer>
      <Logo src={`${publicUrl}/assets/logo.png`} />
      <NavList>
        {btnArr.map((el) => (
          <NavBtn>{el}</NavBtn>
        ))}
      </NavList>
    </NavContainer>
  )
}

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  border-top: 1px solid #ccc;
  box-shadow: 0 7px 7px #ddd;
`
const Logo = styled.img`
  width: 8%;
`
const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  border: none;
  margin: 0;
  padding: 0;
`

const NavBtn = styled.li`
  font-size: 20px;
  margin: 0 10px;
  cursor: pointer;
`

export default Nav
