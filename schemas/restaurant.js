import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
   {
      name: 'name',
      title: 'Title',
      type: 'string',
      validation:(Rule)=>Rule.required()
    },
    {
      name:'short_description',
      type:"string",
      title:"Short description",
      validation:(Rule)=>Rule.max(200)
    },
    {
      name:'image',
      type:'image',
      title:'image of Restaurant',
    },
    {
      name:'lat',
      type:'number',
      title:'Latitude of the Reataurant',
    },
    {
      name:"address",
      type:'string',
      title:'Restaurant address',
      validation:(Rule)=>Rule.required()
    },
    {
      name:'rating',
      type:'number',
      title:'Enter a rating from (1-5 Stars)',
      validation:(Rule)=>
        Rule.required().min(1).max(5).error('please enter a value between 1 and 5')
      
    },
    {
      name:'type',
      title:'category',
      validation:(Rule)=>Rule.required(),
      type:'reference',
      to:[{type:'category'}],
    },
    {
      name:'dishes',
      type:'array',
      title:'Dishes',
      of:[{type:'reference', to:[{type:'dish'}]}]
    }
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
