import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import User from "App/Models/User";
import Hash from "@ioc:Adonis/Core/Hash";

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    const loginSchema = schema.create({
      email: schema.string({}, [rules.email()]),
      password: schema.string({}, [rules.minLength(8)]),
    });

    const payload = await request.validate({ schema: loginSchema });

    // Lookup user
    const user = await User.findBy("email", payload.email);

    if (!user) {
      return response.unauthorized("User not found");
    }

    // Verify password
    if (!(await Hash.verify(user.password, payload.password))) {
      return response.unauthorized("Invalid credentials");
    }

    // Generate token
    const token = await auth.use("api").generate(user, {
      expiresIn: "1 day",
    });

    return {
      user: user.toJSON(),
      auth: token.toJSON(),
    };
  }
}
