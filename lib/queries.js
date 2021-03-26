const postFields = `
  _id,
  title,
  "slug": slug.current,
  "author": author->{name, image},
  mainImage,
  publishedAt,
  excerpt,
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    body,
    "categories": categories[]->{title,'slug':slug.current},
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) | [0...2] {
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
export const categoriesQuery = `
*[_type == "category"]{
  "slug":slug.current,
  title
}
`;
export const categoriesSlugsQuery = `
*[_type == "category"]{
  "slug":slug.current,
}
`;
export const categoryWithPostsQuery = `
*[_type == "category" && slug.current == $slug][0]{
  _id,
  "slug":slug.current,
  title,
  "posts": *[_type == "post" && references(^._id)]{
    title,
    slug,
  	mainImage,
  	"author": author->{name, image},
		excerpt,
		publishedAt
  }
}
`;
