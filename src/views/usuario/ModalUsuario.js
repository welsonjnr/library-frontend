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

const ModalUsuario = (props) => {
    
  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
              Usuário
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="nomeUsuario">Nome</CLabel>
                <CInput id="nomeUsuario" placeholder="Insira com o nome do usuário" 
                value={props.formData.nome}
                onChange={e => props.setFormData({ ...props.formData, nome: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="emailUsuario">Email</CLabel>
                <CInput id="emailUsuario" placeholder="Insira o email" type="email"
                value={props.formData.email}
                onChange={e => props.setFormData({ ...props.formData, email: e.target.value })}/>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="senhaUsuario">Senha</CLabel>
                <CInput id="senhaUsuario" placeholder="Insira a senha" type="password"
                value={props.formData.senha}
                onChange={e => props.setFormData({ ...props.formData, senha: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="senhaUsuario2">Digite novamente a senha</CLabel>
                <CInput id="senhaUsuario2" 
                placeholder="Insira a senha novamente" 
                value={props.formData.senha}
                type="password"/>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ModalUsuario
