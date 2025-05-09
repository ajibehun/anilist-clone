import { Chip, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const AnimeDetail = ({ data }) => {
  return (
    <div className="bg-black text-white p-6  shadow-lg">
      <div className="flex flex-wrap ">
        {/* Anime Image */}
        <div className="w-full md:w-1/3 mb-4  md:mb-0">
          <Image
            src={data.images.jpg.image_url}
            alt={data.title}
            className="rounded-2xl mx-10"
            radius="full"
            loading="lazy"
            shadow="lg"
            isBlurred
          />
        </div>
        {/* Synopsis */}
        <div className="w-full md:w-2/3 md:pl-6">
          <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
          <p className="mb-4">{data.synopsis}</p>
        </div>
      </div>

      {/* Genres */}
      <div className="flex flex-wrap mt-4">
        <div className="flex gap-2 flex-wrap">
          {data.genres.map((genre) => (
            <Link key={genre.mal_id} href={`/genres?genre_id=${genre.mal_id}`}>
              <Chip color="primary" variant="flat">
                {genre.name}
              </Chip>
            </Link>
          ))}
        </div>
      </div>

      {/* Themes */}
      <div className="flex flex-wrap mt-4">
        <ul className="flex gap-2 flex-wrap ">
          {data.themes.map((theme) => (
            <Chip
              key={theme.mal_id}
              className="bg-[#d2722e80] text-yellow-400"
              variant="flat"
            >
              {theme.name}
            </Chip>
          ))}
        </ul>
      </div>

      {/* Basic Details */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Episodes */}
        <div>
          <p>
            <span className="font-bold">Episodes:</span> {data.episodes}
          </p>
        </div>
        {/* Duration */}
        <div>
          <p>
            <span className="font-bold">Duration:</span> {data.duration}
          </p>
        </div>
        {/* Status */}
        <div>
          <p>
            <span className="font-bold">Status:</span> {data.status}
          </p>
        </div>
        {/* Aired From/To */}
        <div>
          <p>
            <span className="font-bold">Aired:</span>{" "}
            {data.aired?.string || data.published?.string}
          </p>
        </div>
        {/* Source */}
        <div>
          <p>
            <span className="font-bold">Source:</span>{" "}
            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              {data.source}
            </Chip>
          </p>
        </div>
        {/* Rating */}
        <div>
          <p>
            <span className="font-bold">Rating:</span> {data.rating}
          </p>
        </div>
        {/* Score */}
        <div>
          <p>
            <span className="font-bold">Score:</span> {data.score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
