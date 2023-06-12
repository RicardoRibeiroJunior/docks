import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { LoginPage } from "./pages/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Managements } from "./pages/Managements";
import { AuthProvider } from "./context/AuthProvider"
import { ProtectedLayout } from "./components/ProtectedLayout"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { NewManagementsForm } from "./pages/NewManagementsForm"
import { NewSupplierForm } from "./pages/NewSupplierForm"
import { SupplierList } from "./pages/SupplierList"
import { UserList } from "./pages/UserList"
import { NewUserForm } from "./pages/NewUserForm"


export function App() {

  return (
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<LoginPage/>}/>
              <Route path='/' element={<DefaultLayout/>}>
                <Route path="/managements" element={<ProtectedLayout><Managements/></ProtectedLayout>}/>
                <Route path="/newManagementsForm" element={<ProtectedLayout><NewManagementsForm/></ProtectedLayout>}/>
                <Route path="/newSupplierForm" element={<ProtectedLayout><NewSupplierForm/></ProtectedLayout>}/>
                <Route path="/supplierList" element={<ProtectedLayout><SupplierList/></ProtectedLayout>}/>
                <Route path="/userList" element={<ProtectedLayout><UserList/></ProtectedLayout>}/>
                <Route path="/newUserForm" element={<ProtectedLayout><NewUserForm/></ProtectedLayout>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider> 
      </AuthProvider>   
  )
}
