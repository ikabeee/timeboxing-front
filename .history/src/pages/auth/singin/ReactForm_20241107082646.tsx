import { SubmitHandler } from "react-hook-form";
import IUser from "../../../interfaces/IUser";

type Inputs = {
    example: string,
    exampleRequired: string,
};

const ReactForm = () => {
    //Handle submit es el que menaje el formulario
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example")) 
    const onSubmit: SubmitHandler<IUser>

    return (
       
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email")} />
            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}

export default ReactForm