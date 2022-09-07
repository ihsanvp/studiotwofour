import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Asset from "App/Models/Asset";
import Drive from "@ioc:Adonis/Core/Drive";

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
    const type = file.subtype || file.type || "other";
    const folder = `${file.type}/${file.subtype}`;

    await file.moveToDisk(`./${folder}`);

    const location = `${folder}/${file.fileName}`;
    const filePath = await Drive.getUrl(location);
    const url = request.buildAbsoluteUri(filePath);

    const asset = await Asset.create({
      name: file.clientName,
      path: file.filePath,
      size: file.size,
      type,
      url,
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
