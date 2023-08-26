import React from "react";

const TodoDetailsPage = ({ todoDatails }) => {
  return <div>{todoDatails.title}</div>;
};

export default TodoDetailsPage;

export async function getStaticProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${context.params.todoId}`
  );
  const todoDatails = await response.json();
  return {
    props: {
      todoDatails,
    },
    revalidate: 5, // Regenerate the page every 20 seconds
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  const todosPaths = todos.map((item) => {
    return {
      params: { todoId: `${item.id}` },
    };
  });
  return {
    paths: todosPaths,
    fallback: false,
  };
}
