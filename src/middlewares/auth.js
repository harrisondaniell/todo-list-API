import JWT from "jsonwebtoken";
import "dotenv/config";

export const Auth = {
  private: async (req, res, next) => {
    if (req.headers.authorization) {
      const [authType, token] = req.headers.authorization.split(" ");
      if (authType === "Bearer") {
        try {
          const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
          req.user = decoded;
          console.log(req.user);
          return next();
        } catch (error) {
          console.error("Erro na verificação do token:", error.message);
        }
      }
    }
    res.status(403).json({ error: "Não autorizado" });
  },
};
