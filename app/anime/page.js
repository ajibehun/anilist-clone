"use client";
import List from "@/components/List";
import { useJikan } from "@/hooks/useJikan";
import React, { useState } from "react";

const TopAnime = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: topAnime, isLoading: isLoadingTopAnime } = useJikan(
    ["top/anime"],
    page,
    limit
  );
  const [isLoaded, setIsLoaded] = useState(isLoadingTopAnime);
  const handleChange = (value) => {
    setPage(value);
  };
  console.log(page);
  return (
    <>
      <List
        queryKey={["top/anime"]}
        limitNumber={10}
        pageTitle={"Top Anime"}
        pathname={"anime"}
        fullPage={true}
      />
    </>
  );
};

export default TopAnime;
