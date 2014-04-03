//  QuickMenu Pro, Copyright (c) 1998 - 2003, OpenCube Inc. - http://www.opencube.com


/*-------------------------------------------
Colors, Borders, Dividers, and more...
--------------------------------------------*/


	dqm__sub_menu_width = 130      	//default sub menu widths
	dqm__sub_xy = "0,0"            	//default sub x,y coordinates - defined relative
						//to the top-left corner of parent image or sub menu
   

	dqm__urltarget = "_self"		//default URL target: _self, _parent, _new, or "my frame name"

	dqm__border_width = 1
	dqm__divider_height = 1

	dqm__border_color = "#000000"		//Hex color or 'transparent'
	dqm__menu_bgcolor = "#c8c8c1"		//Hex color or 'transparent'
	dqm__hl_bgcolor = "#eeeeee"		

	dqm__mouse_off_delay = 150		//defined in milliseconds (activated after mouse stops)
	dqm__nn4_mouse_off_delay = 500		//defined in milliseconds (activated after leaving sub)


/*-------------------------------------------
Font settings and margins
--------------------------------------------*/
   

    //Font settings

	dqm__textcolor = "#333333"
	dqm__fontfamily = "Verdana"		//Any available system font     
	dqm__fontsize = 11			//Defined with pixel sizing  	
	dqm__fontsize_ie4 = 9			//Defined with point sizing
	dqm__textdecoration = "normal"		//set to: 'normal', or 'underline'
	dqm__fontweight = "normal"		//set to: 'normal', or 'bold'
	dqm__fontstyle = "normal"		//set to: 'normal', or 'italic' 	


    //Rollover font settings

	dqm__hl_textcolor = "#000000"
	dqm__hl_textdecoration = "normal"	//set to: 'normal', or 'underline'



    //Margins and text alignment

	dqm__text_alignment = "left"		//set to: 'left', 'center' or 'right'
	dqm__margin_top = 2
	dqm__margin_bottom = 3
	dqm__margin_left = 5
	dqm__margin_right = 4

   


/*-------------------------------------------
Bullet and Icon image library - Unlimited bullet
or icon images may be defined below and then associated
with any sub menu items within the 'Sub Menu Structure 
and Text' section of this data file.
--------------------------------------------*/


    //Relative positioned icon images (flow with sub item text)

	dqm__icon_image0 = "images/sample2_bullet.gif"
	dqm__icon_rollover0 = "images/sample2_bullet_hl.gif"
	dqm__icon_image_wh0 = "13,8"

	

    //Absolute positioned icon images (coordinate poitioned)

	dqm__2nd_icon_image0 = "images/sample2_arrow.gif"
	dqm__2nd_icon_rollover0 = "images/sample2_arrow.gif"
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

	dqm__sub_menu_effect = "fade"
	dqm__sub_item_effect = "fade"


    //Define the effect duration in seconds below.
   
	dqm__sub_menu_effect_duration = .4
	dqm__sub_item_effect_duration = .4


    //Specific settings for various transitions.

	dqm__effect_pixelate_maxsqare = 25
	dqm__effect_iris_irisstyle = "CIRCLE"		//CROSS, CIRCLE, PLUS, SQUARE, or STAR
	dqm__effect_checkerboard_squaresx = 14
	dqm__effect_checkerboard_squaresY = 14
	dqm__effect_checkerboard_direction = "RIGHT"	//UP, DOWN, LEFT, RIGHT


    //Opacity and drop shadows.

	dqm__sub_menu_opacity = 100			//1 to 100
	dqm__dropshadow_color = "none"			//Hex color value or 'none'
	dqm__dropshadow_offx = 5			//drop shadow width
	dqm__dropshadow_offy = 5			//drop shadow height



/*-------------------------------------------
Browser Bug fixes and Workarounds
--------------------------------------------*/


    //Mac offset fixes, adjust until sub menus position correctly.
   
	dqm__os9_ie5mac_offset_X = 10
	dqm__os9_ie5mac_offset_Y = 15

	dqm__osx_ie5mac_offset_X = 0
	dqm__osx_ie5mac_offset_Y = 0

	dqm__ie4mac_offset_X = -8
	dqm__ie4mac_offset_Y = -50


    //Netscape 4 resize bug workaround.

	dqm__nn4_reaload_after_resize = true
	dqm__nn4_resize_prompt_user = false
	dqm__nn4_resize_prompt_message = "To reinitialize the navigation menu please click the 'Reload' button."
   

    //Set to true if the menu is the only item on the HTML page.

	dqm__use_opera_div_detect_fix = false


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
    //The 'X' represents the index number of the sub menu item.

	dqm__hl_subdescX = "custom highlight text"
	dqm__urltargetX = "_new"




/**********************************************************************************************
**********************************************************************************************

                           Main Menu Rollover Images and Links  

**********************************************************************************************
**********************************************************************************************/



    //Main Menu Item 0

	dqm__rollover_image0 = "images/sample2_menu_hl.gif"
	dqm__rollover_wh0 = "45,19"
	dqm__url0 = "../documents/sample_link.htm";   


    //Main Menu Item 1

	dqm__rollover_image1 = "images/sample2_products_hl.gif"
	dqm__rollover_wh1 = "71,19"
	dqm__url1 = "../documents/sample_link.htm";


    //Main Menu Item 2

	dqm__rollover_image2 = "images/sample2_downloads_hl.gif" 
	dqm__rollover_wh2 = "84,19"
	dqm__url2 = "../documents/sample_link.htm";   


    //Main Menu Item 3

	dqm__rollover_image3 = "images/sample2_contact_hl.gif" 
	dqm__rollover_wh3 = "63,19"
	dqm__url3 = "../documents/sample_link.htm";   
  




