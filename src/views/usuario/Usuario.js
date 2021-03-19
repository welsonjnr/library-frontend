import React, {useState, useEffect} from 'react'
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
  CDataTable,
  CBadge,
} from '@coreui/react'
import CIcon from "@coreui/icons-react";
import ModalUsuario from './ModalUsuario'


const Usuario = () => {

  const [modalInsert, setModalInsert] = useState(false)
  const [search, setSearch] = useState(false)
  const [modal, setModal] = useState(false)
  const [danger, setDanger] = useState(false)
  const [userList, setUserList] = useState(false)
  const [formData, setFormData] = useState(
    {
      nome: "",
      email: "",
      senha: ""
    }
  )

  function searchUsers() {
    Api.listAllUsers("name", search)
      .then(userList => {
        setUserList(userList.map(user => ({...user})))
      });
  }

  function updateUser() {
    Api.updateUsuario(formData).then(res => {
      searchUsers();
      setModal(false);
    });
  }

  useEffect(function loadAll() {
    const mounted = true;
    if (mounted)
      searchUsers();
  }, [])

  return (
    <>
      <CRow>
        <CCol lg={6}>
          <CCard>
            <CCardHeader>
              Usuário
            </CCardHeader>
            <CCardBody>
            <CDataTable
            items={userList}
            fields={['ações', 'nome', 'email', 'senha']}
            itemsPerPage={8}
            pagination
            scopedSlots={{
              'senha':
                (item) => (
                  <td>
                    <CBadge color="primary" type="password">
                      {item.senha}
                    </CBadge>
                  </td>
                ),
              'ações':
                (item) => (
                  <td>
                    <CButton type="submit"
                             color="primary"
                             onClick={() => {
                               setModal(!modal)
                               setFormData({
                                 id: item.id,
                                 nome: item.nome,
                                 email: item.email,
                                 senha: item.senha
                               })
                             }}><CIcon name="cil-pencil" title="Editar"/></CButton>

                    <CButton type="reset" color="danger" onClick={() => {
                      setDanger(!danger)
                      setFormData({
                        id: item.id,
                      })
                    }}><CIcon name="cil-trash" title="Excluir"/></CButton>
                  </td>
                )
            }}>
              </CDataTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CButton color="primary" 
        onClick={() => {
        setFormData({
          id: null,
          nome: "",
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
          <ModalUsuario 
          setFormData={setFormData}
          formData={formData}/>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary"
          onClick={() => {
            Api.insertUsuario(formData).then(_=> {
              setModalInsert(!modalInsert)
              searchUsers()
            })
          }}
          > Salvar</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setModalInsert(false)}
          >Cancelar</CButton>
        </CModalFooter>
      </CModal>

      <CModal
        show={modal}
        onClose={setModal}
      >
        <CModalHeader closeButton>
          <CModalTitle>Edição</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ModalUsuario
            setFormData={setFormData}
            formData={formData}
          />
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={e => {
              updateUser();
            }}
          >Salvar</CButton>
          <CButton
            color="secondary"
            onClick={() => setModal(false)}
          >Cancelar</CButton>
        </CModalFooter>
      </CModal>

      <CModal
        show={danger}
        onClose={() => setDanger(!danger)}
        color="danger"
      >
        <CModalHeader closeButton>
          <CModalTitle>Confirmação</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Deseja mesmo excluir o usuário?
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => {
            Api.deleteUser(formData).then(res => {
              setUserList(userList.filter(item => item.id !== formData.id))
              setDanger(!danger)
            })

          }}>Sim</CButton>{' '}
          <CButton color="secondary" onClick={() => setDanger(!danger)}>Não</CButton>
        </CModalFooter>
      </CModal>

    </>
  )
}
export default Usuario;