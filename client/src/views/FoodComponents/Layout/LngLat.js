let API_KEY="AIzaSyBvZ2t-zd4VirWdKhMQPCz-jMusKgF7ulI"
console.log(API_KEY)
let	stateProps = {
    root:"https://maps.googleapis.com/maps/api/place/nearbysearch/json",
    keyApi:"",                     
    location:"",
    lng:"",
    lat:"",
    type:"cafe",
    url:"",
    letSearch: false,
    loadedPlaces:null,
    place:null
     }
console.log(stateProps)

const searchPlaces=(lat,lng,type)=>{
let typeQuery= type;
console.log("keyApi ",stateProps.keyApi, "typeQuery ", typeQuery)
        //https://maps.googleapis.com/maps/api/place/nearbysearch/json
        //?location=53.6424933,10.0465429&radius=2000
        //&type=restaurant&key=&libraries=places

//https://maps.googleapis.com/maps/api/place/findplacefromtext/json?
//location=53.5510846,9.9936819&radius=2000&type=cafe
//&key=
//&libraries=places
        let newUrl = `${stateProps.root}?location=${lat},${lng}&radius=2000&type=${typeQuery}&key=${API_KEY}&libraries=places`;
        // typeQuery.forEach((item)=>{
        //   newUrl+=item+"+";
           console.log("newUrl: ",newUrl);
        // })
stateProps=({
  url:newUrl,
  lat:lat,
  lng:lng,
  letSearch:true,
  loadedPlaces:null
})
console.log("stateProps ", JSON.stringify(stateProps));
}
export default searchPlaces;