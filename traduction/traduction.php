<?php
if( isset($_GET['mot']) ) {
	$dict = [
	'Cat' => 'Chat',
	'Dog' => 'Chien',
	'Green' => 'Vert'
	];

	$mot_a_traduire = $_GET['mot'];
	echo $dict[$mot_a_traduire];
}

