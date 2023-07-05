import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64a5626000c3559aa9bf9a6d.mockapi.io/api/v1/',
  }),

  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['contacts'],
    }),

    createContact: builder.mutation({
      query: body => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['contacts'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
