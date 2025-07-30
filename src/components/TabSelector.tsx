// type TabType = {
//     buttonText: string,
//     action: () => void
// }

// type TabSelectorType = {
//     data: TabType
// }

// {data, action}: TabSelectorType

const TabSelector = () => {

    const data = [
        {
            buttonText: "Button 1",
            action: () => console.log("Button 1 clicked")
        },
        {
            buttonText: "Button 2",
            action: () => console.log("Button 2 clicked")
        },
        {
            buttonText: "Button 3",
            action: () => console.log("Button 3 clicked")
        }
    ]

    const dark = false;


    return (
        <div className="flex flex-row m-2">
            {data.map((btn, index) => (
                <div key={btn.buttonText + index}>
                    <button className={`${dark ? 'border-blue-900 bg-gray-800 text-white': 'text-blue-900 hover:bg-blue-100'} duration-300 hover:cursor-pointer border py-3 px-6 ${index === 0 ? "rounded-l-md" : index === data.length-1 ? "rounded-r-md" : ""}`} onClick={btn.action}>{btn.buttonText}</button>
                </div>
            ))}
        </div>
    )
}

export default TabSelector;