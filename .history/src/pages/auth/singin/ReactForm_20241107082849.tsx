import { SubmitHandler } from "react-hook-form";
import IUser from "../../../interfaces/IUser";

type Inputs = {
    example: string,
    exampleRequired: string,
};

const ReactForm = () => {
    //Handle submit es el que menaje el formulario
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    console.log(watch("example")) 
    const onSubmit: SubmitHandler<IUser> = data => console.log(data);

    return (
       
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email", {required: true})} />
            {errors.email &&}
            <input {...register("password", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}

export default ReactForm