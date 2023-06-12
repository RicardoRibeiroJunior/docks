import { useContext } from "react";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { ContainerInput, FormContainer } from "./styles";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";



export function NewSupplierForm(){

    const FormSchema = z.object({
        name:z.string(),
        cnpj:z.string(),
        branch:z.string(),
        phone:z.string(),
        addressForm:z.object({
            street:z.string(),
            neighborhood:z.string(),
            cep:z.string(),
            uf:z.string(),
            city:z.string(),
            number:z.string(),
            complement:z.string(),
        }) 
    });

    
    type FormInputs = z.infer<typeof FormSchema>;

    
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    
    const {register, handleSubmit, reset} = useForm<FormInputs>({
        resolver: zodResolver(FormSchema)
    })
    
    async function handleCrateSupplier(data: FormInputs){
        
        try {
            await auth.createSupplier(data);
            navigate('/supplierList');
        } catch (error) {
            alert("Dados inválidos.");
        }

        reset()
    }

    return(
        <div>
            <FormContainer>

                <h3>Cadastro de Fornecedor</h3>

                <form onSubmit={handleSubmit(handleCrateSupplier)}>
                    <label htmlFor="name">Razão Social</label> 
                    <input {...register('name')} type='text' placeholder='Razão Social' required/>

                    <ContainerInput>
                        <div className="two">
                            <label htmlFor="cnpj">CNPJ</label> 
                            <input {...register('cnpj')} type='text' placeholder='CNPJ' required/>
                        </div>
                        <div className="one">
                            <label htmlFor="branch">Filial</label> 
                            <input {...register('branch')} type='text' placeholder='Filial' required/>
                        </div>
                    </ContainerInput>

                    <ContainerInput>
                        <div className="three">
                            <label htmlFor="street">Rua</label> 
                            <input {...register('addressForm.street')} type='text' placeholder='Rua' required/>
                        </div>
                        <div className="one">
                            <label htmlFor="number">Número</label> 
                            <input {...register('addressForm.number')} type='text' placeholder='Número' required/>
                        </div>
                    </ContainerInput>

                    <ContainerInput>
                        
                        <div className="two">
                            <label htmlFor="complement">Complemento</label> 
                            <input {...register('addressForm.complement')} type='text' placeholder='Complemento' required/>
                        </div>
                        <div className="two">
                            <label htmlFor="neighborhood">Bairro</label> 
                            <input {...register('addressForm.neighborhood')} type='text' placeholder='Bairro' required/>
                        </div>
                        <div className="one">
                            <label htmlFor="cep">CEP</label> 
                            <input {...register('addressForm.cep')} type='text' placeholder='CEP' required/>
                        </div>
                    </ContainerInput>

                    <ContainerInput>
                        <div className="two">
                            <label htmlFor="city">Cidade</label> 
                            <input {...register('addressForm.city')} type='text' placeholder='Cidade' required/>
                        </div>
                        <div>
                            <label htmlFor="uf">UF</label> 
                            <select {...register('addressForm.uf')} defaultValue="CE">
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>
                        </div>
                        <div className="two">
                            <label htmlFor="phone">Telefone</label> 
                            <input {...register('phone')} type='text' placeholder='Telefone' required/>
                        </div>
                    </ContainerInput>

                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </FormContainer>
        </div>
    )
}