import * as yup from "yup"

class HotelValidate{
    static async isValid(data){
        const hotelSchema = yup.object().shape({
            name: yup.string().required(),
            address: yup.string().required(),
            roonsAvailable: yup.string().required(),
          });

          try{
            await hotelSchema.validate(data)
            return {error: false}
          }
          catch(erro){
            return {error: true, messages: erro.errors}
          }
    }
}

export {HotelValidate}