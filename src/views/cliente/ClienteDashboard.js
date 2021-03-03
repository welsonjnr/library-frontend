import React, { lazy } from 'react'
import HireBooks from "../widgets/HireBooks";
import { CCard, CCardBody, CRow, CCol, CButton } from "@coreui/react";


const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const ClienteDashboard = () => {
  return (
    <>
      <CCard>
        <CRow>
          <CCol>
            <HireBooks/>
          </CCol>
        </CRow>
      </CCard>
      </>
  )
}

export default ClienteDashboard