import { UseFormRegister } from "react-hook-form";

export default interface AuthInputImpl {
  type: string;
  placeholder?: string;
  className?: string;
  error: string | undefined;
}
