
//  QuickMenu Pro, Copyright (c) 1998 - 2003, OpenCube Inc. - http://www.opencube.com
//  
//
//  QuickMenu Pro is Compatible With....
//
//      IE4, IE5.x, IE6 (Win 95, 98, ME, 2000, NT, XP)
//      IE4, IE5.x, &up (Mac)
//      IE4 & up (other platforms)
//      NS4.x (All Platforms)
//      NS5/6.x (All Platforms)
//      NS7 (All Platforms)
//      Opera 5,6,7 (All Platforms)
//      Mozilla 0.6 & up (All Platforms)
//      Konqueror 2.2 & up (Linux)
//      Espial Escape 4.x & up (All Platforms)
//      Ice Browser 5.x & up (All Platforms)
//      Safari 1.0 (Mac only browser)
//      Degrades gracefully in older browsers 
//
//  
//  To customize QuickMenu Pro open this file in a simple text 
//  editor (Notepad or similar). Modify and add parameters (all 
//  customizable parameters start with 'dqm__'), save this file,
//  and open 'sample.htm' in a browser to view your menu. View
//  the source for sample.htm for information on connecting 
//  sub menus to HTML images or build your page around the
//  included sample.htm file.
//
//  QuickMenu conditionally loads the necessary JavaScript
//  files (.js) depending on the browser and platform the user
//  is viewing the menu on. The total file size for each
//  browser / platform scenario is no larger than 12K.
//
//  This sample data file contains comments and help information
//  to assist in the initial customization of your drop down 
//  menu. If you base your implementation on this documented template
//  we recommend the removal of the comments before using on the web, as 
//  to optimize the overall file size and load time of the menu for 
//  the end user.  With the comments removed this sample data files
//  size may be reduced by as much as 50%. Note: To simplify comment 
//  removal there is a uncommented version of this sample template
//  offered in the 'samples' folder.
//
//
//  NOTE: Parameters prefixed with '//' are commented out,
//        delete the '//' to activate the parameter. 
//
//        Commenting out required parameters will cause errors.
//
//        Text values, except TRUE and FALSE statements, must be
//        enclosed by double quotes (").
//  
//        Each parameter value should appear on its own line.
//
//        This data file may also be placed within your HTML page
//        by enclosing between JavaScript tags.
//
//        Due to browser limitations, DHTML menus will not appear
//        on top of Flash objects (unless the flash objects 'wmode'
//        parameter is set to transparent, however this may be buggy), 
//        across frames, or over certain form field elements. A hide 
//        and show workaround for form fields is included with this menu
//        (see the FAQ for additional information).         

/*-------------------------------------------
Set License...
--------------------------------------------*/

	limit_multiple_users = true
	sequence = "9x88_4"

/*-------------------------------------------
Colors, Borders, Dividers, and more...
--------------------------------------------*/


	dqm__sub_menu_width = 130      		//default sub menu widths
	dqm__sub_xy = "0,0"            		//default sub x,y coordinates - defined relative
						//to the top-left corner of parent image or sub menu
   

	dqm__urltarget = "_self"		//default URL target: _self, _parent, _new, or "my frame name"

	dqm__border_width = 1
	dqm__divider_height = 0

	dqm__border_color = "#CCCCCC"		//Hex color or 'transparent'
	dqm__menu_bgcolor = "#EEEEEE"		//Hex color or 'transparent'
	dqm__hl_bgcolor = "#EEEEEE"		

	dqm__mouse_off_delay = 150		//defined in milliseconds (activated after mouse stops)
	dqm__nn4_mouse_off_delay = 500		//defined in milliseconds (activated after leaving sub)


