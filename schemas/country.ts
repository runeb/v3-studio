import {defineField, defineType} from 'sanity'

export const country = defineType({
  type: 'document',
  name: 'country',
  title: 'Country',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
    }),
    defineField({
      type: 'string',
      name: 'code',
      title: 'Code',
    }),
    defineField({
      type: 'string',
      name: 'capital',
      title: 'Capital',
    }),
    defineField({
      type: 'string',
      name: 'region',
      title: 'Region',
    }),
    defineField({
      type: 'object',
      name: 'currency',
      title: 'Currency',
      fields: [
        defineField({
          type: 'string',
          name: 'code',
          title: 'Code',
        }),
        defineField({
          type: 'string',
          name: 'name',
          title: 'Name',
        }),
        defineField({
          type: 'string',
          name: 'symbol',
          title: 'Symbol',
        }),
      ],
    }),
    defineField({
      type: 'object',
      name: 'language',
      fields: [
        defineField({
          type: 'string',
          name: 'code',
          title: 'Code',
        }),
        defineField({
          type: 'string',
          name: 'name',
          title: 'Name',
        }),
      ],
    }),
    defineField({
      type: 'string',
      name: 'flag',
      title: 'Flag',
    }),
    defineField({
      type: 'string',
      name: 'dialling_code',
      title: 'Dialling Code',
    }),
    defineField({
      type: 'string',
      name: 'isoCode',
      title: 'ISO Code',
    }),
  ],
})
