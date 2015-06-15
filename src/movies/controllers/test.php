
<?php
$fp=fopen('test.json','w');
$data = file_get_contents("php://input");
header('Access-Control-Allow-Origin: *');
fputs($fp, $data);
fclose($fp);?>