/*-------------------------------------------
Font settings and margins
--------------------------------------------*/
   

    //Font settings

	dqm__textcolor = "#999999"
	dqm__fontfamily = "Verdana"		//Any available system font     
	dqm__fontsize = 11			//Defined with pixel sizing  	
	dqm__fontsize_ie4 = 9			//Defined with point sizing
	dqm__textdecoration = "normal"		//set to: 'normal', or 'underline'
	dqm__fontweight = "normal"		//set to: 'normal', or 'bold'
	dqm__fontstyle = "normal"		//set to: 'normal', or 'italic' 	


    //Rollover font settings

	dqm__hl_textcolor = "#3366CC"
	dqm__hl_textdecoration = "normal"	//set to: 'normal', or 'underline'



    //Margins and text alignment

	dqm__text_alignment = "left"		//set to: 'left', 'center' or 'right'
	dqm__margin_top = 2
	dqm__margin_bottom = 3
	dqm__margin_left = 4
	dqm__margin_right = 4

   


/*-------------------------------------------
Bullet and Icon image library - Unlimited bullet
or icon images may be defined below and then associated
with any sub menu items within the 'Sub Menu Structure 
and Text' section of this data file.
--------------------------------------------*/


    //Relative positioned icon images (flow with sub item text)

	dqm__icon_image0 = "jmenu/images/bullet.gif"
	dqm__icon_rollover0 = "jmenu/images/bullet_hl.gif"
	dqm__icon_image_wh0 = "13,8"

	

    //Absolute positioned icon images (coordinate poitioned)

	dqm__2nd_icon_image0 = "http://69.36.95.72/jmenu/images/arrow.gif"
	dqm__2nd_icon_rollover0 = "jhttp://69.36.95.72/menu/images/arrow.gif"
	dqm__2nd_icon_image_wh0 = "13,10"
	dqm__2nd_icon_image_xy0 = "0,4"



/*---------------------------------------------
Optional Status Bar Text
-----------------------------------------------*/

	dqm__show_urls_statusbar = false
   
	//dqm__status_text0 = "Sample text - Main Menu Item 0"
	//dqm__status_text1 = "Sample text - Main Menu Item 1"

	//dqm__status_text1_0 = "Sample text - Main Menu Item 1, Sub Item 0"	
	//dqm__status_text1_0 = "Sample text - Main Menu Item 1, Sub Item 1"	




/*-------------------------------------------
Internet Explorer Transition Effects
--------------------------------------------*/


    //Options include - none | fade | pixelate |iris | slide | gradientwipe | checkerboard | radialwipe | randombars | randomdissolve |stretch

	dqm__sub_menu_effect = "stretch"
	dqm__sub_item_effect = "none"


    //Define the effect duration in seconds below.
   
	dqm__sub_menu_effect_duration = .2
	dqm__sub_item_effect_duration = .2


    //Specific settings for various transitions.

	dqm__effect_pixelate_maxsqare = 25
	dqm__effect_iris_irisstyle = "CIRCLE"		//CROSS, CIRCLE, PLUS, SQUARE, or STAR
	dqm__effect_checkerboard_squaresx = 14
	dqm__effect_checkerboard_squaresY = 14
	dqm__effect_checkerboard_direction = "DOWN"	//UP, DOWN, LEFT, RIGHT


    //Opacity and drop shadows.

	dqm__sub_menu_opacity = 100			//1 to 100
	dqm__dropshadow_color = "CCCCCC"	//Hex color value or 'none'
	dqm__dropshadow_offx = 2			//drop shadow width
	dqm__dropshadow_offy = 2			//drop shadow height



/*-------------------------------------------
Browser Bug fixes and Workarounds
--------------------------------------------*/


    //Mac offset fixes, adjust until sub menus position correctly.
   
	dqm__os9_ie5mac_offset_X = 10
	dqm__os9_ie5mac_offset_Y = 15

	dqm__osx_ie5mac_offset_X = 10
	dqm__osx_ie5mac_offset_Y = 15

	dqm__ie4mac_offset_X = -8
	dqm__ie4mac_offset_Y = -50


    //Netscape 4 resize bug workaround.

	dqm__nn4_reaload_after_resize = true
	dqm__nn4_resize_prompt_user = false
	dqm__nn4_resize_prompt_message = "To reinitialize the navigation menu please click the 'Reload' button."
   

    //Opera 5 & 6, set to true if the menu is the only item on the HTML page.

	dqm__use_opera_div_detect_fix = true


    //Pre-defined sub menu item heights for the Espial Escape browser.

	dqm__escape_item_height = 20
	dqm__escape_item_height0_0 = 70
	dqm__escape_item_height0_1 = 70


