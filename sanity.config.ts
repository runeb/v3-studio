import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'My V3 template',

  projectId: process.env.SANITY_STUDIO_SANITY_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_SANITY_DATASET || '',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
