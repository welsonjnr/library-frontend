import React from 'react';
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
  CLabel, CInput, CButton
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";
import {DocsLink} from "../../reusable";
import usersData from "../users/UsersData";

const HireBooks = (props) => {

  return (
    <>
      {/*<CCol xs="12" lg="6">*/}

      <CCardHeader>
        Livros disponíveis
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CRow>
                <CCol>
                  <CLabel htmlFor="titulo">Pesquisar</CLabel>
                  <CInput id="titulo" placeholder="Título do livro" required/>
                </CCol>
                <CCol xl="2" lg="2" sm="2" md="2">
                  <CButton block color="success" className="mb-0 mt-4">Pesquisar</CButton>
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
              {id: 0, título: 'Harry Potter', edição: "2", autor: "Author", quantidade: 2, status: "Disponível"},
              {id: 1, título: 'Harry Potter', edição: "2", autor: "Author", quantidade: 3, status: "Esgotado"}
            ]}
            fields={['título', 'edição', 'autor', 'status', 'quantidade', '']}
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
                )
            }}
          />
        </CCardBody>
      </CCard>


      {/*</CCol>*/}
    </>
  )
}

export default HireBooks
