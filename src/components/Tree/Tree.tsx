import React, {Dispatch, FC, SetStateAction} from 'react';
import TreeNode from "./TreeNode/TreeNode";
import {TreeStructure} from "../../models/TreeStructure";
import s from "./Tree.module.css"
import {CurrentNode} from "../../models/currentNode";

interface TreeProps {
    nodesData: TreeStructure[];
    currentNodeData:CurrentNode,
}

const Tree: FC<TreeProps> = ({nodesData, currentNodeData}) => {

    return (
        <div className={s.tree}>
            {nodesData.map(node =>
                <TreeNode
                    key={node.id}
                    currentNodeData={currentNodeData}
                    node={{
                        id: node.id,
                        name: node.name,
                        children: node.children
                    }}
                />
            )}
        </div>
    );
};

export default Tree;