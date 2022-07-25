import React from 'react' ;

import Home from './Landing/Home';
import Admin from './Admin/CollectionCreate';

import { GET_GEN_3 } from "./api/hasura_gql";
import { useQuery } from '@apollo/client';


const Landing = () => {
    
    const { loading, error, data} = useQuery(GET_GEN_3);
 
    return (
        <>
            <div >
                <Admin />
            </div>
        </>
    )
}

export default Landing ;