/*---------------------------------------------
Exposed menu events
----------------------------------------------*/


    //Reference additional onload statements here.

	//dqm__onload_code = "alert('custom function - onload')"


    //The 'X' indicates the index number of the sub menu group or item.
    //The 'X_X' indicates the index number of the sub menu item.

	dqm__showmenu_codeX = "status = 'custom show menu function call - menu0'"
	dqm__hidemenu_codeX = "status = 'custom hide menu function call - menu0'"
	dqm__clickitem_codeX_X = "alert('custom Function - Menu Item 0_0')"



/*---------------------------------------------
Specific Sub Menu Settings
----------------------------------------------*/


    //The following settings may be defined for specific sub menu groups.
    //The 'X' represents the index number of the sub menu group.

	dqm__border_widthX = 10;
	dqm__divider_heightX = 5;		
	dqm__border_colorX = "#0000ff";     
	dqm__menu_bgcolorX = "#ff0000"
	dqm__hl_bgcolorX = "#00ff00"
	dqm__hl_textcolorX = "#ff0000"
	dqm__text_alignmentX = "left"


    //The following settings may be defined for specific sub menu items.
    //The 'X_X' represents the index number of the sub menu item.

	dqm__hl_subdescX_X = "custom highlight text"
	dqm__urltargetX_X = "_new"




/**********************************************************************************************
**********************************************************************************************

                           Main Menu Rollover Images and Links  

**********************************************************************************************
**********************************************************************************************/


    //Main Menu Item 0 (PLACE HOLDER ONLY)
	dqm__rollover_image0 = "x"
	dqm__rollover_wh0 = ""
	//dqm__url0 = "SearchResults.asp?Cat=0";
	

    //Main Menu Item 1
	dqm__rollover_image1 = "jmenu/images/menu1_1_over.gif"
	dqm__rollover_wh1 = "83,69"
	dqm__url1 = "SearchResults.asp?Cat=1";


    //Main Menu Item 2
	dqm__rollover_image2 = "jmenu/images/menu1_2_over.gif" 
	dqm__rollover_wh2 = "83,69"
	dqm__url2 = "SearchResults.asp?Cat=2"; 


    //Main Menu Item 3
	dqm__rollover_image3 = "jmenu/images/menu1_3_over.gif" 
	dqm__rollover_wh3 = "83,69"
	dqm__url3 = "SearchResults.asp?Cat=3";
  

    //Main Menu Item 4
	dqm__rollover_image4 = "jmenu/images/menu1_4_over.gif" 
	dqm__rollover_wh4 = "83,69"
	dqm__url4 = "SearchResults.asp?Cat=4";
  

    //Main Menu Item 5
	dqm__rollover_image5 = "jmenu/images/menu1_5_over.gif" 
	dqm__rollover_wh5 = "83,69"
	dqm__url5 = "SearchResults.asp?Cat=5";
  

    //Main Menu Item 6
	dqm__rollover_image6 = "jmenu/images/menu1_6_over.gif" 
	dqm__rollover_wh6 = "83,69"
	dqm__url6 = "SearchResults.asp?Cat=6";
  

    //Main Menu Item 7
	dqm__rollover_image7 = "jmenu/images/menu1_7_over.gif" 
	dqm__rollover_wh7 = "83,69"
	dqm__url7 = "SearchResults.asp?Cat=7";
  
  
    //Main Menu Item 8
	dqm__rollover_image8 = "jmenu/images/menu1_8_over.gif" 
	dqm__rollover_wh8 = "83,69"
	dqm__url8 = "SearchResults.asp?Cat=8";


