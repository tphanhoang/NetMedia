<?php
$data = json_decode(file_get_contents("php://input"),true);


$host = '127.0.0.1';
$dbname = 'netMedia';
$user = 'homestead';
$password = 'secret';

$bdd = new PDO('mysql:host='.$host.';dbname='.$dbname, $user,$password);



$req = $bdd->prepare("INSERT INTO users (email, password, pseudo, birthday, gender) VALUES (:email, :password, :pseudo, :birthday, :gender)");
        $req->execute(array(
            "email" => $data['email'], 
            "password" => MD5($data['password']),
            "pseudo" => $data['name'],
            "birthday" => $data['age'],
            "gender" => $data['gender']
            ));
?>
