import React, {useState} from 'react';
import './App.css';
import Tree from "./components/Tree/Tree";
import ButtonsPanel from "./components/ButtonsPanel/ButtonsPanel";
import {TreeStructure} from "./models/TreeStructure";
import {deepCopy} from "./helpers/deepCopy";
import {replaceNode} from "./helpers/replaceNode";
import {deleteNode} from "./helpers/deleteNode";
import {createNodeToAdd} from "./helpers/createNodeToAdd";
import treeNode from "./components/Tree/TreeNode/TreeNode";

const treeData: TreeStructure[] = [
    {
        id: "0",
        name: "Node1",
        children: [
            {
                id: "0-0",
                name: "Node1-1"
            },
            {
                id: "0-1",
                name: "Node1-2"
            },
        ]
    },
    {
        id: "1",
        name: "NotNODE",
        children: [
            {
                id: "1-0",
                name: "NotNODE-1"
            },
            {
                id: "1-1",
                name: "NotHEHE",
                children:
                    [
                        {
                            id: "1-1-0",
                            name: "HIHIHAHA"
                        }
                    ]
            },
        ]
    }
]

function App() {
    const [tree, setTree] = useState(deepCopy(treeData))
    const [currentNode, setCurrentNode] = useState(tree[0])
    const [inputValue, setInputValue] = useState("")

    function addNode() {
        if (inputValue === "") {
            return;
        }
        const newNode = createNodeToAdd(tree, currentNode, inputValue.trim());
        const newTree = replaceNode(tree, newNode);
        setCurrentNode(tree.length === 0 ? newTree[0] : newNode);
        setTree(newTree);
        setInputValue("");
    }

    function removeNode() {
        if (tree.length === 0) {
            return;
        }
        const newTree = deleteNode(tree, currentNode);
        setTree(newTree);
        setCurrentNode(newTree[0])
    }

    function resetChanges() {
        const newTree = deepCopy(treeData);
        setTree(newTree);
        setCurrentNode(newTree[0])

    }

    function editNodeName() {
        if (tree.length === 0) {
            return;
        }
        if (inputValue === "") {
            return
        }
        const chosenNode = {...currentNode, name: inputValue.trim()};
        setTree(replaceNode(tree, chosenNode));
        setCurrentNode(chosenNode);
        setInputValue("");
    }

    function handleChangeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    return (
        <div className="App">
            {tree.length === 0 &&
                <p>Nodes tree is empty, set value into input and click "add" button</p>
            }
            <Tree currentNodeData={{currentNode, setCurrentNode}} nodesData={tree}/>
            <input
                placeholder={"edit/create node"}
                className={"App__input"}
                type={"search"}
                value={inputValue}
                onChange={handleChangeInputValue}
            />
            <ButtonsPanel
                reset={resetChanges}
                add={addNode}
                edit={editNodeName}
                remove={removeNode}
            />
        </div>
    );
}

export default App;
