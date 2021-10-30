import React from "react";
// import reactDom from "react-dom";
import Item from "../item/";
import "./item-list.css"
import ModalWindow from "../modal-window";

export default class ItemList extends React.Component {
    state={
        modalWindow: false,
        chosenItem: {},
    }

    render() {
        const { products} = this.props;
        const { modalWindow, chosenItem} = this.state;

        const createModalWindow = (id) => {
            console.log(id);
            const chosenItem = products.find(item => item.id === id);
            this.setState({
              modalWindow: true,
              chosenItem: chosenItem
            })
        }

        if(modalWindow) {
            return <ModalWindow { ... chosenItem }/>
        }

        const elements = products.map( (item) => {
                return (
                    <li key={item.id}>
                        <Item 
                            { ... item}
                            createBuyWindow ={(id) => createModalWindow(id)}
                        />
                    </li>
                )
            }
        );
        return(
            <ul className="catalog">
                {elements}
            </ul>
        )
    }
}