/**********************************************************************************************
**********************************************************************************************

                              Sub Menu Structure and Text  

**********************************************************************************************
**********************************************************************************************/
////////////////////////////////////BEGIN DYNAMIC AREA1

//Sub Menu 0
dqm__sub_xy0 = "-110,69"
dqm__sub_menu_width0 = 140

//Sub Menu 1
dqm__sub_xy1 = "-110,69"
dqm__sub_menu_width1 = 140

dqm__subdesc1_0 = "Back Care"
dqm__icon_index1_0 = 0
dqm__url1_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=41"

dqm__subdesc1_1 = "Balance Ball"
dqm__icon_index1_1 = 0
dqm__url1_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=29"

dqm__subdesc1_2 = "Bellydance Videos"
dqm__icon_index1_2 = 0
dqm__url1_2 = "http://www.utopianliving.com/SearchResults.asp?Cat=30"

dqm__subdesc1_3 = "Fitness Videos"
dqm__icon_index1_3 = 0
dqm__url1_3 = "http://www.utopianliving.com/SearchResults.asp?Cat=31"

dqm__subdesc1_4 = "Meditation"
dqm__icon_index1_4 = 0
dqm__url1_4 = "http://www.utopianliving.com/SearchResults.asp?Cat=28"

//Sub SubMenu 1_4
dqm__sub_xy1_4 = "-10,2"
dqm__sub_menu_width1_4 = 165

dqm__subdesc1_4_0 = "Organic Cushions"
dqm__icon_index1_4_0 = 0
dqm__url1_4_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=40"

dqm__subdesc1_5 = "Pilates"
dqm__icon_index1_5 = 0
dqm__url1_5 = "http://www.utopianliving.com/SearchResults.asp?Cat=27"

dqm__subdesc1_6 = "Tai Chi Videos"
dqm__icon_index1_6 = 0
dqm__url1_6 = "http://www.utopianliving.com/SearchResults.asp?Cat=72"

dqm__subdesc1_7 = "Yoga Kits"
dqm__icon_index1_7 = 0
dqm__url1_7 = "http://www.utopianliving.com/SearchResults.asp?Cat=38"

dqm__subdesc1_8 = "Yoga Clothing"
dqm__icon_index1_8 = 0
dqm__url1_8 = "http://www.utopianliving.com/SearchResults.asp?Cat=76"

//Sub SubMenu 1_8
dqm__sub_xy1_8 = "-10,2"
dqm__sub_menu_width1_8 = 165

dqm__subdesc1_8_0 = "Yoga Bras"
dqm__icon_index1_8_0 = 0
dqm__url1_8_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=79"

//Sub SubMenu 1_8
dqm__sub_xy1_8 = "-10,2"
dqm__sub_menu_width1_8 = 165

dqm__subdesc1_8_1 = "Yoga Pants"
dqm__icon_index1_8_1 = 0
dqm__url1_8_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=78"

//Sub SubMenu 1_8
dqm__sub_xy1_8 = "-10,2"
dqm__sub_menu_width1_8 = 165

dqm__subdesc1_8_2 = "Yoga Tops"
dqm__icon_index1_8_2 = 0
dqm__url1_8_2 = "http://www.utopianliving.com/SearchResults.asp?Cat=77"

dqm__subdesc1_9 = "Yoga Tools"
dqm__icon_index1_9 = 0
dqm__url1_9 = "http://www.utopianliving.com/SearchResults.asp?Cat=25"

//Sub SubMenu 1_9
dqm__sub_xy1_9 = "-10,2"
dqm__sub_menu_width1_9 = 165

dqm__subdesc1_9_0 = "Organic Mats & Cushions"
dqm__icon_index1_9_0 = 0
dqm__url1_9_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=39"

