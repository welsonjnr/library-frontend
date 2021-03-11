import React, {useState} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink,  
  CButton, 
  CModalFooter,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ModalUsuario from './ModalUsuario'


const Usuario = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  const [modalInsert, setModalInsert] = useState(false)

  return (
    <>
      <CRow>
        <CCol lg={6}>
          <CCard>
            <CCardHeader>
              Usuário
            </CCardHeader>
            <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                       <tr>
                          <td>id: '(aqui tem o id)'</td>
                          <td>nome: '(aqui tem o nome)'</td>
                          <td>email: '(aqui tem o email)'</td>
                          <td>senha: '(aqui tem o senha)'</td>
                        </tr>
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CButton color="primary" onClick={() => setModalInsert(!false)}>Novo usuário</CButton>{' '}

      <CModal
        show={modalInsert}
        onClose={setModalInsert}
      >
        <CModalHeader closeButton>
          <CModalTitle>Cadastro</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ModalUsuario />
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Salvar</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setModalInsert(false)}
          >Cancelar</CButton>
        </CModalFooter>
      </CModal>

    </>
  )
}
export default Usuario;