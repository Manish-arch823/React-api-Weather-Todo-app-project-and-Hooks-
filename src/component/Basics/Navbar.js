import React from 'react'

const Navbar = ({filterItem,menuList}) =>{
    return (
        <>
         <nav className="bavbar">
            <div className="btn-group">
                {
                    menuList.map((curElem)=>{
                        return (
                            <button className="w3-button w3-light-green" onClick={ () =>filterItem(curElem)} >{curElem}</button>

                        )
                    })
                }
  
            </div>

        </nav>

        </>
    )
}


export default Navbar;