//Sub SubMenu 1_9
dqm__sub_xy1_9 = "-10,2"
dqm__sub_menu_width1_9 = 165

dqm__subdesc1_9_1 = "Yoga Mats, Bricks, & Straps"
dqm__icon_index1_9_1 = 0
dqm__url1_9_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=37"

dqm__subdesc1_10 = "Yoga Videos"
dqm__icon_index1_10 = 0
dqm__url1_10 = "http://www.utopianliving.com/SearchResults.asp?Cat=24"

//Sub SubMenu 1_10
dqm__sub_xy1_10 = "-10,2"
dqm__sub_menu_width1_10 = 165

dqm__subdesc1_10_0 = "Beginners Yoga Videos"
dqm__icon_index1_10_0 = 0
dqm__url1_10_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=32"

//Sub SubMenu 1_10
dqm__sub_xy1_10 = "-10,2"
dqm__sub_menu_width1_10 = 165

dqm__subdesc1_10_1 = "Intermediate Yoga Videos"
dqm__icon_index1_10_1 = 0
dqm__url1_10_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=34"

//Sub SubMenu 1_10
dqm__sub_xy1_10 = "-10,2"
dqm__sub_menu_width1_10 = 165

dqm__subdesc1_10_2 = "Pregnancy Fitness Videos"
dqm__icon_index1_10_2 = 0
dqm__url1_10_2 = "http://www.utopianliving.com/SearchResults.asp?Cat=36"

//Sub SubMenu 1_10
dqm__sub_xy1_10 = "-10,2"
dqm__sub_menu_width1_10 = 165

dqm__subdesc1_10_3 = "Yoga Conditioning Videos"
dqm__icon_index1_10_3 = 0
dqm__url1_10_3 = "http://www.utopianliving.com/SearchResults.asp?Cat=33"

//Sub SubMenu 1_10
dqm__sub_xy1_10 = "-10,2"
dqm__sub_menu_width1_10 = 165

dqm__subdesc1_10_4 = "Yoga DVD"
dqm__icon_index1_10_4 = 0
dqm__url1_10_4 = "http://www.utopianliving.com/SearchResults.asp?Cat=75"

//Sub SubMenu 1_10
dqm__sub_xy1_10 = "-10,2"
dqm__sub_menu_width1_10 = 165

dqm__subdesc1_10_5 = "Yoga for Kids"
dqm__icon_index1_10_5 = 0
dqm__url1_10_5 = "http://www.utopianliving.com/SearchResults.asp?Cat=35"


//Sub Menu 2
dqm__sub_xy2 = "-110,69"
dqm__sub_menu_width2 = 140

dqm__subdesc2_0 = "Organic Bar Soap"
dqm__icon_index2_0 = 0
dqm__url2_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=23"

dqm__subdesc2_1 = "Organic Beauty Kits"
dqm__icon_index2_1 = 0
dqm__url2_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=45"

dqm__subdesc2_2 = "Organic Deordorant"
dqm__icon_index2_2 = 0
dqm__url2_2 = "http://www.utopianliving.com/SearchResults.asp?Cat=49"

dqm__subdesc2_3 = "Organic Facial Care"
dqm__icon_index2_3 = 0
dqm__url2_3 = "http://www.utopianliving.com/SearchResults.asp?Cat=43"

dqm__subdesc2_4 = "Organic Feminine Care"
dqm__icon_index2_4 = 0
dqm__url2_4 = "http://www.utopianliving.com/SearchResults.asp?Cat=50"

dqm__subdesc2_5 = "Organic Hair Care"
dqm__icon_index2_5 = 0
dqm__url2_5 = "http://www.utopianliving.com/SearchResults.asp?Cat=44"

dqm__subdesc2_6 = "Organic Moisturizers"
dqm__icon_index2_6 = 0
dqm__url2_6 = "http://www.utopianliving.com/SearchResults.asp?Cat=46"

