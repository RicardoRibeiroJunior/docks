import { useContext } from "react";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "./styles";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";



export function NewUserForm(){

    const FormSchema = z.object({
        name:z.string(),
        email:z.string(),
        password:z.string(),
    });

    
    type FormInputs = z.infer<typeof FormSchema>;

    
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    
    const {register, handleSubmit, reset} = useForm<FormInputs>({
        resolver: zodResolver(FormSchema)
    })
    
    async function handleCrateUser(data: FormInputs){
        
        try {
            await auth.createUser(data);
            navigate('/userList');
        } catch (error) {
            alert("Dados inválidos.");
        }

        reset()
    }

    return(
        <div>
            <FormContainer>

                <h3>Cadastro de Usuário</h3>

                <form onSubmit={handleSubmit(handleCrateUser)}>
                    <label htmlFor="name">Nome</label> 
                    <input {...register('name')} type='text' placeholder='Nome' required/>

                    <label htmlFor="email">E-mail</label> 
                    <input {...register('email')} type='text' placeholder='E-mail' required/>

                    <label htmlFor="password">Senha</label> 
                    <input {...register('password')} type='text' placeholder='Senha' required/>

                
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </FormContainer>
        </div>
    )
}