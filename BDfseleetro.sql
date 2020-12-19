use fseeletro;

CREATE TABLE cadastroclientes(
id_cadastroclientes int(15) NOT NULL auto_increment,
Nome varchar(100) NOT NULL,
data_nasc date NOT NULL,
CPF char(14) NOT NULL,
Endereco varchar (250) NOT NULL,
Email varchar (100) NOT NULL,
PRIMARY KEY (id_cadastroclientes),
UNIQUE KEY CPF_UNIQUE (CPF),
UNIQUE KEY Email_Unique (Email)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

LOCK TABLES cadastroclientes WRITE; 
Insert into cadastroclientes( Nome, data_nasc, CPF, Endereco, Email)
Values ('Abiagil Aves', '1988-10-01','63091835012','Rua Amarela','donabiga@outlook.com'),
 ('Antonio Vieira','1969-12-31','41835628052','Rua das Palmas','antoniofeliz@gmail.com'),
 ('Joao Antonio Almeida' '1990-15-09','63525678915','Rua Verde','joaoalmeida@gmail.com'),
 ('Felipe Nascimento' '1996-06-08', '15036945898','Rua da Esperança','felipe@gmail.com');
 UNLOCK TABLES;
 
 DROP TABLE IF EXISTS produto;
 
 create table produto(
idproduto int auto_increment,
id_categoria varchar(255) not null,
descricao varchar(500) not null,
preco float not null,
preco_venda float not null,
imagem varchar(100) not null,
primary key(idproduto)

KEY id_categoria (id_categoria)
  CONSTRAINT `produto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;


LOCK TABLES produto WRITE; 
 insert into produto( categoria, descricao, preco, preco_venda, imagem)
values( 'geladeira', 'Refrigerador Eletrolux DFX41 2 Portas DC51X 475 Litros', 2839.00,'2600.00', 'Imgs/gela3.jpg');

insert into produto( categoria, descricao, preco, preco_venda, imagem)
values( 'geladeira', 'Geladeira Eletrolux RE31 240L Branco 1 Porta 127V', 1309.90,'1289.90', 'Imgs/gel1.jpg');

insert into produto( categoria, descricao, preco, preco_venda, imagem)
values( 'geladeira', 'Geladeira Eletrolux 2 Portas DC35A 260L Branca 110V', 1800.90,'1559.90', 'Imgs/gel4.jpg');

insert into produto( categoria, descricao, preco, preco_venda, imagem)
values( 'geladeira', 'Geladeira Eletrolux Top Freezer TF42 382', 2599.00,'2399.00', 'Imgs/gel2.jpg');

insert into produto( categoria, descricao, preco, preco_venda, imagem)
values('fogão', 'Fogão de Embutir 4 Bocas preto atlas top gourmet glass bivolt', '2000.00', '1749.00','Imgs//fog1.jpg');

insert into produto(categoria, descricao, preco, preco_venda, imagem)
values('fogão','Fogão de Embutir 5 bocas Preto atlas top goumert glass bivolt', '2100.00', '1749.00', 'Imgs//fog2.jpg');

insert produto( categoria, descricao, preco, preco_venda, imagem)
values('fogão', 'Fogão de Embutir 5 Bocas Preto Atlas Top Gourmet Glass Bivolt', '1983.58','1899.00','Imgs/fog3.jpg');

insert produto( categoria, descricao, preco, preco_venda,imagem)
values('fogão', 'Fogão de Piso 5 Bocas Consul CFS5VAR - Bivolt', '1686.50','1439.10', '/imagem/fog4.jpg');

insert produto( categoria, descricao, preco, preco_venda,imagem)
values('Máquina de Lavar', 'Máquina de Lavar Consul 13Kg Branca láila 110V', '1780.90','1729.00', 'Imgs/maq4.jpg');

insert produto( categoria, descricao, preco, preco_venda,imagem)
values('Máquina de Lavar', 'Máquina de Lavar Electrolux 13Kg Branca LAC13 - 110V', '1850.00','1659.00', 'Imgs/maq1.jpg');

insert produto( categoria, descricao, preco, preco_venda,imagem)
values('Máquina de Lavar', 'Máquina de Lavar Electrolux 16Kg Branca LAC16 - 110V', '1699.90','1694.90', 'Imgs/maq2.jpg');

insert produto( categoria, descricao, preco, preco_venda,imagem)
values('Máquina de Lavar', 'Lavadora Consul 13Kg Maxi Economia 220V CWE13ABBNA', '2000.00','1849.00', 'Imgs/maqu3.jpg');

insert produto( categoria, descricao, preco, preco_venda,imagem)
values('Máquina de Lavar', 'Máquina de Lavar Consul 13Kg Branca láila 110V', '1780.00','1729.00', 'Imgs/maqu4.jpg');

insert produto( categoria, descricao, preco, preco_venda,imagem)
values('micorondas', 'Micro-Ondas Brastemp Espelhado Grill 32 Litros Inox 110V', '1000.00','899.00', 'Imgs/micro3.jpg');

insert produto( categoria, descricao, preco, preco_venda,imagem)
values('microondas', 'Micro-Ondas De Embutir litros BLT MO30 EIN Inox', '1300.00','1198.50', 'Imgs/micro4.jpg');

insert produto( categoria, descricao, preco, preco_venda,imagem)
values('microondas', 'Micro-Ondas Brastemp BMS45CR 32 Litros Inox 110V', '1780.00','1638.50', 'Imgs/micro2.jpg');
 UNLOCK TABLES;
 
 
 
 
 


