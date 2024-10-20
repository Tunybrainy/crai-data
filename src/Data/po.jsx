<>

    <div
    className=" w-full max-w-full flex  bg-color-2 "> 
    
    <div className=" flex w-full flex-col">

    <div className=" flex  md:flex-row justify-center flex-col mb-[70px]">

        {/* contact heading */}

    <div className=" flex  flex-col mt-[100px] mx-10  ">
      <h1 className="font-sora text-[35px]  mb-[35px] font-semibold text-color-1 ">
      Contact Us
      </h1>
      <p className="font-sora text-[20px] font-normal text-color-1">
      Any Question or Remarks ? Just write us a message !
      </p>
     

    </div>
    <div className=" flex flex-col ml-[250px] mt-[80px] mx-10">
      <h1  className="font-sora text-[20px] pl-[10px] font-semibold text-color-1"  > phase 1: Uk</h1>
      <h1 className=" font-sora text-[70px] font-bold text-black"  >886</h1>
      <h1  className="font-sora text-[20px] pl-[20px] font-semibold text-color-1" >Agencies</h1>
    </div>
    </div>

      {/* contact form section-left side */}

    <div className="bg-white flex mx-auto 
     mb-5  rounded-lg  w-[1196px] h-[648px]">
      <div className=" bg-color-1 rounded-lg flex-col w-[491px] h-[647px]">
        <div className=" flex flex-col mt-[30px] ">
        <h1 className="font-sora text-[30px] ml-[70px] mt-[10px]
         font-semibold text-color-2 ">
         Contact Information
         </h1>
         <p className="font-sora text-[20px] ml-[55px] font-normal
          text-color-2">
         Say something to start a live chat!
         </p>
        </div>
        <div className=" flex flex-row  ml-[70px] mt-[75px] ">
        <BsTelephoneInboundFill className=" text-[25px] text-color-2 "/>
        <div className="flex text-">
        <h1 className="font-sora text-[20px] pl-[55px] font-normal
         text-color-2"> 123- 578 789 </h1>
        </div>
        
        </div>
        <div className=" flex flex-row ml-[70px] mt-[75px] ">
        <MdOutlineEmail className=" text-[30px] text-color-2 "/>
        <div className="flex">
        <h1 className="font-sora text-[20px] pl-[55px] font-normal
         text-color-2"> Crai@gmail.com </h1>
        </div>

        
        </div>
        <div className=" flex flex-row  text-[30px] pl-[70px] mt-[75px] ">
        <LuMapPin className=" text-[50px] text-color-2 "/>
        <div className=" flex">
        <h1 className="font-sora text-[20px] ml-[55px] font-normal
         text-color-2"> 132 Dartmouth Street Boston, 
        Massachusetts 02156 United States </h1>
        </div>
        
        </div>
      
      </div>

    {/* contact form section-right side with inputs */}
      <form className="flex font-sora max-w-full flex-col gap-4">
        <div className=" flex  mt-10 ml-[50px] flex-row">
        <div className=" flex flex-col ">
        <div className=" mb-2 ">
          <Label className="  text-color-1 text-[20px]" htmlFor="base" value="First Name" />
        </div>
        <TextInput className=" w-[278px]" id="base" type="text" placeholder="John" sizing="md" required />
        </div>
        <div className=" ml-[20px] pl-[20px]">
        
        <div className=" flex flex-col ">
        <div className=" mb-2 block ">
          <Label className="   text-color-1 text-[20px]" htmlFor="base" value="Last Name" />
        </div>
        <TextInput className=" w-[278px] " id="base" type="text" placeholder="Doe" sizing="md" required />
        </div>
        </div>
          
        </div>
        <div className=" flex  mt-10 ml-[50px] flex-row">
        <div className=" flex flex-col ">
        <div className=" mb-2 ">
          <Label className="  text-color-1 text-[20px]" htmlFor="email4" value="Your email" />
        </div>
        <TextInput className=" w-[278px]" id="email4" type="email" 
         placeholder="email@email.com" required />
        </div>
        <div className=" ml-[20px] pl-[20px]">
        
        <div className=" flex flex-col ">
        <div className=" mb-2 block ">
          <Label className="   text-color-1 text-[20px]" htmlFor="Phone-input " value="Phone" />
        </div>
        <TextInput className=" w-[278px] " id="Phone-input" type="text" placeholder="+123-578-900" sizing="md" required />
        </div>
        </div>
          
        </div>
        <div className=" flex  mt-10 ml-[50px] flex-row">
        <div className=" flex flex-col ">
        <div className=" mb-2  ">
          <Label className="  text-color-1 text-[20px]" htmlFor="large" value="Your message" />
        </div>
        <Textarea className=" w-[600px] " id="comment" 
        placeholder="Leave a comment..." required rows={4} />
        </div>
        </div>

        <div className=" font-sora  mt-[10px] flex text-[20px]
       pl-[460px] pt-6 flex-wrap gap-2">
      <a href="#" className="inline-block px-4 py-2 bg-color-1 text-color-2 border
       border-green-900 rounded-full hover:bg-white hover:text-color-1">
        Send Message
        </a>
      </div>
     
      
      </form>
      
    </div>
    </div>

    
   
    </div>
    <Componentfooter />

    </>