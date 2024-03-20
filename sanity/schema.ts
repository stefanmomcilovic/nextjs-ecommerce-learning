import { type SchemaTypeDefinition } from 'sanity';

export const heroImages: SchemaTypeDefinition = {
  name: 'heroImage',
  type: 'document',
  title: 'Two Hero Images',
  fields: [
    {
      name: 'image1',
      type: 'image',
      title: 'Hero Image 1'
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Hero Image 2'
    }
  ]
};

export const category: SchemaTypeDefinition = { 
  name: 'category',
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'name',
      title: 'Name of Category',
      type: 'string'
    }
  ]
};

export const product: SchemaTypeDefinition = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'price_id',
      title: 'Stripe Price ID',
      type: 'string'
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}]
    }
  ]
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, heroImages]
};