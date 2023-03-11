export default{
    name:'featured',
    title:'Featured Menu categories',
    type: "document",
    fields:[
        {
            name:'name',
            type:'string',
            title:'featured category name'
        },
        {
            name:'short_description',
            type:'string',
            title:'Short Description',
        },
        {
            name:'restaurants',
            type:'array',
            title:'Restaurants',
            of:[{type:'reference', to:[{type:"restaurant"}]}]
        }
    ]
}