import React, { useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'

const ModalFormLivro = (props) => {

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
                <CInput
                  id="nomeLivro"
                  placeholder="Insira com o nome do livro"
                  value={props.formData.name}
                  onChange={e => props.setFormData({ ...props.formData, name: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="autor">Autor</CLabel>
                <CInput id="autorLivro"
                        placeholder="Insira com o autor do livro"
                        value={props.formData.author}
                        onChange={e => props.setFormData({ ...props.formData, author: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="edicao">Edição</CLabel>
                <CInput id="edicaoLivro"
                        placeholder="Insira a edição do livro"
                        value={props.formData.edition}
                        onChange={e => props.setFormData({ ...props.formData, edition: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="quantidadeLivro">Quantidade de Livros</CLabel>
                <CInput id="quantidadeLivro"
                        placeholder="Insira a quantidade do livro"
                        value={props.formData.amount}
                        onChange={e => props.setFormData({ ...props.formData, amount: e.target.value })}
                />
              </CFormGroup>
              <CFormGroup>
                    <CLabel htmlFor="categorias">Categorias</CLabel>
                    <CSelect
                      custom
                      name="categoriasLivro"
                      id="categoriasLivro"
                      onChange={e => {
                        console.log(e.target.value)
                      }}
                    >
                      <option value="Literatura">Literatura</option>
                      <option value="Financias">Financias</option>
                      <option value="Ficção">Ficção</option>
                      <option value="Autoajuda">Autoajuda</option>
                      <option value="História">História</option>
                      <option value="Esporte">Esporte</option>
                      <option value="Linguagens">Linguagens</option>
                      <option value="Outros">Outros</option>
                    </CSelect>
                  </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ModalFormLivro
