// export default interface ColorsImpl {
//   color: "Light" | "Dark" | "Unlimited";
// }
export default interface ColorsImpl {
  closeMenu(): void;
  colorVariable: string;
}
export interface UseColorsImpl extends ColorsImpl {}
