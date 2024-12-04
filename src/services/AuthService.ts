import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserRepository } from "../repositories/UserRepository";

export class AuthService {
  async authenticate(email: string, password: string) {
    const user = await UserRepository.findOneBy({ email });
    if (!user) throw new Error("Invalid credentials");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    return { token };
  }
}
