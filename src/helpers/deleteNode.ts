import {TreeStructure} from "../models/TreeStructure";

export function deleteNode(nodeTree: TreeStructure[], nodeObj: TreeStructure): TreeStructure[] {

    if (nodeObj.id.length === 1) return [...nodeTree.filter(child => child.id !== nodeObj.id)]

    return nodeTree.map(node => {
            if (node.id[0] !== nodeObj.id[0]) {
                return node
            }
            if (typeof node.children !== "undefined") {
                for (let i = 0; i < node.children.length; i++) {
                    if (node.children[i].id === nodeObj.id) {
                        return ({...node, children: node.children.filter(child => child.id !== nodeObj.id)});
                    }
                }
                return ({...node, children: deleteNode(node.children, nodeObj)})
            }
            return node
        }
    )
}