import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";



export const ProtectedLayout = ({children} : {children: JSX.Element}) => {

    const auth = useContext(AuthContext);    
    const navigate = useNavigate();  
 
        if(auth.token == null || auth.token == ""){
            return (
                <>
                    <h3>Acesso não autorizado.</h3>
                    <button type="button" onClick={() => {navigate("/")}}>Autentique-se</button>
                </>
            )
        }else{
            return children;
        }

    

}