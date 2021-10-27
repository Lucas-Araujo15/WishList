<img src="https://github.com/Lucas-Araujo15/WishList/blob/main/banner-wishlist.png">

# Your WishList
Projeto para cadastro e listagem de desejos envolvendo todas as etapas de desenvolvimento (desde prototipação até o desenvolvimento das áreas – bd/backend/design/frontend).

## Tecnologias utilizadas
* SQL Server (Banco de dados)
* C# (Criação da webAPI)
* HTML (Estruturação da página)
* CSS (Estilização da página)
* ReactJs (Interface do usuário)
* Figma (Layouts e prototipação)

## Utilizando o sistema
### 1º Etapa: Clonar repositório do GIT
Primeiramente, clone o repositório disponível no link https://github.com/Lucas-Araujo15/WishList através do comando `git clone https://github.com/Lucas-Araujo15/WishList`, executado pelo software de versionamento Git.

### 2º Etapa: Construção do banco de dados
Antes de executar o sistema, é necessário criar o banco de dados em seu computador. Para isso, no repositório clonado, acesse a pasta **WishList**, depois a pasta **BD** e em seguida a pasta **scripts** e abra em seu SGBD o arquivo **senai_01_WishList_DDL.sql**. Feito isso, clique no botão Executar. Faça o mesmo para o arquivo **senai_02_WishList_DML.sql**.

### 3º Etapa: Instalação do Runtime do .NET 5.0
Com isso, é necessário também instalar o runtime do .NET 5.0 para rodar a aplicação. O link para a instalação está disponível em https://dotnet.microsoft.com/download 

### 4º Etapa: Instalação da node_modules
Para executar o front-end da aplicação, primeiramente precisa-se instalar a pasta node_modules. Para isso, já na pasta **WishList**, navegue até a pasta **Front-end** e abra a pasta **wishlist-ui**. Para realizar a instalação, digite no diretório **cmd** e aperte enter. Com o cmd aberto, execute o comando `npm install`, ou se preferir, digite o comando `code .`para abrir a pasta no Microsoft Visual Studio Code. Dentro do editor, com o atalho **Ctrl + '** será aberto um terminal e você poderá também executar o mesmo comando de instalação.

### 5º Etapa: Adequando o sistema a máquina local 
Instalado o runtime, agora é necessário realizar algumas alterações na aplicação para adequá-la a máquina local. Para isso, abra a pasta Back-end, em seguida abra a pasta **wishlist.webAPI" e abra a solução **wishlist.webAPI.sln** no **Microsoft Visual Studio**. Dentro da IDE, vá até a pasta Contexts e abra o arquivo WishListContext.cs. Na linha 36 do código, estará estabelecido uma string para conexão com o banco de dados. Diante disto, é necessário substituí-la e colocar o nome do seu **servidor (Data Source)**, seu **login (user Id)** e sua **senha (pwd)**. Para descobrir o nome de seu servidor, abra o seu SGBD e logo no início aparecerá uma janela para se conectar com seu servidor, demonstrando o seu nome. Para as demais informações, é só usar as credenciais que você utiliza para acessá-lo.

### 6º Etapa: Executando a API
Substituída a string de conexão, retorne à solução aberta no Visual Studio e clique no botão de executar, em destaque na parte superior da tela ao lado de uma seta verde. Caso prefira uma maneira mais prática, navegue até o local do repositório clonado onde há a pasta **Program** e no caminho do arquivo digite no diretório **cmd** e aperte enter. No cmd, digite o comando `dotnet run` para executar a API.

### 7° Etapa: Executando a interface do usuário
Com o cmd aberto no diretório da pasta **wishlist-ui** ou no terminal do Visual Studio Code, digite o comando `npm start` para executar a interface do usuário, que será aberta no link http://localhost:3000/





