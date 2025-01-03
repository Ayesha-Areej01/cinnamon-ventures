/* eslint-disable import/no-anonymous-default-export */
import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
        name: "stock",
        title: "Stock", 
        type: "number",
        validation: (Rule) => Rule.min(0),
    }),
    defineField({
      title: 'Variety',
      name: 'variety',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              title: 'Variety Name',
              name: 'name',
              type: 'string',
            }),
            defineField({
              title: 'Price',
              name: 'price',
              type: 'number',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
        title: "name",
        media: "image",
        price: "price",
    },
  prepare(select) {
    return{
        title: select.title,
        subtitle: `$${select.price}`,
        media: select.media,
    };
   },
  },
});
