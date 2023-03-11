import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of dish in INR',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    }),

  ],
 
})
