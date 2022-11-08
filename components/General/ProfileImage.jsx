import Image from "next/image";

export default function ProfileImage({path= '/clients/client1.webp'}) {
    return <Image className="rounded-3xl border-4 border-white mx-auto" width={80} height={80} alt={path} src={path}/>
}