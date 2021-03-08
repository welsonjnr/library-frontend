import React, { useState } from 'react'
import InputMask from "react-input-mask";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const ModalFormLivro = (props) => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

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
                <CInput id="nomeCliente" placeholder="Insira o nome do cliente" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="cpf">CPF</CLabel>
                <CInput id="cpfCliente" placeholder="Insira o cpf do cliente" maxlength="11"/>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="email">Email</CLabel>
                <CInput id="emailCliente" placeholder="Insira o email do cliente" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="curso">Curso</CLabel>
                <CInput id="cursoCliente" placeholder="Insira o curso do cliente" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="institution">Instituição</CLabel>
                <CInput id="institutionCliente" placeholder="Insira a instituição do cliente" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="periodo">Período</CLabel>
                <CInput id="periodoCliente" type="number" min="0" max="16" placeholder="Insira o período do cliente" />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ModalFormLivro
