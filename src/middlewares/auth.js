import JWT from "jsonwebtoken";
import "dotenv/config";

export const Auth = {
  private: async (req, res, next) => {
    let sucess = false;

    if (req.headers.authorization) {
      const [authType, token] = req.headers.authorization.split(" ");
      if (authType === "Bearer") {
        try {
          const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);

          sucess = true;
        } catch (error) {}
      }
    }

    if (sucess) {
      next();
    } else {
      res.status(403);
      res.json({ error: "Não autorizado" });
    }
  },
};