export const FormInput = ({label, ...otherProps}) => {
   return (
     <>
      <label>{label}</label>
      <input {...otherProps}></input>
     </> 
   )
}