dqm__subdesc2_7 = "Organic Oral Care"
dqm__icon_index2_7 = 0
dqm__url2_7 = "http://www.utopianliving.com/SearchResults.asp?Cat=47"

dqm__subdesc2_8 = "Organic Shower Gel"
dqm__icon_index2_8 = 0
dqm__url2_8 = "http://www.utopianliving.com/SearchResults.asp?Cat=42"

dqm__subdesc2_9 = "Organic Sun Care"
dqm__icon_index2_9 = 0
dqm__url2_9 = "http://www.utopianliving.com/SearchResults.asp?Cat=48"


//Sub Menu 3
dqm__sub_xy3 = "-110,69"
dqm__sub_menu_width3 = 140

dqm__subdesc3_0 = "Air Quality"
dqm__icon_index3_0 = 0
dqm__url3_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=56"

dqm__subdesc3_1 = "EcoGadgets"
dqm__icon_index3_1 = 0
dqm__url3_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=55"

dqm__subdesc3_2 = "Natural Bedding"
dqm__icon_index3_2 = 0
dqm__url3_2 = "http://www.utopianliving.com/SearchResults.asp?Cat=53"

dqm__subdesc3_3 = "Natural Cleaners"
dqm__icon_index3_3 = 0
dqm__url3_3 = "http://www.utopianliving.com/SearchResults.asp?Cat=52"

dqm__subdesc3_4 = "Natural Furniture"
dqm__icon_index3_4 = 0
dqm__url3_4 = "http://www.utopianliving.com/SearchResults.asp?Cat=54"

dqm__subdesc3_5 = "Water Quality"
dqm__icon_index3_5 = 0
dqm__url3_5 = "http://www.utopianliving.com/SearchResults.asp?Cat=51"


//Sub Menu 4
dqm__sub_xy4 = "-110,69"
dqm__sub_menu_width4 = 140

dqm__subdesc4_0 = "Aches & Pains"
dqm__icon_index4_0 = 0
dqm__url4_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=63"

dqm__subdesc4_1 = "Allergy & Sinus"
dqm__icon_index4_1 = 0
dqm__url4_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=64"

dqm__subdesc4_2 = "Aromatherapy"
dqm__icon_index4_2 = 0
dqm__url4_2 = "http://www.utopianliving.com/SearchResults.asp?Cat=62"

dqm__subdesc4_3 = "Children's Remedies"
dqm__icon_index4_3 = 0
dqm__url4_3 = "http://www.utopianliving.com/SearchResults.asp?Cat=61"

dqm__subdesc4_4 = "Cough & Colds"
dqm__icon_index4_4 = 0
dqm__url4_4 = "http://www.utopianliving.com/SearchResults.asp?Cat=60"

dqm__subdesc4_5 = "Digestion & Detox"
dqm__icon_index4_5 = 0
dqm__url4_5 = "http://www.utopianliving.com/SearchResults.asp?Cat=59"

dqm__subdesc4_6 = "Herbal Supplements"
dqm__icon_index4_6 = 0
dqm__url4_6 = "http://www.utopianliving.com/SearchResults.asp?Cat=58"

dqm__subdesc4_7 = "Sleep & Relaxation"
dqm__icon_index4_7 = 0
dqm__url4_7 = "http://www.utopianliving.com/SearchResults.asp?Cat=65"

dqm__subdesc4_8 = "Women's Health"
dqm__icon_index4_8 = 0
dqm__url4_8 = "http://www.utopianliving.com/SearchResults.asp?Cat=57"


//Sub Menu 5
dqm__sub_xy5 = "-110,69"
dqm__sub_menu_width5 = 140

dqm__subdesc5_0 = "Women's Organic"
dqm__icon_index5_0 = 0
dqm__url5_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=11"

