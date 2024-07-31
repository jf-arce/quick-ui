import { ColorType } from "./Button.types";
/**
 * Function to darken a color.
 */
export const darkenColor = (colorBg: ColorType, percent: number): string => {
    // Delete the "#" character and convert to a number
    const num = parseInt(colorBg.slice(1), 16);
    const amt = Math.round(2.55 * percent);

    // Extract R, G, and B components
    const R = (num >> 16) - amt;
    const G = ((num >> 8) & 0x00ff) - amt;
    const B = (num & 0x0000ff) - amt;

    // Ensure the values are in the range [0, 255]
    const newR = Math.min(255, Math.max(0, R));
    const newG = Math.min(255, Math.max(0, G));
    const newB = Math.min(255, Math.max(0, B));

    // Convert back to a hexadecimal string
    return `#${((1 << 24) + (newR << 16) + (newG << 8) + newB)
        .toString(16)
        .slice(1)}`;
};
