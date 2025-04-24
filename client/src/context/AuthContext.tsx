import React, {
    createContext,
    useState,
    ReactNode,
    useContext,
    useEffect,
  } from "react";
  import { useNavigate } from "react-router";
  import { User } from "../types/userTypes";
  
  import { useGlobalContext } from "./GlobalContext";
  import { reAuth } from "../services/User/Auth/reAuth";
  
  interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    handleLogin: (userData: User) => void;
    handleLogout: () => void;
  }
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: false,
    setIsLoading: () => {},
    handleLogin: () => {},
    handleLogout: () => {},
  });
  
  export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { setLoading } = useGlobalContext();
    const navigate = useNavigate();
  
    useEffect(() => {
      const checkLoginStatus = async () => {
        try {
          setLoading(true);
          const userData = await reAuth(); // Calls the `/auth/reAuth` endpoint
    
          if (userData) {
            setUser(userData);
            const currentPath = window.location.pathname;
            navigate(currentPath); // Keep the user on the same page
          }
        } catch (error) {
          setUser(null);
        } finally {
          setLoading(false);
          setIsLoading(false);
        }
      };
    
      checkLoginStatus();
    }, []);
  
    const handleLogin = (userData: User) => {
      setUser(userData);
      navigate("/dashboard");
    };
  
    const handleLogout = () => {
      localStorage.removeItem("authToken"); // Remove token
      setUser(null);
      navigate("/login"); // Redirect to login page
    };
  
    return (
      <AuthContext.Provider
        value={{
          user,
          isLoading,
          setIsLoading,
          handleLogin,
          handleLogout,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  