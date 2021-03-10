import React, { useState } from 'react';
import {
  CRow,
  CCol,
  CWidgetBrand,
  CCard,
  CCardHeader,
  CCardBody,
  CDataTable,
  CBadge,
  CFormGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CLabel, CInput, CButton
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";
import { DocsLink } from "../../reusable";
import usersData from "../users/UsersData";
import FormLivro from '../livro/FormLivro';
import ModalUpdateCliente from '../cliente/ModalUpdateCliente'
import FormCliente from '../cliente/FormCliente';

const Clientes = (props) => {

  const [danger, setDanger] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalInsert, setModalInsert] = useState(false)

  return (
    <>
      {/*<CCol xs="12" lg="6">*/}
      <CCard>
      <CCardHeader>
        Clientes
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CRow>
                <CCol>
                  <CLabel htmlFor="titulo">Pesquisar</CLabel>
                  <CInput id="filtroClienteByNome" placeholder="Nome do cliente" />
                </CCol>
                <CCol xl="2" lg="2" sm="2" md="2" >
                  <CButton block color="success" className="mb-0" style={{ marginTop: '29px' }}>Pesquisar</CButton>
                </CCol>
                <CCol xl="2" lg="2" sm="2" md="2">
                  <CButton block color="primary" className="mb-0" style={{ marginTop: '29px' }} onClick={() => setModalInsert(!modalInsert)}>Novo</CButton>
                </CCol>
              </CRow>
            </CFormGroup>
          </CCol>
        </CRow>
      </CCardBody>

      <CCard>
        <CCardBody>
          <CDataTable
            items={[
              { ID: 0, nome: 'Claudio Potter', email: "a@gmail.com", instituição: "UEG", curso: "Adimnistração", periodo: 2, status: "Disponível" },
              { ID: 1, nome: 'João Potter', email: "j@gmail.com", instituição: "SLMB", curso: "Análise", periodo: 3, status: "Esgotado" }
            ]}
            fields={['ID', 'nome', 'email', 'curso', 'instituição', 'periodo', 'status', 'ações']}
            itemsPerPage={5}
            pagination
            scopedSlots={{
              'status':
                (item) => (
                  <td>
                    <CBadge color="primary">
                      {item.status}
                    </CBadge>
                  </td>
                ),
              'ações':
                (item) => (
                  <td>
                    <CButton type="submit" color="primary" onClick={() => setModal(!modal)}><CIcon name="cil-pencil" title="Editar" /></CButton>
                    <CButton type="submit" color="danger" onClick={() => setDanger(!danger)}><CIcon name="cil-trash" title="Excluir" /></CButton>
                  </td>
                )
            }}
          />
        </CCardBody>
      </CCard>
      </CCard>

      {/*Modal de exclusão*/}
      <CModal
        show={danger}
        onClose={() => setDanger(!danger)}
        color="danger"
      >
        <CModalHeader closeButton>
          <CModalTitle>Confirmação</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Deseja mesmo excluir o cliente?
                  </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setDanger(!danger)}>Sim</CButton>{' '}
          <CButton color="secondary" onClick={() => setDanger(!danger)}>Não</CButton>
        </CModalFooter>
      </CModal>

      {/*Modal de edição*/}

      <CModal
        show={modal}
        onClose={setModal}
      >
        <CModalHeader closeButton>
          <CModalTitle>Edição</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ModalUpdateCliente />
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Salvar</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setModal(false)}
          >Cancelar</CButton>
        </CModalFooter>
      </CModal>

      <CModal
        show={modalInsert}
        onClose={setModalInsert}
      >
        <CModalHeader closeButton>
          <CModalTitle>Cadastro</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <FormCliente />
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Salvar</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setModalInsert(false)}
          >Cancelar</CButton>
        </CModalFooter>
      </CModal>

      {/*</CCol>*/}
    </>
  )
}

export default Clientes
