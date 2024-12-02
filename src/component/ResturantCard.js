import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    // console.log(props);

    // const {resName,cuisine,Rating,Time} = props;
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,deliveryTime} = resData?.info//here we do destructing for cleaness purposes
    // now from resData we can use the data which is present inside resObj data which came from backend api of swiggy
    
    return (
        <div className="res-card">
            <img className = "res-logo" alt = "res-logo" src = {CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

export default ResturantCard;