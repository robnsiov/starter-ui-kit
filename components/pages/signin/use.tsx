import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "./types";
import zod from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useSignin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8).max(64),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // call api
    // console.log(data);
    setLoading(true);
    setTimeout(() => {
      router.push("/");
    }, 300);
  };

  return { onSubmit: handleSubmit(onSubmit), register, errors, loading };
};
export default useSignin;
