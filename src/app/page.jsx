import PostList from "@/components/PostList";
import { cookies } from "next/headers";

async function getData(cookies) {
  const option = {
    method: "GET",
    headers: { Cookie: cookies },
    cache: "no-store",
  };
  const posts = (
    await (await fetch(`${process.env.HOST}/api/posts`, option)).json()
  )["data"];

  return { posts };
}

// eslint-disable-next-line @next/next/no-async-client-component
const Home = async () => {
  const cookieStore = cookies();
  const data = await getData(cookieStore);

  return <PostList posts={data["posts"]} />;
};

export default Home;
