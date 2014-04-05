Starter: Checkout CSS
=====================

**Author: Alex Martinez (alex_martinez@volusion.com)**

_Last edited: November 21, 2012_

---

Installation:
-------------

1. Copy the included ```.css``` files into your templates' ```css/``` directory.
2. Copy the included images folder into your templates' ```images/``` directory.


Open your ```template_TEMPLATENAME.html``` file and make sure you have the following script dependencies just above the ```</head>``` tag:

```HTML
<script type="text/javascript" src="/v/vspfiles/templates/TEMPLATENAME/js/design_toolkit.js"></script>
<script>DTK.loadCSS("TEMPLATENAME");</script>
```

_**NOTE:** Be sure to change ```TEMPLATENAME``` to the name of your template folder._



Editing:
--------

Edit your files locally, pushing up to the server and refreshing to view your changes. This ensures you have a local copy in the event you accidentally overwrite something on the server and lose all your changes.


Todo:
-----

* Include ```.less``` files
* Normalize comment styles and organize hierarchy of selector groups within files
