# @uc-react-ui/multiselect

This is simple React multi select component which uses **Tailwind CSS**. 

Demo available at: https://umutdeveloper.github.io/react-multiselect/

![Demo screenshot](https://umutdeveloper.github.io/react-multiselect/react-multiselect-demo.png)

I have started to create simple components that utilize Tailwind CSS. By removing unnecessary styling code, these components prevent overrides and allow for easy customization through the use of the Tailwind config file, including the ability to change colors. This approach allows for a more streamlined development process and greater flexibility for users of the package.

Features include:

 - Key down and up events for navigating and selecting a list item using the keyboard.
 - Enter key and mouse click events for handling the selection of a list item.
 - The ability for the user to enter and select new options by typing.
 - The ability to remove selected options using the backspace key or by clicking on a delete icon.
 - Customizable with tailwind config file
 - Remove unnecessary styling code

## Installation and usage
The easiest way to use @uc-react-ui/multiselect is to install it from npm, add content folder to Tailwind config file and build it into your app with Webpack. It uses **blue** color as default. It will be customizable in the next versions.

```
npm install @uc-react-ui/multiselect
```

Add module content to **tailwind.config.js**:
```js
/** @type  {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,ts,jsx,tsx}',
		'./node_modules/@uc-react-ui/multiselect/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: []
}
```


Then use it in your app:

```js
import React, { useState } from 'react';
import { MultiSelect, MultiSelectProps } from '@uc-react-ui/multiselect';

export default function App() {
  const [value, setValue] = useState(['desktop']);
  const  props: MultiSelectProps = {
	label: 'Tags',
	name: 'tags',
	size: 'small',
	optionList: [
		{ label: 'desktop' },
		{ label: 'demo' },
		{ label: 'v1' },
		{ label: 'development' },
		{ label: 'test' },
		{ label: 'production' }
	],
	placeholder: 'Add tags',
	value: value,
	valueChange: setValue
  };
  return (
	<div className="p-2">
		<MultiSelect {...props} />
	</div>
  );
}
```

## Props
Props you may want to specify include:

-   `label`  - add a form label to the control
-   `name`  - apply a form name to the control
-   `size`  - "small" selection changes the control size to "sm"
-   `optionList`  - specify the options the user can select from
-   `placeholder`  - change the text displayed when no option is selected
-   `value`  - control the current value
-   `valueChange`  - subscribe to change events

## License
MIT Licensed. Copyright (c) Umut Çakır 2023.