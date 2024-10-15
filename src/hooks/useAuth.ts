
import { useCallback } from "react";
import { setUser } from "@redux/actions";
import { AuthService } from "services/AuthService";

export const useAuth = () => {


  const checkJWT = useCallback(async () => {
    const response = await AuthService.checkJWT();

    if (response.success) {
      dispatch(setUser(response.data.user));
      return { success: true };
    }
    return { success: false };
  }, []);

  return {
    checkJWT
  };
};
