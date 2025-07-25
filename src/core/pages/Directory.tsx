import Tile from "../components/Tile"

const Directory = () => {
    return(
        <div className="p-10 flex flex-col items-center">
            <div className="w-[600px] flex flex-col items-center text-center gap-5 max-md:w-[350px]">
                <h1 className="font-bold text-4xl max-md:text-3xl">Component Library</h1>
                <p className="text-lg font-regular max-md:text-md">Explore and test Joshua's components in an interactive environment built by Josh! This library is free to use.</p>
            </div>
            <div>
                <Tile color="purple"/>
            </div>
        </div>
    )
}

export default Directory