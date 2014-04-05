var NoOffFirstLineMenus=13;				// Number of first level items
var LowBgColor='';					// Background color when mouse is not over
var LowSubBgColor='';					// Background color when mouse is not over on subs
var HighBgColor='#';		// Background color when mouse is over
var HighSubBgColor='#';		// Background color when mouse is over on subs
var FontLowColor='';				// Font color when mouse is not over
var FontSubLowColor='';				// Font color subs when mouse is not over
var FontHighColor='#';	// Font color when mouse is over
var FontSubHighColor='#';	// Font color subs when mouse is over
var BorderColor='000000';					// Border color
var BorderSubColor='000000';					// Border color for subs
var BorderWidth=1;														// Border width
var BorderBtwnElmnts=1;												// Border between elements 1 or 0
var FontFamily='arial,verdana,times'									// Font family menu items
var FontSize=8;														// Font size menu items
var FontBold=1;														// Bold menu items 1 or 0
var FontItalic=0;														// Italic menu items 1 or 0
var MenuTextCentered='left';											// Item text position 'left', 'center' or 'right'
var MenuCentered='left';												// Menu horizontal position 'left', 'center' or 'right'
var MenuVerticalCentered='top';										// Menu vertical position 'top', 'middle','bottom' or static
var ChildOverlap=.1;													// horizontal overlap child/ parent
var ChildVerticalOverlap=.2;											// vertical overlap child/ parent
var StartTop=0;														// Menu offset x coordinate
var StartLeft=0;														// Menu offset y coordinate
var VerCorrect=0;														// Multiple frames y correction
var HorCorrect=0;														// Multiple frames x correction
var LeftPaddng=0;														// Left padding
var TopPaddng=0;														// Top padding
var FirstLineHorizontal=0;												// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
var MenuFramesVertical=1;												// Frames in cols or rows 1 or 0
var DissapearDelay=1000;												// delay before menu folds in
var TakeOverBgColor=1;													// Menu frame takes over background color subitem frame
var FirstLineFrame='navig';											// Frame where first level appears
var SecLineFrame='space';												// Frame where sub levels appear
var DocTargetFrame='space';											// Frame where target documents appear
var TargetLoc='menu';						// span id for relative positioning
var HideTop=0;															// Hide first level when loading new document 1 or 0
var MenuWrap=1;														// enables/ disables menu wrap 1 or 0
var RightToLeft=0;														// enables/ disables right to left unfold 1 or 0
var UnfoldsOnClick=0;													// Level 1 unfolds onclick/ onmouseover
var WebMasterCheck=0;													// menu tree checking on or off 1 or 0
var ShowArrow=1;														// Uses arrow gifs when 1
var KeepHilite=1;														// Keep selected path highlighted
var Arrws=['/templates/1/images/Clear1x1.gif',5,10,'/templates/1/images/Clear1x1.gif',10,5,'/templates/1/images/Clear1x1.gif',5,10];		// Arrow source, width and height
function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}
// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"
Menu1=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Shop 1736","SearchResults.asp?Cat=199","",0,16,154);

Menu2=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>suits","SearchResults.asp?Cat=1","",3,16,154);
	Menu2_1=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>2-Button","SearchResults.asp?Cat=21","",0,16,154);
	Menu2_2=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>3-Button","SearchResults.asp?Cat=11","",0,16,154);
	Menu2_3=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Other","SearchResults.asp?Cat=22","",0,16,154);

Menu3=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>dress shirts","SearchResults.asp?Cat=35","",3,16,154);
	Menu3_1=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Single-Ply Cotton","SearchResults.asp?Cat=92","",0,16,154);
	Menu3_2=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>2-Ply Cotton","SearchResults.asp?Cat=93","",0,16,154);
	Menu3_3=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Silk","SearchResults.asp?Cat=139","",0,16,154);

Menu4=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>dress slacks","SearchResults.asp?Cat=134","",2,16,154);
	Menu4_1=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Pleated","SearchResults.asp?Cat=19","",0,16,154);
	Menu4_2=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Flat Fronts","SearchResults.asp?Cat=20","",0,16,154);

Menu5=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>sportcoats","SearchResults.asp?Cat=103","",0,16,154);

Menu6=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>neckties","SearchResults.asp?Cat=36","",9,16,154);
	Menu6_1=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Grey Tones","SearchResults.asp?Cat=74","",0,16,154);
	Menu6_2=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Black Tones","SearchResults.asp?Cat=76","",0,16,154);
	Menu6_3=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Brown Tones","SearchResults.asp?Cat=77","",0,16,154);
	Menu6_4=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Blue Tones","SearchResults.asp?Cat=81","",0,16,154);
	Menu6_5=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Purple Tones","SearchResults.asp?Cat=82","",0,16,154);
	Menu6_6=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Red Tones","SearchResults.asp?Cat=100","",0,16,154);
	Menu6_7=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Yellow/Orange Tones","SearchResults.asp?Cat=142","",0,16,154);
	Menu6_8=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Green Tones","SearchResults.asp?Cat=159","",0,16,154);
	Menu6_9=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>X-Long Lengths","SearchResults.asp?Cat=160","",0,16,154);

Menu7=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>shoes","SearchResults.asp?Cat=40","",3,16,154);
	Menu7_1=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Slip-On","SearchResults.asp?Cat=126","",0,16,154);
	Menu7_2=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Tie","SearchResults.asp?Cat=119","",0,16,154);
	Menu7_3=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Boot","SearchResults.asp?Cat=120","",0,16,154);

Menu8=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>belts","SearchResults.asp?Cat=39","",3,16,154);
	Menu8_1=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Exotic Skins","SearchResults.asp?Cat=105","",0,16,154);
	Menu8_2=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Leather","SearchResults.asp?Cat=106","",0,16,154);
	Menu8_3=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>14KT Gold & Sterling","SearchResults.asp?Cat=141","",0,16,154);

Menu9=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>wallets","SearchResults.asp?Cat=38","",2,16,154);
	Menu9_1=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Men\'s","SearchResults.asp?Cat=63","",0,16,154);
	Menu9_2=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Women\'s","SearchResults.asp?Cat=64","",0,16,154);

Menu10=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>formalwear","SearchResults.asp?Cat=42","",2,16,154);
	Menu10_1=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Tuxedos","SearchResults.asp?Cat=101","",0,16,154);
	Menu10_2=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Accessories","SearchResults.asp?Cat=102","",0,16,154);

Menu11=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>casualwear","SearchResults.asp?Cat=41","",2,16,154);
	Menu11_1=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Short Sleeves","SearchResults.asp?Cat=96","",0,16,154);
	Menu11_2=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Long Sleeves","SearchResults.asp?Cat=97","",0,16,154);

Menu12=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>outerwear","SearchResults.asp?Cat=43","",0,16,154);

Menu13=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>accessories","SearchResults.asp?Cat=37","",6,16,154);
	Menu13_1=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Sunglasses","SearchResults.asp?Cat=111","",0,16,154);
	Menu13_2=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Cufflinks","SearchResults.asp?Cat=112","",0,16,154);
	Menu13_3=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Socks/Underwear","SearchResults.asp?Cat=113","",0,16,154);
	Menu13_4=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Pocket Squares/Hankies","SearchResults.asp?Cat=114","",0,16,154);
	Menu13_5=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Briefcases/Portfolios","SearchResults.asp?Cat=115","",0,16,154);
	Menu13_6=new Array("<img src='http://localhost/templates/1/images/Template/Menu_Bullet.gif' border=0 align=absmiddle>Keychains/Money Clips","SearchResults.asp?Cat=163","",0,16,154);

