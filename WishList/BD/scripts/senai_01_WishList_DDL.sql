CREATE DATABASE WishList
GO

USE WishList
GO

-- Tabela de Usuario
CREATE TABLE Usuario(
IdUsuario INT PRIMARY KEY IDENTITY (1,1),
nomeUsuario VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(20) NOT NULL
);
GO



-- Tabela de Desejo
CREATE TABLE Desejo(
IdDesejo INT PRIMARY KEY IDENTITY (1,1),
IdUsuario INT FOREIGN KEY REFERENCES Usuario(IdUsuario),
descricao VARCHAR (100) NOT NULL
);
GO
