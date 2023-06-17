/*!
 * ${copyright}
 */
import Control from "sap/ui/core/Control";
<%- metadataOptionsImportLine %>import ExampleRenderer from "./ExampleRenderer";
import { ExampleColor } from "./library";

/**
 * Constructor for a new <code><%= libId %>.Example</code> control.
 *
 * Some class description goes here.
 * @extends Control
 *
 * @author <%= author %>
 * @version ${version}
 *
 * @constructor
 * @public
 * @name <%= libId %>.Example
 */
export default class Example extends Control {
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(id?: string | $ExampleSettings);
	constructor(id?: string, settings?: $ExampleSettings);
	constructor(id?: string, settings?: $ExampleSettings) {
		super(id, settings);
	}

	static readonly metadata: <%= metadataOptionsType %> = {
		library: "<%= libId %>",
		properties: {
			/**
			 * The text to display.
			 */
			text: {
				type: "string",
				group: "Data",
				defaultValue: null,
			},
			/**
			 * The color to use (default to "Default" color).
			 */
			color: {
				type: "<%= libId %>.ExampleColor",
				group: "Appearance",
				defaultValue: ExampleColor.Default,
			},
		},
		events: {
			/**
			 * Event is fired when the user clicks the control.
			 */
			press: {},
		},
	};

	static renderer: typeof ExampleRenderer = ExampleRenderer;

	onclick = () => {
		this.firePress();
	};
}
