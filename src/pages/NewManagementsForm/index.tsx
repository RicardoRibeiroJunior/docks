import { useContext } from "react";
import { FormContainer } from "./styles";
import * as z from 'zod';
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function NewManagementsForm(){

    
    const FormSchema = z.object({
        chaveDeAcesso:z.string(),
    })

    
    type FormInputs = z.infer<typeof FormSchema>;

    
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    
    const {register, handleSubmit, reset} = useForm<FormInputs>({
        resolver: zodResolver(FormSchema)
    })
    
    async function handleCrateManagements(data: FormInputs){
        
        try {
            await auth.createManagements(data.chaveDeAcesso);
            await auth.fetchManagements();
            navigate('/managements');
        } catch (error) {
            alert("Dados inválidos.");
        }

        reset()
    }


    return(
        <FormContainer>
            
            <h3>Recepcionar Carga</h3>

            <form onSubmit={handleSubmit(handleCrateManagements)}>
                <label htmlFor="chaveDeAcesso">Chave de Acesso</label>    
                <input {...register('chaveDeAcesso')} type='text' placeholder='Digite a chave de acesso da nota fiscal.' required/>

                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </FormContainer>
    )
}