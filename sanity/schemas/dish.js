import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  type: 'document',
  title: 'Dish',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of the Dish',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description of the Dish',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of the Dish',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    }),
  ],
  
})
