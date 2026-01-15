export default interface NavLinkImpl {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?(): void;
}
