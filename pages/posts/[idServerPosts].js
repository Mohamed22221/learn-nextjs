const TodoDetailsServerPage = ({ postsDatails }) => {
  return <div>{postsDatails.title}</div>;
};
export default TodoDetailsServerPage;

export async function getServerSideProps(context) {
  const {params , req ,res} = context
  console.log(req , "req")
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.idServerPosts}`
  );
  const postsDatails = await response.json();
  return {
    props: {
      postsDatails,
    },
  };
}
