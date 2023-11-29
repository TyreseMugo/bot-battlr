import React from "react";






function BotItem({image,name, health, damage, armor, bot_class, catchphrase, id, handleClicked, handleDelete}){

    return(
        <div className="col-3 p-1" >
        <div className="card border-warning h-100" name={id} onClick={()=>handleClicked(id)} key={name+id}>
            <img className="card-img-top" src={image} alt="news item" />
            <div className="card-body" >
                <h3 className="card-title">{name}</h3>
                <h4 className="card-title">{bot_class}</h4>
                <p className="card-text">{catchphrase}</p>
                <hr/>  
                <p id="icons"><span>  {health} </span> <span>  {damage}</span> <span> {armor}</span></p>
                <center><button type="button" class="btn btn-outline-danger" onClick={()=>handleDelete(id)}> X</button>


                </center>
                
            </div>
        </div>
    </div>
    )
}

export default BotItem;