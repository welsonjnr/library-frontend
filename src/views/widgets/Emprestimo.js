import React, { useState, useEffect } from 'react';
import * as Api from "../../common/axios";
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
import ModalEmprestimo from "../emprestimo/Emprestimo"

const Emprestimo = (props) => {

  const [danger, setDanger] = useState(false)
  const [modalInsert, setModalInsert] = useState(false)
  const [modalRenew, setModalRenew] = useState(false)
  const [modalReturn, setModalReturn] = useState(false)

  const [loanList, setLoanList] = useState([]);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    cliente: {
      cpf: "",
      curso: "",
      email: "",
      id: "",
      instituição: "",
      nome: "",
      periodo: "",
      status: ""
    },
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

  const [formDataLoan, setFormDataLoan] = useState(
    {
      id: "",
      bookId: "",
      clientId: ""
    }
  )

  const [formDataRenew, setFormDataRenew] = useState(
    {
      id: "",
      bookId: "",
      clientId: ""
    }
  )

  const [formDataReturn, setFormDataReturn] = useState(
    {
      id: "",
      bookId: "",
      clientId: ""
    }
  )

  function renewLoan() {
    Api.renewLoan(formDataRenew).then(res => {
      searchLoans();
    });
  }

  function returnLoan() {
    Api.returnLoan(formDataReturn).then(res => {
      searchLoans();
    });
  }


  function searchLoans() {
    Api.listAllLoansToHireSearch("nameclient", search)
      .then(loanList => {
        setLoanList(loanList.map(loan => ({...loan})))
      });
  }

  useEffect(() => {
    console.log(formData)
  },[formData])

  useEffect(() => {
    setFormData({ ...formData, livro: props.formData })
  }, [props.formData])

  useEffect(function loadAll() {
    const mounted = true;
    if (mounted)
      searchLoans();
  }, [])

  return (
    <>
      {/*<CCol xs="12" lg="6">*/}
      <CCard>
      <CCardHeader style={{background:'#607d8b', color: 'white'}}>
        <h5>Empréstimos</h5>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CRow>
                <CCol>
                  <CLabel htmlFor="titulo">Pesquisar</CLabel>
                  <CInput id="filtroClienteByNome" 
                          onChange={(e) => setSearch(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              searchLoans()
                            }
                          }}
                          placeholder="Nome do cliente" />
                </CCol>
                <CCol xl="2" lg="2" sm="2" md="2">
                  <CButton block color="success" 
                           className="mb-0" 
                           style={{ marginTop: '29px' }}
                           onClick={() => searchLoans()}
                           >Pesquisar</CButton>
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
            items={loanList}
            fields={['cliente', 'livro', 'emprestimo', 'retorno', 'status', 'ações']}
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
                    disabled={item.status !== 'RENOVADO' && item.status !== 'OK'}
                    color="primary"
                    onClick={() => {
                      setModalReturn(!modalReturn)
                      setFormDataReturn({
                        id: item.id,
                        bookId: item.idBook,
                        clientId: item.idClient
                      })
                    }
                  }
                  ><CIcon name="cil-arrow-circle-bottom" title="Retornar"/></CButton>
                    <CButton type="submit"
                    disabled={item.status === 'RENOVADO' || item.status === 'DEVOLVIDO'}
                    color="dark"
                    onClick={() => {
                      setModalRenew(!modalRenew)
                      setFormDataRenew({
                        id: item.id,
                        bookId: item.idBook,
                        clientId: item.idClient
                      })
                    }
                  }
                    ><CIcon name="cil-reload" title="Renovar"/></CButton>
                    <CButton type="reset" color="danger"><CIcon name="cil-trash" title="Excluir" onClick={() => {
                      setDanger(!danger)
                      setFormData({
                        id: item.id,
                        bookId: item.idBook,
                        clientId: item.idClient
                      })
                    }}/></CButton>
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
          <CButton color="danger" onClick={() => {
            Api.deleteLoan(formData).then(res => {
              setLoanList(loanList.filter(item => item.id !== formData.id))
              setDanger(!danger)
            })
          }}>Sim</CButton>{' '}
          <CButton color="secondary" onClick={() => setDanger(!danger)}>Não</CButton>
        </CModalFooter>
      </CModal>

      <CModal
        show={modalInsert}
        onClose={setModalInsert}
        size="lg"
      >
        <CModalHeader closeButton style={{background:'#607d8b', color: 'white'}}>
          <CModalTitle>Empréstimo</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ModalEmprestimo formDataLoan={formDataLoan} setFormDataLoan={setFormDataLoan}/>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary"
          onClick={() => {
            Api.insertLoan(formDataLoan).then(_=> {
              setModalInsert(!modalInsert)
              searchLoans()
            })
          }}
          >Salvar</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setModalInsert(false)}
          >Cancelar</CButton>
        </CModalFooter>
      </CModal>

      <CModal
        show={modalRenew}
        onClose={() => setModalRenew(!modalRenew)}
      >
        <CModalHeader closeButton>
          <CModalTitle>Confirmação</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Deseja mesmo renovar o empréstimo?
              </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => {
            Api.renewLoan(formDataRenew).then(res => {
              setLoanList(loanList.filter(item => item.id !== formDataRenew.id))
              searchLoans();
              setModalRenew(!modalRenew)
            })
          }}>Sim</CButton>{' '}
          <CButton color="secondary" onClick={() => setModalRenew(!modalRenew)}>Não</CButton>
        </CModalFooter>
      </CModal>

      <CModal
        show={modalReturn}
        onClose={() => setModalReturn(!modalReturn)}
      >
        <CModalHeader closeButton>
          <CModalTitle>Confirmação</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Deseja mesmo retornar o empréstimo?
              </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => {
            Api.returnLoan(formDataReturn).then(res => {
              setLoanList(loanList.filter(item => item.id !== formDataReturn.id))
              searchLoans();
              setModalReturn(!modalReturn)
            })
          }}>Sim</CButton>{' '}
          <CButton color="secondary" onClick={() => setModalReturn(!modalReturn)}>Não</CButton>
        </CModalFooter>
      </CModal>

      {/*</CCol>*/}
      </CCard>
    </>
  )
}

export default Emprestimo
