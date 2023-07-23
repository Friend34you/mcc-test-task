import React, {FC} from 'react';
import {TreeStructure} from "../../../models/TreeStructure";
import Tree from "../Tree";
import s from "./TreeNode.module.css"
import {CurrentNode} from "../../../models/currentNode";

interface TreeNodeProps {
    node: TreeStructure,
    currentNodeData: CurrentNode
}

const TreeNode: FC<TreeNodeProps> = ({node, currentNodeData}) => {
    const {currentNode, setCurrentNode} = currentNodeData;
    const style = currentNode.id === node.id ? `${s.tree_node__p} ${s.active}` : s.tree_node__p

    function handleClick() {
        setCurrentNode(node)
    }

    return (
        <div className={s.tree_node}>
            <p className={style} onClick={handleClick}>{node.name}</p>
            {node.children && <Tree currentNodeData={currentNodeData} nodesData={node.children}/>}
        </div>
    );
};

export default TreeNode;