/**********************************************************************************************
**********************************************************************************************

                              Sub Menu Structure and Text  

**********************************************************************************************
**********************************************************************************************/
   


    //Sub Menu 0

	dqm__sub_xy0 = "-42,19"
	dqm__sub_menu_width0 = 150

	dqm__subdesc0_0 = "<font color='#000000'><u>Menu Customization</u></font><br>All customizable settings are accessible from a seperate text file."
	dqm__subdesc0_1 = "<font color='#000000'><u>Page Attachment</u></font><br>A simple statment after the body tag and within each image tag attaches the menu to any page."

	dqm__icon_index0_0 = 0
	dqm__icon_index0_1 = 0

	dqm__url0_0 = "../documents/sample_link.htm"
	dqm__url0_1 = "../documents/sample_link.htm"



    //Sub Menu 1

	dqm__sub_xy1 = "-61,19"
	dqm__sub_menu_width1 = 145

	dqm__subdesc1_0 = "New Effects"
	dqm__subdesc1_1 = "Implementations"
	dqm__subdesc1_2 = "Visual DHTML"
	dqm__subdesc1_3 = "DHTML Effects"
	dqm__subdesc1_4 = "Applet Composer"
	dqm__subdesc1_5 = "Applet Effects"

	dqm__icon_index1_0 = 0
	dqm__icon_index1_1 = 0
	dqm__icon_index1_2 = 0
	dqm__icon_index1_3 = 0
	dqm__icon_index1_4 = 0
	dqm__icon_index1_5 = 0
	
	dqm__2nd_icon_index1_0 = 0
	dqm__2nd_icon_index1_1 = 0

	dqm__url1_2 = "../documents/sample_link.htm"
	dqm__url1_3 = "../documents/sample_link.htm"
	dqm__url1_4 = "../documents/sample_link.htm"
	dqm__url1_5 = "../documents/sample_link.htm"

    

    //Sub Menu 1_0

	dqm__sub_xy1_0 = "-4,2"
	dqm__sub_menu_width1_0 = 120

	dqm__subdesc1_0_0 = "DHTML Menu"
	dqm__subdesc1_0_1 = "DHTML Tree"
	dqm__subdesc1_0_2 = "Vertical Scroll"
	dqm__subdesc1_0_3 = "Scroll Window"

	dqm__icon_index1_0_0 = 0
	dqm__icon_index1_0_1 = 0
	dqm__icon_index1_0_2 = 0
	dqm__icon_index1_0_3 = 0

	dqm__url1_0_0 = "../documents/sample_link.htm"
	dqm__url1_0_1 = "../documents/sample_link.htm"
	dqm__url1_0_2 = "../documents/sample_link.htm"
	dqm__url1_0_3 = "../documents/sample_link.htm"



    //Sub Menu 1_1

	dqm__sub_xy1_1 = "-4,2"
	dqm__sub_menu_width1_1 = 100

	dqm__subdesc1_1_0 = "J & J"
	dqm__subdesc1_1_1 = "Memorex"
	dqm__subdesc1_1_2 = "Ouidad"

	dqm__icon_index1_1_0 = 0
	dqm__icon_index1_1_1 = 0
	dqm__icon_index1_1_2 = 0

	dqm__url1_1_0 = "../documents/sample_link.htm"
	dqm__url1_1_1 = "../documents/sample_link.htm"
	dqm__url1_1_2 = "../documents/sample_link.htm"



    //Sub Menu 2

	dqm__sub_xy2 = "-72,19"
	dqm__sub_menu_width2 = 145

	dqm__subdesc2_0 = "Visual DHTML" 
	dqm__subdesc2_1 = "Web Effects DHTML"
	dqm__subdesc2_2 = "Applet Composer"
	dqm__subdesc2_3 = "Web Effects Java"

	dqm__icon_index2_0 = 0
	dqm__icon_index2_1 = 0
	dqm__icon_index2_2 = 0
	dqm__icon_index2_3 = 0

	dqm__url2_0 = "../documents/sample_link.htm"
	dqm__url2_1 = "../documents/sample_link.htm"
	dqm__url2_2 = "../documents/sample_link.htm"
	dqm__url2_3 = "../documents/sample_link.htm"



    //Sub Menu 3

	dqm__sub_xy3 = "-55,19"
	dqm__sub_menu_width3 = 120

	dqm__subdesc3_0 = "Cust. Service"
	dqm__subdesc3_1 = "Tech. Support"
	dqm__subdesc3_2 = "Product Sales"

	dqm__icon_index3_0 = 0
	dqm__icon_index3_1 = 0
	dqm__icon_index3_2 = 0

	dqm__url3_0 = "../documents/sample_link.htm"
	dqm__url3_1 = "../documents/sample_link.htm"
	dqm__url3_2 = "../documents/sample_link.htm"

