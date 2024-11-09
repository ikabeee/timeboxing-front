import { SubmitHandler, useForm } from "react-hook-form";
import IUser from "../../../interfaces/IUser";

type Inputs = {
    example: string,
    exampleRequired: string,
};

const ReactForm = () => {
    //Handle submit es el que menaje el formulario
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<IUser>
    
    const onSubmit: SubmitHandler<IUser> = data => console.log(data);

    return (
       
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email", {required: true})} />
            {errors.email && <span>Debes ingresar un correo</span>}
            <input {...register("password", { required: true })} />
            {errors.password && <span>Debe ingresar una contraseña</span>}

            <input type="submit" />
        </form>
    );
}

export default ReactForm