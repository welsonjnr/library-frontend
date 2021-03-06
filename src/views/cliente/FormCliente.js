import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
} from '@coreui/react'

const FormCliente = (props) => {

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="nome">Nome</CLabel>
                <CInput id="nomeCliente"
                        placeholder="Insira o nome do cliente"
                        value={props.formData.name}
                        onChange={e => props.setFormData({ ...props.formData, name: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="cpf">CPF</CLabel>
                <CInput
                  id="cpfCliente"
                  placeholder="Insira o cpf do cliente"
                  maxlength="11"
                  value={props.formData.cpf}
                  onChange={e => props.setFormData({ ...props.formData, cpf: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="email">Email</CLabel>
                <CInput id="emailCliente"
                        placeholder="Insira o email do cliente"
                        value={props.formData.email}
                  onChange={e => props.setFormData({ ...props.formData, email: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="curso">Curso</CLabel>
                <CInput id="cursoCliente"
                        placeholder="Insira o curso do cliente"
                        value={props.formData.course}
                  onChange={e => props.setFormData({ ...props.formData, course: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="institution">Instituição</CLabel>
                <CInput id="institutionCliente"
                        placeholder="Insira a instituição do cliente"
                        value={props.formData.institution}
                  onChange={e => props.setFormData({ ...props.formData, institution: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="periodo">Período</CLabel>
                <CInput id="periodoCliente"
                        placeholder="Insira o período do cliente"
                        value={props.formData.period}
                        onChange={e => props.setFormData({ ...props.formData, period: e.target.value })}
                />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default FormCliente
