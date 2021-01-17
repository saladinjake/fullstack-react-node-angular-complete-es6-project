import Modal from '../../../models/mongo/core/modal_content'
export class ModalController{
  static async create(request,response){
    const { title, description, caption, image } = request.body;
    let postData = request.body;
    const NewModal = new Modal({
         title, description, caption, image
      });
    const savedmodal = await NewModal.save()
    if(savedmodal){
      return response.status(201).json({
        status: 201,
        data: [
          {
            id: savedmodal._id,
            message: 'Created modal record',
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
    const modal =await  Modal.find({})
    if (modal.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
              {
                modal:[],
                message: 'No records found',
              },
            ],
          });
    }
    return response.status(200).json({
          status: 200,
          data: [
            {
              modal,
              message: 'All modals was retrieved successfully',
            },
          ],
    });
  }
  static async viewEdit(request,response){
    const modal = await Modal.find({_id: request.params.id})
    if (modal.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The id of the given modal was not found',
          });
    }
    return response.status(200).json({
          status: 200,
          data: [
            {
              modal,
              message: 'Get a specific modal was successful',
            },
          ],
    });
  }
  static async update(request,response){
    const modal = await Modal.find({_id: request.params.id})
    if (modal.length <=0) {
          return response.status(404).json({
            status: 404,
            error: 'The id for the given modal  does not exists',
          });
     }
     const {
             title, description, caption, image
        } = request.body;
        if ( request.user._id)  {
          const modalUpdate = await Modal.updateOne(
            {_id: request.params.id},
            {title, description, caption,image})

          return response.status(200).json({
                status: 200,
                data: [
                  {
                    id: modalUpdate._id,
                    modalUpdate,
                    message: 'Updated modal record’s comment',
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
    const modal = await Modal.find({_id: request.params.id})
    if ( modal.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The modal with the given id does not exists',
          });
    }
    const modalDeleted  = await Modal.deleteOne({_id: request.params.id})
    if(modalDeleted){
      return response.status(202).json({
        status: 202,
          data: [
            {
              id: modalDeleted._id,
                  message: 'modal has been deleted',
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
