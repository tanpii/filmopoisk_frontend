import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030/api/v1/" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "login",
        method: "POST",
        body: { username, password },
      }),
      transformResponse: (response) => {
        if (response.token) {
          return { token: response.token };
        } else {
          throw new Error(response.error || "Login failed");
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
export default authApi;
