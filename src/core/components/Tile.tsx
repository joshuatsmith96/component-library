type TileType = {
    color: 'blue' | 'pink' | 'green' | 'orange' | 'purple' | 'yellow'
    imgSrc?: string
}

const Tile = ({ color }: TileType) => {

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
        <div className="w-[300px] rounded-lg shadow-sm border border-gray-200">
            <div className={`h-[150px] rounded-t-lg ${currentColor} flex flex-row justify-center items-center`}>
                { }
            </div>
            <div className="p-3 flex flex-col gap-5">
                <h1 className="font-medium text-lg">Component Name</h1>
                <p className="text-sm">A short description that explains what this component is.</p>
                <div className="flex flex-row gap-5 text-xs">
                    <p>5 variants</p>
                    <p>3 Sizes</p>
                    <p>TypeScript</p>
                </div>
            </div>
        </div>
    )
}

export default Tile