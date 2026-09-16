import { Link, useNavigate } from "react-router-dom";
import {
  AuthPage,
  Form,
  FormButton,
  FormCard,
  FormInput,
  FormTitle,
  FormDescription,
  FormLink,
} from "./SignForm.styled";

function SignForm({ isAuth, setIsAuth }) {
  const navigate = useNavigate();
  const isLogin = isAuth;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isLogin) {
      setIsAuth(true);
      navigate("/");
      return;
    }

    navigate("/login");
  };

  return (
    <AuthPage>
      <FormCard>
        <FormTitle>{isLogin ? "Вход" : "Регистрация"}</FormTitle>
        <Form onSubmit={handleSubmit}>
          {!isLogin && <FormInput type="text" name="name" placeholder="Имя" />}
          <FormInput type="email" name="email" placeholder="Эл. почта" />
          <FormInput type="password" name="password" placeholder="Пароль" />
          <FormButton type="submit">
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </FormButton>
          <FormDescription>
            {isLogin ? "Нужно зарегистрироваться?" : "Уже есть аккаунт?"}{" "}
            <FormLink as={Link} to={isLogin ? "/register" : "/login"}>
              {isLogin ? "Регистрируйтесь здесь" : "Войдите здесь"}
            </FormLink>
          </FormDescription>
        </Form>
      </FormCard>
    </AuthPage>
  );
}

export default SignForm;
