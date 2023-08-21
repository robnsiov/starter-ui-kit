// export default interface ColorsImpl {
//   color: "Light" | "Dark" | "Unlimited";
// }
export default interface ColorsImpl {
  closeMenu(): void;
}
export interface UseColorsImpl extends ColorsImpl {}
