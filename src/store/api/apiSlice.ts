import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../types/user";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://mocki.io/v1/"
    }),
    endpoints: (builder) => ({
        getAllUser: builder.query<User[], void>({
            query: () => "d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
        })
    })
})


export const { useGetAllUserQuery } = userApi