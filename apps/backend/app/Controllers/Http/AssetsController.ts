import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Asset from "App/Models/Asset";

export default class AssetsController {
  public async index({}: HttpContextContract) {
    const assets = await Asset.all();

    return { assets };
  }

  public async upload({ request }: HttpContextContract) {
    const uploadSchema = schema.create({
      file: schema.file(),
    });

    const payload = await request.validate({ schema: uploadSchema });
    const file = payload.file;

    await file.moveToDisk("./");

    const asset = await Asset.create({
      type: file.type,
      name: file.clientName,
      path: file.filePath,
      size: file.size,
    });

    return {
      asset,
    };
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
