import axios from "axios";
import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import ShimmerCard from "./ShimmerCard";
const ResturantList = () => {

  const [resturantList, setResturantList] = useState([]);
  const [filteredResturantList,setFilteredResturantList]=useState([]);
  const [searchValue,setSearchValue]= useState('');
  useEffect(() => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9175739&lng=77.6220778&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
      .then((res) => {
        setResturantList(
          res?.data?.data?.cards
            ? res?.data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
                ?.restaurants
            : []
        );
        setFilteredResturantList( res?.data?.data?.cards
          ? res?.data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : [])
      });
  }, []);

  useEffect(()=>{
       if(searchValue.trim().length>0){
           const filteredResturantList=resturantList.filter((res)=>res.info.name.includes(searchValue))
           setFilteredResturantList(filteredResturantList);
       }
       else{
        setFilteredResturantList(resturantList);
       }
  },[searchValue])
  const handleChange=(event)=>{
     setSearchValue(event.target.value);
  }
  if(filteredResturantList?.length===0){
    return <ShimmerCard/>
  }
  return (
    <>
    <input placeholder="search" onChange={handleChange} value={searchValue}/>
    <div className="res-card-container">
      {
           filteredResturantList.map((resturant,index) => (
            <ResturantCard  key={index} resturant ={resturant.info} names={"xyz"}/>
          ))
      }
    </div>
    </>
  );
};
export default ResturantList;
