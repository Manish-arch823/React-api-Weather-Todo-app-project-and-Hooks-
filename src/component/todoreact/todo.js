import React,{useState,useEffect} from 'react';
import "./style.css"

const Todo = () =>{

    // get the local storage data back 
    const getLocalData =()=>{
        const lists = localStorage.getItem("mysodolist")
        if(lists) {
            return JSON.parse(lists)
        }else{
            return[];
        }
    }


    const [inputdata,setInputData] = useState("");
    const [items,setItems] = useState(getLocalData());
    const [isEditItem,setIsEditItem]=useState("");
    const [toggleButton,setToggleButton] =useState(false);


    // add the items function 
    const addItem =() =>{
        if (!inputdata){
            alert("please enter the data")
        }else if (inputdata && toggleButton ){
            setItems(
                items.map((curElem)=>{
                    if (curElem.id === isEditItem){
                        return {...curElem,name:inputdata}
                    }
                    return curElem; 

                })
            )
            setInputData("")

            setIsEditItem(null);
            setToggleButton(false)
        }
        else{
            const myNewInputData ={
                id:new Date().getTime().toString(),
                name:inputdata,
            }
            setItems([...items,myNewInputData])
            setInputData("");
        }
    }


    // Edit The item 

    const editItem =(index)=>{
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        })
        setInputData(item_todo_edited.name)

        setIsEditItem(index);
        setToggleButton(true)




    }







    // how to delete items section


    const deleteItem = (index)=>{
        const updatedItems = items.filter((curElem)=>{
            return curElem.id !== index;
        })
        setItems(updatedItems);

    }

    // Remove All the Elements 
    const removeAll =() => {
        setItems([])
    }

    // adding local Storage
    useEffect(() =>{
        localStorage.setItem("mysodolist",JSON.stringify(items))
     },[items] );


    return (
        <>
        <div className="main-div" style={{padding:"110px ",paddingLeft:"500px"}}>
            <div className="child-div" >
                <figure>
                    <img src="images/todo_list.jpg" alt="TODO_LIST" height="100px" width="100px" />
                    <figcaption>ADD Your List Here</figcaption>
                </figure>

                <div className="additems">
                    <input type="text" placeholder="Add item " className="form-control" 
                    value={inputdata}
                     onChange={(event)=>setInputData(event.target.value)}/>
                     {toggleButton ? (
                         <i className="fas fa-edit" onClick={addItem} ></i>
                     ) :(
                        <i className="fas fa-plus" onClick={addItem} ></i>
                     ) }
                    
                </div>

                    {/* show our item */}
                    <tr>
                  
                    <div className="showItems">
                        {items.map((curElem)=>{
                            return(
                                <div className="eachitem" key={curElem.id} >
                                <td> <h1>{curElem.name}</h1></td>
                               <td>
                                    <div className="todo-btn">
                                        <i class="fas fa-edit" style={{paddingLeft:"20px"}}
                                        onClick={()=>editItem(curElem.id)}
                                    ></i>
                                        <i class="fas fa-trash-alt"
                                         style={{paddingLeft:"20px"}}
                                         onClick={()=>{
                                            deleteItem(curElem.id)
                                        }} ></i>
                                        </div>
                               </td>    
                            </div>
                            )  
                             })}


                    </div>
                    </tr>

                <div className="showItem"> 
                <button className="button button3" onClick={removeAll} >Check List</button>

                </div>
                 
            </div>
        </div>
    
        </>

    )

}

export default Todo;