"use client";

import { PostWrapper } from "@/app/mui components/post/PostStyles";
import { client } from "../../lib/sanity";
import React from "react";
import { urlFor } from "../../lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";

async function getData(slug: string) {
  const query = `
      *[_type == "blog" && slug.current == '${slug}'] {
          "currentSlug": slug.current,
            title,
            content,
            titleImage
        }[0]`;

  const data = await client.fetch(query);
  return data;
}

const Post = ({ params }: any) => {
  const themeMode = useSelector((state: any) => state.theme);

  const theme = createTheme({
    palette: {
      mode: themeMode ? "dark" : "light",
    },
  });

  const [data, setData] = React.useState<any>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getData(params.post);
      setData(data);
    };

    fetchData();
  }, [params.post]);

  console.log(data);
  console.log(
    data?.titleImage ? urlFor(data.titleImage).url() : "No image URL"
  );

  if (data) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PostWrapper>
          <h1 style={{
            color: themeMode ? "skyblue" : "black",
            fontSize: "3rem",
            fontWeight: "bolder",
            textDecoration: "underline",
          }}>Rohan Adnan - BLOGS</h1>
          <h2 style={{ fontSize: "2rem" }}>{data.title}</h2>
          {data.titleImage ? (
            <Image
              src={urlFor(data.titleImage).url()}
              width={400}
              height={300}
              alt={data.title}
            />
          ) : null}
          <PortableText value={data.content} />
        </PostWrapper>
      </ThemeProvider>
    );
  }

  return <h1>Loading...</h1>;
};

export default Post;
