import { SubmitHandler } from "react-hook-form";

type Inputs = {
    example: string,
    exampleRequired: string,
};

const ReactForm = () => {
    //Handle submit es el que maneja el registro
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example")) 

    return (
       
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />
            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}

export default ReactForm