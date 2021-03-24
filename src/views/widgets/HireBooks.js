import React, {useState, useEffect} from 'react';
import * as Api from '../../common/axios'
import ModalEmprestimo from "../emprestimo/Emprestimo"
import {
  CRow,
  CCol,
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

const HireBooks = (props) => {

  const [bookList, setBookList] = useState([]);
  const [search, setSearch] = useState("");
  const [modalInsert, setModalInsert] = useState(false)

  const [formData, setFormData] = useState({
    livro: {
      autor: "",
      categoria: "",
      edição: "",
      id: "",
      quantidade: "",
      status: "",
      título: ""
    }
  })

  const [formDataLoan, setFormDataLoan] = useState({
    id:"",
    bookId: "",
    clientId: ""
  })

  // useEffect(() => {
  //   console.log(formData)
  // },[formData])


  useEffect(function loadAll() {
    Api.listAllBooksToHire()
      .then(bookList => setBookList(bookList.map(book => ({...book, categoria: book.categoria}))))
  }, [])

  function searchBooks() {
    Api.listAllBooksToHireSearch("name", search)
      .then(bookList => setBookList(bookList));
  }

  return (
    <>
      {/*<CCol xs="12" lg="6">*/}
      <CCard>
        <CCardHeader style={{background:'#607d8b', color: 'white'}}>
          <h5>Livros</h5>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CRow>
                  <CCol>
                    <CLabel htmlFor="titulo">Pesquisar</CLabel>
                    <CInput id="titulo"
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                searchBooks()
                              }
                            }}
                            placeholder="Título do livro"
                            required/>
                  </CCol>
                  <CCol xl="2" lg="2" sm="2" md="2">
                    <CButton block
                             color="success"
                             className="mb-0"
                             style={{marginTop: "29px"}}
                             onClick={() => searchBooks()}
                    >Pesquisar</CButton>
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
            itemsPerPage={15}
            pagination
            scopedSlots={{
              status:
                (item) => (
                  <td>
                    <CBadge color="primary">{item.status}</CBadge>
                  </td>
                ),
              alugar: (item, index) => (
                <td>
                  <CButton variant="outline"
                           color="primary"
                           onClick={() => {
                             setFormData(item)
                             setFormDataLoan({
                               id: null,
                               bookId: "",
                               clientId: ""
                             })
                             setModalInsert(!modalInsert)
                           }}
                           size="sm">Alugar</CButton>
                </td>
              )
            }}
          />
        </CCardBody>
      </CCard>

      <CModal
        show={modalInsert}
        onClose={setModalInsert}
        size="lg"
      >
        <CModalHeader closeButton style={{background:'#607d8b', color: 'white'}}>
          <CModalTitle>Empréstimo</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ModalEmprestimo formData={formData} formDataLoan={formDataLoan} setFormDataLoan={setFormDataLoan}/>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary"
          onClick={() => {
            Api.insertLoan(formDataLoan).then(_=> {
              setModalInsert(!modalInsert)
            })
          }}
          >Salvar</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => {
                setModalInsert(!modalInsert)
            }}
          >Cancelar</CButton>
        </CModalFooter>
      </CModal>

      {/*</CCol>*/}
    </>
  )
}

export default HireBooks
