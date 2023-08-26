import React from 'react'

const TodoDetailsPage = ({todoDatails}) => {
  return (
    <div>{todoDatails.title}</div>
  )
}

export default TodoDetailsPage

export async function getStaticProps(context) {
    const {params} = context
    const todoId = params.todoId
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    const todoDatails = todos.find((item) => item.id === todoId)
    return {
      props: {
        todoDatails,
      },
      revalidate: 5, // Regenerate the page every 20 seconds
    };
  }
  