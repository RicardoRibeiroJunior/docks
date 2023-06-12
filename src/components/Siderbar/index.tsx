import { slide as Menu } from 'react-burger-menu';
import logo from '../../assets/logo.jpg';
import './siderbar.css';
import { useNavigate } from "react-router-dom";

export function Sidebar(){

    const navigate = useNavigate();

    return(
        <Menu>

            <img src={logo} alt=''/>

            <a className="menu-item" href="#" onClick={() => {navigate("/newManagementsForm")}}>
                Recepcionar Carga
            </a>
            <a className="menu-item" href="#" onClick={() => {navigate("/managements")}}>
                Carregamentos
            </a>
            <a className="menu-item" href="#" onClick={() => {navigate("/supplierList")}}>
                Fornecedores
            </a>
            <a className="menu-item" href="#" onClick={() => {navigate("/userList")}}>
                Usuários
            </a>
        </Menu>
    )
}