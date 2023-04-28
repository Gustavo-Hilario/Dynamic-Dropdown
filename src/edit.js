/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";

import { useState } from "@wordpress/element";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const chosingImage = (e) => {
		setAttributes({ initialImage: e.target.value });
	};

	return (
		<>
			<div {...useBlockProps()}>
				<select class="dynamic-dropdown" onChange={chosingImage}>
					<option
						value="/wp-content/uploads/2014/01/spectacles.gif"
						label="option1"
					>
						Option 1
					</option>
					<option
						value="/wp-content/uploads/2014/01/dsc20050315_145007_132.jpg"
						label="option2"
					>
						Option 2
					</option>
				</select>
				<img id="renderedImage" src={attributes.initialImage} />
			</div>
			<InspectorControls>
				<PanelBody title={__("Show stuff")}>
					<h3>{__("Some Menu")}</h3>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
