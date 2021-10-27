USE WishList
GO

INSERT INTO Usuario(nomeUsuario,email,senha)
VALUES ('Matheus Araujo','matheus@email.com','12345678'),
       ('Andre Augusto','nany@email.com','12345678'),
	   ('Lucas Araujo','lucas@email.com','12345678'),
	   ('Vitor Marchitiello','marchitiello@email.com','12345678');
GO

INSERT INTO Desejo(IdUsuario, produto, descricao)
VALUES (1 ,'Iphone 13', 'Apple iPhone 13 512GBSistema de câmera dupla mais avançado até hoje.');
GO



