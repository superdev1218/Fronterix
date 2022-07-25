import React from "react";
import { GET_GEN_3 } from "src/pages/api/hasura_gql";

import { useQuery } from '@apollo/client';
import { useEffect } from "react";

const CollectionName = (props) => {
    
    const {
        handleChange,
        collectionNameArray,
        setCollectionNameArray,
        collectionName,
        setCollectionId
    } = props;
    
    const { loading, error, data} = useQuery(GET_GEN_3);

    useEffect(() => {
        if(data){
            data.collection.map((element, index) => {
                setCollectionNameArray(collectionName => [...collectionName, element.collection_name])
            })
        }
    }, [data])

    useEffect(() => {
        if(collectionName){
            console.log(collectionName);
            data.collection.map((element, index) => {
                if(element.collection_name === collectionName)
                    setCollectionId(element.id)
            })
        }
    }, [collectionName])

    return(
        <div>
            <select className="form-select form-select-sm
                appearance-none
                block
                w-[250px]
                px-2
                py-1
                text-sm
                font-normal
                text-white-300
                bg-[#474747] bg-clip-padding bg-no-repeat
                border border-solid border-[#707070]
                rounded
                transition
                ease-in-out
                m-0
                focus:text-white-300 focus:bg-[#474747] focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example"
                onChange={(e) => handleChange(e, "CollectionName")}
                >
                <option defaultValue={"Collection"}> Collection </option>
                {
                    collectionNameArray && collectionNameArray.map((element, index) => {
                        return(
                            <option key={index} value={element}> {element} </option>
                        );
                    })
                }
            </select>
        </div>
    )
}

export default CollectionName;