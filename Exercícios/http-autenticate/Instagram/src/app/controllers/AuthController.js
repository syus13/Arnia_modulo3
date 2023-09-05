import { AuthValidade } from "../../utils/Validations/AuthValidate.js"
import { CommonError } from "../../utils/CommonError.js"

class AuthController {
  constructor(service) {
    this.service = service
  }

  async login(req, res) {
    const { body } = req

    const bodyIsValid = AuthValidade.isValid(body)
    if (bodyIsValid.error) {
      return res.status(400).json(CommonError.build(bodyIsValid.messages, 400))
    }

    const result = await this.service.login(body)
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(result)
  }
}

export { AuthController }