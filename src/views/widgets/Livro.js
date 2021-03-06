import React, {useState, useEffect} from 'react';
import ModalUpdateLivro from "../livro/ModalUpdateLivro"
import * as Api from "../../common/axios";
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

import CIcon from "@coreui/icons-react";
/*Comentário para salvar o commit*/
const Livro = (props) => {

  const [danger, setDanger] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalInsert, setModalInsert] = useState(false)

  const [bookList, setBookList] = useState([]);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState(
    {
      id: "",
      name: "",
      author: "",
      edition: "",
      amount: "",
      category: ""
    }
  )

  function updateBook() {
    Api.updateBook(formData).then(res => {
      searchBooks();
      setModal(false);
    });
  }

  function searchBooks() {
    Api.listAllBooksToHireSearch("name", search)
      .then(bookList => {
        setBookList(bookList.map(book => ({...book, categoria: book.categoria})))
      });
  }

  useEffect(function loadAll() {
    const mounted = true;
    if (mounted)
      searchBooks();
  }, [])

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
                    <CInput id="filtroLivroByNome"
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                searchBooks()
                              }
                            }}
                            placeholder="Nome do livro"/>
                  </CCol>
                  <CCol xl="2" lg="2" sm="2" md="2">
                    <CButton block
                             color="success"
                             className="mb-0"
                             style={{marginTop: '29px'}}
                             onClick={() => searchBooks()}
                    >Pesquisar</CButton>
                  </CCol>
                  <CCol xl="2" lg="2" sm="2" md="2">
                    <CButton block
                             color="primary"
                             className="mb-0"
                             style={{marginTop: '29px'}}
                             onClick={() => {
                               setFormData({
                                 id: null,
                                 name: "",
                                 author: "",
                                 edition: "",
                                 amount: "",
                                 category: ""
                               })
                               setModalInsert(!modalInsert)

                             }}
                    >Novo</CButton>
                  </CCol>
                </CRow>
              </CFormGroup>
            </CCol>
          </CRow>
        </CCardBody>

        <CCardBody>
          <CDataTable
            items={bookList}
            fields={['título', 'autor', 'edição', 'status', 'quantidade', 'categoria', 'ações']}
            itemsPerPage={15}
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
                    <CButton type="submit"
                             color="primary"
                             onClick={() => {
                               setModal(!modal)
                               setFormData({
                                 id: item.id,
                                 name: item.título,
                                 author: item.autor,
                                 edition: item.edição,
                                 amount: item.quantidade,
                                 category: item.categoria
                               })
                             }}><CIcon name="cil-pencil" title="Editar"/></CButton>
                    <CButton type="reset" color="danger" onClick={() => {
                      setDanger(!danger)
                      setFormData({
                        id: item.id,
                        name: item.título,
                        author: item.autor,
                        edition: item.edição,
                        amount: item.quantidade,
                        category: item.categoria
                      })
                    }}><CIcon name="cil-trash" title="Excluir"/></CButton>
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
          Deseja mesmo excluir o livro?
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => {
            Api.deleteBook(formData).then(res => {
              setBookList(bookList.filter(item => item.id !== formData.id))
              setDanger(!danger)
            })

          }}>Sim</CButton>{' '}
          <CButton color="secondary" onClick={() => setDanger(!danger)}>Não</CButton>
        </CModalFooter>
      </CModal>

      <CModal
        show={modal}
        onClose={setModal}
      >
        <CModalHeader closeButton style={{background:'#607d8b', color: 'white'}}>
          <CModalTitle>Edição</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ModalUpdateLivro
            setFormData={setFormData}
            formData={formData}
          />
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={e => {
              updateBook();
            }}
          >Salvar</CButton>
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
        <CModalHeader closeButton style={{background:'#607d8b', color: 'white'}}>
          <CModalTitle>Cadastro de livro</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ModalUpdateLivro
            setFormData={setFormData}
            formData={formData}
          />
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={() => {
              Api.insertBook(formData).then(_ => {
                searchBooks()
                setModalInsert(!modalInsert)
              })
            }}
          >Salvar</CButton>
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

export default Livro
