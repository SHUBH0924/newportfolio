import { RxAvatar } from "react-icons/rx";


const comments = {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        title: 'Approved',
        name: 'approved',
        type: 'boolean',
        description: "Comments won't show on the site without approval"
      },   
      {
        name: 'email',
        type: 'string',
      },
      {
        name: 'comment',
        type: 'text',
      },
      {
        name: 'post',
        type: 'reference',
        to: [
          {type: 'post'}
        ]
      },
    ],
}

export default comments;