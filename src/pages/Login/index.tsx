import { FormContainer, HeaderContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const loginFormSchema = z.object({
    email:z.string(),
    password:z.string()
})

type LoginFormInputs = z.infer<typeof loginFormSchema>;

export function LoginPage(){

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const {register, handleSubmit, reset} = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema)
    })

    async function handleLogin(data: LoginFormInputs){
        
        try {
            await auth.authenticate(data.email, data.password);
            await auth.fetchManagements();
            navigate('/managements');
        }catch (error) {
            return null;
        }

        reset()
    }
    
    return(
        <div>
            <HeaderContainer>
                <img src={logo} alt=""/>
            </HeaderContainer>
            
            <FormContainer>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <input {...register('email')} type='text' placeholder='E-mail' required/>
                    <input {...register('password')} type='password' placeholder='Senha' required/>

                    <button type="submit">
                        Entrar
                    </button>
                </form>
            </FormContainer>
        </div>
    )
}