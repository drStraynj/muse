q39=null;q40=false;q41=null;q20=new Array();q21=new Array();q82=null;q93=null;q94=null;ice_origWidth =this.innerWidth;ice_origHeight=this.innerHeight;captureEvents(Event.MOUSEUP);window.onmouseup=mclick;captureEvents(Event.MOUSEMOVE);window.onmousemove=dqm__handleMousemove;if(!window.dqm__cancel_onload){document.captureEvents(Event.ONLOAD);captureEvents(Event.RESIZE);window.onload=dqm__handleOnload;window.onresize=dqm__handleResize;}q18=q100();var bdh_main=new Array(q18);for(var m=0;m<q18;m++)if(q105[m])writeStyles(m+"",true);for(var j=0;j<q19.length;j++)writeStyles(q19[j],false);var bdh_sub=new Array(q19.length);for(var j=0;j<q19.length;j++)figure_q54(q19[j],j);for(m=0;m<q18;m++)if(q105[m])q0(m+"",true);for(j=0;j<q19.length;j++)q0(q19[j],false,j);var q34=new Array(q18);var q35=new Array(q18);var q36=new Array(q18);var q37=new Array(q18);q83="";for(var j=0;j<q18;j++){if(q121[j]){imgwh=q33(eval("dqm__rollover_wh"+j));q83+="<layer  id=qmim"+j+" onMouseOut=\"dqm__handleMousemove(event)\" width="+imgwh[0]+" height="+imgwh[1]+" visibility='hide'><img src='"+eval("dqm__rollover_image"+j)+"' width="+imgwh[0]+" height="+imgwh[1]+" border='0' onclick=\"q32('"+j+"')\"></layer>"; }}document.write(q83);;function figure_q54(mindex,arri){bd_height=dqm__border_width*2;i=0;while(eval("window.dqm__subdesc"+mindex+"_"+i)){id=mindex+"_"+i;bd_height+=parseInt(q15("dqm__escape_item_height"+id,dqm__escape_item_height));bd_height+=parseInt(dqm__divider_height);i++;}bdh_sub[arri]=bd_height-parseInt(dqm__divider_height);};function writeStyles(mindex,main){q130=q15("dqm__text_alignment"+mindex,dqm__text_alignment);hltc=q15("dqm__hl_textcolor"+mindex,dqm__hl_textcolor);q144=q15("dqm__textcolor"+mindex,dqm__textcolor);if(!main)newid=convert_underscores(mindex);else newid=mindex;document.write("<STYLE TYPE='text/css'>all.qms"+newid+" {color:"+q144+";font-size:"+dqm__fontsize+"px;text-align:"+q130+";padding-left:"+dqm__margin_left+";padding-top:"+dqm__margin_top+";padding-bottom:"+dqm__margin_bottom+";padding-right:"+dqm__margin_right+";font-style:"+dqm__fontstyle+";font-family:"+dqm__fontfamily+";text-decoration:"+dqm__textdecoration+";font-weight:"+dqm__fontweight+";}</STYLE>");document.write("<STYLE TYPE='text/css'>all.hlqm"+newid+" {color:"+hltc+";font-size:"+dqm__fontsize+"px;text-align:"+q130+";padding-left:"+dqm__margin_left+";padding-top:"+dqm__margin_top+";padding-bottom:"+dqm__margin_bottom+";padding-right:"+dqm__margin_right+";font-style:"+dqm__fontstyle+";font-family:"+dqm__fontfamily+";text-decoration:"+dqm__hl_textdecoration+";font-weight:"+dqm__fontweight+";}</STYLE>");i=0;bd_height=dqm__border_width*2;while(eval("window.dqm__subdesc"+mindex+"_"+i)){id=mindex+"_"+i;if(eval("window.dqm__subdesc"+id+"_0"))q19=q19.concat(new Array(id));bd_height+=parseInt(q15("dqm__escape_item_height"+id,dqm__escape_item_height));bd_height+=parseInt(dqm__divider_height);i++;}if(main){bdh_main[mindex]=bd_height-parseInt(dqm__divider_height);}};function convert_underscores(tid){tstring=tid;cpos=0;while((cpos=tid.indexOf("_",cpos))>-1){tstring=tstring.substring(0,cpos)+"a"+tstring.substring(cpos+1);cpos++;}return tstring;};function q0(mindex,main,arri){i=0;level=1;while((i=mindex.indexOf("_",i+1))>-1)level++;bw=q15("dqm__border_width"+mindex,dqm__border_width);q50=q15("dqm__sub_menu_width"+mindex,dqm__sub_menu_width);bc=q15("dqm__border_color"+mindex,dqm__border_color);dh=q15("dqm__divider_height"+mindex,dqm__divider_height);if(!main)newid=convert_underscores(mindex);else newid=mindex;bd_height=0;if(main)bd_height=bdh_main[mindex];else bd_height=bdh_sub[arri];subwidth2=parseInt(q50)-(parseInt(dqm__border_width*2)+parseInt(dqm__margin_left)+parseInt(dqm__margin_right));sd="<layer id=qm"+mindex+" onMouseOut=\"dqm__handleMousemove(event)\" position=absolute z-index=900000"+level+" top="+0+" left="+0+" width="+q50+" height="+bd_height+" visibility='hide'";if(bc!="transparent")sd+=" bgcolor="+bc;sd+=">";eeipos=dqm__border_width;i=0;while(eval("window.dqm__subdesc"+mindex+"_"+i)){id=mindex+"_"+i;iid=-1;tval=eval("window.dqm__icon_index"+mindex+"_"+i);if((tval || tval==0)&& eval("window.dqm__icon_image"+tval)){iid=tval;q52=q33(eval("dqm__icon_image_wh"+iid));q51=eval("window.dqm__icon_rollover"+iid);}q47="position='absolute' left='"+bw+"' top='"+bw+"' width='"+(q50-(bw*2))+"'";q49="";if(iid>-1)q49="' border=0 width='"+q52[0]+"' height='"+q52[1]+"'>";tmbgc=q15("dqm__menu_bgcolor"+mindex,dqm__menu_bgcolor);it_height=q15("dqm__escape_item_height"+id,dqm__escape_item_height);sd+="<layer id=qmitem"+id+" class='qms"+newid+"' height="+it_height+" width="+subwidth2+" top="+eeipos+" left="+dqm__border_width+" "+q47+" bgcolor='"+tmbgc+"'>";q130=q15("dqm__text_alignment"+mindex,dqm__text_alignment);q125="";if(iid>-1)q125+="<img src='"+eval("dqm__icon_image"+iid)+q49;tval=eval("dqm__subdesc"+id);(q130=="right")? sd+=tval+q125:sd+=q125+tval;q131="";q132="";q129="";q134="";tval=eval("window.dqm__2nd_icon_index"+mindex+"_"+i);if((tval || tval==0)&& eval("window.dqm__2nd_icon_image"+tval)){q126=tval;q127=q33(eval("dqm__2nd_icon_image_wh"+q126));q128=q33(eval("dqm__2nd_icon_image_xy"+q126));q129=eval("dqm__2nd_icon_rollover"+q126);q134=eval("dqm__2nd_icon_image"+q126);(q130=="left")? tval=(q50-(bw*2)-dqm__margin_right-q127[0]+q128[0]):tval=bw+dqm__margin_left+q128[0];q131="<layer position='absolute' top='"+q128[1]+"' left="+tval+"'><img src='";q132="' width='"+q127[0]+"' height='"+q127[1]+"'></layer>";}sd+=q131+q134+q132+"</layer>";hlbgc=q15("dqm__hl_bgcolor"+mindex,dqm__hl_bgcolor);sd+="<layer id=qmitemhl"+id+" class='hlqm"+newid+"' height="+it_height+" width="+subwidth2+" top="+eeipos+" left="+dqm__border_width+" "+q47+" visibility='hide' bgcolor="+hlbgc+">";q125="";if(iid>-1)q125+="<img src='"+q51+q49;tval=q15("dqm__hl_subdesc"+id,eval("dqm__subdesc"+id));(q130=="right")? sd+=tval+q125:sd+=q125+tval;sd+=q131+q129+q132+"</layer>";eeipos+=it_height+dqm__divider_height;i++;}document.write(sd+"</layer>");};function q1(id,main){sub=q16("qm"+id);dh=q15("dqm__divider_height"+id,dqm__divider_height);bw=q15("dqm__border_width"+id,dqm__border_width);sub.bw=bw;if(!q61){subc=sub.layers;q53=new Array(subc.length/2);q54=new Array(subc.length/2);ih=bw;rc=0;for(j=0;j<subc.length;j=j+2){nsth=subc[j].clip.height+dqm__margin_bottom;q53[rc]=ih;q54[rc]=subc[j].clip.height;ih+=q54[rc]+dh;if(j>subc.length-3)ih=ih - dh;rc++;}ih+=bw;sub.q55=q53;sub.q56=q54;sub.lasthl=null;sub.q60=null;} sxy=q33(q15("dqm__sub_xy"+id,dqm__sub_xy));if(main){q85=q103(id);if(q85!=null){sub.style.left=parseInt(q85.x)+parseInt(sxy[0])+parseInt(q85.width);sub.top=q85.y+sxy[1];}}else  {pid=id.substring(0,id.lastIndexOf("_"));psub=q16("qm"+pid);pitem=id.substring(id.lastIndexOf("_")+1);sub.left=psub.left+psub.clip.width+sxy[0];sub.top=psub.top+psub.q55[pitem]+sxy[1];}};function q103(id){if(!eval("document.menu"+id))return null;q85=q16("menu"+id);q34[id]=q85.x;q35[id]=q85.y;q36[id]=q85.width;q37[id]=q85.height;q85=q16("qmim"+id);q85.left=q34[id];q85.top=q35[id];return q85;};function q2(e,id){menu=q16("qm"+id);bw=menu.bw;x=e.clientX;y=e.clientY;mx=menu.left;my=menu.top;mw=menu.clip.width;for(i=0;i<menu.q55.length;i++){if((x>parseInt(mx)+parseInt(bw))&&(x<parseInt(mx)+parseInt(mw)-parseInt(bw))&&(y>parseInt(my)+parseInt(menu.q55[i]))&&(y<parseInt(my)+parseInt(menu.q55[i])+parseInt(menu.q56[i]))){tval=id+"_"+i;if(menu.lasthl!=tval)q5(menu,tval);else  if(menu.q60==tval)q122(false,tval);return;}}q30(menu);};function q4(menu){hl_obj=q42(menu.layers,"qmitemhl"+menu.lasthl);hl_obj.visibility="hide";q122(true);q41=null;menu.lasthl=null;};function q5(menu,hl_id){q111();if((menu.lasthl!=null)&&(menu.lasthl!=hl_id))q4(menu);hl_obj=q42(menu.layers,"qmitemhl"+hl_id);hl_obj.visibility="show";q41=hl_id;q122(false,hl_id);if(menu.q60!=null)q6(menu.q60);(showMenu(null,hl_id))? menu.q60=hl_id:menu.q60=null;menu.lasthl=hl_id;};function q42(layeq69,index){for(ii=0;ii<layeq69.length;ii++)if(layeq69[ii].id==index)return layeq69[ii];return null;};function dqm__handleMousemove(e){if((!q61)&&(!q40))return;x=e.pageX;y=e.pageY;if((q39!=null)&&(q105[q39])){if((to=q45(x,y,q44(q39)))!=null){q64=new Object();q64.clientX=x;q64.clientY=y;q2(q64,to);q111();return;}}for(i=0;i<q18;i++){if((x>q34[i])&&(x<parseInt(q34[i])+parseInt(q36[i]))&&(y>q35[i])&&(y<parseInt(q35[i])+parseInt(q37[i]))){if(q39!=i){if(q39!=null){if(q105[q39])q6(q39);q111();q27(q39);q39=null;}showMenu(null,i);q39=i;}else {q122(false,i);q111();}return;}}if(q39!=null){if(q105[q39]){q30(q16("qm"+q39));q94=q39;q111();q93=setTimeout("q96()",dqm__nn4_mouse_off_delay);}else {q27(q39);q39=null;}q122(true);}};function q111(){if(q93!=null){clearTimeout(q93);q93=null;}};function q96(){q6(q94);q27(q94);q39=null;};function q44(id){tm=q16("qm"+id);if(tm.q60!=null)return q44(tm.q60);else  return id;};function q45(x,y,id){tm=q16("qm"+id);mx=tm.left;my=tm.top;mw=tm.clip.width;mh=tm.clip.height;if((x>=mx)&&(x<(parseInt(mx)+parseInt(mw)))&&(y>=my)&&(y<(parseInt(my)+parseInt(mh)))){return id;}id=id+"";if(id.indexOf("_")>-1){idbase=id.substring(0,id.lastIndexOf("_"));return q45(x,y,idbase);}else  return null;};function showMenu(e,id){if(!q61)return false;if(q121[id]){timg=q16("qmim"+id);timg.visibility="show";q122(false,id);}tval=id+"";(tval.indexOf("_")>-1)? q82=id.substring(0,id.indexOf("_")):q82=id;eval(eval("window.dqm__showmenu_code"+q82));if(q15("dqm__subdesc"+id+"_0",null)!=null){menu=q16("qm"+id);menu.visibility="show";return true;}return false;};function q6(id){tm=q16("qm"+id);if(tm.lasthl!=null)q30(tm);tm.visibility="hide";ts=tm.q60;if(ts!=null){tm.q60=null;q30(tm);q6(ts);}};function mclick(e){if(q41!=null)q32(q41);};function q15(pname,rv){if(eval("window."+pname))return eval(pname);else  return rv;};function q16(id){return eval("document."+id);};function q31(){for(i=0;i<q18;i++){if(q105[i])q1(i,true);else q103(i);}for(i=0;i<q19.length;i++)q1(q19[i],false);};function dqm__handleResize(){if(dqm__nn4_reaload_after_resize){q61=false;q40=true}else q31();};function dqm__handleOnload(){if(q61)return;q31();q61=true;onload_finished=true;eval(window.dqm__onload_code);dqm__handleResizeHandler();};function q27(uid){if(q121[uid]){q64=q16("qmim"+uid);q64.visibility="hide";}eval(eval("window.dqm__hidemenu_code"+uid));};function dqm__handleResizeHandler(){        if(this.innerWidth !=ice_origWidth || this.innerHeight !=ice_origHeight)    {ice_origWidth=this.innerWidth;ice_origHeight=this.innerHeight;q31();   }    setTimeout('dqm__handleResizeHandler()',500);}
