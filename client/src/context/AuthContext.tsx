import React, {
    createContext,
    useState,
    ReactNode,
    useContext,
    useEffect,
  } from "react";
  import { useNavigate, useLocation } from "react-router";
  import { User } from "../types/userTypes";
  import { useGlobalContext } from "./GlobalContext";
  import { logout, getMe } from "../services/api"; 
  
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
    const [user, setUser] = useState<User | null>(() => {
      // Try to load user from localStorage on initial render
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { setLoading } = useGlobalContext();
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      const checkLoginStatus = async () => {
        try {
          setLoading(true);
          const userData = await getMe(); 
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData)); // persist user
        } catch (error) {
          setUser(null);
          localStorage.removeItem("user"); // clear on error
          const publicRoutes = ["/", "/login","/information", "/registration", "/success"];
          if (!publicRoutes.includes(location.pathname)) {
            navigate("/"); 
          }
        } finally {
          setLoading(false);
          setIsLoading(false);
        }
      };
    
      checkLoginStatus();
    }, [location.pathname, navigate, setLoading]);
  
    const handleLogin = (userData: User) => {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData)); // persist user
      navigate("/dashboard");
    };
  
    const handleLogout = async () => {
      try {
        await logout();
        setUser(null);
        localStorage.removeItem("user");
      } catch (error) {
      }
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
