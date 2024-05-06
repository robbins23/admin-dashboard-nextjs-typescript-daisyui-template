"use client"
import {APP_NAME} from '../../helper/app-constants'

function LandingIntro(){

    return(
        <div className="hero min-h-full rounded-l-xl bg-base-200">
            <div className="hero-content py-12">
              <div className="max-w-md">

              <h1 className='text-3xl text-center font-bold '>{APP_NAME}</h1>

                <div className="text-center mt-12"><img src="./intro.png" alt="Dashwind Admin Template" className="w-48 inline-block"></img></div>
              
                <p className='mt-8 font-bold text-xs'>Next JS 14 | Daisy UI | Tailwind CSS | Typescript 5</p>
                
              </div>

            </div>
          </div>
    )
      
  }
  
  export default LandingIntro