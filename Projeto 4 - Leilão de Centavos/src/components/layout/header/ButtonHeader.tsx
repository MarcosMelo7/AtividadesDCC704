import { url } from "inspector";
import Link from "next/link";

export default function ButtonHeader({ icone, nome, url }: any) {
  return (
    <Link href={url}>
      <div className="flex flex-col py-4 px-3 mx-4 justify-center items-center rounded-md hover:bg-gray-200">
        <span>{icone}</span>
        <p>{nome}</p>
      </div>
    </Link>
  );
}
