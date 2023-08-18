import Link from "next/link";
import { useRouter } from "next/router";

const ClintPageDetails = () => {
  const router = useRouter();
  console.log(router.query.id);
  const adsClient = [
    { id: "1", name: "ad google" },
    { id: "2", name: "ad linkedin" },
    { id: "3", name: "ad facebook" },
  ];
  return (
    <div>
      <h1>Start Clients Details</h1>
      {adsClient.map((ads) => {
        return (
          <ul key={ads.id}>
            <li>
              <Link href={`${router.query.id}/${ads.id}`}>
                {ads.name}
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ClintPageDetails;
