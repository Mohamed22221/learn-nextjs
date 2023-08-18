import Link from 'next/link'
import { useRouter } from 'next/router'

const ClintsPage= () => {
    const router = useRouter()
    console.log(router)
    const clients = [
      { id: "1", name: "mohamed" },
      { id: "2", name: "ahmed" },
      { id: "3", name: "ali" },
    ];
  return (
    <div>
       <h1>Start Clients Details</h1> 
       {clients.map((client) => {
        return (
          <ul key={client.id}>
            <li>
              <Link href={`clients/${client.id}`}>{client.name}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  )
}

export default  ClintsPage