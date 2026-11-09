const { NotImplementedError } = require("../domain/shared/app-error");

class AuthService {
  async signUp() {
    throw new NotImplementedError("Sign up akan diaktifkan setelah repository dan logic autentikasi dibuat.");
  }

  async signIn() {
    throw new NotImplementedError("Sign in akan diaktifkan setelah repository dan logic autentikasi dibuat.");
  }
}

module.exports = { AuthService };

