import React from "react";
import ReactDOM from "react-dom/client";



// const heading = React.createElement("h1",{
//     id : "title",
// },"hello from react");
// console.log(heading);

// const heading1 = React.createElement("h1",{
//     id : "title,"
// },"Heading 1");

// const heading2 = React.createElement("h2",{
//     id : "title",
// },"Heading 2");

// const container = React.createElement("div",{
//     id:"container",
// },[heading1,heading2]);



/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */

/*
const parent = React.createElement("div",
    {id:"parent"},
    React.createElement("div",
        {id:"child"},
    [React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag")]
    )
);
*/

/* <div id="parent">
    <div id="child1">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h3 tag</h1>
        <h2>I am h4 tag</h2>
    </div>
</div> */

/* episode - 3 

const parent = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child1"},
    [React.createElement("h1",{},"I am shubham tag"),
    React.createElement("h2",{},"I am h2 tag")]
    ),React.createElement("div",
        {id:"child2"},
    [React.createElement("h3",{},"I am h3 tag"),
    React.createElement("h4",{},"I am h4 tag")]
    )]
);
console.log(parent);


root.render(parent); 

episode-3 */

// root.render(container);



// -----------Episode-3-----------

// creating h1 tag using react(creating react element using core react)
//React.createElement => object => HTMLElement(render)

// const heading = React.createElement("h1",
//     {id:"heading"},
//     "i am h1 tag"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// JSX 

// lets create h1 tag using JSX(creating react element using JSX)
// ---------React Element-------------------
// const elem = <span>This is react element</span>

// const jsxHeading = (
//     <h1 id="heading" className="hello" tabIndex = "1">
//         {elem}
//         Namaste react using JSX
//     </h1>
//     ); //by seeing this alot of people thing that we write html inside javascript but JSX is not html inside javascript. jsx is not html , jsx is html like syntax.jsx is different , html is different , react is different . jsx is html like or xml like
// the code that we written here is much more cleaner than above code

// <h1>Namaste react using JSX</h1> this piece of code is jsx when this piece of code is executed this becomes react element . jsx is just the syntax react element is object . these piece of code is equivalent to above code (in which we create react element using core react)

// console.log(jsxHeading);
// when we console heading and jsxHeading you see that both are exactly same


// ------------React Component----------------

// React Functional Component(it is normal js function which return some piece of jsx element)

/*
const ReactComponent = () => {
    return <h1 className="heading">Namaste React Functional Component</h1> //this is how we return jsx element
};
*/

// above and below react components both are same 
// const ReactComponent2 = () => (               //as we go to multiple lines so that we enclose it in a parenthesis
// <h1 className="heading">Namaste React Functional Component2</h1>
// );

// const number = 1000;
// // jsx can be nested also
// const ReactComponent3 = () => (
//     <div id = "container">
//         {ReactComponent2()}
//         {jsxHeading} 
//         {number}
//         <h2>{number}</h2>
//         {200 + 300}
//         {console.log("ahddddf")}
//         <ReactComponent2/> 
//         <ReactComponent2></ReactComponent2>
//         <h1 className="heading">Namaste React Functional Component3</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

//  Babel transpiled a code so that react and browser engine understand it . React understands because as we see her we pass jsxHeading in to render function(this comes in ReactDOM) will your ReactDOM understand this jsx code(in jsxHeading) no , so what happens it this code transpiled before it reaching there who transpiled our code, parcel will do this transpilation for us . is parcel do it itself no parcel use Babel package to do this transpilation


// ------------------------------Episode 4-----------------------------------

    // Header
    //     - Logo
    //     - Navigation item
    // Body
    //     - Search
    //     - resturantContainer //there are lot of resturantcard we have to make our code modular so whenever you see there     repeating a lot of code here we see there are lots of resturant card so we will make separate component for resturant card so here we make resturantCard component . component is like a function why we create a function in program so that we can reuse it so whenever you see something is reuse always create separate component for that 
    //         - resturantCard
                // - img
                // - name of ResturantCard, star rating, cuisine,etc
    // Footer
    //     - copyright
    //     - address
    //     - links
    //     - contact

