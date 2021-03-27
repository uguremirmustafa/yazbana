import sanityClient from '@sanity/client';
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_COMMENT_TOKEN,
  useCdn: process.env.NODE_ENV === 'production',
};
const client = sanityClient(config);

export default async function createComment(req, res) {
  const {
    values: { name, email, comment },
    postId,
  } = JSON.parse(req.body);
  try {
    await client.create({
      _type: 'comment',
      name,
      email,
      comment,
      post: {
        _type: 'reference',
        _ref: postId,
      },
    });
  } catch (error) {
    console.error(err);
    return res
      .status(500)
      .json({ message: `Yorumunuz iletilemedi, daha sonra tekrar deneyin!`, err });
  }
  return res.status(200).json({ message: 'Yorumunuz iletildi! 😀' });
}
