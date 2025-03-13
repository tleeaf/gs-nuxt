import { graphqlClient } from "~/utils/graphql-client";
import { GET_CATEGORIES } from "~/queries/getCategories";

const fetchCategories = async () => {
  return await graphqlClient.request(GET_CATEGORIES);
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    select: (data) => data.categories.nodes,
  });
};
