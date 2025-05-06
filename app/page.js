"use client";
import List from "@/components/List";
import {
  Card,
  CardHeader,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="">
      <div className="bg-black flex justify-center items-center">
        <div className="bg-black w-[100vw] md:w-[80vw] my-10 py-10 px-5 rounded-lg shadow-xl">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="font-semibold text-white text-center mb-3 text-3xl">
            Your Ultimate Anime Archive.
            </h1>
            <h2 className="line-clamp-2 font-normal text-center mb-3 text-blue-300">
              Track and Discover your Favorite Anime and Manga with
              Anilist-clone
            </h2>
          </div>
        </div>
      </div>

      <section className="px-5 py-2 bg-black flex flex-col gap-2">
        <Card className="bg-black">
          <CardHeader className="font-semibold justify-center">
            Popular Anime
          </CardHeader>
          <div className="flex gap-[7px] flex-wrap justify-center items-center">
            <List
              queryKey={["top/anime"]}
              limitNumber={4}
              showPagination={false}
              pathname={"anime"}
            />
          </div>
        </Card>
        <Card className="bg-black" onPress={() => router.replace("/manga")}>
          <CardHeader className="font-semibold justify-center">
            Popular Manga
          </CardHeader>
          <div className="flex gap-[7px] flex-wrap justify-center items-center">
            <List
              queryKey={["top/manga"]}
              limitNumber={4}
              showPagination={false}
              pathname={"manga"}
            />
          </div>
        </Card>

        <Card className="bg-black">
          <CardHeader className="font-semibold justify-center">
            Ongoing Anime
          </CardHeader>
          <div className="flex gap-[7px] flex-wrap justify-center items-center">
            <List
              queryKey={["seasons/now"]}
              limitNumber={4}
              showPagination={false}
              pathname={"ongoing"}
            />
          </div>
        </Card>
      </section>
    </main>
  );
}
