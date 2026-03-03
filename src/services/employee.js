// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/employees' }),
    tagTypes: ["Employee"],
    endpoints: (builder) => ({
        getAllEmployees: builder.query({
            query: () => '/',
            providesTags: ["Employee"],
        }),
        getEmployeeById: builder.query({
            query: (id) => `/${id}`,
            providesTags: ["Employee"],
        }),
        addEmployee: builder.mutation({
            query: (data) => ({
                url: '/',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Employee"],
        }),
        deleteEmployee: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Employee"],
        }),
        updateEmployee: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["Employee"],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllEmployeesQuery, useAddEmployeeMutation, useGetEmployeeByIdQuery, useDeleteEmployeeMutation, useUpdateEmployeeMutation } = employeeApi;