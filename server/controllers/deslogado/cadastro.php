<?php

try{
    //extrai as variaveis recebidas
    extract($_POST);

    throw new Exception('erro');

    //monta o array da query
    $query =[
        'tabela' => 'usuario',
        'igual' =>[
            'email' => $email
        ],
        'contar' => true
    ];
    $resultado = select($query);
    
    if($resultado['status']){
        //valida se o email não está cadastrado
        if($resultado['retorno'] == 0){
            //monta o array de dados e faz o insert
            $dados=[
                'nome' => $nome,
                'email' => $email,
                'senha' => hash('sha512', $senha)
            ];
        
            $insert = insert($dados, 'usuario');
            
            if($insert['status']){
                $_Retorno = [
                    'status' => true,
                    'msg' => "Cadastro efetuado com sucesso"
                ];
            }else{
                throw new Exception('erro ao inserir os dados');
            }
        }else{
            $_Retorno = [
                'status' => false,
                'msg' => "Esse email já está cadastrado"
            ];
        }
    }else{
        throw new Exception('erro ao listar os dados');
    }
}catch(Exception $e){
    $_Retorno = [
        'status' => false,
        'msg' => "Houve um erro interno",
        'erroInterno' => true
    ];
}





