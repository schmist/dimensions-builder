LEGO Dimensions Team Builder
============================

This project is a [fork](https://github.com/jakobharder/dimensions-builder) of the excellent team builder web application for LEGO Dimensions created by [Jakob Harder](https://github.com/jakobharder). The original web app is hosted at http://dimensions-builder.com/

## Overview
The primary goal of this fork a twofold:
1. Keep the data up to date. This is a work in progress.
2. Modernize the technology stack. This goal has mostly been completed.

The secondary goal is to extend the functionality, if need arises. However, no roadmap has been defined in this matter yet.


## Main changes
- Project is no longer based on the Angular 2 Universal Starter Kit. Instead, it has been ported to a plain Angular (4) application.
- All ad-related code has been removed
- The Disqus comment functionality has been removed

## Run from Master
If you want to build the web application yourself, please make sure you fulfil the requirements:
- node v6.11+
- npm 3.10+

Afterwards, you only have to follow a few short steps.

1. Clone: ```git clone git@github.com:schmist/dimensions-builder.git```
2. Install dependencies: ```npm install```
3. Run: ```npm start```
4. If your browser does not open automatically, point it to http://localhost:4200


Legal
=====
Lego Dimensions and related characters are Registered Trademark and Copyright of the LEGO Group. All rights reserved.

License
=========
Per its original author, the team builder source code is licensed under the terms of the MIT license. 

