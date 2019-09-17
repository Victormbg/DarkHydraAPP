<?php
	/* prepara o documento para comunicação com o JSON, as duas linhas a seguir são obrigatórias 
	  para que o PHP saiba que irá se comunicar com o JSON, elas sempre devem estar no ínicio da página */
	header("Cache-Control: no-cache, no-store, must-revalidate"); // limpa o cache
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=utf-8"); 
	
	clearstatcache(); // limpa o cache
    // Dados do servidor de banco de dados, neste exemplo uso o servidor da escola
	$servidor = 'remotemysql.com:3306/FpNo2uBuSR';
	$usuario  = 'FpNo2uBuSR';
	$senha    = 'gJK5MPtqBZ';
	$banco    = 'FpNo2uBuSR';

	if ($_GET){
		$user = $_GET['user'];
		$senha = $_GET['senha'];
	} else {
		echo '[{"erro":"Sem parametros na url"}]';
		exit(); //para a aplicação PHP
	}

	try {
		$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha);
		$conecta->exec("set names utf8"); //permite caracteres latinos.
		$consulta = $conecta->prepare("SELECT * FROM usuario 
									   WHERE nomeUsuario = '$user' 
									   AND  senhaUsuario = '$senha'");
		$consulta->execute(array());  
		$resultadoDaConsulta = $consulta->fetchAll();
		
		$StringJson = "[";
		
		if (count($resultadoDaConsulta) === 0)
		{
			echo '[{"erro":"Usuário não encontrado!"}]';
		}
		
		if ( count($resultadoDaConsulta) ) {
		foreach($resultadoDaConsulta as $registro) {
			
			if ($StringJson != "[") {$StringJson .= ",";}
			$StringJson .= '"nomeUsuario":"' . $registro['nomeUsuario']  . '",';				
            $StringJson .= '"senhaUsuario":"' . $registro['senhaUsuario'] . '"}';
		}  
		echo $StringJson . "]"; // Exibe o vettor JSON
		
  } 
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage(); // opcional, apenas para teste
}
?>