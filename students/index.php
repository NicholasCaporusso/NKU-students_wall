<?php
$files=scandir(__DIR__);
$list=[];
foreach($files as $file){
	if(preg_match('/^\.+$/',$file)) continue;
	if(preg_match('/(index)/',$file)) continue;
	$file="'".explode('.',$file)[0]."'";
	if(!in_array($file,$list,true)) $list[]=$file;
}
echo implode(',<br />',$list);