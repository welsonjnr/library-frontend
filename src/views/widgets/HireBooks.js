import React, {useState, useEffect} from 'react';
import * as Api from '../../common/axios'
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

const HireBooks = (props) => {

  const [bookList, setBookList] = useState([]);

  useEffect(function loadAll() {
    Api.listAllBooksToHire()
      .then(bookList => setBookList(bookList))
      .catch(e => Error(e))
  }, [])

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
                    <CInput id="titulo" placeholder="Título do livro" required/>
                  </CCol>
                  <CCol xl="2" lg="2" sm="2" md="2">
                    <CButton block
                             color="success"
                             className="mb-0"
                             style={{marginTop: "29px"}}>Pesquisar</CButton>
                  </CCol>
                </CRow>
              </CFormGroup>
            </CCol>
          </CRow>
        </CCardBody>


        <CCardBody>
          <CDataTable
            items={bookList}
            fields={['título', 'edição', 'autor', 'status', 'quantidade', 'alugar']}
            itemsPerPage={5}
            pagination
            scopedSlots={{
              status:
                (item) => (
                  <td>
                    <CBadge color="primary">
                      {item.status}
                    </CBadge>
                  </td>
                ),
              alugar: (item, index) => (
                <CBadge>
                  <CButton variant="outline" color="primary" size="sm">Alugar</CButton>
                </CBadge>
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
