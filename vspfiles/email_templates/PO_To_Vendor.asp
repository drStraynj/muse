<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>
<style type="text/css">body,table,td {font: 11px Verdana; color: #000000;}</style>
<body text="#000000">
<table width="650" border="1" cellspacing="0" cellpadding="20" bgcolor="#FFFFFF" bordercolor="#CCCCCC" align="center">
  <tr>
    <td> 
      <table width="100%" border="0" cellspacing="1" cellpadding="5">
        <tr valign="top"> 
          <td width="51%"><a href="../../Default.asp">$(CompanyLogo)</a></td>
          <td width="49%" valign="bottom"><strong>Purchase Order #: <font size="3">$(PO_Number)</font><br>
            Date: </strong>$(PO_Date)<strong><br>
            Customer Order #: </strong>$(OrderNo)</td>
        </tr>
        <tr valign="top"> 
          <td><b>From / Vendor:</b><br>
            $(PO_From) </td>
          <td><b>Ship To:</b><br>
            $(PO_ShipTo)</td>
        </tr>
        <tr valign="top"> 
          <td><b>Ship Via:</b> $(PO_ShipVia) <br> <strong>Due Date:</strong> 
            $(PO_DueDate) </td>
          <td><b>Terms:</b> $(PO_Terms)<br> <strong>FOB:</strong> $(PO_FOB)</td>
        </tr>
        <tr valign="top"> 
          <td colspan="2"> $(PO_Details) </td>
        </tr>
        <tr valign="top"> 
          <td colspan="2"><b>Notes:</b> $(PO_Notes)</td>
        </tr>
        <tr valign="top"> 
          <td colspan="2"><b>Signed By:</b> $(PO_SignedBy)</td>
        </tr>
      </table>
      
    </td>
  </tr>
</table>
</body>
</html>
