
export type IResponseData = {
    itemIDs: number[],
    items: IItem[]
  }
  
export type IItem = {
    itemID: number,
    worldID: number,
    lastUploadTime: number,
    listings: IListing[],
    recentHistory: any[],
    currentAveragePrice: number,
    currentAveragePriceNQ: number,
    currentAveragePriceHQ: number,
    regularSaleVelocity: number,
    nqSaleVelocity: number,
    hqSaleVelocity: number,
    averagePrice: number,
    averagePriceNQ: number,
    averagePriceHQ: number,
    minPrice: number,
    minPriceNQ: number,
    minPriceHQ: number,
    maxPrice: number,
    maxPriceNQ: number,
    maxPriceHQ: number,
    stackSizeHistogram: object,
    stackSizeHistogramNQ: object,
    stackSizeHistogramHQ: object
  }
  
export type IListing = {
    lastReviewTime: number,
    pricePerUnit: number,
    quantity: number,
    stainID: number,
    creatorName: string,
    creatorID: string,
    hq: boolean,
    isCrafted: boolean,
    listingID: any,
    materia: any[],
    onMannequin: boolean,
    retainerCity: number,
    retainerID: string,
    retainerName: string,
    sellerID: string,
    total: number
  }