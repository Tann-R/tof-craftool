import React from 'react';
import { IItem } from '../app/interfaces';
import {GetCosts} from '../remote/universalis-api';

let totalValue=0;
let totalItems=0;

export async function AvgCost() {
    let cost;
    let itemList = await GetCosts();
    itemList.map((itemList: any) => {
        itemList.forEach((gear:IItem) => {
            if (gear.listings.length>0) {
                totalValue+=gear.listings[0].pricePerUnit;
                totalItems+=1;
            }
        })
    })
    cost=totalValue/totalItems;
    return cost;
}