import styled from 'styled-components'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './pages/Main'

const App = () => {
  return (
    <div className="App">
      <AppComtainer>
        <Nav />
        <Main />
        <Footer />
      </AppComtainer>
    </div>
  )
}

const AppComtainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

export default App
