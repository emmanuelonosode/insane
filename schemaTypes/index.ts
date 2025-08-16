import {type SchemaTypeDefinition} from 'sanity'
import post from './post.js'
import author from './author.js'
// import portfolio from './portfolio.js'
import testimonia from './testimonia.js'
import table from './table.js'

//this is the port folio section here
import project from './project'
import webDetails from './webDetails'
import seoDetails from './seoDetails'
import aiDetails from './aiDetails'
import projectTestimonial from './projectTestimonial.js'

export const schemaTypes = [
  post,
  author,
  aiDetails,
  seoDetails,
  webDetails,
  project,
  projectTestimonial,
  testimonia,
  table,
]
export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    post,
    author,
    // portfolio,
    aiDetails,
    testimonia,
    seoDetails,
    webDetails,
    project,
    projectTestimonial,
    table,
  ],
}
