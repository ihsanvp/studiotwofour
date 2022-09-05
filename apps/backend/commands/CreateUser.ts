import { BaseCommand } from "@adonisjs/core/build/standalone";

export default class CreateUser extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = "create:user";

  /**
   * Command description is displayed in the "help" output
   */
  public static description = "Create a new user";

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  };

  public async run() {
    const email = await this.prompt.ask("Enter email", {
      validate: (value) => {
        if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) {
          return "Invalid email";
        }
        return true;
      },
    });
    const password = await this.prompt.secure("Enter password", {
      validate: (value) => {
        if (value.length < 8) {
          return "Password must be minimum 8 characters";
        }

        return true;
      },
    });

    const { default: User } = await import("App/Models/User");

    const user = await User.create({
      email,
      password,
    });

    this.logger.success(`created user '${user.email}'`);
  }
}
