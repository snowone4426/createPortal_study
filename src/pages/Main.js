import styled from 'styled-components'
import { useState } from 'react'

import Modal from '../components/Modal'
import ModalPortals from '../components/ModalPotal'

const Main = () => {
  const [isOpen, setIsOpen] = useState(false)

  const modalOpenHanlder = () => {
    setIsOpen(!isOpen)
  }
  return (
    <MainContainer>
      {isOpen && (
        <ModalPortals>
          <Modal modalOpenHanlder={modalOpenHanlder} />
        </ModalPortals>
      )}
      <ModalOpenBtn onClick={modalOpenHanlder}>모달 열기</ModalOpenBtn>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
const ModalOpenBtn = styled.button`
  width: 100px;
  height: 30px;
  font-size: 16px;
`

export default Main
