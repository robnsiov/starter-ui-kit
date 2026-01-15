export default interface AuthContainerImpl {
  children: React.ReactNode;
  type: "signup" | "signin" | "forgot-pass";
  title: string;
  desc: string;
}
