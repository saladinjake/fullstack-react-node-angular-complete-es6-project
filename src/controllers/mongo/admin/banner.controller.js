import Banner from '../../../models/mongo/core/banners'
export class BannerController{
  static async create(request,response){
    const { title, description, caption, image } = request.body;
    let postData = request.body;
    const NewBanner = new Banner({
         title, description, caption, image
      });
    const savedBanner = await NewBanner.save()
    if(savedBanner){
      return response.status(201).json({
        status: 201,
        data: [
          {
            id: savedBanner._id,
            message: 'Created banner record',
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
    const banners =await  Banner.find({})
    if (banners.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
              {
                banners:[],
                message: 'No records found',
              },
            ],
          });
    }
    return response.status(200).json({
          status: 200,
          data: [
            {
              banners,
              message: 'All banners was retrieved successfully',
            },
          ],
    });
  }
  static async viewEdit(request,response){
    const banner = await Banner.find({_id: request.params.id})
    if (banner.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The id of the given banner was not found',
          });
    }
    return response.status(200).json({
          status: 200,
          data: [
            {
              banner,
              message: 'Get a specific banner was successful',
            },
          ],
    });

  }
  static async update(request,response){
    const banner = await Banner.find({_id: request.params.id})
    if (banner.length <=0) {
          return response.status(404).json({
            status: 404,
            error: 'The id for the given mech-request  does not exists',
          });
     }
     const {
             title, description, caption, image
        } = request.body;
        // console.log(title, description, caption, image)
        if ( request.user._id  )  {
          const bannersUpdate = await Banner.updateOne(
            {_id: request.params.id},
            {title, description, caption, image})
          return response.status(200).json({
                status: 200,
                data: [
                  {
                    id: bannersUpdate._id,
                    bannersUpdate,
                    message: 'Updated mech-request record’s comment',
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
    const banner = await Banner.find({_id: request.params.id})
    if ( banner.length <= 0) {

          return response.status(404).json({
            status: 404,
            error: 'The car with the given id does not exists',
          });
    }
    const bannerDeleted  = await Banner.deleteOne({_id: request.params.id})
    if(bannerDeleted){
      return response.status(202).json({
        status: 202,
          data: [
            {
              id: bannerDeleted._id,
                  message: 'banner has been deleted',
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
