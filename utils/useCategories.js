import { categoriesQuery } from '@lib/queries';
import { sanityClient } from '@lib/sanity.server';

const { useQuery } = require('react-query');

export default function useCategories() {
  return useQuery('categories', async () => {
    const data = sanityClient.fetch(categoriesQuery);
    return data;
  });
}
