import React, {useState} from 'react'
import * as Api from "../../common/axios";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormGroup,
    CInput,
    CInputCheckbox,
    CLabel,
    CRow,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CBadge,
    CModalTitle,
    CDataTable
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
const Emprestimo = () => {

  const [bookList, setBookList] = useState([]);
  const [searchBook, setSearchBook] = useState("");

  const [clientList, setClientList] = useState([]);
  const [searchClient, setSearchClient] = useState("");

    function searchBooks() {
    Api.listAllBooksToHireSearch("name", searchBook)
      .then(bookList => {
        setBookList(bookList.map(book => ({...book})))
      });
    }

    function searchClients() {
      Api.listAllClientsToHireSearch("name", searchClient)
        .then(clientList => {
          setClientList(clientList.map(client => ({...client})))
        });
    }

    const [success, setSuccess] = useState(false)
    const [info, setInfo] = useState(false)

    return (
        <>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Empréstimo
                        </CCardHeader>
                        <CCardBody>
                            <CCard>
                                <CCardHeader>Livro</CCardHeader>
                                <CCardBody>
                                    <CFormGroup row>
                                        <CCol xs="11">
                                            <CLabel htmlFor="nomelivro">Título</CLabel>
                                            <CInput id="nomeLivroEmprestimo" 
                                            placeholder="Insira o título do livro"
                                            onChange={(e) => setSearchBook(e.target.value)}
                                            onKeyPress={(e) => {
                                            if (e.key === "Enter") {
                                            setSuccess(!success)
                                            searchBooks()}
                                            }}
                                            />
                                        </CCol>
                                        <CCol xs="1">
                                            <CButton onClick={() => {
                                              searchBooks()
                                              setSuccess(!success)}}
                                              type="reset" color="success" style={{marginTop: '27px'}}>
                                              <CIcon name="cil-search" title="Pesquisar" /></CButton>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="autor">Autor</CLabel>
                                        <CInput id="autorLivroEmprestimo" placeholder="Insira o autor do livro" />
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="4">
                                            <CFormGroup>
                                                <CLabel htmlFor="edição">Edição</CLabel>
                                                <CInput id="ediçãoLivroEmprestimo" placeholder="edição" disabled />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="4">
                                            <CFormGroup>
                                                <CLabel htmlFor="quantidade">Quantidade</CLabel>
                                                <CInput id="quantidadeLivroEmprestimo" placeholder="quantidade" disabled />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="4">
                                            <CFormGroup>
                                                <CLabel htmlFor="status">Status</CLabel>
                                                <CInput id="statusLivroEmprestimo" placeholder="status" disabled />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                </CCardBody>
                            </CCard>
                            <CCard>
                                <CCardHeader>Cliente</CCardHeader>
                                <CCardBody>
                                    <CFormGroup row>
                                        <CCol xs="11">
                                            <CLabel htmlFor="nomeCliente">Nome</CLabel>
                                            <CInput id="cpfClienteEmprestimo"
                                            placeholder="Insira o nome do cliente"
                                            onChange={(e) => setSearchClient(e.target.value)}
                                            onKeyPress={(e) => {
                                            if (e.key === "Enter") {
                                            searchClients()
                                            setInfo(!info)}
                                          }}
                                            />
                                        </CCol>
                                        <CCol xs="1">
                                            <CButton onClick={() => {
                                              searchClients()
                                              setInfo(!info)}} 
                                              type="reset" color="success" style={{marginTop: '27px'}}>
                                              <CIcon name="cil-search" onClick={() => setInfo(!info)} title="Pesquisar"/></CButton>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="cpfCliente">CPF</CLabel>
                                        <CInput id="cpfClienteEmprestimo" placeholder="Insira o cpf do livro" />
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="email">Email</CLabel>
                                                <CInput id="emailClienteEmprestimo" placeholder="email" disabled />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="status">Status</CLabel>
                                                <CInput id="statusClienteEmprestimo" placeholder="status" disabled />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                </CCardBody>
                            </CCard>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

    
    {/*Modal de informações dos livros*/}

            <CModal
        show={success}
        onClose={() => setSuccess(!success)}
        color="success"
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Livro</CModalTitle>
        </CModalHeader>
        <CModalBody>
          
        <CCard>
        <CCardBody>
          <CDataTable
            items={bookList}
            fields={['ações', 'título', 'autor', 'status', 'quantidade']}
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
                      <CInputCheckbox value={item.id} style={{marginLeft: '10px'}}/>
                  </td>
                )
            }}
          />
        </CCardBody>
      </CCard>

        </CModalBody>
        <CModalFooter>
          <CButton color="success">Confirmar</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setSuccess(false)}
          >Cancelar</CButton>
        </CModalFooter>
      </CModal>

    {/*Modal de informações do cliente*/}

      <CModal
        show={info}
        onClose={() => setInfo(!success)}
        color="info"
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Cliente</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <CCard>
        <CCardBody>
          <CDataTable
            items={clientList}
            fields={['ações', 'nome', 'email', 'cpf', 'status']}
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
                    <CInputCheckbox value={item.id} style={{marginLeft: '10px'}}/>
                  </td>
                )
            }}
          />
        </CCardBody>
      </CCard>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Confirmar</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setInfo(false)}
          >Cancelar</CButton>
        </CModalFooter>
      </CModal>
        </>
    )
}

export default Emprestimo