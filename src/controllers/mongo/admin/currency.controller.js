import Currency from '../../../models/mongo/core/currencies'

export class CurrencyController{
  static async create(request,response){
    const { abbreviation,
    name } = request.body;
    let postData = request.body;
    const NewCurrency= new Currency({
         abbreviation,
         name
      });
    const savedcurrency = await NewCurrency.save()
    if(savedcurrency){
      return response.status(201).json({
        status: 201,
        data: [
          {
            id: savedcurrency._id,
            message: 'Created currency record',
          },
        ],
      });
    }
    return response.status(400).json({
          status: 400,
          error: {
            message: 'Could not perform create operation',
          }
    });
  }
  static async  read(request,response){
    const currency =await  Currency.find({})
    if (currency.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
              {
                currency:[],
                message: 'No records found',
              },
            ],
          });
    }
    return response.status(200).json({
          status: 200,
          data: [
            {
              currency,
              message: 'All  was retrieved successfully',
            },
          ],
    });
  }
  static async viewEdit(request,response){
    const currency = await Currency.find({_id: request.params.id})
    if (currency.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The id of the given currency was not found',
          });
    }
    return response.status(200).json({
          status: 200,
          data: [
            {
              currency,
              message: 'Get a specific currency was successful',
            },
          ],
    });
  }
  static async update(request,response){
    const currency = await Currency.find({_id: request.params.id})
    if (currency.length <=0) {
          return response.status(404).json({
            status: 404,
            error: 'The id for the given currency  does not exists',
          });
     }
     const {
       abbreviation,
       name
        } = request.body;
        if ( request.user._id  )  {
          const currencyUpdate = await Currency.updateOne(
            {_id: request.params.id},
            {abbreviation,
            name})

          return response.status(200).json({
                status: 200,
                data: [
                  {
                    id: currencyUpdate._id,
                    currencyUpdate,
                    message: 'Updated currency record’s comment',
                  },
                ],
          });
        } else {
          return response.status(401).json({
            status: 401,
            error: 'You must signup or login to access this route',
          });
        }
        return response.status(400).send({
          status: 400,
          error: {
            error: "Invalid form data"
          },
        })
  }
  static async delete(request,response){
    const currency = await Currency.find({_id: request.params.id})
    if ( currency.length <= 0) {

          return response.status(404).json({
            status: 404,
            error: 'The currency with the given id does not exists',
          });
    }
    const currencyDeleted  = await Currency.deleteOne({_id: request.params.id})
    if(currencyDeleted){
      return response.status(202).json({
        status: 202,
          data: [
            {
              id: currencyDeleted._id,
                  message: 'currency has been deleted',
                },
              ],
            });
    }
    return response.status(400).json({
      status: 400,
      error: {
          error: "Invalid form data"
        },
    })

  }
}
