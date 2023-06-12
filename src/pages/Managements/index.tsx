import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ManagementContainer, ManagementTable, Td} from "./styles";
import { format } from "date-fns";
import { Pencil, Trash } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';
import { NewStatusModal } from "../../components/StatusModal";
import { EmptyPage } from "../EmptyPage";


export function Managements(){  

    const { managements, deleteManagement } = useContext(AuthContext);

    function handleDeleteManagement(id: number){
        deleteManagement(id);
    }

    return(
        <div>
            <ManagementContainer>

                {managements == null || managements.length == 0? <EmptyPage/> :
            
                    <ManagementTable>
                        <thead>
                            <tr>
                                <th>FORNECEDOR</th>
                                <th>FILIAL</th>
                                <th>DT_CHEGADA</th>
                                <th>STATUS</th>
                                <th>OBSERVAÇÃO</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>                  
                            {managements.map(management => {
                                return(
                                    <tr key={management.id}> 
                                        <Td variant={management.status == "ERRO" ? "red" : "blue"} width="25%">{management.supplierDto.name}</Td>
                                        <Td variant={management.status == "ERRO" ? "red" : "blue"}>{management.supplierDto.branch}</Td>
                                        <Td variant={management.status == "ERRO" ? "red" : "blue"}>{format(new Date(management.arrivalTime), 'dd-MM-yyyy | HH:mm')}</Td>
                                        <Td variant={management.status == "ERRO" ? "red" : "blue"}>{management.status}</Td>
                                        <Td variant={management.status == "ERRO" ? "red" : "blue"}>{management.error}</Td>
                                        <Td variant={management.status == "ERRO" ? "red" : "blue"} width="0.5%">
                                            <a href="#" >
                                                <Dialog.Root>
                                                    <Dialog.Trigger asChild>
                                                        <Pencil weight="light" size={24}/>
                                                    </Dialog.Trigger>

                                                    <NewStatusModal id = {management.id}/>
                                                </Dialog.Root>
                                            </a>
                                        </Td>
                                        <Td variant={management.status == "ERRO" ? "red" : "blue"} width="0.5%">
                                            <a href="#" onClick={() => {handleDeleteManagement(management.id)}}>
                                                <Trash weight="light" size={24}/>
                                            </a>
                                        </Td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </ManagementTable>
                }

            </ManagementContainer>


        </div>
    )
}