import React, { useState, useEffect, useContext } from 'react'
import axios from '../../../common/axios'
import { AuthorizationContext } from '../../../context/AuthorizationContext'
import img from '../../../imgs/imagem.png'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Login = () => {

  const { authorization, setAuthorization } = useContext( AuthorizationContext )

  const [ credentials, setCredentials ] = useState({
    username: "",
    password: ""
  })

  useEffect(() => {
    console.log(`Alteração no Context ${authorization}`)
  }, [authorization])

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <div style={{marginLeft: '30%'}}><img src={img}/></div>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Faça login em sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username" onChange={e => {
                        setCredentials( { ...credentials, username: e.target.value } )
                      }} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={e => {
                        setCredentials({ ...credentials, password: e.target.value })
                      }} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={e => {
                          axios.post('/library/user/auth', {
                            email: credentials.username,
                            senha: credentials.password
                          }).then(response => {
                            setAuthorization(true)
                          })
                        }}>Login</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
