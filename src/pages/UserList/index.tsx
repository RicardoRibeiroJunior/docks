import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Button, UserContainer, UserTable } from "./styles";
import { Pencil, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { EmptyPage } from "../EmptyPage";

export function UserList(){  

    const { users, deleteUser, fetchUsers } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() =>{
        fetchUsers();
    },[]);

    function handleDeleteUser(id: number){
        deleteUser(id);
    }

    return(
        <div>
            <UserContainer>

                    <Button onClick={() => {navigate('/newUserForm');}}>
                        Novo
                    </Button>

                {users == null || users.length == 0? <EmptyPage/> :
            
                    <UserTable>
                        <thead>
                            <tr>
                                <th>USUÁRIO</th>
                                <th>E-MAIL</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>                  
                            {users.map(user => {
                                return(
                                    <tr key={user.id}> 
                                        <td width="25%">{user.name}</td>
                                        <td>{user.email}</td>
                                        <td width="1%">
                                            <a href="#" >
                                                <Pencil weight="light" size={24}/>
                                            </a>
                                        </td>
                                        <td width="1%">
                                            <a href="#" onClick={() => {handleDeleteUser(user.id)}}>
                                                <Trash weight="light" size={24}/>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </UserTable>
                }

            </UserContainer>


        </div>
    )
}