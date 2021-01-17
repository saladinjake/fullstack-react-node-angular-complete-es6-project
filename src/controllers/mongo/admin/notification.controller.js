import Notification from '../../../models/mongo/core/notifications'
export class NotificationController{
  static async create(request,response){
    const { title, description, caption, image } = request.body;
    let postData = request.body;
    const NewNotification = new Notification({
         title, description, caption, image
      });
    const savednote = await Notification.save()
    if(savednote){
      return response.status(201).json({
        status: 201,
        data: [
          {
            id: savednote._id,
            message: 'Created Notification record',
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
    const note =await  Notification.find({})
    if (note.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
              {
                note:[],
                message: 'No records found',
              },
            ],
          });
    }
    return response.status(200).json({
          status: 200,
          data: [
            {
              note,
              message: 'All Notification was retrieved successfully',
            },
          ],
    });
  }
  static async viewEdit(request,response){
    const note = await Notification.find({_id: request.params.id})
    if (note.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The id of the given Notification was not found',
          });
    }
    return response.status(200).json({
          status: 200,
          data: [
            {
              note,
              message: 'Get a specific Notification was successful',
            },
          ],
    });
  }
  static async update(request,response){
    const note = await Notification.find({_id: request.params.id})
    if (note.length <=0) {
          return response.status(404).json({
            status: 404,
            error: 'The id for the given Notification  does not exists',
          });
     }
     const {
             title, description, caption, image
        } = request.body;
        if ( request.user._id )  {
          const noteUpdate = await Notification.updateOne(
            {_id: request.params.id},
            {title, description, caption, image})
          return response.status(200).json({
                status: 200,
                data: [
                  {
                    id: noteUpdate._id,
                    noteUpdate,
                    message: 'Updated Notification record’s comment',
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
    const note = await Notification.find({_id: request.params.id})
    if ( note.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The Notification with the given id does not exists',
          });
    }
    const noteDeleted  = await Notification.deleteOne({_id: request.params.id})
    if(noteDeleted){
      return response.status(202).json({
        status: 202,
          data: [
            {
              id: noteDeleted._id,
                  message: 'Notification has been deleted',
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
