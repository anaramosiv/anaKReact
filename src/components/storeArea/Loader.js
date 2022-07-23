import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const  Loader= () =>{
    return(
        <SkeletonTheme baseColor="#202020" highlightColor="#444">

        <div>
            <div className='cardBoss'>
            <div className="cardComplete">
      
              
                        {/* <p> <Skeleton count={3} width={600} height = {200}/></p> */}
                     
         
                <div className="cardText">
                    <h4><Skeleton  height = {60}/></h4>
                    <p><Skeleton/></p>
                    <p><Skeleton/></p>
                </div>
                <div className='IncDecrease'></div>
            </div>
            </div>
        </div>
        </SkeletonTheme>
    )}


export default Loader