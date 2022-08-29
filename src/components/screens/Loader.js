import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const  Loader= () =>{
    return(
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div>
                <div className='cardBoss skeleton'>
                    <div className="cardComplete">
                        <div className="imgDate">
                            <p className="imgEvents imgSkeleton"><Skeleton  width ="100%" height = "100%"/></p>
                        </div>         
                        <div className="cardText">
                            <h4><Skeleton height={20} /></h4>
                            <p><Skeleton/></p>
                            <p><Skeleton/></p>
                            <p><Skeleton/></p>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )}


export default Loader