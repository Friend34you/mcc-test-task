import {TreeStructure} from "./TreeStructure";
import {Dispatch, SetStateAction} from "react";

export interface CurrentNode {
    currentNode: TreeStructure,
    setCurrentNode: Dispatch<SetStateAction<TreeStructure>>,
}
