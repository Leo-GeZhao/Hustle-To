import { useState } from 'react';
import { insertSneaker } from '../../utilities/api/sneakers';
import { useNavigate } from 'react-router-dom';

import Product from '../../components/Admin/Product';


export default function AdminPage({user, sneakers }){

    return <div>
                <h2>Hello, {user.name}</h2>
                <h2>Inventory</h2>  
            <div>
                {sneakers.map((s)=> <Product sneaker={s}/>)}
            </div>
    </div>
        
}