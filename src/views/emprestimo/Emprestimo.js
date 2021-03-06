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
    CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
const Emprestimo = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)

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
                                            <CInput id="nomeLivroEmprestimo" placeholder="Insira o título do livro" />
                                        </CCol>
                                        <CCol xs="1">
                                            <CButton type="reset" color="success" style={{marginTop: '27px'}}><CIcon name="cil-search" /></CButton>
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
                                            <CInput id="cpfClienteEmprestimo" placeholder="Insira o nome do cliente" />
                                        </CCol>
                                        <CCol xs="1">
                                            <CButton type="reset" color="success" style={{marginTop: '27px'}}><CIcon name="cil-search" /></CButton>
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
                        <CCardFooter>
                            <CButton type="submit" color="primary"><CIcon name="cil-scrubber" /> Salvar</CButton>
                            <CButton type="reset" color="danger" className="ml-2"><CIcon name="cil-ban" /> Cancelar</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Emprestimo