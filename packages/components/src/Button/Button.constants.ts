// Define the size of the button
export const ButtonSize = {
  sm: {
    paddingY: "10px",
    paddingX: "14px",
    fontSize: "15px",
  },
  md: {
    paddingY: "12px",
    paddingX: "20px",
    fontSize: "16px",
  },
  lg: {
    paddingY: "13px",
    paddingX: "25px",
    fontSize: "18px",
  },
  xl: {
    paddingY: "15px",
    paddingX: "35px",
    fontSize: "18px",
  },
  "2xl": {
    paddingY: "15px",
    paddingX: "40px",
    fontSize: "20px",
  },
};

export const twStyles = {
  DEFAULT:
    "inline-flex items-center gap-2 justify-center font-medium relative overflow-hidden box-border transition-all hover:!bg-opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:opacity-60 disabled:border-none disabled:text-neutral-100 disabled:hover:!bg-neutral-200 disabled:hover:!text-neutral-100",
  PRIMARY:
    "border-none bg-[var(--bg-color)] text-[var(--text-color)] hover:bg-[var(--hover-color)]",
  SECONDARY:
    "border-[1px] border-solid border-[var(--bg-color)] bg-transparent text-[var(--bg-color)] hover:bg-[var(--hover-color)] hover:text-[var(--text-color)]",
  TERTIARY:
    "border-[1px] border-solid border-[var(--bg-color)] bg-transparent text-[var(--bg-color)]",
  PULSE_ANIMATION: "active:focus:scale-[0.97] duration-150",
  ICON: "!py-[10px] !px-[12px]",
  LOADING: "opacity-60",
};
