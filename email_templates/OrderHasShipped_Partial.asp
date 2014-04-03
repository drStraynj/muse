<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>
<style type="text/css">body,table,td {font: 11px Verdana; color: #000000;}</style>
<body text="#000000">
<table width="650" border="1" cellspacing="0" cellpadding="20" bgcolor="#FFFFFF" bordercolor="#CCCCCC" align="center">
  <tr>
    <td><a href="../../Default.asp">$(CompanyLogo)</a><br>
      <br>
      Hello $(FirstName),<br>
      <br>
      One or more items in your order have shipped. To view which items have shipped, 
      click on the tracking link below. (Order#: $(OrderNo) placed on $(OrderDate))<br>
      $(DownloadLink)
      <br>
      <table width="100%" border="0" cellspacing="1" cellpadding="5">
        <tr valign="top"> 
          <td colspan="2"> 
            <li> To track your package visit the following link:<br>
            &nbsp;&nbsp;&nbsp;  <a href="$(TrackingLink) ">$(TrackingLink) </a><br>
            
            <li> You may also use the preceding link to review your order details 
              or print an invoice<br>
            
            </td>
        </tr>
      </table>
      <br>
      <b>Thanks again for shopping at $(StoreName)!</b><br>
      Visit us anytime at <a href="$(HomeURL)">$(HomeURL)</a></td>
  </tr>
</table>
</body>
</html>
