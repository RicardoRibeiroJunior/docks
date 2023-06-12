import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IStatus, ISupplierDto, ISupplierForm, IUser, IUserDto, IUserForm, Managenent } from "./types";
import { Api } from "../../service/api";



export const AuthContext = createContext<IContext>({} as IContext)



export const AuthProvider = ({ children } : IAuthProvider) => {

        const[managements, setManagements] = useState<Managenent[]>([]);
        const[suppliers, setSuppliers] = useState<ISupplierDto[]>([]);
        const[users, setUsers] = useState<IUserDto[]>([]);
        const[user, setUser] = useState<IUser | null>();
        

        async function fetchManagements(){
            try {
                const token = getUserLocalStorage();
                const response  = await Api.get('/management?pageNumber=0&pageQuantity=10', {headers: {'Authorization':`Bearer ${token.token}`}});
                setManagements(response.data.content);
            } catch (error) {
                return null;
            }  
        }

        async function fetchSuppliers(){
            try {
                const token = getUserLocalStorage();
                const response = await Api.get('/supplier?pageNumber=0&pageQuantity=10', {headers: {'Authorization':`Bearer ${token.token}`}});
                setSuppliers(response.data.content);
            } catch (error) {
                return null;
            }
        }

        async function fetchUsers(){
            try {
                const token = getUserLocalStorage();
                const response = await Api.get('/user?pageNumber=0&pageQuantity=10', {headers: {'Authorization':`Bearer ${token.token}`}});
                setUsers(response.data.content);
            } catch (error) {
                return null;
            }
        }

        async function createManagements(chaveDeAcesso: string){
            try {
                const token = getUserLocalStorage();
                await Api.post('/management', {"chaveDeAcessoDaNotaFiscal":`${chaveDeAcesso}`}, {headers: {'Authorization':`Bearer ${token.token}`}});
            } catch (error) {
                return null;
            }
        }

        async function createSupplier(data: ISupplierForm){
            try {
                const token = getUserLocalStorage();
                await Api.post('/supplier', data, {headers: {'Authorization':`Bearer ${token.token}`}});
            } catch (error) {
                return null
            }
        }

        async function createUser(data: IUserForm){
            try {
                const token = getUserLocalStorage();
                await Api.post('/user', data, {headers: {'Authorization':`Bearer ${token.token}`}});
            } catch (error) {
                return null
            }
        }

        async function createStatus(data: IStatus){
            try {
                const token = getUserLocalStorage();
                await Api.put(`/management/setStatusAndError/${data.id}`, {"status":`${data.status}`, "error":`${data.error}`}, {headers: {'Authorization':`Bearer ${token.token}`}});
            } catch (error) {
                return null
            }
        }

        async function deleteUser(id: number){
            try {
                const token = getUserLocalStorage();
                await Api.delete(`/user/${id}`, {headers: {'Authorization':`Bearer ${token.token}`}});
                fetchUsers();
            } catch (error) {
                return null
            }
        }

        async function deleteSupplier(id: number){
            try {
                const token = getUserLocalStorage();
                await Api.delete(`/supplier/${id}`, {headers: {'Authorization':`Bearer ${token.token}`}});
                fetchSuppliers();
            } catch (error) {
                return null
            }
        }

        async function deleteManagement(id: number){
            try {
                const token = getUserLocalStorage();
                await Api.delete(`/management/${id}`, {headers: {'Authorization':`Bearer ${token.token}`}});
                fetchManagements();
            } catch (error) {
                return null
            }
        }

        function setUserLocalStorage(user: IUser | null){
            localStorage.setItem('u', JSON.stringify(user));
        }
        
        function getUserLocalStorage(){
            const json = localStorage.getItem('u');
        
            if(!json){
                return null;
            }
        
            const user = JSON.parse(json);
            return user ?? null;
        }

        async function authenticate(email: string, password: string){
            try {
                const response = await Api.post('login', {email, password});
                const payload = {token: response.data.token, email, name: response.data.userName};
                setUser(payload);
                setUserLocalStorage(payload);
            } catch (error) {
                return null;
            }
        }

        function logout(){
            setUser(null);
            localStorage.removeItem('u');
        }

        
        useEffect(() => {
            fetchManagements();
            fetchSuppliers();
            const user = getUserLocalStorage();
            if(user){
                setUser(user);
            }
        }, []);
    
    return(
        <AuthContext.Provider value={{...user,
                                     managements,
                                     suppliers,
                                     users, 
                                     fetchUsers,
                                     deleteUser,
                                     createUser,
                                     setUserLocalStorage, 
                                     getUserLocalStorage, 
                                     authenticate, 
                                     logout, 
                                     fetchManagements,
                                     createManagements,
                                     createSupplier,
                                     deleteSupplier,
                                     deleteManagement,
                                     fetchSuppliers,
                                     createStatus}}>
            {children}
        </AuthContext.Provider>
    )

}
