import React, {useState} from "react";
import {deepCopy} from "../helpers/deepCopy";
import {createNodeToAdd} from "../helpers/createNodeToAdd";
import {replaceNode} from "../helpers/replaceNode";
import {deleteNode} from "../helpers/deleteNode";
import {TreeStructure} from "../models/TreeStructure";

export function useApp(treeData: TreeStructure[]) {
    const [tree, setTree] = useState(deepCopy(treeData))
    const [currentNode, setCurrentNode] = useState(tree[0])
    const [inputValue, setInputValue] = useState("")
    const [errorValue, setErrorValue] = useState("")

    function handleAddNode() {
        if (inputValue === "") {
            setErrorValue("input value is empty")
            return;
        }

        const newNode = createNodeToAdd(tree, currentNode, inputValue.trim());
        const newTree = replaceNode(tree, newNode);
        setCurrentNode(tree.length === 0 ? newTree[0] : newNode);
        setTree(newTree);
        setInputValue("");
        setErrorValue("");
    }

    function handleRemoveNode() {
        if (tree.length === 0) {
            setErrorValue("you must have at least 1 node")
            return;
        }

        const newTree = deleteNode(tree, currentNode);
        setTree(newTree);
        setCurrentNode(newTree[0]);
        setErrorValue("");
    }

    function handleResetChanges() {
        const newTree = deepCopy(treeData);
        setTree(newTree);
        setCurrentNode(newTree[0]);
        setErrorValue("");
    }

    function handleEditNodeName() {
        if (tree.length === 0) {
            setErrorValue("you must have at least 1 node")
            return;
        }
        if (inputValue === "") {
            setErrorValue("input value is empty")
            return;
        }

        const chosenNode = {...currentNode, name: inputValue.trim()};
        setTree(replaceNode(tree, chosenNode));
        setCurrentNode(chosenNode);
        setInputValue("");
        setErrorValue("");
    }

    function handleChangeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    return {
        values: {
            tree,
            errorValue,
            inputValue,
        },
        currentNodeData: {currentNode, setCurrentNode},
        handlers: {
            handleAddNode,
            handleRemoveNode,
            handleResetChanges,
            handleEditNodeName,
            handleChangeInputValue}
    }
}