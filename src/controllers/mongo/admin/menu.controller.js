import Menu from '../../../models/mongo/core/menu_categories'
export class MenuController{
  static async create(request,response){
    const { title, link } = request.body;
    let postData = request.body;
    const NewMenu = new Menu({
      title, link
      });
    const savedmenu = await NewMenu.save()
    if(savedmenu){
      return response.status(201).json({
        status: 201,
        data: [
          {
            id: savedmenu._id,
            message: 'Created menu record',
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
    const menu = await Menu.find({})
    if (menu.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
              {
                menu:[],
                message: 'No records found',
              },
            ],
          });
    }
    return response.status(200).json({
          status: 200,
          data: [
            {
              menu,
              message: 'All currency was retrieved successfully',
            },
          ],
    });
  }
  static async viewEdit(request,response){
    const menu = await Menu.find({_id: request.params.id})
    if (menu.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The id of the given menu was not found',
          });
    }
    return response.status(200).json({
          status: 200,
          data: [
            {
              menu,
              message: 'Get a specific currency was successful',
            },
          ],
    });
  }
  static async update(request,response){
    const menu = await Menu.find({_id: request.params.id})
    if (menu.length <=0) {
          return response.status(404).json({
            status: 404,
            error: 'The id for the given menu does not exists',
          });
     }
     const {
             title, link
        } = request.body;
        if ( request.user._id )  {
          const menuUpdate = await Menu.updateOne(
            {_id: request.params.id},
            { title, link})
          return response.status(200).json({
                status: 200,
                data: [
                  {
                    id: menuUpdate._id,
                    menuUpdate,
                    message: 'Updated menu record’s comment',
                  },
                ],
          });
        } else {
          return response.status(401).json({
            status: 401,
            error: 'You must signup or login to access this route',
          });
        }
        response.status(400).send({
          status: 400,
          error: {
            error: "Invalid form data"
          },
        })
  }
  static async delete(request,response){
    const menu = await Menu.find({_id:request.params.id})
    if ( menu.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The menu with the given id does not exists',
          });
    }
    const menuDeleted  = await Menu.deleteOne({_id: request.params.id})
    if(menuDeleted){
      return response.status(202).json({
        status: 202,
          data: [
            {
              id: menuDeleted._id,
                  message: 'menu has been deleted',
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
