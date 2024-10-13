import {
  findUserByEmail,
  tokenGenerate,
  validatePassword,
} from "../services/user.services.js";

export const login = async (req, res) => {
  try {
    if (req.body.email && req.body.password) {
      let email = req.body.email;
      let password = req.body.password;

      let user = await findUserByEmail(email);
      if (!user) {
        throw new Error("Usuário não cadastrado");
      }

      const isPasswordValid = await validatePassword(user, password);
      if (!isPasswordValid) {
        throw new Error("Erro ao válidar credenciais");
      }

      const token = tokenGenerate(user.id, user.email);

      res.json({ status: true, token });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
