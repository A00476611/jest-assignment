import List from "./list";
import { fireEvent, render, screen } from "@testing-library/react";

const testData = [
    {
        capital : "Toronto",
        flagUrl : "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Ontario.svg",
        name : "Ontario"
    },
    {
        capital: "Quebec City",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Quebec.svg",
        name: "Quebec"
    }
]

test("list renders correctly", () => {
    render(<List data={testData}/>);
    const ontario = screen.getByText("Ontario")
    const quebec = screen.getByText("Quebec")
    expect(ontario).toBeInTheDocument();
    expect(quebec).toBeInTheDocument();
})

