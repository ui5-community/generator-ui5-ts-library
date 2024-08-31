/*!
 * ${copyright}
 */
<% if (gte1_119_0) { %>
import Lib from "sap/ui/core/Lib";
<% } else { %>
import ObjectPath from "sap/base/util/ObjectPath";
<% } %>

// library dependencies must also be imported here
import "sap/ui/core/library";

/**
 * Initialization Code and shared classes of library <%= libId %>.
 */

// delegate further initialization of this library to the Core<% if (gte1_119_0) { %>
const thisLib: { [key: string]: unknown } = Lib.init({<% } else { %>
// Hint: sap.ui.getCore() must still be used here to support preload with sync bootstrap!
sap.ui.getCore().initLibrary({<% } %>
	name: "<%= libId %>",
	version: "${version}",<% if (!gte2_0_0) { %>
	dependencies: [
		// keep in sync with the ui5.yaml and .library files
		"sap.ui.core"
	],<% } %>
	types: ["<%= libId %>.ExampleColor"],
	interfaces: [],
	controls: ["<%= libId %>.Example"],
	elements: [],
	noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
})<% if (gte1_119_0) { %> as { [key: string]: unknown };<% } else { %>;

// get the library object from global object space because all enums must be attached to it to be usable as UI5 types
// FIXME: this line is planned to become obsolete and may need to be removed later
const thisLib: { [key: string]: unknown } = ObjectPath.get("<%= libId %>") as {
	[key: string]: unknown;
};<% } %>

/**
 * Semantic Colors of the com.myorg.myUI5Library.Example control.
 *
 * @enum {string}
 * @public
 */
export enum ExampleColor {
	/**
	 * Default color (brand color)
	 * @public
	 */
	Default = "Default",

	/**
	 * Highlight color
	 * @public
	 */
	Highlight = "Highlight"
}
// FIXME: this line is planned to become obsolete and may need to be removed later
thisLib.ExampleColor = ExampleColor; // add the enum to the library; this is important because UI5 otherwise cannot identify the type and will skip type checking for properties of this type

// export the library namespace
export default thisLib;
