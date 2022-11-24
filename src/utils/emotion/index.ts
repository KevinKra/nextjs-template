/**
   * Used to pass "transient props" to the styled-component (properties that shouldn't exist on the DOM since they're only used for styling within MUI's emotion integration).
   *
   * [📝 StackOverflow post](https://stackoverflow.com/questions/71128841/mui-system-how-to-pass-transient-props-to-styled)
   * @example
   * const Header = styled("div", {
    shouldForwardProp: (prop) =>
        shouldForwardProp<Pick<IUnitSnapshot, "inError" | "loading">>(
        ["inError", "loading"],
        prop
        ),
    })<Pick<IUnitSnapshot, "inError" | "loading">>`
     // ...your css here
    `
   **/
export const shouldForwardProp = <CustomProps extends Record<string, unknown>>(
  props: Array<keyof CustomProps>,
  prop: PropertyKey
): boolean => !props.includes(prop as string);
