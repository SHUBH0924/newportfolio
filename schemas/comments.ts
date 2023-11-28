import { RxAvatar } from "react-icons/rx";


const comments = {
    name: 'author',
    type: 'document',
    title: 'Author',
    description: "Author Schema",
    icon: RxAvatar,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'about',
            type: 'string',
            title: 'About'
        },
    ]
}

export default comments;