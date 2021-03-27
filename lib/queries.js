const postFields = `
  _id,
  title,
  "slug": slug.current,
  "author": author->{name, image, "slug":slug.current},
  mainImage,
  publishedAt,
  excerpt
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) | [0...5] {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    body,
    "categories": categories[]->{title,'slug':slug.current},
    ${postFields},
    "comments": *[_type=="comment" && post._ref==^._id] {
      comment,
      name,
      _createdAt,
      _id
    }
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
*[_type == "category" && defined(slug.current)][]{
  _id,
  "slug":slug.current,
  title,
  isOnNavbar,
  isOnDropdown
}
`;
export const categoriesSlugsQuery = `
*[_type == "category"].slug.current
`;
export const categoryWithPostsQuery = `
*[_type == "category" && slug.current == $slug] | order(_updatedAt desc) | [0] {
  _id,
  "slug":slug.current,
  title,
  "posts": *[_type == "post" && references(^._id)]{
    ${postFields}
  }
}
`;
export const authorWithPostsQuery = `
*[_type == "author" && slug.current == $slug] | order(_updatedAt desc) | [0] {
  _id,
  "slug":slug.current,
  name,
  "posts": *[_type == "post" && references(^._id)]{
    ${postFields}
  }
}
`;
export const authorsSlugsQuery = `
*[_type == "author"].slug.current
`;
