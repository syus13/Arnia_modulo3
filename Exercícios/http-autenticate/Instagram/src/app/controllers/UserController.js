import { CommonError } from "../../utils/CommonError.js";
import { UserValidate } from "../../utils/Validations/UserValidate.js";

class UserController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    const { body, file } = req;

    const bodyIsValid = UserValidate.isValid(body);
    if (bodyIsValid.error) {
      return res.status(400).json(CommonError.build(bodyIsValid.messages, 400));
    }

    const data = {
      ...body,
      photo: {
        filename: file.filename,
        mimetype: file.mimetype,
      },
    };

    const user = await this.service.create(data);
    if ("error" in result) {
      return res.status(user.status).json(user);
    }
    return res.status(201).json(user);
  }
}

export {UserController}
