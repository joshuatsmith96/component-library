import Tile from "../components/Tile";
import { spec } from "../../components/ComponentSpec";

const Directory = () => {
    console.log(spec)

    return (
        <div className="p-10 flex flex-col items-center">
            <div className="w-[600px] flex flex-col items-center text-center gap-5 max-md:w-[350px]">
                <h1 className="font-bold text-4xl max-md:text-3xl">Component Library</h1>
                <p className="text-lg font-regular max-md:text-md">Explore and test Joshua's components in an interactive environment built by Josh! This library is free to use.</p>
            </div>
            <div className="flex flex-wrap items-center justify-evenly gap-4 w-full py-10 px-20 max-md:px-1">
                {spec.map((item, index) => (
                    <Tile
                    key={index}
                    color={item.color}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    sizes={item.sizes}
                    variants={item.variants}
                    language={item.language} />
                ))}
            </div>
        </div>
    )
}

export default Directory