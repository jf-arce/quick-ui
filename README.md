# Instalacion

```bash
npm install quick-ui-components
```

# Uso

> Por ahora solo esta hecho el componente Button, CardProduct y Spinner pero se iran agregando mas componentes en el futuro.

> Para usar el componente Button, simplemente importalo y usalo en tu proyecto.

# Button

Este componente `Button` renderiza un botón personalizado con opciones dinámicas de estilo.

## Propiedades

| Propiedad   | Tipo              | Descripción                                                                                                                                                                                                                                                        | Valor predeterminado |
| ----------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| colorBg     | string            | Color de fondo del botón (**_El color tiene que estar en formato hexadecimal_**). Setearlo en `{false}` para eliminar el fondo.                                                                                                                                    | `#a551e4`            |
| size        | string            | Tamaño del botón: "sm", "md", "lg", "xl", "2xl".                                                                                                                                                                                                                   | `sm`                 |
| radius      | string            | Tipo de radio de borde del botón.                                                                                                                                                                                                                                  | `lg`                 |
| className   | string            | Clases adicionales para personalizar el botón.                                                                                                                                                                                                                     | -                    |
| pointer     | boolean           | Habilitar o deshabilitar cursor tipo puntero.                                                                                                                                                                                                                      | `true`               |
| pulse       | boolean           | Habilitar o deshabilitar animación de pulso al clickear el botón.                                                                                                                                                                                                  | `true`               |
| colorText   | string            | Color del texto del botón.                                                                                                                                                                                                                                         | `#ffffff`            |
| ripple      | boolean           | Habilitar o deshabilitar "ripple-effect" al clickear el botón.                                                                                                                                                                                                     | `true`               |
| hoverColor  | string or boolean | Color de fondo al hacer hover. Se le puede pasar un color como string (en cualquier formato, nombre, hexa, rgb, etc) o setearlo en `true` para que automáticamente se oscuresca según el `colorBg` que este actualmente. Si no queremos hover setearlo en `false`. | `true`               |
| hoverDarken | number            | Porcentaje de oscurecimiento al hacer hover. (Si se le da numeros negativos se aclara)                                                                                                                                                                             | `8`                  |
| btnType     | string            | Tipo de botón: primary, secondaty or tertiary                                                                                                                                                                                                                      | `primary`            |
| icon        | ReactNode         | Icono para mostrar en el botón. Si se proporciona, el botón mostrará el icono en lugar de texto.                                                                                                                                                                   | `null`               |
| children    | string            | Agrega contenido de texto al botón                                                                                                                                                                                                                                 | `null`               |
| style       | CSSProperties     | Agrega stilos en linea normalmente en un objeto como cualquier elemento html                                                                                                                                                                                       | -                    |
| disable     | boolean           | Deshabilita el botón                                                                                                                                                                                                                                               | `false`              |
| type        | string            | Tipo de botón: submit, reset, button                                                                                                                                                                                                                               | `button`             |

> Si quisieramos agregar un icono con texto, podriamos combinar el uso de `icon` y `children` para lograrlo.
> De igual manera, si quisieramos agregar un icono sin texto, simplemente seteamos `icon` y no le pasamos nada al `children`.

## Ejemplo de uso

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

## Efecto de Hover Optimizado

El efecto de oscurecimiento al hacer hover en el botón se implementó de manera eficiente utilizando CSS. Al cargar el componente, se establece el color de fondo inicial y se calcula el color de hover una sola vez. Esto se logra mediante variables CSS personalizadas (--bg-color y --hover-color), asegurando una transición suave y optimizada al interactuar con el botón.

```css
.hover\:bg-hover-custom:hover {
  background-color: var(--hover-color);
}
```

Este enfoque minimiza el uso de JavaScript al mantener el estilo dinámico del botón exclusivamente con CSS, mejorando el rendimiento general de la aplicación.

# CardProduct

Este componente `CardProduct` renderiza una tarjeta personalizada para mostrar productos.

Para usarlo solo usa la cli de quick-ui y agrega el componente a tu proyecto.

```bash
npx quick-ui-cli add card-product
```

```tsx
import { CardProduct } from "quick-ui-components";
```

El componente se copiara en la siguiente ruta de tu proyecto:

```
src
└── components
    └── ui
        └── card-product
            └── CardProduct.tsx
```

## Propiedades

| Propiedad   | Tipo    | Descripción                                                                                    | Valor predeterminado |
| ----------- | ------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| title       | string  | Título del producto.                                                                           | -                    |
| image       | string  | URL de la imagen del producto.                                                                 | -                    |
| description | string  | Descripción del producto.                                                                      | -                    |
| price       | string  | Precio del producto.                                                                           | -                    |
| textButton  | string  | Texto del botón.                                                                               | -                    |
| badge       | string  | Texto del badge, este se muestra en la esquina superior derecha de la tarjeta.                 | -                    |
| colorBadge  | string  | Color del badge (**_El color tiene que estar en formato hexadecimal o el nombre del color_**). | `#a551e4`            |
| noBadge     | boolean | Deshabilita el badge.                                                                          | `false`              |

# Spinner

Renderiza un spinner personalizado con opciones dinámicas de estilo.

Para usarlo importalo y usalo en tu proyecto.

```tsx
import { Spinner } from "quick-ui-components";
```

## Propiedades

| Propiedad    | Tipo   | Descripción                                                                                               | Valor predeterminado |
| ------------ | ------ | --------------------------------------------------------------------------------------------------------- | -------------------- |
| bgColor      | string | Color de fondo del spinner (**_El color tiene que estar en formato hexadecimal o el nombre del color_**). | `#ffffff`            |
| spinnerColor | string | Color del spinner (**_El color tiene que estar en formato hexadecimal o el nombre del color_**).          | `#a551e4`            |
| className    | string | Clases adicionales para personalizar el spinner.                                                          | -                    |
| style        | object | Agrega stilos en linea normalmente en un objeto como cualquier elemento html.                             | -                    |
