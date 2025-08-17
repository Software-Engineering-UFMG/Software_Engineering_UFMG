import { useState } from "react";
import { useNavigate } from "react-router";
import { login, createUser, checkLdapUser } from "../../services/api";
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      setErrorMessage((prevState) => ({
        ...prevState,
        username: !username.trim() ? "O campo login é obrigatório" : null,
        password: !password.trim() ? "O campo senha é obrigatório" : null,
      }));
      return;
    }

    setLoading(true);
    setErrorMessage({ username: null, password: null, userAccountWrong: null });

    try {
      console.log("Step 1: Checking LDAP credentials first...");
      
      // Step 1: Check LDAP credentials BEFORE attempting backend login
      const ldapResponse = await checkLdapUser(username, password);
      console.log("LDAP check response:", ldapResponse);
      
      // Step 2: If LDAP returns false, show LDAP error and stop
      if (!ldapResponse.exists) {
        console.log("LDAP verification failed - showing password error");
        setErrorMessage((prevState) => ({
          ...prevState,
          userAccountWrong: "Login ou senha incorretos. Verifique suas credenciais do hospital.",
        }));
        setLoading(false);
        return; // STOP HERE - don't proceed to backend login
      }
      
      console.log("Step 2: LDAP verification successful. Proceeding with backend login...");
      
      // Step 3: Only if LDAP passes, proceed with backend login
      const userData = await login(username, password);
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
      console.error("Erro no login:", error);
      console.log("Full error object:", error);
      console.log("Error response:", error.response);
      console.log("Error response data:", error.response?.data);

      // Handle different error message formats
      let errorMessage = "";
      
      if (error.response?.data?.error?.message) {
        errorMessage = error.response.data.error.message;
      } else if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      console.log("Extracted error message:", errorMessage);

      // Since we already passed LDAP check, any error here is from backend
      if (
        errorMessage.toLowerCase().includes("deactivated") ||
        errorMessage.toLowerCase().includes("desativada") ||
        errorMessage.toLowerCase().includes("account is deactivated") ||
        error.response?.status === 403
      ) {
        console.log("Setting deactivated user message");
        setErrorMessage((prevState) => ({
          ...prevState,
          userAccountWrong:
            "Usuário cadastrado, porém desativado. Entre em contato com algum administrador para ativar sua conta.",
        }));
      } else if (
        errorMessage.toLowerCase().includes("invalid username or password") ||
        error.response?.status === 401
      ) {
        // This should not happen if LDAP passed, but just in case
        console.log("Setting invalid credentials message");
        setErrorMessage((prevState) => ({
          ...prevState,
          userAccountWrong: "Usuário ou senha inválidos.",
        }));
      } else {
        console.log("Setting generic error message");
        setErrorMessage((prevState) => ({
          ...prevState,
          userAccountWrong: "Erro no login. Tente novamente.",
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
              className="p-10 border-black"
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
              className="border-black"
            />
            <div className="min-h-[40px]"> {/* Increased from min-h-[14px] to accommodate longer messages */}
              {errorMessage.password && (
                <div className="mt-1 text-sm text-red-600">
                  {errorMessage.password}
                </div>
              )}
              {errorMessage.userAccountWrong && (
                <div className="mt-1 text-sm text-red-600 leading-relaxed"> {/* Removed h-[10px] constraint and added leading-relaxed */}
                  {errorMessage.userAccountWrong}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <button
              className="cursor-pointer rounded-xl bg-red-500 !p-3 text-white hover:bg-red-600"
              type="submit"
              disabled={loading}
            >
              {loading ? "Carregando..." : "Entrar"}
            </button>
          </div>
          <Link
            to="/registration"
            className="cursor-pointer rounded-xl bg-green-300 !p-3 text-white hover:bg-green-400 flex justify-center"
          >
            Cadastrar Usuário
          </Link>
        </form>
      </div>
    </div>
  );
});