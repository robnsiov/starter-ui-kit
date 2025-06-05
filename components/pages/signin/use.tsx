import useAuthStore from "@/context/is-authenticated";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import zod from "zod";
import { Inputs } from "./types";

const useSignin = () => {
  const router = useRouter();
  const { setIsAuthenticated } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8).max(64),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: { email: "admin@gmail.com", password: "12345678" },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // call api
    setLoading(true);
    setIsAuthenticated(true);
    setTimeout(() => {
      router.push("/");
    }, 300);
  };

  return { onSubmit: handleSubmit(onSubmit), register, errors, loading };
};
export default useSignin;
