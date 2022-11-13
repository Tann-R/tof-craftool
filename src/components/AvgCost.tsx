import React from 'react';
import {IResponseData, IItem, IListing} from '../app/interfaces';
import {GetCosts} from '../remote/universalis-api';

let totalValue=0;
let totalItems=0;

export async function AvgCost() {
    let itemList;
    let cost;
    await GetCosts().then((response) => console.log(response));
    GetCosts().then((response) => {
        itemList=(response);
        // It's fighting me here on mapping because ... i don't know.  it just is.
        // try {itemList.map<any>((itemList: any) => {
        //     itemList.forEach((gear:IItem) => {
        //         if (gear.listings.length>0) {
        //             totalValue+=gear.listings[0].pricePerUnit;
        //             totalItems+=1;
        //         }
        //     })
        //     cost=totalValue/totalItems;
        //     return cost;
        // }
        // )}
        // catch (error) {
        //     console.error(error);
        // }
    })
}