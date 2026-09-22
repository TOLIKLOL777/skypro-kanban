import SignForm from "../SignForm/SignForm";

const RegisterPage = ({ setIsAuth }) => {
  return <SignForm isAuth={false} setIsAuth={setIsAuth} />;
};

export default RegisterPage;
