import { useNavigate } from "react-router-dom";

const ResturantCard=({resturant,names})=>{
    const {name,id,cloudinaryImageId,costForTwo,avgRating,locality,areaName}=resturant;
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate(`/resturant/menu/${id}`)
    }
    return(
        <div className="res-card" onClick={handleClick}>
            <img src={`https://media-assets.swiggy.com/${cloudinaryImageId}`} width={'100%'} height={150}/>
            <h4>Name: {name}</h4>
            <p>Cost For Two: {costForTwo}</p>
            <p>AvgRating: {avgRating}</p>
        </div>
    )
}

export default ResturantCard;