import Link from "next/link";

export default function Home({ todos }) {
  // const [todos , setTodos] = useState([])
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(json => setTodos(json))
  // }, [])
  // console.log(todos)
  // if (todos) {
  //   return (
  //     <div>
  //       <h4>error</h4>
  //     </div>
  //   );
  // }
  return (
    <>
      {todos?.map((item) => {
        return (
          <Link href={`/${item.id}`}>
            <h4>{item.title}</h4>
          </Link>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  return {
    props: {
      todos,
    },
    revalidate: 5, // Regenerate the page every 20 seconds
  };
}
