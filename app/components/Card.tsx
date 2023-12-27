import { BlogCard } from "../mui components/card/CardStyles";
import { urlFor } from "../lib/sanity";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Card = ({blog}: any) => {

    const router = useRouter();
    const themeMode = useSelector((state: any) => state.theme);

    return(
       <>
            <BlogCard sx={{
                boxShadow: themeMode ? "0px 0px 10px rgba(250, 250, 250, 0.8)" : "0px 0px 10px 0px rgba(0,0,0,0.75)"
            }}>
                <Image src={urlFor(blog.titleImage).url()} width={280} height={200} style={{objectFit: "contain"}} alt={blog.title}/>
                <Typography variant="h6" component="h2" sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bolder",
                    textAlign: "center",
                }}>{blog.title}</Typography>
                <Button 
                onClick={()=>router.push(`/blog/${blog.currentSlug}`)}
                sx={{
                    backgroundColor: 'green',
                    color: "white",
                    borderRadius: "10px",
                    padding: "0.5rem 1rem",
                    fontWeight: "bolder",
                    marginTop: "1rem",
                    '&:hover': {
                        backgroundColor: "darkgreen",
                    }
                }}>Read Full Blog</Button>
            </BlogCard>
       </>
    )
}

export default Card;