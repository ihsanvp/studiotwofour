import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import { v4 as uuid } from "uuid";
import {
  column,
  beforeSave,
  BaseModel,
  beforeCreate,
} from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {
  public static selfAssignPrimaryKey = true;

  @column({ isPrimary: true })
  public id: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken?: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(User: User) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password);
    }
  }

  @beforeCreate()
  public static async assignUuid(user: User) {
    user.id = uuid();
  }
}
