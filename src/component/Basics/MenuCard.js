import React from 'react';

const MenuCard = ({ menuData }) => {
    // console.log(menuData)
    return (
        <>
                {menuData.map((curElem)=>{
                    const { id,name,category, image, description } = curElem;
                    return (
                        <>
                        
                        <div className="card-container" key={id} >

                        <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle" >{id}</span>
                                    <span className="card-author subtle" style={{color:"red"}}>{name}</span>
                                    <h1 className="card-title" >{name}</h1>
                                    <span className="card-description subtle">
                                    {description}
                                    </span>
                                    <div className="card-read" >Read</div>
                                </div>
                                <img src={image} alt="images" className="card-media" height="200px" width="300px"/>
            
                                <span className="card-tag subtle" > order now </span><br/><br/>
            
                        </div>
                    </div>
                    </>

                    )

                })}
        
    

        

        </>
    )
}


export default MenuCard
