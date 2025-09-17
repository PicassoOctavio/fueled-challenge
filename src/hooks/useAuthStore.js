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

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");

    if (!token) return dispatch(onLogout());

    try {
      const response = await fueledApi.post(
        "/jwt-auth/v1/token/validate",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log({ response });

      dispatch(
        onLogin({
          token,
        })
      );
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //properties
    status,
    // methods
    startLogin,
    startLogout,
    checkAuthToken,
  };
};
