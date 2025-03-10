import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config/config";

export const usersApi = createApi({
  reducerPath:'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.API_URL }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => `products`,
    }),
  }),
});

export const { useFetchProductsQuery } = usersApi;
