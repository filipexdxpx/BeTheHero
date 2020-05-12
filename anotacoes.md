# Baixando os programas
1) Instalar o Node
	https://nodejs.org/en/
	Usar a versão LTS. Instalar via package manager. Utilizar o chocolatey. comando 'cisnt nodejs-lts'
	Executar o poweshell em modo adm
2) Instalar o visualcode
3) Configurar tema dracula official 
4) Instalar o material icon theme
5) Instalar o json viewer no chrome
6) Instalar o nodemon para não ficarmos reiniciando o tempo todo a aplicação. usar o comando "npm install nodemon -D"

# Começado o projeto
1) criar o backend da aplicação 
2) criar a pasta do projeto
3) Na pasta, executar o comando "npm init -y". Deve listar o comando e criar o arquivo package.json
O packag.json é um arquivo que armazena as dependencias do nosso projeto 
4) abrir o visualstudio para trabalhar na pasta
5) abrir o comand do visualcode e instalar o framework express. comando "npm install express"
O express serve para auxiliar a startar a aplicação
6) criar o arquivo index.js para ser o principal da aplicação
7) para facilitar, instalamos o nodemon, criamos um novo script no arquivo package.json, neste caso dei o nome de "start", e para rodar o projeto, utilizar o comando npm start

# Sobre o back-end
O backend é responsável por:
 Regras de negócio;
 Conexão com o banco de dados;
 Envio de e-mail;
 Comunicação com webservice;
 Autenticação do usuário;
 Criptografia e segurança;

# Métodos http
Os métodos http serão utilizados para fazer a manipulação das informações entre o back-end e o banco de dados. Os métodos são:
**GET** - Buscar informações do back-end;
**POST** - Criar uma informação no back-end; 
**PUT** - Alterar uma informação no back-end;
**DELETE** - Deletar uma informação no back-end;

# Rotas e recursos
...


# Tipos de parametros
**Query Params** - São parametros nomeados enviados na rota. Servem para filtros e paginação. Por exemplo
**Rout Params** - Parametros utilizados para identificar recursos. "buscar cliente com id um (/costumers/*1*)
**Request body** - corpo da requisição utilizado para criar/alterar recursos.

# Banco de dados
SQLite
Vamos utilizar um query builder para trabalhar. Poderia ser utilizado um drive	
**query builder** knex (http://knexjs.org/)
**Comandos** - 	npm install knex para instalar o knex
				npm install sqlite3 para instalar o sqlite
**criar tabelas** iremos utilizar o migrations.
	comandos: npx knex migrate:make create_ongs
			  npx knex migrate:latest
			  npx knex migrate:status - lista o status das migrates criadas


**Passos** 
	adicionar o migration e seu diretório onde ficarão os arquivos no knexfile.js
	rodar o comando "npx knex migrate:make create_ongs" para criar o "Local da tabela"
	Inserir os campos das colinas no migration cridado para essa tabela
	rodar o comando npx knex migrate:latest 

isntalar o cors
determinar quem pode acessar a aplicação
npm install cors