import React from 'react';
import './App.css';
import Tree from "./components/Tree/Tree";
import ButtonsPanel from "./components/ButtonsPanel/ButtonsPanel";
import {TreeStructure} from "./models/TreeStructure";
import {useApp} from "./hooks/useApp";
import treeData from "./treeData.json"

const treeOfNodes: TreeStructure[] = treeData

function App() {
    const {handlers, currentNodeData, values} = useApp(treeOfNodes);
    const {tree, errorValue, inputValue} = values;
    const {
        handleChangeInputValue,
        handleFocusInputValue,
        handleResetChanges,
        handleRemoveNode,
        handleEditNodeName,
        handleAddNode
    } = handlers;

    return (
        <div className="App">
            {tree.length === 0 &&
                <p>Nodes tree is empty, set value into input and click "add" button</p>
            }
            <Tree currentNodeData={currentNodeData} nodesData={tree}/>
            <div className={"App__interactive"}>
                <p className={"App__error"}>{errorValue}</p>
                <input
                    className={"App__input"}
                    placeholder={"edit/create node"}
                    type={"search"}
                    value={inputValue}
                    onChange={(e) => handleChangeInputValue(e, 45)}
                    onFocus={handleFocusInputValue}
                />
                <ButtonsPanel
                    reset={handleResetChanges}
                    add={handleAddNode}
                    edit={handleEditNodeName}
                    remove={handleRemoveNode}
                />
            </div>
        </div>
    );
}

export default App;
