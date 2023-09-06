import { HotelValidate } from "../../utils/Validations/HotelValidate.js";
import { CommonError } from "../../utils/CommonError.js";

class HotelController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    const { body } = req;

    const bodyIsValid = HotelValidate.isValid(body);
    if (bodyIsValid.error) {
      return res.status(400).json(CommonError.build(bodyIsValid.messages, 400));
    }

    const hotel = await this.service.create(body);
    if ("error" in hotel) {
      return res.status(hotel.status).json(hotel);
    }

    return res.status(201).json(hotel);
  }
}

export { HotelController };
