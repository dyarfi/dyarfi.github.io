<?php

/*
 * Contact us Process
 * 
 */
error_reporting(E_STRICT); // in IIS server
//error_reporting(E_ALL | E_STRICT);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$value = array();	
	if ($_POST['email'] == '') {		
		$value['value']		= 0;
		$value['message']	= 'Please insert your email..';
	} else
	if (preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $_POST['email']) == false){		
		$value['value']		= 0;
		$value['message']	= 'Please insert right email address..';
	} else {		
		$filename = "email.csv"; 
		$text = $_POST['email'].',';
		$fp = fopen ($filename, "a"); 
	
		if ($fp) {
			fwrite ($fp, $text);
			fclose ($fp);
			//exit;
			$value['value']		= 1;
			$value['message']	= 'Thank you, for your subscription';					
		} else {
			$value['value']		= 0;
			$value['message']	= 'Sorry, server can\'t connect';					
		}	
	}
	usleep(200000);
	echo json_encode($value);
}	
?>
