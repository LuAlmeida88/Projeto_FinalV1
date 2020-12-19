<?php
$servername ="localhost";
$username="root";
$password="";
$database="fseleetro";


$conn = mysqli_connect ($servename, $username, $password, $database);

if(!$conn){
    die("A conexão com o BD falhou:" .mysqli_connect_error());
}

setlocale(LC_MONETARY, 'pt-BR');
$sql ="select categoria, descricao, preco, preco_venda, imagem from produtos";
$result =$conn->query ($sql);

print_r ( json_encode ($result-> fetch_all(MYSQLI_ASSOC));

 