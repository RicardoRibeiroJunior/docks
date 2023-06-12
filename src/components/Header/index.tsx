import { HeaderContainer, HeaderContent, ImagePerfil, UserData } from "./styles";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

import { Sidebar } from "../Siderbar";

export function Header(){

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout(){
        navigate('/')
        auth.logout();       
    }

    return(
        <div>
        <Sidebar/>     
        <HeaderContainer>   
            <HeaderContent>

                <img src={logo} alt=""/>

                <UserData>
                    <ImagePerfil>
                        <span>{auth.name?.charAt(0)}</span>
                    </ImagePerfil>
                    <div>
                        <span>Olá, {auth.name}</span>
                        {auth.email && <a href="#" onClick={handleLogout}>Sair</a>}
                    </div>
                   
                </UserData> 
            </HeaderContent>
        </HeaderContainer>
        </div>
    )
}