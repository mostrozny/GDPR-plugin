# GDPR-plugin

## What is this?

 This is General Data Protection Regulation plugin for your website. Lightweight, easy-in-use, written in VanillaJS & CSS. 
 After accepting the consent, the window does not pop up for 7 days. This plugin use cookies to save you consent.

## How to use?

 1. Download plugin, put gdprplugin.js from js folder to your JS folder and gdprplugin.css from css folder to your Styles folder. 
 2. Put these lines in  ```<head />``` section: 
 
 example:
```html

<link rel="stylesheet" href="../css/gdprstyles.css">
<script src="../js/gdprplugin.js"></script>
```
3. To use GDPR on your website, you must add some HTML code to your HTML.

example:
```html
<div id="overlay"></div> <!-- overlay for shadow under GDPR box -->
<div id="gdpr-plugin-box">
      <h1>GDPR consent</h1>
      <span>GDPR text...</span>
            <button id="gdpr-plugin-button-accept">Accept</button>
            <button id="gdpr-plugin-button-decline">Decline</button>
      </div>
</div>
```
### Warning! Don't forget about id's! They are needed to work properly.




<p align="center">
<img src="https://raw.githubusercontent.com/mostrozny/GDPR-plugin/master/img/readme.jpg" alt="text" width="600" />
 </p>
