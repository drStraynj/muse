q82=null;q93=null;q94=null;q95=null;sub_q98="";item_q98="";onload_finished=false;ie4=false;ns4=false;q19=new Object();q19.size=0;if(!window.dqm__cancel_onload){document.onmousemove=dqm__handleMousemove;onresize=dqm_handleResize;onload=dqm__handleOnload;}q18=q100();for(m=0;m<q18;m++)if(q105[m])q0(m+"");for(j=0;j<q19.size;j++)q0(q19["tree"+j]);write_mainbar();;function write_mainbar(){sd="<div id='dqmbar' style='position:absolute;visibility:hidden;top:0;left:0;'>";mitemx=0;mitemy=0;if(dqm__main_use_dividers)dqm__main_item_gap=0;max_h=0;max_w=0;for(i=0;i<q18;i++){if((mitemh=q15("dqm__main_height",0,i))>max_h)max_h=mitemh;if((mitemw=q15("dqm__main_width",0,i))>max_w)max_w=mitemw;}for(i=0;i<q18;i++){mitemw=q15("dqm__main_width",0,i);mitemh=q15("dqm__main_height",0,i);q130=q15("dqm__main_text_alignment",0,i);mbgc=q15("dqm__main_bgcolor",0,i);mhlbgc=q15("dqm__main_hl_bgcolor",0,i);mtc=q15("dqm__main_textcolor",0,i);mhltc=q15("dqm__main_hl_textcolor",0,i);mtd=q15("dqm__main_textdecoration",0,i);mhltd=q15("dqm__main_hl_textdecoration",0,i);mff=q15("dqm__main_fontfamily",0,i);mfs=q15("dqm__main_fontsize",0,i);mfw=q15("dqm__main_fontweight",0,i);mft=q15("dqm__main_fontstyle",0,i);mtm=q15("dqm__main_margin_top",0,i);mbm=q15("dqm__main_margin_bottom",0,i);iid=-1;tval=window["dqm__micon_index"+i];if((tval || tval==0)&& window["dqm__icon_image"+tval]){iid=tval;q52=q33(q16("dqm__icon_image_wh"+iid));q51=window["dqm__icon_rollover"+iid];}if(dqm__align_items_bottom_and_right){if(dqm__main_horizontal)mitemy=max_h-mitemh;else mitemx=max_w-mitemw;}q47=" font-style:"+mft+";font-weight:"+mfw+";font-size:"+mfs+"px;font-family:"+mff+";padding-left:"+dqm__main_margin_left+"px;padding-right:"+dqm__main_margin_right+"px;padding-top:"+mtm+"px;padding-bottom:"+mbm+"px;";dibw=dqm__main_border_width;sd+="<div align='"+q130+"' style='position:absolute;cursor:pointer;top:"+mitemy+"px;left:"+mitemx+"px;width:"+(mitemw+(dibw*2))+"px;height:"+(mitemh+(dibw*2))+"px;";if(dqm__main_border_color!="transparent")sd+="background-color:"+dqm__main_border_color+";";sd+="'>";tvadj=0;thadj=0;tvadj=mtm+mbm;thadj=dqm__main_margin_left+dqm__main_margin_right;if(!q150 && q145){tvadj=0;thadj=0;}sd+="<div  id='menu"+i+"' style='position:absolute;top:"+dibw+"px;left:"+dibw+"px;width:"+(mitemw-thadj)+"px;height:"+(mitemh-tvadj)+"px;";if(mbgc!="transparent")sd+="background-color:"+mbgc+";";sd+=" color:"+mtc+";text-decoration:"+mtd+";";sd+=q47;sd+="'>";q125="";if(iid>-1) q125="<img src='"+q16("dqm__icon_image"+iid)+"' border=0 width='"+q52[0]+"' height='"+q52[1]+"'>";tval=q16("dqm__maindesc"+i);(q130=="right")? sd+=tval+q125:sd+=q125+tval;sd+="</div>";sd+="<div id='qmim"+i+"'   onclick=\"q32('"+i+"')\" align='"+q130+"' style='position:absolute;cursor:pointer;visibility:hidden;top:"+dibw+"px;left:"+dibw+"px;width:"+(mitemw-thadj)+"px;height:"+(mitemh-tvadj)+"px;";if(mhlbgc!="transparent")sd+="background-color:"+mhlbgc+";";sd+=" color:"+mhltc+";text-decoration:"+mhltd+";";sd+=q47;sd+="'>";q125="";if(iid>-1) q125="<img src='"+q51+"' border=0 width='"+q52[0]+"' height='"+q52[1]+"'>";tval=q15("dqm__hl_maindesc"+i,q16("dqm__maindesc"+i));(q130=="right")? sd+=tval+q125:sd+=q125+tval;sd+="</div>";sd+="</div>";if((!dqm__main_use_dividers)||(i==(q18-1)))dibw=(dibw*2);if(dqm__main_horizontal)mitemx+=mitemw+dibw+dqm__main_item_gap;else mitemy+=mitemh+dibw+dqm__main_item_gap;}sd+="</div>";document.write(sd);  };function generate_mainitems(){dibw=dqm__main_border_width;max_h=0;max_w=0;tot_h=0;tot_w=0;for(i=0;i<q18;i++){if((mitemh=q15("dqm__main_height",0,i))>max_h)max_h=mitemh;if((mitemw=q15("dqm__main_width",0,i))>max_w)max_w=mitemw;tot_h+=mitemh;tot_w+=mitemw;}max_h+=dibw*2;max_w+=dibw*2;the_w=max_w;the_h=max_h;if(dqm__main_horizontal){the_w=tot_w;if(dqm__main_use_dividers)the_w+=(q18*dibw)+dibw;else the_w+=(q18*(dibw*2))+((q18-1)*dqm__main_item_gap);}else {the_h=tot_h;if(dqm__main_use_dividers)the_h+=(q18*dibw)+dibw;else the_h+=(q18*(dibw*2))+((q18-1)*dqm__main_item_gap);}document.write("<img id='imgbar' src='"+dqm__codebase+"tdqm_pixel.gif' width="+the_w+" height="+the_h+">")};function q0(mindex){level=0;i=0;while((i=mindex.indexOf("_",i+1))>-1)level++;bw=q15("dqm__border_width",0,mindex);q50=q15("dqm__sub_menu_width",0,mindex);bc=q15("dqm__border_color",0,mindex);dh=q15("dqm__divider_height",0,mindex);hltc=q15("dqm__hl_textcolor",0,mindex);q144=q15("dqm__textcolor",0,mindex);sd="<div id=qm"+mindex+" style='z-index:900"+level+";cursor:pointer;position:absolute;top:"+0+"px;left:"+0+"px;visibility:hidden;width:"+q50+"px;";if(bc!="transparent")sd+=" background-color:"+bc+";";sd+="'>";i=0;while(window["dqm__subdesc"+mindex+"_"+i]){id=mindex+"_"+i;if(q16("window.dqm__subdesc"+id+"_0")){eval("q19.tree"+q19.size+"=\""+id+"\"");q19.size++;}iid=-1;tval=q16("window.dqm__icon_index"+mindex+"_"+i);if((tval || tval==0)&& q16("window.dqm__icon_image"+tval)){iid=tval;q52=q33(q16("dqm__icon_image_wh"+iid));q51=q16("window.dqm__icon_rollover"+iid);}ttn=dqm__margin_left+dqm__margin_right;q47="style='position:absolute;cursor:hand;left:"+bw+"px;top:"+bw+"px;width:"+(q50-(bw*2)-ttn)+"px;";q48=" font-style:"+dqm__fontstyle+";font-weight:"+dqm__fontweight+";font-size:"+dqm__fontsize+"px;font-family:"+dqm__fontfamily+";padding-left:"+dqm__margin_left+"px;padding-right:"+dqm__margin_right+"px;padding-top:"+dqm__margin_top+"px;padding-bottom:"+dqm__margin_bottom+"px;";q49="";if(iid>-1)q49="' border=0 width='"+q52[0]+"' height='"+q52[1]+"'>";q92=q15("dqm__menu_bgcolor",0,mindex);mbgc_hl=q15("dqm__hl_bgcolor",0,mindex);q130=q15("dqm__text_alignment",0,mindex);sd+="<div align='"+q130+"' id=qmitemst"+id+" "+q47+" background-color:"+q92+";";sd+=q48+" text-decoration:"+dqm__textdecoration+";color:"+q144+";'>";q125="";if(iid>-1)q125="<img src='"+q16("dqm__icon_image"+iid)+q49;tval=q16("dqm__subdesc"+id);(q130=="right")? sd+=tval+q125:sd+=q125+tval;sd+="</div>";sd+="<div align='"+q130+"' id=qmitemhl"+id+" "+q47+" visibility:hidden;background-color:"+mbgc_hl+";";sd+=q48+" text-decoration:"+dqm__hl_textdecoration+";color:"+hltc+";"+item_q98;sd+="' onclick=\"q32('"+id+"')\">";q125="";if(iid>-1)q125+="<img src='"+q51+q49;tval=q15("dqm__hl_subdesc"+id,q16("dqm__subdesc"+id));(q130=="right")? sd+=tval+q125:sd+=q125+tval;sd+="</div>";i++;}document.write(sd+"</div>");};function q1(id,main){sub=q141("qm"+id);subc=sub.getElementsByTagName("div");bw=q15("dqm__border_width",0,id);dh=q15("dqm__divider_height",0,id);ih=bw;for(j=0;j<subc.length;j=j+2){subc[j].style.top=ih+"px";subc[j+1].style.top=ih+"px";ih+=subc[j].offsetHeight+dh;if(j>subc.length-3)ih -=dh;}ih+=bw;sub.style.height=ih+"px";sub.lasthl=null;sub.q60=null;sxy=q33(q15("dqm__sub_xy"+id,dqm__sub_xy));if(main){q140=document.getElementById("menu"+id);if(q140){q85=q141("menu"+id);tc=q17(q85);sub.style.left=tc.x+sxy[0]+q85.offsetWidth+"px";sub.style.top=tc.y+sxy[1]+"px";}}else {psub=q141("qm"+id.substring(0,id.lastIndexOf("_")));if(!ns5)nenuzz=q141("qmitemst"+id).offsetTop;else nenuzz=parseInt(q141("qmitemst"+id).style.top);sub.style.left=psub.offsetLeft+psub.offsetWidth+sxy[0]+"px";sub.style.top=psub.offsetTop+nenuzz+sxy[1]+"px";}};function q103(){q140=q141("dqmbar");q87=q17(q141("imgbar"));q140.style.left=q87.x+"px";q140.style.top=q87.y+"px";q140.style.visibility="visible";};function q4(menu){q141("qmitemhl"+menu.lasthl).style.visibility="hidden";q122(true);menu.lasthl=null;};function q5(menu,hl_id){q30(menu);q141("qmitemhl"+hl_id).style.visibility="visible";q122(false,hl_id);q86=menu.q60;if((q86!=null)&&(hl_id.indexOf(q86)==-1)){q141("qmitemhl"+q86).style.visibility="hidden";q6(q86);}menu.q60=null;if(popIt(hl_id))menu.q60=hl_id;menu.lasthl=hl_id;q95=menu;};function detectSource(o){if(o.id==null || o.id==""){q64=o.parentElement;while(q64 !=null){if(q64.id!="")return q64.id;q64=q64.offsetParent;}return "";}return o.id;};function dqm__handleMousemove(e){if(!q61)return;q81=detectSource(event.srcElement);if(!q81)q81="none";if(q81.indexOf("menu")>-1){q79(q81.substring(4));}else {if((q82!=null)&&(q81.indexOf("qm")<0)){q122(true); q94=q82;if(q95!=null)q30(q95);q96();return;}if(q81.indexOf("qmim")>-1){q84=q81.substring(4);q122(false,q84);if(q105[q84])q89(q84);return;}q84=q81.substring(8);if(q81.indexOf("qmitemst")>-1){q5(q16("qm"+q84.substring(0,q84.lastIndexOf("_"))),q84);}else  if(q81.indexOf("qmitemhl")>-1){q90=q16('qm'+q84.substring(0,q84.lastIndexOf('_')));if(q90.q60!=null){q122(false,q84);q89(q84);}}}};function q89(index){q91=q141("qm"+index);if(q91.q60!=null){q6(q91.q60);q91.q60=null;}q30(q91);};function q79(id){if(q82!=id){if(q82!=null){if(eval("window.dqm__subdesc"+q82+"_0"))q6(q82);q142(q82);}q141("qmim"+id).style.visibility="visible";popIt(id);q82=id;if(eval("window.dqm__showmenu_code"+q82))eval(eval("dqm__showmenu_code"+q82));}};function popIt(id){if(q15("dqm__subdesc"+id+"_0",null)!=null){q141("qm"+id).style.visibility="visible";return true;}};function q96(){q6(q94);q142(q82);q82=null;};function q142(uid){q141("qmim"+uid).style.visibility="hidden";eval(eval("window.dqm__hidemenu_code"+uid));};function q6(id){if(eval("window.dqm__subdesc"+id+"_0")){tm=q141("qm"+id);tm.style.visibility="hidden";if(tm.lasthl!=null)q141("qmitemhl"+tm.lasthl).style.visibility="hidden";ts=tm.q60;if(ts!=null){q141("qmitemhl"+tm.q60).style.visibility="hidden";tm.q60=null;q6(ts);}}};function hideMenu(e){return;};function showMenu(e){return;};function q15(pname,rv,id){tindex="";if(id || id==0){tindex=id;rv=q16(pname);}if(q16("window."+pname+tindex))return q16(pname+tindex);else return rv;};function q16(id){return eval(id);};function q141(id){return document.getElementById(id);};function dqm_handleResize(){q103();for(i=0;i<q18;i++){if(q105[i])q1(i,true);}for(i=0;i<q19.size;i++)q1(q19["tree"+i],false);};function q17(o){q70=new Object();q70.x=o.offsetLeft;q70.y=o.offsetTop;q64=o.offsetParent;while(q64 !=null){q70.y+=q64.offsetTop;q70.x+=q64.offsetLeft;q64=q64.offsetParent;}return q70;};function dqm__handleOnload(){if(q61)return;dqm_handleResize();q61=true;onload_finished=true;eval(window.dqm__onload_code);};function q27(uid){eval("q16(qmim"+uid+")."+q59);eval(eval("window.dqm__hidemenu_code"+uid));}
