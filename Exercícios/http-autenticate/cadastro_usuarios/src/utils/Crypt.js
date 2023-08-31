import {hashSync} from "bcrypt"

class Crypt {
  static encrypt(text) {
    return hashSync(text, 10)
  }
}

export { Crypt }