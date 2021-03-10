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
import ModalUpdateLivro from "../livro/ModalUpdateLivro"

const Livro = (props) => {

  const [danger, setDanger] = useState(false)
  const [modal, setModal] = useState(false)
  
  return (
    <>
      {/*<CCol xs="12" lg="6">*/}
      <CCard>
      <CCardHeader>
        Livros
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CRow>
                <CCol>
                  <CLabel htmlFor="titulo">Pesquisar</CLabel>
                  <CInput id="filtroLivroByNome" placeholder="Nome do livro" />
                </CCol>
                <CCol xl="2" lg="2" sm="2" md="2">
                  <CButton block color="success" className="mb-0" style={{ marginTop: '29px' }}>Pesquisar</CButton>
                </CCol>
                <CCol xl="2" lg="2" sm="2" md="2">
                  <CButton block color="primary" className="mb-0" style={{ marginTop: '29px' }}>Novo</CButton>
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
              { ID: 0, título: 'Claudio Potter', autor: "a@gmail.com", edição: "UEG", status: "Adimnistração", quantidade: 2, categoria: "Disponível" },
              { ID: 1, título: 'João Potter', autor: "j@gmail.com", edição: "SLMB", status: "Análise", quantidade: 3, categoria: "Esgotado" }
            ]}
            fields={['ID', 'título', 'autor', 'edição', 'status', 'quantidade', 'categoria', 'ações']}
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
                    <CButton type="reset" color="danger" onClick={() => setDanger(!danger)}><CIcon name="cil-trash" title="Excluir" /></CButton>
                  </td>
                )
            }}
          />
        </CCardBody>
      </CCard>
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
          Deseja mesmo excluir o livro?
              </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setDanger(!danger)}>Sim</CButton>{' '}
          <CButton color="secondary" onClick={() => setDanger(!danger)}>Não</CButton>
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
          <ModalUpdateLivro />
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Salvar</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setModal(false)}
          >Cancelar</CButton>
        </CModalFooter>
      </CModal>
      {/*</CCol>*/}
    </>
  )
}

export default Livro
