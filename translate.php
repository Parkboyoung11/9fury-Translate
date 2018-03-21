<?php 
	$japanese = $_GET['ja'];
	$vietnamese = translateJapanese($japanese, "vi");
	$english = translateJapanese($japanese, "en");
	$content = '{"vietnamese":"'.$vietnamese.'","english":"'.$english.'"}';
	echo $content;

	function translateJapanese($japanese, $destination) {
		$url = "http://mazii.net/api/gsearch/$japanese/ja/$destination";	
		$content = file_get_contents($url);
		$start = strpos($content, 'trans\":\"');
		$end = strpos($content, '\"', $start + 10);
		$meaning = substr($content, $start + 10, $end - $start - 10);
		return $meaning;
	}
?>