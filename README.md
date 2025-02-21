<p align="center">
  <img src="assets/images/logo-read-me.png" />
</p>

<p align="center">
  A library of reusable and highly customizable React components, <br/>
  built with TypeScript and styled with Tailwind CSS.
</p>
<br/>

# Installation

```bash
npm install quick-ui-components
```

> [!IMPORTANT]
> You need to install **[Tailwind CSS](https://tailwindcss.com/)** to use the components.

# Usage

> For now, only the Button, Card Product, and Spinner components are made, but more components will be added in the future.

> To use the Button component, simply import it and use it in your project.

# Button

This `Button` component renders a custom button with dynamic styling options.

## Properties

| Property    | Type              | Description                                                                                                                                                                                                                   | Default Value |
| ----------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| colorBg     | string            | Button background color (**_The color must be in hexadecimal format_**). Set it to `{false}` to remove the background.                                                                                                        | `#a551e4`     |
| size        | string            | Button size: "sm", "md", "lg", "xl", "2xl".                                                                                                                                                                                   | `sm`          |
| radius      | string            | Button border radius type.                                                                                                                                                                                                    | `lg`          |
| className   | string            | Additional classes to customize the button.                                                                                                                                                                                   | -             |
| pointer     | boolean           | Enable or disable pointer cursor.                                                                                                                                                                                             | `true`        |
| pulse       | boolean           | Enable or disable pulse animation when clicking the button.                                                                                                                                                                   | `true`        |
| colorText   | string            | Button text color.                                                                                                                                                                                                            | `#ffffff`     |
| ripple      | boolean           | Enable or disable "ripple-effect" when clicking the button.                                                                                                                                                                   | `true`        |
| hoverColor  | string or boolean | Background color on hover. You can pass a color as a string (in any format, name, hex, rgb, etc.) or set it to `true` to automatically darken according to the current `colorBg`. If you don't want hover, set it to `false`. | `true`        |
| hoverDarken | number            | Darkening percentage on hover. (If you give negative numbers it will lighten)                                                                                                                                                 | `8`           |
| btnType     | string            | Button type: primary, secondary, or tertiary                                                                                                                                                                                  | `primary`     |
| icon        | ReactNode         | Icon to display on the button. If provided, the button will display the icon instead of text.                                                                                                                                 | `null`        |
| children    | string            | Add text content to the button                                                                                                                                                                                                | `null`        |
| style       | CSSProperties     | Add inline styles normally in an object like any HTML element                                                                                                                                                                 | -             |
| disable     | boolean           | Disable the button                                                                                                                                                                                                            | `false`       |
| type        | string            | Button type: submit, reset, button                                                                                                                                                                                            | `button`      |

> If we wanted to add an icon with text, we could combine the use of `icon` and `children` to achieve it.
> Similarly, if we wanted to add an icon without text, we simply set `icon` and do not pass anything to `children`.

## Example

```tsx
import { Button } from "quick-ui-components";

const App = () => {
  return (
    <Button
      colorBg="#ff6347"
      size="md"
      radius="md"
      className="my-custom-class"
      pointer={true}
      pulse={true}
      colorText="#ffffff"
      ripple={true}
      hoverColor="#ff7a28"
      hoverDarken={30}
      btnType="primary"
      icon={<Icon />}
      children="Click me"
      style={{ margin: "10px" }}
    >
      Click me
    </Button>
  );
};
```

## Hover Effect

The darkening hover effect on the button was efficiently implemented using CSS. When the component loads, the initial background color is set, and the hover color is calculated only once. This is achieved through custom CSS variables (--bg-color and --hover-color), ensuring a smooth and optimized transition when interacting with the button.

```css
.hover\:bg-hover-custom:hover {
  background-color: var(--hover-color);
}
```

This approach minimizes the use of JavaScript by keeping the button's dynamic styling exclusively with CSS, improving the overall performance of the application.

# CardProduct

This `CardProduct` component renders a custom card to display products.

To use it, simply use the quick-ui CLI and add the component to your project.

```bash
npx quick-ui-cli add card-product
```

```tsx
import { CardProduct } from "quick-ui-components";
```

The component will be copied to the following path in your project:

```
src
└── components
    └── ui
        └── card-product
            └── CardProduct.tsx
```

## Properties

| Property    | Type    | Description                                                                    | Default Value |
| ----------- | ------- | ------------------------------------------------------------------------------ | ------------- |
| title       | string  | Product title.                                                                 | -             |
| image       | string  | Product image URL.                                                             | -             |
| description | string  | Product description.                                                           | -             |
| price       | string  | Product price.                                                                 | -             |
| textButton  | string  | Button text.                                                                   | -             |
| badge       | string  | Badge text, displayed in the top right corner of the card.                     | -             |
| colorBadge  | string  | Badge color (**_The color must be in hexadecimal format or the color name_**). | `#a551e4`     |
| noBadge     | boolean | Disable the badge.                                                             | `false`       |

# Spinner

Renders a custom spinner with dynamic styling options.

To use it, import it and use it in your project.

```tsx
import { Spinner } from "quick-ui-components";
```

## Properties

| Property     | Type   | Description                                                                                 | Default Value |
| ------------ | ------ | ------------------------------------------------------------------------------------------- | ------------- |
| bgColor      | string | Spinner background color (**_The color must be in hexadecimal format or the color name_**). | `#ffffff`     |
| spinnerColor | string | Spinner color (**_The color must be in hexadecimal format or the color name_**).            | `#a551e4`     |
| className    | string | Additional classes to customize the spinner.                                                | -             |
| style        | object | Add inline styles normally in an object like any HTML element.                              | -             |
