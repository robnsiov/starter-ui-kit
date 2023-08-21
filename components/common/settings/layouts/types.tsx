export default interface LayoutImpl {
  layout:
    | "LTR"
    | "RTL"
    | "Box"
    | "Row"
    | "Column"
    | "Stroke"
    | "Fill"
    | "Light"
    | "Half-Dark"
    | "Dark";
  active: boolean;
}
