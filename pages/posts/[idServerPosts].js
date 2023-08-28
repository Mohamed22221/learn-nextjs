const TodoDetailsServerPage = ({ postsDatails }) => {
  return <div>{postsDatails.title}</div>;
};
export default TodoDetailsServerPage;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.idServerPosts}`
  );
  const postsDatails = await response.json();
  return {
    props: {
      postsDatails,
    },
  };
}
