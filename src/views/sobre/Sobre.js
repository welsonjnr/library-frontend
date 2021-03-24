import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
    CCollapse,
    CFade,
    CSwitch,
    CLink,
    CFooter,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


const Sobre = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showCard, setShowCard] = React.useState(true)

    return (
        <>
            <CRow>
                <CCol xs="12" sm="6" md="12">
                    <CCard>
                        <CCardHeader style={{ background: '#607d8b', color: 'white', fontSize: '25px' }}>
                            Sobre
              <DocsLink name="CCard" />
                        </CCardHeader>
                        <CCardBody>
                            Este é um projeto desenvolvido como trabalho de conclusão de curso do acadêmico Welson Júnior no curso de análise e desenvolvimento de sistemas da Universidade Estadual de Goiás.
              <br />
              <br />
              O layout usado é a versão gratuita do CoreUI.
                                <div>
                                    <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a>
                                    <span className="ml-1">&copy; 2020 creativeLabs.</span>
                                </div>
                                <div className="mfs-auto">
                                    <span className="mr-1">Powered by</span>
                                    <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
                                </div>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}
export default Sobre;