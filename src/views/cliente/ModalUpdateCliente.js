import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow
} from '@coreui/react'

const ModalFormCliente = (props) => {

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
              Cliente
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="nome">Nome</CLabel>
                <CInput id="nomeCliente" 
                placeholder="Insira o nome do cliente" 
                value={props.formDataUpdate.name}
                onChange={e => props.setFormDataUpdate({ ...props.formDataUpdate, name: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="email">Email</CLabel>
                <CInput id="emailCliente" 
                placeholder="Insira o email do cliente" 
                value={props.formDataUpdate.email}
                onChange={e => props.setFormDataUpdate({ ...props.formDataUpdate, email: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="curso">Curso</CLabel>
                <CInput id="cursoCliente" 
                placeholder="Insira o curso do cliente" 
                value={props.formDataUpdate.course}
                onChange={e => props.setFormDataUpdate({ ...props.formDataUpdate, course: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="institution">Instituição</CLabel>
                <CInput id="institutionCliente" 
                placeholder="Insira a instituição do cliente" 
                value={props.formDataUpdate.institution}
                onChange={e => props.setFormDataUpdate({ ...props.formDataUpdate, institution: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="periodo">Período</CLabel>
                <CInput id="periodoCliente" 
                type="number" min="0" max="16" 
                placeholder="Insira o período do cliente" 
                value={props.formDataUpdate.period}
                onChange={e => props.setFormDataUpdate({ ...props.formDataUpdate, period: e.target.value })}
                />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ModalFormCliente
