Contents of this File
---------------------
   
 * Introduction
 * Requirements
 * Recommended modules
 * Installation
 * Configuration
 * Troubleshooting
 * FAQ
 * Maintainers
 
 
Introduction
----------
	This "Elletourage iOS app" is a proof-of-concept and technology demonstrator.
	It is built using React-Native, 
	
Requirements
----------
	Node modules:
	
	React
	React-Native
	React-Native-Checkbox
	React-Native-Maps
	React-Native-Deprecated-Custom-Components
	React-Native-ALertiOS
	
	
Installation
----------
	(See online tutorial for environment setup)
	"facebook.github.io/react-native/docs/getting-started.html"


Troubleshooting
----------
 * Promise rejection exceptions are caused by malformed Async operations. Check the code for API calls or AsyncStorage calls
 
 * There are scope issues with using the data returned from Async storage. We found a workaround, but the cause of the issue is unknown. So, if you encounter an undefined value from a defined key in an defined JSON object, despite being able to output the object itself, we can't help you. It might have something to do with object bindings, maybe.
 
Bugs and Issues
---------------

 
FAQ
---
 * While it is technically cross-platform, the use of platform-specific components prevents full functionality (MapView and iOS timepicker especially)

 * This app was tested on the iPhone 6 emulator. Smaller screens caused rendering errors (missing buttons, bad formatting). Larger screens appear to be unaffected.
 
MAINTAINERS
-----------

Current maintainers:
 * Zach Y.(zachyu) - flyboring@gmail.com
 * Peter C. - 
 * Andrew H. - i8hampson@gmail.com
 * York L. - 
 <!--se_discussion_list:{"bvNIc420FzYDxtlla1VZe4M3":{"selectionStart":0,"type":"conflict","selectionEnd":23,"discussionIndex":"bvNIc420FzYDxtlla1VZe4M3"},"sFreXEkIZ6gCHPKFGjonJvD5":{"selectionStart":196,"type":"conflict","selectionEnd":559,"discussionIndex":"sFreXEkIZ6gCHPKFGjonJvD5"}}-->