//Sub SubMenu 5_0
dqm__sub_xy5_0 = "-10,2"
dqm__sub_menu_width5_0 = 165

dqm__subdesc5_0_0 = "Fitness Bottoms"
dqm__icon_index5_0_0 = 0
dqm__url5_0_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=67"

//Sub SubMenu 5_0
dqm__sub_xy5_0 = "-10,2"
dqm__sub_menu_width5_0 = 165

dqm__subdesc5_0_1 = "Fitness Bras"
dqm__icon_index5_0_1 = 0
dqm__url5_0_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=66"

//Sub SubMenu 5_0
dqm__sub_xy5_0 = "-10,2"
dqm__sub_menu_width5_0 = 165

dqm__subdesc5_0_2 = "Fitness Tops"
dqm__icon_index5_0_2 = 0
dqm__url5_0_2 = "http://www.utopianliving.com/SearchResults.asp?Cat=68"

//Sub SubMenu 5_0
dqm__sub_xy5_0 = "-10,2"
dqm__sub_menu_width5_0 = 165

dqm__subdesc5_0_3 = "Casual Bottoms"
dqm__icon_index5_0_3 = 0
dqm__url5_0_3 = "http://www.utopianliving.com/SearchResults.asp?Cat=69"

//Sub SubMenu 5_0
dqm__sub_xy5_0 = "-10,2"
dqm__sub_menu_width5_0 = 165

dqm__subdesc5_0_4 = "Casual Tops"
dqm__icon_index5_0_4 = 0
dqm__url5_0_4 = "http://www.utopianliving.com/SearchResults.asp?Cat=70"

//Sub SubMenu 5_0
dqm__sub_xy5_0 = "-10,2"
dqm__sub_menu_width5_0 = 165

dqm__subdesc5_0_5 = "Intimates"
dqm__icon_index5_0_5 = 0
dqm__url5_0_5 = "http://www.utopianliving.com/SearchResults.asp?Cat=71"

dqm__subdesc5_1 = "Baby's Organic"
dqm__icon_index5_1 = 0
dqm__url5_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=10"

dqm__subdesc5_2 = "Men's Organic"
dqm__icon_index5_2 = 0
dqm__url5_2 = "http://www.utopianliving.com/SearchResults.asp?Cat=9"


//Sub Menu 6
dqm__sub_xy6 = "-110,69"
dqm__sub_menu_width6 = 140

dqm__subdesc6_0 = "Composting"
dqm__icon_index6_0 = 0
dqm__url6_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=21"

dqm__subdesc6_1 = "Garden Tools"
dqm__icon_index6_1 = 0
dqm__url6_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=22"


//Sub Menu 7
dqm__sub_xy7 = "-110,69"
dqm__sub_menu_width7 = 140

dqm__subdesc7_0 = "Appliances"
dqm__icon_index7_0 = 0
dqm__url7_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=74"

dqm__subdesc7_1 = "Organic Spices"
dqm__icon_index7_1 = 0
dqm__url7_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=73"


//Sub Menu 8
dqm__sub_xy8 = "-110,69"
dqm__sub_menu_width8 = 140

dqm__subdesc8_0 = "Natural Grooming"
dqm__icon_index8_0 = 0
dqm__url8_0 = "http://www.utopianliving.com/SearchResults.asp?Cat=17"

dqm__subdesc8_1 = "Natural Remedies"
dqm__icon_index8_1 = 0
dqm__url8_1 = "http://www.utopianliving.com/SearchResults.asp?Cat=18"

dqm__subdesc8_2 = "Natural Pet Essentials"
dqm__icon_index8_2 = 0
dqm__url8_2 = "http://www.utopianliving.com/SearchResults.asp?Cat=19"

dqm__subdesc8_3 = "Natural Toys & Treats"
dqm__icon_index8_3 = 0
dqm__url8_3 = "http://www.utopianliving.com/SearchResults.asp?Cat=20"


//END DYNAMIC AREA1
