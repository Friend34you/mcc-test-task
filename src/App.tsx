import React, {useState} from 'react';
import './App.css';
import Tree from "./components/Tree/Tree";
import ButtonsPanel from "./components/ButtonsPanel/ButtonsPanel";
import {TreeStructure} from "./models/TreeStructure";
import {useApp} from "./hooks/useApp";
import treeData from "./treeData.json"
// const treeData: TreeStructure[] = [
//     {
//         id: "0",
//         name: "Node1",
//         children: [
//             {
//                 id: "0-0",
//                 name: "Node1-1"
//             },
//             {
//                 id: "0-1",
//                 name: "Node1-2"
//             },
//         ]
//     },
//     {
//         id: "1",
//         name: "NotNODE",
//         children: [
//             {
//                 id: "1-0",
//                 name: "NotNODE-1"
//             },
//             {
//                 id: "1-1",
//                 name: "NotHEHE",
//                 children:
//                     [
//                         {
//                             id: "1-1-0",
//                             name: "HIHIHAHA"
//                         }
//                     ]
//             },
//         ]
//     }
// ]
const treeOfNodes: TreeStructure[] = treeData

function App() {
    const {handlers, currentNodeData, values} = useApp(treeOfNodes);
    const {tree, errorValue, inputValue} = values;
    const {
        handleChangeInputValue,
        handleResetChanges,
        handleRemoveNode,
        handleEditNodeName,
        handleAddNode
    } = handlers
    return (
        <div className="App">
            {tree.length === 0 &&
                <p>Nodes tree is empty, set value into input and click "add" button</p>
            }
            <Tree currentNodeData={currentNodeData} nodesData={tree}/>
            <input
                defaultValue={"node"}
                placeholder={"edit/create node"}
                className={"App__input"}
                type={"search"}
                value={inputValue}
                onChange={handleChangeInputValue}
            />
            <p className={"App__error"}>{errorValue}</p>
            <ButtonsPanel
                reset={handleResetChanges}
                add={handleAddNode}
                edit={handleEditNodeName}
                remove={handleRemoveNode}
            />
        </div>
    );
}

export default App;
