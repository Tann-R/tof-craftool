import React, {useState,useEffect} from 'react';
import { IItem } from '../app/interfaces';
import {GetCosts} from '../remote/universalis-api';

export async function AvgCost() {
    let [price, setPrice]=useState(0);
    let totalCost=0;
    let totalItems=0;
    let CalcCost=await GetCosts().then((result)=>
        (
            result.forEach((gear:IItem) => {
            if (gear.listings.length>0) {
                totalCost+=gear.listings[0].pricePerUnit;
                totalItems+=1;
            }
        }))).then(()=>(
        setPrice(totalCost/totalItems)
    ))
    await CalcCost;
    return price;
}