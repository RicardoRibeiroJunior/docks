import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { CloseButton, Content, Overlay } from './styles';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const newStatusFormSchema = z.object({
    status: z.string(),
    error: z.string(),
})

type NewStatusFormInputs = z.infer<typeof newStatusFormSchema>;



export function NewStatusModal(props: any){

    const navigate = useNavigate();

    const { createStatus, fetchManagements } = useContext(AuthContext);

    const { register, handleSubmit, reset } = useForm<NewStatusFormInputs>({
        resolver: zodResolver(newStatusFormSchema)
    })

    async function handleCreateNewStatus(data: NewStatusFormInputs){
        
        await createStatus({
            status: data.status,
            error: data.error,
            id: props.id,
        })

        reset();

        await fetchManagements();
        navigate('/managements');
    }

    return(
        <Dialog.Portal>
            <Overlay/>

            <Content>
                <Dialog.Title>Alteração de Status</Dialog.Title>

                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewStatus)}>
                    <select {...register('status')}>
                                <option value="RECEPCIONADO">RECEPCIONADO</option>
                                <option value="AGUARD_RECEBIMENTO" selected>AGUARD_RECEBIMENTO</option>
                                <option value="ERRO">ERRO</option>
                                <option value="FINALIZADO">FINALIZADO</option>
                            </select>
                    <input {...register('error')} type="text" placeholder="Observação"/>

                    <button type="submit">
                        Alterar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}