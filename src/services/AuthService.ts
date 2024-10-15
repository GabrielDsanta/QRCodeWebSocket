import { SignInVariables, SignUpVariables } from "types";
import { Local } from "./Local";

import axios from "axios";
import host from "@utils/host";

export class AuthService {
  static async signUpBuyer(user: SignUpVariables) {
    const url = `${host()}/auth/signup/buyer`;
    try {
      const response = await axios.post(url, user, {
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
      });
      if (response.status === 201) {
        return { data: response.data, success: true };
      } else {
        return {
          error: response.data.message,
          success: false,
        };
      }
    } catch (error: any) {
      if (error.response.data.error)
        return {
          error: error.response.data.error,
          success: false,
        };

      return {
        error: "Erro ao cadastrar usuário",
        success: false,
      };
    }
  }

  static async signUpSeller(user: SignUpVariables) {
    const url = `${host()}/auth/signup/seller`;
    try {
      const response = await axios.post(url, user, {
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
      });
      if (response.status === 201) {
        return { data: response.data, success: true };
      } else {
        return {
          error: response.data.message,
          success: false,
        };
      }
    } catch (error: any) {
      if (error.response.data.error)
        return {
          error: error.response.data.error,
          success: false,
        };

      return {
        error: "Erro ao cadastrar usuário",
        success: false,
      };
    }
  }

  static async signIn(variables: SignInVariables) {
    const url = `${host()}/auth/signin`;
    try {
      const response = await axios.post(url, variables, {
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
      });
      if (response.status === 200) {
        return { data: response.data, success: true };
      } else {
        return {
          error: response.data.message,
          success: false,
        };
      }
    } catch (error: any) {
      if (error.response.data.error)
        return {
          error: error.response.data.error,
          success: false,
        };

      return {
        error: "Erro ao logar usuário",
        success: false,
      };
    }
  }

  static async checkJWT() {
    const url = `/checkJWT`;
    try {
      const response = await (await this.getAxiosInstance()).get(url);

      if (response.status === 200) {
        return { data: response.data, success: true };
      } else {
        return {
          error: response.data.message,
          success: false,
        };
      }
    } catch (error: any) {
      console.log(error);
      if (error.response.data.error)
        return {
          error: error.response.data.error,
          success: false,
        };

      return {
        error: "Erro ao verificar token",
        success: false,
      };
    }
  }

  static async resendCode(email: string, codeToResend: string) {
    const url = `${host()}/resendCode`;
    try {
      const response = await axios.post(url, {
        email,
        codeToResend,
      });

      if (response.data) {
        return { user: response.data, success: true };
      } else {
        return { success: false };
      }
    } catch (error: any) {
      if (error.response.data.message)
        console.log("Algo deu errado", "Erro: " + error.response.data.message);
      return {
        error: error,
        success: false,
      };
    }
  }

  static async verify(email: string, emailCode: string | null, phoneCode: string | null) {
    const url = `${host()}/verify`;
    try {
      const response = await axios.post(url, {
        email,
        emailCode,
        phoneCode,
      });
      if (response.data) {
        return { user: response.data, success: true };
      } else {
        return { success: false };
      }
    } catch (error: any) {
      if (error.response.data.message)
        console.log("Algo deu errado", "Erro: " + error.response.data.message);
      return {
        error: error,
        success: false,
      };
    }
  }

  static async verifyUser(email: string) {
    const url = `${host()}/verifyUser`;
    try {
      const response = await axios.post(url, {
        email,
      });
      if (response.data) {
        return { data: response.data, success: true };
      } else {
        return { success: false };
      }
    } catch (error: any) {
      if (error.response.data.message)
        console.log("Algo deu errado", "Erro: " + error.response.data.message);
      return {
        error: error,
        success: false,
      };
    }
  }

  static async createVerificationCodes(email: string, phoneNumber: string, type: string) {
    const url = `${host()}/createVerificationCodes/${type}`;
    try {
      const response = await axios.post(url, {
        email: email,
        phoneNumber: phoneNumber,
      });

      if (response.data) {
        return { user: response.data, success: true };
      } else {
        return { success: false };
      }
    } catch (error: any) {
      if (error.response.data.message)
        console.log("Algo deu errado", "Erro: " + error.response.data.message);
      return {
        error: error,
        success: false,
      };
    }
  }

  static async resetPassword(email: string, password: string) {
    const url = `${host()}/resetPassword`;
    try {
      const response = await axios.post(url, {
        email,
        password,
      });
      if (response.data) {
        return { user: response.data, success: true };
      } else {
        return { success: false };
      }
    } catch (error: any) {
      if (error.response.data.message)
        console.log("Algo deu errado", "Erro: " + error.response.data.message);
      return {
        error: error,
        success: false,
      };
    }
  }

  static async getAxiosInstance() {
    const jwt = await Local.get("JWT");

    return axios.create({
      baseURL: `${host()}`,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": jwt,
      },
    });
  }
}
