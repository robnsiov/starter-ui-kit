export default interface MenuItemImpl {
  title: string;
  href: string;
  active: boolean;
  className?: string;
  onClick?(): void;
}
