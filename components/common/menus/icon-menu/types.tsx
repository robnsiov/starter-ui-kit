export type SelectedChildrenImpl = Array<{
  title: string;
  href: string;
  id: number;
  children?: Array<{ title: string; href: string; id: number }>;
}>;
