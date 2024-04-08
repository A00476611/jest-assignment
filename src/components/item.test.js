import Item from "./item";
import { fireEvent, render, screen } from "@testing-library/react";

const testItem = {
    capital : "Toronto",
    flagUrl : "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Ontario.svg",
    name : "Ontario"
}

test("shows show capital button", ()=>{
    render(
        <Item {...testItem}/>
    );
    expect(screen.queryByText("Show Capital")).toBeInTheDocument()
})

test("shows correct capital", () => {
    render(
        <Item {...testItem}/>
    );
    fireEvent.click(screen.queryByText("Show Capital"))
    setTimeout(()=>{
        expect(screen.queryByText("Toronto")).toBeInTheDocument()
    },2000)
})

test("initially hides capital", () => {
    render(<Item {...testItem}/>)
    expect(screen.queryByText("Toronto")).not.toBeInTheDocument()
})

test("switches to 'Hide Capital'", ()=> {
    render(<Item {...testItem}/>)
    fireEvent.click(screen.queryByText("Show Capital"))
    setTimeout(()=>{
        expect(screen.queryByText("Hide Capital")).toBeInTheDocument()
        expect(screen.queryByText("Show Capital")).not.toBeInTheDocument()
    },2000)
})