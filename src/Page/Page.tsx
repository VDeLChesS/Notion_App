import { useFocusedNodeIndex } from "./useFocusedNodeIndex";
import { Cover } from "./Cover";
import { Title } from "./Title";
import { Spacer } from "./Spacer";
import { nanoid } from "nanoid";
import { useAppState } from "../state/AppStateContext";
import { NodeTypeSwitcher } from "../Node/NodeTypeSwitcher";



export const Page = () => {
    const { title, nodes, addNode, setTitle } = useAppState();
    const [focusedNodeIndex, setFocusedNodeIndex] = useFocusedNodeIndex({ nodes });
    
    return (
        <>
            <Cover changePageCover={function (): void {
                throw new Error("Function not implemented.");
            } } />
            <div>
                <Title 
                    title={title}
                    changePageTitle={setTitle}
                    addNode={addNode}
                    handleChangeTitle={(e) => setTitle(e.target.value)}
                />
                {
                    nodes.map((node, index) => (
                        <NodeTypeSwitcher
                            key={node.id}
                            node={node}
                            updateFocusedIndex={setFocusedNodeIndex}
                            isFocused={focusedNodeIndex === index}
                            index={index}
                        />
                    ))
                }
                <Spacer
                    handleClick={() => {
                        addNode({ type: "text", id: nanoid(), value: "" }, nodes.length)
                    }}
                    showHint={!nodes.length}
                />
            </div>
        </>
    )
}