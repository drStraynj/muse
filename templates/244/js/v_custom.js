// $$TEMPLATE is your template name
// var templateName = "$$TEMPLATE";

// Includes jQuery.
if( typeof (jQuery) == 'undefined') {
	document.write('<scr' + 'ipt type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></scr' + 'ipt>');
}

// Fixes issues for $ object.
// jQuery.noConflict();

if (templateName) {
	var cssPath='/v/vspfiles/templates/' + templateName + '/css/';
	// Includes on checkout pages.
	switch (PageName()) {
		case "searchresults.asp":
			document.write('<link rel="stylesheet" href="' + cssPath + 'category.css" type="text/css">');
		break;
		case "productdetails.asp":
			document.write('<link rel="stylesheet" href="' + cssPath + 'productdetails.css" type="text/css">');
		break;
		case "shoppingcart.asp":
			document.write('<link rel="stylesheet" href="' + cssPath + 'shoppingcart.css" type="text/css">');
		break;
		case "one-page-checkout.asp":
			document.write('<link rel="stylesheet" href="' + cssPath + 'onepagecheckout.css" type="text/css">');
		break;
		default:
			console.log("v_custom.js is on patrol");
		break;
	}
	// Includes softadd.
	document.write('<link rel="stylesheet" href="' + cssPath + 'softaddtocart.css" type="text/css">');
}