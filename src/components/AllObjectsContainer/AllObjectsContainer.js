import './AllObjectsContainer.css';
import React, {useState, useEffect } from 'react';
import {
    getPersonImage,getPlanetImage,getStarshipImage,
    getPersonalInformation,getObjectsImg, getAllObjects,
} from '../../api/api.js';


function choiceCard(id) {

}

function checkImgSrc(url){
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function getImgObjects(category, allObjects){
    let arrayImgSrc = [];let image;
    for (let i = 0; i < allObjects.length; i++) {
    if (category === 'people') {
        let imgSrc = checkImgSrc(`${getPersonImage(allObjects[i].id)}`);
        imgSrc ?
            image = getPersonImage(allObjects[i].id):
            image = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
    } else if (category === 'starships') {
        let imgSrc = checkImgSrc(`${getStarshipImage(allObjects[i].id)}`);
        imgSrc ?
            image = getStarshipImage(allObjects[i].id):
             image = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
    } else if (category === 'planets') {
        let imgSrc = checkImgSrc(`${getPlanetImage(allObjects[i].id)}`);
        imgSrc ?
            image = getPlanetImage(allObjects[i].id) :
            image = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
    } }
    console.log(image);
    return arrayImgSrc;
}
// let arrayImg = getAllObjects('people');
//
// console.log(arrayImg)
// }
export default function AllObjectsContainer(props) {
    let arrayImgSrc = [];
    let imagesArray = [];

    async function f() {
        let allObjects = await getAllObjects(props.category);
        // console.log(allObjects)
        arrayImgSrc = getImgObjects(props.category,allObjects)
        imagesArray.forEach((item) => {
            arrayImgSrc.push(item);
        })
    }
    f();
console.log(arrayImgSrc)
    //
    // const [data, setData] = useState([]);
    //
    // useEffect(()=>{
    //     async function fetchData() {
    //         const req = await getAllObjects(props.category)
    //         setData(req)
    //         return req
    //     }
    //     fetchData();
    // }, [props.category]);
    //



        // const object = JSON.parse(res);
        // console.log(userid);
        // return new Promise(resolve => resolve(ob));
        // return JSON.stringify(getImgObjects(props.category,res));
        // console.log(imagesArray);
        // imagesArray.forEach((item) => {
            // arrayImgSrc.push(item);
            // return imagesArray;
        // })

    // console.log(getAllObjects(props.category));
    // console.log(JSON(arrayImg));

    return (
        <div className="characters-wrapper">
            <div className="all-wrapper">
                {/*{*/}
                {/*    getAllObjects(props.category).then((res)=>{res.map((i,item) =>*/}
                {/*            <div className="card" key={i} onClick={choiceCard(item.id)}>*/}
                {/*                <img src={arrayImgSrc[i]} alt=""/>*/}
                {/*                <h2 className='card__title'>{item.name}</h2>*/}
                {/*            </div>*/}
                {/*    )})*/}
                {/*}*/}
            </div>
            <div className="personal-information-wrapper">
                <div className="info-wrapper">
                    <div className="other">
                        <h1 className="title other__title"/>
                    </div>
                    <div className="wrap">
                        <div className="left-column">
                            <img className="img" src="" alt="img"/>
                        </div>
                        <div className="right-column">
                            <h3 className="name-block"/>
                            <p className="gender"/>
                            <p className="birthday"/>
                            <p className="eye-color"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
