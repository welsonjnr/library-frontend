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
import ModalEmprestimo from "../emprestimo/Emprestimo"

const Emprestimo = (props) => {

  const [danger, setDanger] = useState(false)
  const [modalInsert, setModalInsert] = useState(false)

  return (
    <>
      {/*<CCol xs="12" lg="6">*/}
      <CCard>
      <CCardHeader>
        Empréstimos
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
                <CCol xl="2" lg="2" sm="2" md="2">
                  <CButton block color="success" className="mb-0" style={{ marginTop: '29px' }}>Pesquisar</CButton>
                </CCol>
                <CCol xl="2" lg="2" sm="2" md="2">
                  <CButton block color="primary"
                   className="mb-0" 
                   style={{ marginTop: '29px' }}
                   onClick={() => setModalInsert(!modalInsert)}
                   >Novo</CButton>
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
              { ID: 0, cliente: 'Claudio Potter', livro: "Harry Poter", emprestimo: "12/04/2020", retorno: "20/03/2021", status: "Disponível" },
              { ID: 1, cliente: 'João Potter', livro: "Fique Rico", emprestimo: "30/05/2020", retorno: "06/06/2020", status: "Disponível" }
            ]}
            fields={['ID', 'cliente', 'livro', 'emprestimo', 'retorno', 'status', 'ações']}
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
                    <CButton type="submit" color="primary"><CIcon name="cil-arrow-circle-bottom" title="Retornar" /></CButton>
                    <CButton type="submit" color="dark"><CIcon name="cil-reload" title="Renovar" /></CButton>
                    <CButton type="reset" color="danger"><CIcon name="cil-trash" title="Excluir" onClick={() => setDanger(!danger)} /></CButton>
                  </td>
                )
            }}
          />
        </CCardBody>
      </CCard>

      <CModal
        show={danger}
        onClose={() => setDanger(!danger)}
        color="danger"
      >
        <CModalHeader closeButton>
          <CModalTitle>Confirmação</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Deseja mesmo excluir o empréstimo?
              </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setDanger(!danger)}>Sim</CButton>{' '}
          <CButton color="secondary" onClick={() => setDanger(!danger)}>Não</CButton>
        </CModalFooter>
      </CModal>
      <CModal
        show={modalInsert}
        onClose={setModalInsert}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Cadastro</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ModalEmprestimo/>
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
      </CCard>
    </>
  )
}

export default Emprestimo
