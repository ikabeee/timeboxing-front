import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    example: string,
    exampleRequired: string,
  };
  
const SignIn = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  
    console.log(watch("example")) // watch input value by passing the name of it

    return (
        <>
        </>

    )
}
export default SignIn;