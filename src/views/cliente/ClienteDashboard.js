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

const Clientes = (props) => {

  return (
    <>
      {/*<CCol xs="12" lg="6">*/}

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
                  <CButton block color="success" className="mb-0" style={{marginTop: '29px'}}>Pesquisar</CButton>
                </CCol>
                <CCol xl="2" lg="2" sm="2" md="2">
                  <CButton block color="primary" className="mb-0" style={{marginTop: '29px'}}>Novo</CButton>
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
              {ID: 0, nome: 'Claudio Potter', email: "a@gmail.com", instituição:"UEG", curso: "Adimnistração", periodo: 2, status: "Disponível"},
              {ID: 1, nome: 'João Potter', email: "j@gmail.com", instituição:"SLMB", curso: "Análise", periodo: 3, status: "Esgotado"}
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
                      <CButton type="submit" color="primary"><CIcon name="cil-pencil" /></CButton>
                      <CButton type="reset" color="danger"><CIcon name="cil-trash" /></CButton>
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

export default Clientes
