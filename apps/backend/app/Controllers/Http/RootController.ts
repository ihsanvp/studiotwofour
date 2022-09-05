// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from "@ioc:Adonis/Core/Application";

export default class RootsController {
  public async index() {
    return {
      version: Application.version?.toString(),
      name: Application.appName,
    };
  }
}
