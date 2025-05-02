import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../../services/api";
import { useGlobalContext } from "../../context/GlobalContext";
import { useAuth } from "../../context/AuthContext";
import { Input } from "../../components/Input";
import { Link } from "react-router";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import { memo } from "react";

export const Login = memo(() => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<{
    username: string | null;
    password: string | null;
    userAccountWrong: string | null;
  }>({
    username: null,
    password: null,
    userAccountWrong: null,
  });
  const { loading, setLoading } = useGlobalContext();

  const validateForm = (): boolean => {
    let hasError = false;

    if (!username.trim()) {
      setErrorMessage((prevState) => ({
        ...prevState,
        username: "O campo login é obrigatório",
      }));
      hasError = true;
    }

    if (!password.trim()) {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: "O campo senha é obrigatório",
      }));
      hasError = true;
    }

    return !hasError;
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    if (value !== "") {
      setErrorMessage((prevState) => ({ ...prevState, username: null }));
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value !== "") {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: null,
        userAccountWrong: null,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    setLoading(true);
    setErrorMessage({ username: null, password: null, userAccountWrong: null });
  
    try {
      if (!validateForm()) {
        return;
      }  
      const userData = await login(username, password); 
      if (!userData) {
        setErrorMessage((prevState) => ({
          ...prevState,
          userAccountWrong: "Login ou senha incorretos",
        }));
        return;
      }

      if (userData.error === "InvalidPassword") {
        setErrorMessage((prevState) => ({
          ...prevState,
          password: "Senha incorreta",
        }));
        return;
      }

      if (userData.status === "Inactive") {
        setErrorMessage((prevState) => ({
          ...prevState,
          userAccountWrong: "O usuário está inativo",
        }));
        return;
      }
  
      handleLogin(userData);
  
      switch (userData.role) {
        case "Admin":
          navigate("/dashboard");
          break;
        case "Assistencial":
          navigate("/preceptor");
          break;
        case "NIR":
          navigate("/NIRMainpage");
          break;
        default:
          throw new Error("Invalid user role");
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        setErrorMessage((prevState) => ({
          ...prevState,
          userAccountWrong: "Login ou senha incorretos",
        }));
      } else {
        setErrorMessage((prevState) => ({
          ...prevState,
          userAccountWrong: "Erro ao tentar fazer login",
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-dvh flex-col items-center gap-10  bg-white text-lg ">
      <div className="w-[100%]  flex justify-center md:justify-end !p-4">
        <Link to="/information" className="hover:text-green-400">
          Saiba mais sobre o projeto Red2Green
        </Link>
      </div>
      <div className="flex justify-center flex-col items-center ">
        <img
          src={hospitalLogo}
          alt="Hospital Logo"
          className="w-[80%] rounded-3xl"
        />
      </div>

      <div className="w-[25%] min-w-[300px] ">
        <form
          className="flex flex-col gap-4"
          noValidate
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          <div className="flex flex-col">
            <Input
              placeholder="Login"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="p-10"
            />
            <div className="min-h-[14px]">
              {errorMessage.username && (
                <div className="mt-1 h-[10px] text-sm text-red-600">
                  {errorMessage.username}
                </div>
              )}
            </div>
          </div>
          <div className="relative flex flex-col gap-3">
            <Input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="min-h-[14px]">
              {errorMessage.password && (
                <div className="mt-1 h-[10px] text-sm text-red-600">
                  {errorMessage.password}
                </div>
              )}
              {errorMessage.userAccountWrong && (
                <div className="mt-1 h-[10px] text-sm text-red-600">
                  {errorMessage.userAccountWrong}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <button
              className="cursor-pointer rounded-xl bg-green-300 !p-3 text-white hover:bg-green-400"
              type="submit"
              disabled={loading}
            >
              {loading ? "Carregando..." : "Entrar"}
            </button>

            <Link
              to="/registration"
              className="cursor-pointer rounded-xl bg-green-300 !p-3 text-white hover:bg-green-400 flex justify-center"
            >
              Cadastrar Usuário
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
});
