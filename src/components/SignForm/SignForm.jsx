import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AuthPage,
  Form,
  FormButton,
  FormCard,
  FormTitle,
  FormDescription,
  FormLink,
  ErrorText
} from "./SignForm.styled";
import BaseInput from "./BaseInput";
import { Login, Register } from "../../services/auth";

function SignForm({ isAuth, setIsAuth }) {
  const navigate = useNavigate();
   // состояние полей
   const [formData, setFormData] = useState({
      name: "",
      login: "",
      password: "",
   });

   // состояние ошибок
   const [errors, setErrors] = useState({
      name: "",
      login: "",
      password: "",
   });

   // состояние текста ошибки, чтобы показать её пользователю
   const [error, setError] = useState("");

   // функция валидации
   const validateForm = () => {
      const newErrors = { name: "", login: "", password: "" };
      let isValid = true;

      if (!isAuth && !formData.name.trim()) {
         newErrors.name = true;
         setError("Заполните все поля");
         isValid = false;
      }

      if (!formData.login.trim()) {
         newErrors.login = true;
         setError("Заполните все поля");
         isValid = false;
      }

      if (!formData.password.trim()) {
         newErrors.password = true;
         setError("Заполните все поля");
         isValid = false;
      }

      setErrors(newErrors);
      return isValid;
   };

   // функция, которая отслеживает в полях изменения 
   // и меняет состояние компонента
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
      setErrors({ ...errors, [name]: false });
      setError("");
   };

   // функция отправки формы
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) {
         // если у нас форма не прошла валидацию, то дальше не продолжаем
         return;
      }
   try { 
      // чтобы не писать две разных функции, выберем нужный запрос через 
      // тернарный оператор
      const data = !isAuth
         ? await Register({ name: formData.name, login: formData.login, password: formData.password })
         : await Login(formData);

      if (data) {
         setIsAuth(true);
         localStorage.setItem("userInfo", JSON.stringify(data));
         navigate("/");
      }
      } catch (err) {
         setError(err.message);
      }
   };

  return (
    <AuthPage>
      <FormCard>
        <FormTitle>{isAuth ? "Вход" : "Регистрация"}</FormTitle>
        <Form onSubmit={handleSubmit}>
          {!isAuth && 
            <BaseInput
              error={errors.name}
              type="text" 
              name="name" 
              id="formname"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange} 
            />}
          <BaseInput 
            error={errors.login}
            type="text"
            name="login"
            id="formemail"
            placeholder="Эл. почта" 
            value={formData.login}
            onChange={handleChange}
          />
          <BaseInput 
            error={errors.password}
            type="password" 
            name="password" 
            id="formpassword"
            placeholder="Пароль" 
            value={formData.password}
            onChange={handleChange}
          />
          {error && <ErrorText>{error}</ErrorText>}
          <FormButton type="submit">
            {isAuth ? "Войти" : "Зарегистрироваться"}
          </FormButton>
          <FormDescription>
            {isAuth ? "Нужно зарегистрироваться?" : "Уже есть аккаунт?"}{" "}
            <FormLink as={Link} to={isAuth ? "/register" : "/login"}>
              {isAuth ? "Регистрируйтесь здесь" : "Войдите здесь"}
            </FormLink>
          </FormDescription>
        </Form>
      </FormCard>
    </AuthPage>
  );
}

export default SignForm;
