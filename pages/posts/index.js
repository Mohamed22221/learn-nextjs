import Link from "next/link";


export default function PostsPage({ posts }) {

  return (
    <>
      {posts?.map((item) => {
        return (
          <Link href={`/posts/${item.id}`}>
            <h4>{item.title}</h4>
          </Link>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
        posts,
    },

  };
}