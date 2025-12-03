export class InformacaoGeral {
    id?: number;
    situacaoCafeManha: string = '';
    situacaoAlmoco: string = '';
    situacaoCafeTarde: string = '';
    dataCadastro?: any;
    observacao: string = '';
    aluno: Aluno = new Aluno(); // CORRETO
}

export class Aluno {
    id?: number;
}
