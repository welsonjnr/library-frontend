import React, {useState} from 'react'
import * as Api from "../../common/axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton, 
  CModalFooter,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import ModalUsuario from './ModalUsuario'


const Usuario = () => {

  const [modalInsert, setModalInsert] = useState(false)

  const [formData, setFormData] = useState(
    {
      id: "",
      name: "",
      email: "",
      senha: ""
    }
  )

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
      <CButton color="primary" 
        onClick={() => {
        setFormData({
          id: null,
          name: "",
          email: "",
          senha: ""
        })
        setModalInsert(!modalInsert)
      }}
      >Novo usuário</CButton>{' '}
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
          <CButton color="primary"
          onClick={() => {
            Api.insertUsuario(formData).then(_ => {
              setModalInsert(!modalInsert)
            })
          }}
          >Salvar</CButton>{' '}
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