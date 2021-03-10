import React from 'react'
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
  CCallout,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const FormLivro = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
              Livro
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="nomelivro">Livro</CLabel>
                <CInput id="nomeLivro" placeholder="Insira com o nome do livro" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="autor">Autor</CLabel>
                <CInput id="autorLivro" placeholder="Insira com o autor do livro" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="edicao">Edição</CLabel>
                <CInput id="edicaoLivro" placeholder="Insira a edição do livro" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="quantidadeLivro">Quantidade de Livros</CLabel>
                <CInput id="quantidadeLivro" placeholder="Insira a quantidade do livro" type="number"/>
              </CFormGroup>
              <CFormGroup>
                    <CLabel htmlFor="categorias">Categorias</CLabel>
                    <CSelect custom name="categoriasLivro" id="categoriasLivro">
                      <option value="1">Literatura</option>
                      <option value="2">Financias</option>
                      <option value="3">Ficção</option>
                      <option value="4">Autoajuda</option>
                      <option value="5">História</option>
                      <option value="6">Esporte</option>
                      <option value="7">Linguagens</option>
                      <option value="8">Outros</option>
                    </CSelect>
                  </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default FormLivro
