// utils/colorUtils.ts
import tinycolor from "tinycolor2";

/**
 * Convierte un color a formato RGBA con la opacidad deseada.
 * @param color - El color en formato HEX, RGB, o nombre.
 * @param alpha - El valor de opacidad (0 a 1).
 * @returns El color en formato RGBA.
 */
export function colorToRgba(color: string, alpha: number): string {
  return tinycolor(color).setAlpha(alpha).toRgbString();
}

/**
 * Function to adjust the darkness or lightness of a color.
 * @param colorBg - The color in HEX, RGB, or named format.
 * @param percent - The percentage to adjust (negative for lightening, positive for darkening).
 * @returns The adjusted color in HEX format.
 */
export const darkenColor = (colorBg: string, percent: number): string => {
  // Ensure percent is between -100 and 100
  percent = Math.max(-100, Math.min(100, percent));

  if (percent < 0) {
    return tinycolor(colorBg).lighten(Math.abs(percent)).toHexString();
  } else {
    return tinycolor(colorBg).darken(percent).toHexString();
  }
};
