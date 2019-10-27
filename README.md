<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src=".github/logo.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 2: Gympoint, o início
</h3>

<blockquote align="center">“Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu. (Eclesiastes 3:1)”!</blockquote>

## Sobre o desafio

App gerenciador de academia, o **Gympoint**.
Esse projeto será desenvolvido aos poucos até o fim do treinamento, onde será desenvolvida uma aplicação completa envolvendo back-end, front-end e mobile, e que será utilizada para a certificação do bootcamp.

### Um pouco sobre as ferramentas

- Express
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize, Migrations e Seeds
- PostgreSQL
- Bcrypt
- JWT (JSON Web Token)

### Funcionalidades

#### 1. Autenticação

- O usuário pode se autenticar utilizando e-mail e uma senha;
- A autenticação está sendo feita utilizando JWT;
- Está sendo feita a validação dos dados de entrada, para criar ou editar um usuário;

#### 2. Cadastro de alunos

- Foi criada uma nova tabela no banco de dados chamada `students`;
- Os alunos são mantidos (cadastrados/atualizados) na aplicação utilizando `nome, email, idade, peso e altura`;
- É feita uma verificação se o usuário autenticado para inserir um aluno é administrador
- O aluno não se autentica no sistema, ou seja, não possui senha.


## Licença

Esse projeto está sob a licença MIT. 

---
Código Desenvolvido por Sandro Santos - Referente ao desáfio 02 do treinamento GoStack
