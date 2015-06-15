<?php
$data = json_decode(file_get_contents("php://input"),true);


$host = '127.0.0.1';
$dbname = 'netMedia';
$user = 'homestead';
$password = 'secret';

$bdd = new PDO('mysql:host='.$host.';dbname='.$dbname, $user,$password);


$req = $bdd->prepare("SELECT id, email, pseudo, birthday, gender FROM users WHERE email= :pisa AND password= :crare");
        $req->execute(array(
            "pisa" => $data['emaillg'], 
            "crare" => MD5($data['passwordlg'])
            ));


$rows = $req->fetch(PDO::FETCH_NUM);

if($rows > 0){
	$response_array['status'] = 'success';
	$response_array['user'] = $rows;
}else{
	$response_array['status'] = 'error';
}
    header('Content-type: application/json');
    echo json_encode($response_array);
?>
