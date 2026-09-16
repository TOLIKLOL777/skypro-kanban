import SignForm from "../SignForm/SignForm";

const LoginPage = ({ setIsAuth }) => {
  return <SignForm isAuth={true} setIsAuth={setIsAuth} />;
};

export default LoginPage;
