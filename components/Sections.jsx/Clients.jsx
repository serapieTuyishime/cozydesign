import Image from "next/image";

export default function Clients() {
    const data = {
        image1: {
            path: "/clients/company1.svg",
            height: 32,
            width: 93.77,
        },
        image2: {
            path: "/clients/company2.svg",
            height: 32,
            width: 105.25,
        },
        image3: {
            path: "/clients/company3.svg",
            height: 32,
            width: 150,
        },
        image4: {
            path: "/clients/company4.svg",
            height: 32,
            width: 86.83,
        },
        image5: {
            path: "/clients/company5.svg",
            height: 32,
            width: 120,
        },
        image6: {
            path: "/clients/company6.svg",
            height: 32,
            width: 100,
        },
        image7: {
            path: "/clients/company7.svg",
            height: 32,
            width: 54.34,
        },
    };
    return (
        <div className="bg-dark ">
            <div className="wrapper grid pb-4 pt-16">
                <h1 className="text-primary text-center text-3xl italic">
                    More than 150 happy clients
                </h1>
                <div className="flex gap-10 flex-col sm:flex-row justify-center items-center py-12">
                    {Object.keys(data).map((index, key)=>{
                        return <Image key={key} width={data[index].width} height={data[index].height} src={data[index].path} />
                    })}
                </div>
            </div>
        </div>
    );
}
