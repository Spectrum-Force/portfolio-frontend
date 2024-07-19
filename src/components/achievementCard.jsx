

const AchievementCard = ({ award, description, date, nameOfInstitution, image }) => {
    return (
        <div>
            <div className="h-80 w-64 shadow-md rounded-xl p-5 bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col">
                <div>
                    <img className="h-40 w-[400px]" src={image} alt="" />
                </div>
                <div className="flex flex-col text-white mt-5">
                    <div>{award}</div>
                    <div>{nameOfInstitution}</div>
                    <div>{description}</div>
                    <div>{date}</div>
                  
                </div>

            </div>
        </div>
    )
}

export default AchievementCard