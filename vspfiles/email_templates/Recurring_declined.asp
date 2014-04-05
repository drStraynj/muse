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
      <b><br>
      $(Config_CompanyNameLegal) - <font color="#CC0000">PAYMENT DECLINED</font> 
      </b> <br>
      <br>
Hello $(FirstName),
<br><br>
Our attempt to process your automatic recurring payment
in the amount of $(RecurringPrice) was not successful.
Please submit a new payment method for this order by
<a href="$(Config_FullSecureStoreURL)AccountSettings.asp?modwhat=change_c&OrderPlaced=$(OriginalOrderID)&Recurring=Y&DirectLink=Y">clicking here</a>.
<br><br>As always, we appreciate your business!
<br><br>Thank you for choosing $(Config_CompanyNameShort)!
	</td>
  </tr>
</table>
</body>
</html>