const Header = () => {
    return (
        <div className="header">
            <div className = "img-container">
                <img className = "logo" src = "https://www.jotform.com/blog/wp-content/uploads/2020/05/How-to-start-a-food-delivery-business.png"/>
            </div>
            <div className = "Nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// This is js object
const stylecard = {
    backgroundColor:"#f0f0f0",
}
const ResturantCard = (props) => {
    console.log(props);

    // const {resName,cuisine,Rating,Time} = props;
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,deliveryTime} = resData?.info//here we do destructing for cleaness purposes
    // now from resData we can use the data which is present inside resObj data which came from backend api of swiggy
    
    return (
        <div className="res-card" style = {stylecard}>
            <img className = "res-logo" alt = "res-logo" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

// Now we use live data which we pick it from the swiggy backend api this is js object 
const resList = [
                  {
                    "info": {
                      "id": "584332",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/5d695f6a-7fc1-45d6-ae8f-c5986b904b34_584332.JPG",
                      "locality": "Gamma 1",
                      "areaName": "Greater Noida",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.6K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-27 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/kfc-gamma-1-greater-noida-rest584332",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "78041",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/24badc96-e293-444e-be18-52d5f5ae9b74_78041.jpg",
                      "locality": "Gamma Shopping Mall",
                      "areaName": "Gamma 1",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.2,
                      "parentId": "166",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "19K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-27 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/burger-king-gamma-shopping-mall-gamma-1-rest78041",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "303249",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/18/c91cce98-118c-40b0-b9fe-84440e8c6430_303249.JPG",
                      "locality": "Alpha 2",
                      "areaName": "KB Complex, Alpha-2, Greater Noida",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1040",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.0K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-26 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/theobroma-alpha-2-kb-complex-alpha-2-greater-noida-rest303249",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "426714",
                      "name": "Bakingo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/be576032-5063-496d-9107-48f742bc4975_426714.JPG",
                      "locality": "Alpha 2",
                      "areaName": "Greater Noida",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Bakery"
                      ],
                      "avgRating": 4.6,
                      "parentId": "3818",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "5.8K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-26 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/bakingo-alpha-2-greater-noida-rest426714",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "70974",
                      "name": "Rollsking",
                      "cloudinaryImageId": "oioh0z6vpkiowfwt6ths",
                      "locality": "Alpha 1",
                      "areaName": "Greater Noida",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Fast Food",
                        "Rolls & Wraps",
                        "North Indian",
                        "Snacks"
                      ],
                      "avgRating": 4.4,
                      "parentId": "4697",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "8.5K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-27 02:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Rolls.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Rolls.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹139"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/rollsking-alpha-1-greater-noida-rest70974",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "29564",
                      "name": "Baskin Robbins - Ice Cream Desserts",
                      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                      "locality": "Alpha 1",
                      "areaName": "Greater Noida",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Ice Cream"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "5588",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "1.0K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-26 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹160"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/baskin-robbins-ice-cream-desserts-alpha-1-greater-noida-rest29564",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "253985",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/4e5d4788-3c8d-4724-9dd8-c5504551beea_253985.JPG",
                      "locality": "Ansal Plaza Mall",
                      "areaName": "Knowledge Park",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "13K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-26 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "ABOVE ₹3500",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/mcdonalds-ansal-plaza-mall-knowledge-park-rest253985",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "628113",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/74989b06-2eeb-4cc9-a79c-0e42af0bdef7_628113.jpg",
                      "locality": "Commercial Belt",
                      "areaName": "Sunrise Tower",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "parentId": "2",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "1.7K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-27 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/subway-commercial-belt-sunrise-tower-rest628113",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "699612",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                      "locality": "TRADEX TOWER-II",
                      "areaName": "Gautam Buddha Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1.0K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-27 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/the-belgian-waffle-co-tradex-tower-ii-gautam-buddha-nagar-rest699612",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "362222",
                      "name": "Natural Ice Cream",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/11/8c6ccad5-1f42-4b0a-85a8-1e96a78e97e6_362222.JPG",
                      "locality": "Greater Noida 2",
                      "areaName": "Surajpur Site 4",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "2093",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "663",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 6.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "6.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-26 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/natural-ice-cream-greater-noida-2-surajpur-site-4-rest362222",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "101584",
                      "name": "Oven Story Pizza - Standout Toppings",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/1/2e339f76-29f2-4199-837c-0fcb9de2e69f_101584.jpg",
                      "locality": "Shivam Plaza",
                      "areaName": "Delta I",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.7,
                      "parentId": "3534",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "4.5K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-26 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/oven-story-pizza-standout-toppings-shivam-plaza-delta-i-rest101584",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "362954",
                      "name": "Burger Singh (Big Punjabi Burgers)",
                      "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
                      "locality": "Alpha 1",
                      "areaName": "Alpha 1",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "American",
                        "Indian",
                        "Snacks",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "375065",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "7.8K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-27 05:29:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/burger-singh-big-punjabi-burgers-alpha-1-rest362954",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "362737",
                      "name": "NIC Ice Creams",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/7eb58f19-5909-46d1-b890-1b4ad6e50e0e_362737.jpg",
                      "locality": "Sector alpha 2",
                      "areaName": "Greater Noida",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "6249",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "2.1K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-26 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/nic-ice-creams-sector-alpha-2-greater-noida-rest362737",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "595300",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
                      "locality": "Alpha 1",
                      "areaName": "Alpha 1",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Tibetan",
                        "Healthy Food",
                        "Asian",
                        "Chinese",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "1776",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.1K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-27 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Momos.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Momos.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "63"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/wow-momo-alpha-1-rest595300",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "89563",
                      "name": "UBQ by Barbeque Nation",
                      "cloudinaryImageId": "eb282mtpbn1f2fnamwgs",
                      "locality": "Omaxe Connaught Place",
                      "areaName": "Beta 2 Sector",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Barbecue",
                        "Biryani",
                        "Kebabs",
                        "Mughlai",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "parentId": "10804",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "4.8K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-26 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/ubq-by-barbeque-nation-omaxe-connaught-place-beta-2-sector-rest89563",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "202703",
                      "name": "Sagar Ratna",
                      "cloudinaryImageId": "qslrxznaj8v0z33vhvxi",
                      "locality": "Beta 2",
                      "areaName": "Greater Noida",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian"
                      ],
                      "avgRating": 4.1,
                      "parentId": "793",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "611",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-26 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.1",
                          "ratingCount": "220"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/sagar-ratna-beta-2-greater-noida-rest202703",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "587702",
                      "name": "Keventers - Milkshakes & Desserts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/7/a50ec230-aa33-4f07-9dd4-6970bf445d6e_587702.jpg",
                      "locality": "Alpha 2",
                      "areaName": "Greater Noida",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Beverages",
                        "Ice Cream",
                        "Desserts",
                        "Healthy Food"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "268997",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "718",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-27 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/keventers-milkshakes-and-desserts-alpha-2-greater-noida-rest587702",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "101579",
                      "name": "Faasos - Wraps, Rolls & Shawarma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/d5cce90f-ae40-4f6c-9f7b-05e9115d661b_101579.JPG",
                      "locality": "Shivam Plaza",
                      "areaName": "Delta I",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "parentId": "21809",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "4.9K+",
                      "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 5.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "5.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-26 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Rolls.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Rolls.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹95"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/faasos-wraps-rolls-and-shawarma-shivam-plaza-delta-i-rest101579",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "623591",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "vivh8cnou1ef7vcvaszq",
                      "locality": "Alpha 2",
                      "areaName": "Greater Noida",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "parentId": "4961",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "4.3K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-27 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/la-pinoz-pizza-alpha-2-greater-noida-rest623591",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "101595",
                      "name": "LunchBox - Meals and Thalis",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/d5542582-7ed1-446b-979b-87e8457dec24_101595.jpg",
                      "locality": "Shivam Plaza",
                      "areaName": "Delta I",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Punjabi",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "parentId": "4925",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "6.4K+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-26 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹149"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e7c8a15-7964-4881-a32a-a5c90472364a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/noida-1/lunchbox-meals-and-thalis-shivam-plaza-delta-i-rest101595",
                      "type": "WEBLINK"
                    }
                  }
]
const Body = () => {
    return (
        <div className="body">
            <div className = "search">search</div>
            <div className = "resturantContainer"> 
                {
                  resList.map((resturant) => (
                    <ResturantCard key = {resturant.info.id} resData = {resturant}/>
                  ))
                }
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// This is a way to render React Element to a page
// root.render(jsxHeading);


// This is a way to render React Component to a page
root.render(<AppLayout/>)
