import { useGetAllUserQuery } from "../store/api/apiSlice";

const Query = () => {
  const { data, error, isLoading } = useGetAllUserQuery();
  console.log("data", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <div>Query</div>;
};

export default Query;
