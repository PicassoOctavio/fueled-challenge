import { useDispatch, useSelector } from "react-redux";
import { fueledApi } from "../api";
import { clearErrorMessage, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const startLogin = async ({ username, password }) => {
    try {
      const { data } = await fueledApi.post("/jwt-auth/v1/token", {
        username,
        password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        onLogin({
          name: data.user_display_name,
          email: data.user_email,
          token: data.token,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      });
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    status,
    startLogin,
    startLogout,
  };
};
