import {Rings} from "react-loader-spinner"

const PageLoader = () => {
  return (
    <div className="h-screen flex items-center justify-center">  
        <Rings
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="rings-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default PageLoader