import styled from 'styled-components'

const Modal = ({ modalOpenHanlder }) => {
  return (
    <ModalContainer>
      <ModalView>
        <ModalOpenBtn onClick={modalOpenHanlder}>모달 닫기</ModalOpenBtn>
      </ModalView>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`
const ModalView = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 400px;
  height: 150px;
  border: 2px solid black;
  background-color: gray;
`
const ModalOpenBtn = styled.button`
  width: 100px;
  height: 30px;
  font-size: 16px;
  margin-bottom: 15px;
`

export default Modal
