import {NodeHandler, NodeHandlers, TipTapRender} from "@troop.com/tiptap-react-render";

const doc: NodeHandler = props => {
    return <>{props.children}</>
}

const paragraph: NodeHandler = (props) => {
    return (
        <p>{props.children}</p>
    )
}

const text: NodeHandler = (props) => {
    return <span>{props.node.text}</span>
}

const handlers: NodeHandlers = {
    doc: doc,
    text: text,
    paragraph: paragraph,
}

export function RenderToJson({data} : {data: any}) {
    return(
        <>
            <TipTapRender node={data} handlers={handlers} />
        </>
    )
}