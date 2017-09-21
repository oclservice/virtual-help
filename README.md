# virtual-help
Widget for the Virtual Help pilot project on the Learning Portal.

## Demo page -- learning-portal.html

The demo page exists to show the basic structure for the Virtual Help drawer, which is based on [Pure Drawer](http://mac81.github.io/pure-drawer/).  The Virtual Help drawer is a Pure Drawer [Single Drawer](http://mac81.github.io/pure-drawer/documentation.html).

The demo page includes:
  * Embed code for Google Analytics and Google Tag Manager which are configured for a test environment.
  * Links to styles required for the Virtual Help drawer: pure-drawer.css, learning-portal.css, and Open Sans font.
  * Links to styles for [Bootstrap 3](http://getbootstrap.com/docs/3.3/) and [Font Awesome 4.7](http://fontawesome.io/), both of which are already present in LibGuides.
  * [jQuery 2.2.4](https://jquery.com/) which is already present in LibGuides.
  * [Moment 2.18.1](https://momentjs.com/) and [Moment Timezone 0.5.13](https://momentjs.com/timezone/) which are needed only if chat availability is determined by schedule and NOT already present in LibGuides.

## Styling -- learning-portal.css

Contains all the CSS needed for the Virtual Help drawer, including overrides to default Pure Drawer styling.

## Code -- learning-portal.js

In short, the code determines the availability of chat for each participating school and directs patrons appropriately.
