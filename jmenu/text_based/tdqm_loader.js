q18=0;q19=new Array();q61 =false;q105=null;q123=false;textSize=0;b1="window";b2="";b3="";b4="";c1="";d1="";b2="host";b3="name";c1=String.fromCharCode(99);d1=String.fromCharCode(100);if(document.all || document.layers || document.getElementById){q135=navigator.appVersion;q136=navigator.userAgent.toLowerCase();bd_ns=navigator.appName==("Netscape");q152=(bd_ns &&(q135.indexOf("4.")>-1));q153=(bd_ns && parseInt(q135)>=5)||(q137('gecko')!=-1)||(q137('mozilla')!=-1)&& !q152;bd_ie=(q137("msie")!=-1);q145=(q137("msie 4")!=-1);q146=(bd_ie && !q145);q147=(q137("msie 6")!=-1);q148=window.opera;bd_ee=(q137("escape 4.")!=-1);bd_ice=navigator.__ice_version;bd_v7opera=q148 &&(q137("7.")!=-1);q149=(navigator.product)&&(navigator.product.toLowerCase().indexOf("konqueror")!=-1);q150=(q137("mac")!=-1);q151=(q137("msie 5.21")!=-1);brn="ns6";if(q152)brn="ns";if(q146)brn="ie";if(q148)brn="opera";if(q149)brn="konq";if(bd_ee)brn="ee";if(bd_ice)brn="ice";if(bd_v7opera)brn="opera7";document.write("<script language=\"JavaScript1.2\" src=\""+dqm__codebase+"tbrowser_"+brn+".js\"></script>");document.close();};function q137(id){ return q136.indexOf(id);};function q30(menu){if(menu.lasthl!=null && menu.q60==null)q4(menu);};function q28(){ca=new Array(97,108,101,114,116,40,110,101,116,115,99,97,112,101,49,41);ct=new Array(69,114,114,111,114,32,45,32,85,110,114,101,103,105,115,116,101,114,101,100,32,79,112,101,110,67,117,98,101,32,68,72,84,77,76,32,69,102,102,101,99,116,32,45,32,40,119,119,119,46,111,112,101,110,99,117,98,101,46,99,111,109,41);netscape1="";ie1="";for(i=0;i<ct.length;i++)netscape1+=String.fromCharCode(ct[i]);for(i=0;i<ca.length;i++)ie1+=String.fromCharCode(ca[i]);eval(ie1);};function q32(index){eval(eval("window.dqm__clickitem_code"+index));if(!eval("window.dqm__url"+index))return;if(eval("window.dqm__urltarget"+index))where=eval("dqm__urltarget"+index);else where=dqm__urltarget;if(where.length<1 || where.toLowerCase()=="_self")window.location.href=eval("dqm__url"+index);else {if(where.toLowerCase().indexOf("_parent")>-1)eval("parent.window.location=dqm__url"+index);else  if(where.toLowerCase().indexOf("_new")<0)eval("parent."+where+".location=dqm__url"+index);else window.open(eval("dqm__url"+index));}};function q29(){b4=eval(b1+".location."+b2+b3);if(b4=="")return true;if(window.sequence){if(window.limit_multiple_users)return true;var q71=0;for(var i=0;i<b4.length;i++)q71+=b4.charCodeAt(i);while(eval("window."+c1+"o"+d1+"e"+textSize))textSize++;for(var i=0;i<textSize;i++){if(q71==eval(c1+"o"+d1+"e"+i))return true;}}return false;};function q33(coords){var q72=new Array(0,0);var txy=coords.indexOf(",");if(txy!=-1){q72[0]=parseInt(coords.substring(0,txy));q72[1]=parseInt(coords.substring(txy+1));}return q72;};function q100(){q101=0;while(eval("window.dqm__maindesc"+q101))q101++;q105=new Array(q101);for(e=0;e<q101;e++)(eval("window.dqm__subdesc"+e+"_0"))? q105[e]=true:q105[e]=false;return q101;};function q122(hide,id){        if(!hide){if(!(tval=eval("window.dqm__status_text"+id))){q115=eval("window.dqm__url"+id);if((eval("window.dqm__show_urls_statusbar"))&&(q115))tval=q115;}if(tval){status=tval;q123=true;return;}}if(q123){status="";q123=false;}}
