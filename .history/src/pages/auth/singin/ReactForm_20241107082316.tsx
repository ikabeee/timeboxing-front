const ReactForm = () => {
    return (
    <>

        
    <form onSubmit={handleSubmit(onSubmit)}>
 
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>  
    </>
    )
}

export default ReactForm