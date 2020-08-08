import { createSelector } from "reselect";


const collectionSelector=state=>state.shop.collections

export const shopItemSelector=createSelector(
    [collectionSelector],
    collections=>collections.shopItems
)

export const selectCollection=collectionUrlParam=>createSelector(
    [collectionSelector],
    collections=>collections.shopItems[collectionUrlParam]
)

export const selectCollectionForPreview=createSelector(
    [collectionSelector],
    collections=>Object.values(collections.shopItems)
)