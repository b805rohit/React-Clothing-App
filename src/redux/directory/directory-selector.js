import { createSelector  } from "reselect"

const directorySelector=state=>state.directory.directory

export const sectionSelector=createSelector(
    [directorySelector],
    directory=>directory.section
)