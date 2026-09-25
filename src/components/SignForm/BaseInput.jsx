import { StyledInput, StyledTextarea } from "./BaseInput.styled";

const BaseInput = ({
   tag = "input",
   id,
   name,
   placeholder = "",
   type = "text",
   error = false,
   value = "",
   onChange,

}) => {
   // Выбираем компонент в зависимости от тега, на случай, если нужна textarea
   const Component = tag === "textarea" ? StyledTextarea : StyledInput;

   return (
      <Component
         id={id}
         name={name}
         type={type}
         placeholder={placeholder}
         value={value}
         $error={error}
         onChange={onChange}
      />
   );
};

export default BaseInput;