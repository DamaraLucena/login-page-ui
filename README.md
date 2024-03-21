# Projeto de Autenticação com Angular

Este é um projeto de autenticação desenvolvido com Angular, seguindo uma videoaula do canal da Fernanda Kiper. Ele inclui páginas de login e cadastro, juntamente com serviços para autenticação de usuários.

O projeto é parte de um aplicativo full stack, onde esta é a parte do front end. A videoaula fornecida no link [aqui](https://www.youtube.com/watch?v=6qbuuPM_de4&t=3s) orientou o desenvolvimento desta parte do projeto.

## Configuração do Projeto

Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina. Você pode instalá-los seguindo as instruções na [documentação oficial do Node.js](https://nodejs.org/) e na [documentação oficial do Angular CLI](https://angular.io/guide/setup-local).

## Instalação

1. Clone o repositório para o seu ambiente local:

```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Navegue até o diretório do projeto:

```
cd nome-do-repositorio
```

3. Instale as dependências do projeto:

```
npm install
```

## Execução

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```
ng serve
```

Isso iniciará o servidor de desenvolvimento e você poderá visualizar o projeto em seu navegador acessando `http://localhost:4200`.

## Estrutura do Projeto

- `src/app/pages/login`: Contém o componente e o template da página de login.
- `src/app/pages/signup`: Contém o componente e o template da página de cadastro.
- `src/app/components`: Contém componentes reutilizáveis usados nas páginas de login e cadastro.
- `src/app/services`: Contém os serviços para autenticação de usuários.
- `src/app/routes.ts`: Arquivo de configuração das rotas do projeto.

## Recursos Utilizados

- Angular: Framework de desenvolvimento front-end.
- ngx-toastr: Biblioteca para exibir notificações.
- ...

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para enviar pull requests ou relatar problemas na seção de Issues.