import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    example: string,
    exampleRequired: string,
  };
  
const SignIn = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>

    )
}
export default SignIn;