import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({ url: "/contacts", method: "GET" }),
      providesTags: ["Contacts"],
    }),

    createContact: builder.mutation({
      query: ({ name, number }) => ({
        url: "/contacts",
        method: "POST",
        data: { name, number },
      }),
      invalidatesTags: ["Contacts"],
    }),

    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
