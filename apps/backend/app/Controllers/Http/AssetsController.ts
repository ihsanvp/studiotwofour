import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Asset from "App/Models/Asset";

export default class AssetsController {
  public async index({}: HttpContextContract) {
    const assets = await Asset.all();

    return { assets };
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
