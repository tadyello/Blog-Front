import Postagem from "./Postagem";

interface User{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto_url: string;
    postagem?:Postagem[];
}

export default User