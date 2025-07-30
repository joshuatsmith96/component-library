import type { ComponentType } from "react";
import { NavLink } from "react-router-dom"

export type TileType = {
    color: 'blue' | 'pink' | 'green' | 'orange' | 'purple' | 'yellow';
    title: string;
    description: string;
    link: string;
    variants?: number;
    sizes?: number;
    language?: string;
    imgSrc?: string;
    component?: ComponentType<TileType>
}

const Tile = ({ color, title, description, link, variants, sizes, language, imgSrc }: TileType) => {

    const colors = {
        blue: 'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300',
        pink: 'bg-gradient-to-br from-pink-100 via-pink-200 to-rose-200 min-h-',
        green: 'bg-gradient-to-br from-green-100 via-green-200 to-emerald-200',
        orange: 'bg-gradient-to-br from-orange-100 via-orange-200 to-amber-200',
        purple: 'bg-gradient-to-br from-purple-100 via-purple-200 to-violet-200',
        yellow: 'bg-gradient-to-br from-yellow-100 via-yellow-200 to-lime-200'
    }

    const currentColor = colors[color]

    return (
        <NavLink to={link}>
            <div className="w-[340px] rounded-lg shadow-sm border border-gray-200 delay-100 duration-400 hover:shadow-xl">
                <div className={`h-[175px] rounded-t-lg ${currentColor} flex flex-row justify-center items-center`}>
                    {imgSrc ? <img src={imgSrc}></img> : ''}
                </div>
                <div className="p-3 flex flex-col gap-5">
                    <h1 className="font-medium text-lg">{title}</h1>
                    <p className="text-md">{description}</p>
                    <div className="flex flex-row gap-7 text-sm text-gray-500">
                        {variants ? <p>{variants} Variant{variants > 1 ? 's' : ''}</p> : ''}
                        {sizes ? <p>{sizes} Size{sizes > 1 ? 's' : ''}</p> : ''}
                        {language ? <p>{language}</p> : ''}
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default Tile