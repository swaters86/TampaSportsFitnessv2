<!DOCTYPE html>
<html lang="en" ng-app="mysfApp">
	<head ng-controller="headController">
	<title>{{siteTitle}}</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
	<meta http-equiv="Content-Type" content="text/html; charset-UTF-8" />
	<meta id="viewport" name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
	<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.3.0/pure-min.css">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" rel="stylesheet">
	<link href="css/theme.css" rel="stylesheet">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="http://code.angularjs.org/1.2.0-rc.2/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular-sanitize.js"></script>
	<script src="http://code.angularjs.org/1.2.0-rc.2/angular-route.min.js"></script>
	<!-- 
	The below script requires jQuery.min.js.
	You can download it here: http://binarymuse.github.io/ngInfiniteScroll/
     -->
	<script src="js/modules/ng-infinite-scroll.min.js"></script>
	<script src="js/main.js"></script>
	<script src="js/controllers.js"></script>
	<script>
		$.noConflict();
	</script>
	</head>
	<body>

		<!-- Start MastHead -->
		<header class="pure-u-1" ng-controller="headerController">
				<h1 id="site-logo"><a href="/">{{siteName}}</a></h1>
		</header>
		<!-- End MastHead -->

		<section ng-view></section>

	</body>
</html>
