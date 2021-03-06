import React, {useState, useEffect} from 'react';
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
import * as Api from "../../common/axios";
import ModalUpdateCliente from '../cliente/ModalUpdateCliente'
import FormCliente from '../cliente/FormCliente';

const Clientes = (props) => {

  const [danger, setDanger] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalInsert, setModalInsert] = useState(false)

  const [clientList, setClientList] = useState([]);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    cpf: "",
    email: "",
    course: "",
    institution: "",
    period: ""
  })

  const [formDataUpdate, setFormDataUpdate] = useState({
    id: "",
    name: "",
    email: "",
    course: "",
    institution: "",
    period: ""
  })

  useEffect(() => console.log(formData), [formData])

  function updateClient() {
    Api.updateClient(formDataUpdate).then(res => {
      searchClients();
      setModal(false);
    });
  }

  function searchClients() {
    Api.listAllClientsToHireSearch("name", search)
      .then(clientList => {
        setClientList(clientList.map(client => ({...client})))
      });
  }

  useEffect(function loadAll() {
    const mounted = true;
    if (mounted)
      searchClients();
  }, [])

  return (
    <>
      {/*<CCol xs="12" lg="6">*/}
      <CCard>
        <CCardHeader style={{background:'#607d8b', color: 'white'}}>
          <h5>Clientes</h5>
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
                                searchClients()
                              }
                            }}
                            placeholder="Nome do cliente"/>
                  </CCol>
                  <CCol xl="2" lg="2" sm="2" md="2">
                    <CButton block
                             color="success"
                             className="mb-0"
                             style={{marginTop: '29px'}}
                             onClick={() => searchClients()}
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
                                 cpf: "",
                                 email: "",
                                 course: "",
                                 institution: "",
                                 period: ""
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

        <CCard>
          <CCardBody>
            <CDataTable
              items={clientList}
              fields={['nome', 'email', 'curso', 'instituição', 'periodo', 'status', 'ações']}
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
                                 setFormDataUpdate({
                                   id: item.id,
                                   name: item.nome,
                                   email: item.email,
                                   course: item.curso,
                                   institution: item.instituição,
                                   period: item.periodo,
                                   status: item.status
                                 })
                               }}><CIcon name="cil-pencil" title="Editar"/></CButton>
                      <CButton type="reset" color="danger" onClick={() => {
                        setDanger(!danger)
                        setFormData({
                          id: item.id,
                          name: item.nome,
                          cpf: item.cpf,
                          email: item.email,
                          course: item.curso,
                          institution: item.instituição,
                          period: item.periodo,
                          status: item.status
                        })
                      }}><CIcon name="cil-trash" title="Excluir"/></CButton>
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
          <CButton color="danger"
                   onClick={() => {
                     Api.deleteClient(formData).then(res => {
                       setClientList(clientList.filter(item => item.id !== formData.id))
                       setDanger(!danger)
                     })

                   }}>Sim</CButton>{' '}
          <CButton color="secondary" onClick={() => setDanger(!danger)}>Não</CButton>
        </CModalFooter>
      </CModal>

      {/*Modal de edição*/}

      <CModal
        show={modal}
        onClose={setModal}
      >
        <CModalHeader closeButton style={{background:'#607d8b', color: 'white'}}>
          <CModalTitle>Edição</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ModalUpdateCliente
            setFormDataUpdate={setFormDataUpdate}
            formDataUpdate={formDataUpdate}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="primary"
                   onClick={e => {
                     updateClient();
                   }}
          >Salvar</CButton>{' '}
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
          <CModalTitle>Cadastro de cliente</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <FormCliente 
          setFormData={setFormData}
          formData={formData}/>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary"
          onClick={() => {
            Api.insertClient(formData).then(_ => {
              searchClients()
              setModalInsert(!modalInsert)
            })
          }}
          >Salvar</CButton>{' '}
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
