# GDPR-plugin

## How to use?

 1. Download plugin, put gdprplugin.js to your JS folder and gdprplugin.css to your Styles folder. 
 2. Put these lines in  ```<head />``` section: 
 
 example:
```html

<link rel="stylesheet" href="../css/gdprstyles.css">
<script src="../js/gdprplugin.js"></script>
```
3. To use GDPR on your website, you must add some HTML code to your HTML.

example:
```html
<div id="overlay"></div>
  <div id="gdpr-plugin-box">
      <h1>GDPR consent</h1>
      <span>GDPR text...</span>
            <button id="gdpr-plugin-button-accept">Accept</button>
            <button id="gdpr-plugin-button-decline">Decline</button>
      </div>
</div>
```
### Warning! Don't forget about id's! They are needed to work properly.
