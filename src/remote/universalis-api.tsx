import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { IItem } from '../app/interfaces';

export const GetCosts = async () => {
    const response=await axios({
        "method": "GET",
        "url": "https://universalis.app/api/v2/79/37762,37763,37764,37765,37766,37767,37768,37769,37770,37771,37772,37773,37774,37775,37776,37777,37778,37779,37780,37781,37782,37783,37784,37785,37786,37787,37788,37789,37790,37791,37792,37793,37794,37795,37796,37797,37802,37807,37812,37798,37803,37808,37813,37799,37804,37809,37814,37800,37805,37810,37815,37801,37806,37811,37816?listings=1&entries=0&hq=true/"
    });
    let result:Array<IItem>=response.data.items;
    return result;
    }