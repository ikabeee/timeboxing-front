const ReactForm = () => {
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("example")} />
                <input {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </>
    )
}

export default ReactForm