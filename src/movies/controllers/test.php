
<?php
$fp=fopen('test.json','w');
$data = file_get_contents("php://input");
fputs($fp, $data);
fclose($fp);?>

