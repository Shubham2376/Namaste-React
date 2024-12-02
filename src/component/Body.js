import ResturantCard from "./ResturantCard";

import resList from "../utils/mockData";

import {useState} from "react";


const Body = () => {
    const [listOfResturants,setlistOfResturants] = useState(resList)
    return (
        <div className="body">
            <div className = "search">search</div>
            <div className = "filter">
              <button className="filter-btn" onClick={() => 
                {
                  const filterList = listOfResturants.filter(
                    (res) => res.info.avgRating > 4.5
                  );
                  setlistOfResturants(filterList);
                }
              }
                >Top Rated Resturants</button>
            </div>
            <div className = "resturantContainer"> 
                {
                  listOfResturants.map((resturant) => (
                    <ResturantCard key = {resturant.info.id} resData = {resturant}/>
                  ))
                }
            </div>
        </div>
    );
};

export default Body;