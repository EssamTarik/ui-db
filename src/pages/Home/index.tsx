import { useUIDBContext } from "../../providers/UIDBProvider/context";

const Home = () => {
  const { data, isFetching, error } = useUIDBContext();
  console.log({ data, isFetching, error });
  return <h1>home</h1>
}

export default Home;