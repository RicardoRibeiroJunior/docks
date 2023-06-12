export interface IUser{
    email?: string;
    token?: string;
    name?: string;
}

export interface IContext extends IUser{
    setUserLocalStorage: (user: IUser | null) => void;
    getUserLocalStorage: () => void;
    authenticate: (email: string, password: string) => Promise<null | undefined>;
    logout: () => void;
    fetchManagements: () => Promise<null | undefined>;
    fetchSuppliers: () => Promise<null | undefined>;
    fetchUsers: () => Promise<null | undefined>;
    managements: Managenent[];
    suppliers: ISupplierDto[];
    users: IUserDto[];
    createManagements: (chaveDeAcesso: string) => void;
    createSupplier:(data: ISupplierForm) => void;
    createUser:(data: IUserForm) => void;
    deleteSupplier:(id: number) => void;
    deleteManagement:(id: number) => void;
    deleteUser:(id: number) => void;
    createStatus:(data: IStatus) => void;
}

export interface IAuthProvider{
    children: JSX.Element;
}

export interface Managenent{
    id: number,
        supplierDto: {
             id: number,
             name: string,
             cnpj: string,
             branch: string,
             phone: string,
                addressDto: {
                    street: string,
                    neighborhood: string,
                    cep: string,
                    uf: string,
                    city: string,
                    number: number,
                    complement: string,
                }
    },
    status: string,
    arrivalTime: Date,
    exitTime: Date,
    error: null,
}

export interface ISupplierDto{
    id: number
    name:string,
    cnpj:string,
    branch:string,
    phone:string,
    addressDto:{
        street:string,
        neighborhood:string,
        cep:string,
        uf:string,
        city:string,
        number:string,
        complement:string,
    } 
}

export interface ISupplierForm{
    name:string,
    cnpj:string,
    branch:string,
    phone:string,
    addressForm:{
        street:string,
        neighborhood:string,
        cep:string,
        uf:string,
        city:string,
        number:string,
        complement:string,
    } 
}

export interface IUserDto{
    id: number;
    name: string;
    email: string;
}

export interface IUserForm{
    name: string;
    email: string;
    password: string;
}

export interface IStatus{
    status: string,
    error: string,
    id: number,
}


