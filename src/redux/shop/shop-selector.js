import { createSelector } from "reselect";

const collectionSelector=state=>state.shop.collections

export const shopItemSelector=createSelector(
    [collectionSelector],
    collections=>collections.shopItems
)