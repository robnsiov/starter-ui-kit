import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "./types";
import zod from "zod";
import { useRouter } from "next/navigation";

const useSignin = () => {
  const router = useRouter();
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
    router.push("/");
  };

  return { onSubmit: handleSubmit(onSubmit), register, errors };
};
export default useSignin;
