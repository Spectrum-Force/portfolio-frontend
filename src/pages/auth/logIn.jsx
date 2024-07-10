

const LogIn = () => {
    return (
      <div className="grid grid-cols-2 shadow-lg mx-10 rounded-xl ">
      
      <form onSubmit={LogIn} >
       <div>
       <h1>SIGN IN</h1>
       <p>use your account</p>
       <label
             htmlFor="email"
             className="block text-[#ef4e18] font-bold mb-1 ml-4"
           >
             Email
           </label>
           <input
             type="text"
             id="name"
             className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
           />
           <label
             htmlFor="password"
             className="block text-[#ef4e18] font-bold mb-1 ml-4"
           >
             Password
           </label>
           <input
             type="text"
             id="name"
             className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
           />
       </div>
       <link rel="stylesheet" href="<p>Forgot your password?</p>" />
       <div className="mb-8">
           <button type="submit" className="h-10 w-40 px-3 py-2 bg-orange-400 text-white border-2 rounded-3xl hover:bg-[#e7c75b]"
           >Sign In</button>
         </div>
      </form>
      <div className="bg-[#FF8DBB] rounded-xl">
        <h1> Hello, Friend!</h1>
        <p>Enter your personal details to start your journey with us</p>
        <button type="submit" className=" text-white mb-8 h-10 w-40 px-3 py-2 border-2 rounded-3xl hover:bg-[#e7c75b]"
        >SIGN UP</button>
      </div>
     </div>
    )
  }
  
  export default LogIn