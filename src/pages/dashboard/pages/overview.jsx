
import K from "../../../constants"


const Overview = () => {
  return (
  <div className="p-10 mt-10">
    <div className="grid grid-cols-3 gap-10">
      {K.OVERVIEW.map(({icon , text, total}, index) => (
        <div
        key={index}
        className="h-40 shadow-md bg-white p-6 flex flex-col justify-between"
        >
          <div className="flex justify-between">
            <span className="text-primary">{icon}</span>
            <span className="text-lg font-semibold">{text}</span>
          </div>
          <span className="text-2xl font-semibold">{total}</span>
        </div>
      )

      )}
    </div>
  </div>
  )
}

export default Overview