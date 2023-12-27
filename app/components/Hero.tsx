'use client'

import { HeroWrapper, HeroSection } from "../mui components/hero/HeroStyles";
import Card from "./Card";
import { client } from "../lib/sanity";
import React from "react";

const getData = async () => {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage
    }`;

  const data = await client.fetch(query);
  return data;
};

const Hero =  () => {
  
    const [data, setData] = React.useState<any>([]);
    React.useEffect(() => {
      const fetchData = async () => {
        const data = await getData();
        setData(data);
      }

        fetchData();
    }, []);

    console.log(data);
  return (
    <HeroWrapper>
      <HeroSection>
        {data.map((item: any) => {
          return (
                <Card key={item.title} blog={item}/>
          );
        })}
      </HeroSection>
    </HeroWrapper>
  );
};

export default Hero;
