# Instalacion

```bash
npm install quick-ui-components
```

# Uso

> Por ahora solo esta hecho el componente Button, pero se iran agregando mas componentes en el futuro.

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
| hoverDarken | number            | Porcentaje de oscurecimiento al hacer hover. (Si se le da numeros negativos se aclara)                                                                                                                                                                             | `15`                 |
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


