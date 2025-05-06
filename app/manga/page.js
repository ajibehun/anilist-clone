"use client";
import List from "@/components/List";
import { useJikan } from "@/hooks/useJikan";
import React, { useState } from "react";

const TopManga = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: topManga, isLoading: isLoadingTopManga } = useJikan(
    ["top/manga"],
    page,
    limit
  );
  const handleChange = (value) => {
    setPage(value);
  };
  const [isLoaded, setIsLoaded] = useState(isLoadingTopManga);
  return (
    <>
      <List
        queryKey={["top/manga"]}
        limitNumber={10}
        pageTitle={"Top Manga"}
        pathname={"manga"}
        fullPage={true}
      />
    </>
  );
};

export default TopManga;
