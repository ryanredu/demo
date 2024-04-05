"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PostList = ({ posts }) => {
  console.log(posts);
  const [data, setData] = useState({ title: "", description: "" });
  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  const handleChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async () => {
    setSubmit(true);
    let option = { method: "POST", body: JSON.stringify(data) };
    const res = await (await fetch("/api/posts", option)).json();
    setSubmit(false);
    setData({ title: "", description: "" });
    router.refresh();
  };
  return (
    <div className="space-y-4 m-5">
      <input
        value={data.title}
        onChange={(e) => handleChange("title", e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />{" "}
      <br />
      <textarea
        value={data.description}
        onChange={(e) => handleChange("description", e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-lg w-full max-w-xs"
      />{" "}
      <br />
      <button onClick={formSubmit} className="btn btn-success">
        Submit
      </button>
      <div className="m-96 space-y-5">
        {posts.map((post) => (
          <div key={post.id}>
            <h2 className="text-2xl">{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
