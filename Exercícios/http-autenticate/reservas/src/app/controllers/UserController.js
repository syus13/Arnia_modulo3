import { UserValidate } from "../../utils/Validations/userValidate.js"
import {CommonError} from "../../utils/CommonError.js"

class UserController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body } = req

    const bodyIsValid = UserValidate.isValid(body)
    if(bodyIsValid.error) {
      return res.status(400).json(CommonError.build(bodyIsValid.messages, 400))
    }

    const user = await this.service.create(body)
    if ('error' in user) {
      return res.status(user.status).json(user)
    }

    return res.status(201).json(user)
  }

  async findAll(req, res){
    const result = await this.service.findAll()
    return res.json(result)
  }

  }

export { UserController }