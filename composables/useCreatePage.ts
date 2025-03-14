import { graphqlClient } from "~/utils/graphql-client";
import { CREATE_PAGE } from "~/mutations/createPage";

const createPage = async (input: any) => {
  return await graphqlClient.request(CREATE_PAGE, { input });
};

export const useCreatePage = () => {
  return useMutation({
    mutationFn: async (newPost) => {
      const response = createPage(newPost);
    },
  });
};
