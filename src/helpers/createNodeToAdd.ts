import {TreeStructure} from "../models/TreeStructure";

export function createNodeToAdd(nodeTree: TreeStructure[], nodeObj: TreeStructure, inputValue: string): TreeStructure {
    if (nodeTree.length === 0) {
        return ({...nodeObj, name: inputValue, children: undefined})
    }
    if (typeof nodeObj.children === "undefined") {
        return ({...nodeObj, children: [{id: `${nodeObj.id}-0`, name: inputValue}]})
    }
    return ({
        ...nodeObj,
        children: [
            ...nodeObj.children,
            {
                id: `${nodeObj.id}-${nodeObj.children.length}`,
                name: inputValue
            }
        ]
    })
}
