export class Aluno{
    id? : number;
    nome : string = '';
    sobrenome : string = '';
    idade : any;
    dataNascimento : any;
    serieAluno : string = '';
    situacao? : string = '';
    dataCadastro? : '';
    endereco = new Endereco();
    representantes: Representante[] = [];
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

export class Representante {
    id? : any;
}