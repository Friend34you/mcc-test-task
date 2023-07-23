import {TreeStructure} from "../models/TreeStructure";

export function replaceNode(nodeTree: TreeStructure[], nodeObj: TreeStructure): TreeStructure[] {
    if (nodeTree.length === 0) return [{id: "0", name: nodeObj.name}]

    return nodeTree.map(node => {
            if (node.id[0] !== nodeObj.id[0]) {
                return node
            }
            if (node.id === nodeObj.id) {
                return ({...nodeObj})
            }
            if (Array.isArray(node.children)) {
                return ({...node, children: replaceNode(node.children, nodeObj)})
            }
            return node
        }
    )
}