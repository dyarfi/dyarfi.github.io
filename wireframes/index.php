<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
<meta name="keywords" content="Web, Developer, Programmer, Backend Developer, Frontend Programmer, PHP, MySQL, jQuery, Javascript, CSS, HTML, Stylesheet, Slice, CMS, Content Management System, Kohana, Code Igniter, Wordpress, CakePHP, Yii, Opencart, Framework, Bootstrap, Responsive, Android Hybrid, APK, Netbean, Android Development Tools"/>
<meta name="description" content="Web Developer, Professional Web Development with PHP, MySQL & Apache in Jakarta Indonesia"/>
<meta name="author" content="Defrian Yarfi"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="robots" content="noindex, nofollow"/>
<title>Dyarfi.Net</title>
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<!--[if lte IE 6]><link rel="stylesheet" href="http://universal-ie6-css.googlecode.com/files/ie6.1.1.css" media="screen, projection"><![endif]-->
<link rel="stylesheet" href="../assets/css/bootstrap.min.css"/>
<link rel="stylesheet" href="../assets/css/jquery.fancybox.css"/>
<link rel="stylesheet" href="../assets/css/jquery.fancybox-thumbs.css"/>
<!--link rel="stylesheet" href="../css/default.css"/-->
<script src="../assets/js/jquery-1.9.1.min.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>
<script src="../assets/js/jquery.fancybox.pack.js"></script>
<script src="../assets/js/jquery.fancybox-thumbs.js"></script>
<!--<script src="../assets/js/library.js"></script>-->
<style type="text/css">body { font-family:'Arial','Tahoma','Verdana'; background: #f1f1f1; margin: 50px 80px}</style>
<script type="text/javascript">
/*
*  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
*/
$('.fancybox-thumbs').fancybox({
   prevEffect : 'none',
   nextEffect : 'none',
   closeBtn  : false,
   arrows    : false,
   nextClick : true,
   helpers : {
	   thumbs : {
		   width  : 50,
		   height : 50
	   }
   }
});
</script>
<style type="text/css">ul.list-unstyled li img { vertical-align: top; }</style>
</head>
<body>
<div id="container" class="container-fluid">
	<div class="row-fluid">
		<h2>Wireframes by Defrian Yarfi</h2>
		<br/>
		<ul class="list-unstyled">
			<?php
			if ($handle = opendir('.')) {
				/* This is the correct way to loop over the directory. */
				while (false !== ($entry = readdir($handle))) {
					if ($entry != "." && $entry != ".." && $entry != "index.php" && $entry != '.DS_Store') {
						echo("<li id=".$entry."><h3>".ucfirst($entry)."</h3>");
						//Path to folder which contains images
						$dirname = $entry . '/';
						//Use glob function to get the files
						//Note that we have used " * " inside this function. If you want to get only JPEG or PNG use
						//below line and commnent $images variable currently in use
						$images = glob($dirname."*");
						//Display image using foreach loop
						foreach($images as $image){
						//print the image to browser with anchor tag (Use if you want really :) )
							echo '<a class="fancybox-thumbs" data-fancybox-group="'.$entry.'" href="'.$image.'" target="_blank"><img src="'.$image.'" height="100" width="100"></a>';
						}
						echo '</li>';
					}
				}
				closedir($handle);
			}
			?>
		</ul>
	</div>
</div><!-- end #container -->
<script type="text/javascript"></script>
</body>
</html>
