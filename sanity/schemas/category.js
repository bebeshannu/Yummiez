import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  type: 'document',
  title: 'Menu Category',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category Name',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the category',
    }),
  ],
})

// export default {
//   name: 'category',
//   type: 'document',
//   title: 'Menu Category',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Category Name',
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'Image of the category',
//     },
//   ],
// }
