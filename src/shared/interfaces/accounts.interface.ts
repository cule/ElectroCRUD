export interface IAccount {
    id?: number;
    name: string;
    creation_date: string;
    modify_date: string;
    ssh: IAccountSSH;
    server?: IAccountServer;
    file?: IAccountFile;
}

export interface IAccountSSH {
    enabled: boolean;
    hostname?: string;
    port?: number;
    username?: string;
    password?: string;
    use_key?: boolean;
    key?: string;
}

export interface IAccountServer {
    server_type: number;
    hostname?: string;
    port?: number;
    username?: string;
    password?: string;
    database?: string;
}

export interface IAccountFile{
    server_type: number;
    filename?: string;
}