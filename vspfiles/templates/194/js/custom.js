if (typeof(jQuery) == 'undefined') document.write('<scr'+'ipt type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></scr'+'ipt>');

function vCustomCenterOnePageCheckout(){
	if (PageName()=='one-page-checkout.asp') jQuery("form[name='OnePageCheckoutForm']>table:eq(0)").css("margin","0 auto");
}

function vCustomOnready(){
vCustomCenterOnePageCheckout();
}