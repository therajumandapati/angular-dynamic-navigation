##Dynamic Navigation(Most unsuited name)

An AngularJS directive that solves one and only one problem. 

**You:** What's that problem dude?<br>
**Me:** Alright. How do you maintain consistent state on your menu items as the user navigates to a particular route ? You gotta write your own code to put an active page's menu item in a particular state(mostly done by applying a CSS class once the menu-item is clicked on non dynamic pages).<br>
**Me again:** This directive solves that problem by exposing a simple api as below.<br>
**Me**. You're welcome! ;)<br>

![NavItemDirective](https://raw.githubusercontent.com/mvpspl619/nav-item-directive/master/demo.png)

###How does it work ?
The directive watches **$location.path()** and when the current path matches the value given in the attribute **nav-item-route**, a class name provided under attribute **nav-item-class** is added to the element that the directive is on.

###How do I use it ?
 1. Get the bower package "Dynamic-Navigation"
 2. Add it as a dependency to your AngularJS module
 3. On your navigation menu item, add the directive **nav-item** as an attribute and two other attributes **nav-item-class** and **nav-item-route**, assign them proper values.