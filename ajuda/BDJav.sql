create database BDJav;
use BDJav;

create table usuario(
UsuarioID integer(11) primary key auto_increment,
nomeUsuario varchar(75),
Senha varchar(25),
Email varchar(255) unique
);

create table desenvolvedor(
desenvolvedorID integer(11)primary key,
nomeDesenvolvedor varchar(255),
CNPJ integer(15),
Senha varchar(25),
Email varchar(255),
Pais varchar(75),
RazaoSocial varchar(255)
);

create table perfil(
PerfilId integer(11) primary key,
nomePerfil varchar(75),
Raca varchar(10),
Classe varchar(30),
Descricao varchar(225),
ImagemPerfil blob
);
create table amigo(
AmigoId integer(11) primary key,
nomeAmigo varchar(75),
statusAmigo varchar(20),
Descricao varchar(255)
);

create table jogo(
JogoId integer(11) primary key,
Titulo varchar(75),
Categoria varchar(50),
Preco float(10),
Comentario varchar(255)
);
create table faleConosco(
faleConoscoID integer(11) primary key,
Comentario varchar(255)
);

create table avaliacao(
avaliacaoID integer(11) primary key,
Nota integer(20),
Comentario varchar(255),
Reposta varchar(255)
);

create table Formulario(
formularioID integer(11) primary key,
nomeJogo Varchar(100),
Classificacao Varchar(20),
Genero char(11),
Descricao Varchar(255)
);

create table imagens(
imagemBanner mediumblob,
imagem1 mediumblob,
imagem2 mediumblob,
imagem3 mediumblob,
imagem4 mediumblob,
imagem5 mediumblob
);

INSERT INTO Formulario(formularioId, NomeJogo, Classificacao, Genero, Descricao)VALUES(1, "HELBERT CARVALHO","cu","cua","morte");
select *from usuario;
