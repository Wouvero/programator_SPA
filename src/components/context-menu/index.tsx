import styled from "styled-components";
import { contextMenuI } from "types/contextMenu";

export const MenuBar = styled.div<contextMenuI>`
    position: absolute;
    z-index: 50;
    width: 14rem;
    padding: 4px 0;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #e5e7eb;

    top: ${(props) => props.y + "px"};
    left: ${(props) => props.x + "px"};
`;

const ContextMenu = (props: contextMenuI) => {
    return (
        <MenuBar x={props.x} y={props.y}>
            <ul>
                {props.items.map((item: any, index: number) => {
                    return (
                        <li
                            key={index}
                            onClick={() => item.onClickFunction()}
                            className={
                                "w-full h-8 px-3 text-sm cursor-base flex items-center  border-gray-200 hover:bg-neutral-100"
                            }
                        >
                            <div className="mr-2">{item.icon}</div>
                            <span>{item.text}</span>
                        </li>
                    );
                })}
            </ul>
        </MenuBar>
    );
};

export default ContextMenu;
