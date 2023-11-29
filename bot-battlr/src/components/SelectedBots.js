import React from "react";





function SelectedBot({image,name, health, damage, armor, bot_class, catchphrase,id,handleDelete}){
    return(
        <div className="col-3 p-1">
        <div className="card border-warning h-100" key={name+id} name={id} onClick={()=>handleDelete(id)}>
            <img className="card-img-top" src={image} alt="news item" />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <h4 className="card-title">{bot_class}</h4>
                <p className="card-text">{catchphrase}</p>
                <hr/>
                <p><span> {health} </span> <span>  {damage}</span> <span> {armor}</span></p>
                <button type="button" class="btn btn-outline-danger">  </button>
            </div>
        </div>
    </div>
    )
}

export default SelectedBot;