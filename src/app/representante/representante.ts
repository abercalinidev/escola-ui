export class Representante {
    id? : any;
    nome : string = '';
    sobrenome : string = '';
    celular : string = '';
    email : string = '';
    cpf : string = '';
    dataCadastro? : any;
    situacao? : any;
    endereco = new Endereco();
}

export class Endereco {
    cep         : string = '';
    rua         : string = '';
    numero      : string = '';
    complemento : string = '';
    cidade      : string = '';
    bairro      : string = '';
    estado      : string = '';
}