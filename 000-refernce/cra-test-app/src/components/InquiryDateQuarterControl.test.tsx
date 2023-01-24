import { act, fireEvent, render, renderHook, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import useDateQuarter from "../hooks/useDateQuarter"
import InquiryDateQuarterControlComponent from "./InquiryDateQuarterControl.component"


function TestComponent () {
    const { quarter } = useDateQuarter()
    return  <InquiryDateQuarterControlComponent 
    quarter={quarter}
    minYear={0} 
    resetDate={() => { 
        throw new Error('Function not implemented.')
    }}
    onSubmit={() => {
        throw new Error('Function not implemented.')
    }}
    onChangeYear={() => {
        throw new Error('Function not implemented.')
    }}
    showFromMonthPicker={() => {
        throw new Error('Function not implemented.')
    }}
    showToMonthPicker={() => {
        throw new Error('Function not implemented.')
    }}
/>
}

describe('InquiryDateQuarterControlComponent', () => {
    

    it("render", () => {
        const { result } = renderHook(()=> useDateQuarter())

        render(<InquiryDateQuarterControlComponent 
            quarter={result.current.quarter}
            // quarter={renderHook(()=> useDateQuarter()).result.current.quarter}
            minYear={0} 
            resetDate={() => { 
                throw new Error('Function not implemented.')
            }}
            onSubmit={() => {
                throw new Error('Function not implemented.')
            }}
            onChangeYear={() => {
                throw new Error('Function not implemented.')
            }}
            showFromMonthPicker={() => {
                throw new Error('Function not implemented.')
            }}
            showToMonthPicker={() => {
                throw new Error('Function not implemented.')
            }}
        />)

        const FirstButton = screen.getByText("1분기");
        // const FirstButton2 = screen.getByRole('button', { name: '1분기' });
        const SecondButton = screen.getByText("2분기");
        const ThirdButton = screen.getByText("3분기");
        const FourthButton = screen.getByText("4분기");

        expect(FirstButton).toHaveTextContent("1분기");
        expect(SecondButton).toHaveTextContent("2분기");
        expect(ThirdButton).toHaveTextContent("3분기");
        expect(FourthButton).toHaveTextContent("4분기");
        
        fireEvent.click(FirstButton);
        // userEvent.click(FirstButton);
        expect(result.current.quarter.First.isClick).toBe(true);

        // expect(FirstButton).not.toBeDisabled();
        // expect(SecondButton).not.toBeDisabled();
        // expect(ThirdButton).toBeDisabled();
        // expect(FourthButton).toBeDisabled();
    });

    describe("Button Control", () => {
        it("first button", () => {
            render(<TestComponent />)
            const FirstButton = screen.getByText("1분기");
            const SecondButton = screen.getByText("2분기");
            const ThirdButton = screen.getByText("3분기");
            const FourthButton = screen.getByText("4분기");

            fireEvent.click(FirstButton);
            
            expect(FirstButton).not.toBeDisabled();
            expect(SecondButton).not.toBeDisabled();
            expect(ThirdButton).toBeDisabled();
            expect(FourthButton).toBeDisabled();
    
            fireEvent.click(FirstButton);
    
            expect(FirstButton).not.toBeDisabled();
            expect(SecondButton).not.toBeDisabled();
            expect(ThirdButton).not.toBeDisabled();
            expect(FourthButton).toBeDisabled();
        
        })
        
        it("second button", () => {
            render(<TestComponent />)
            const FirstButton = screen.getByText("1분기");
            const SecondButton = screen.getByText("2분기");
            const ThirdButton = screen.getByText("3분기");
            const FourthButton = screen.getByText("4분기");
            
            fireEvent.click(SecondButton);

            expect(FirstButton).not.toBeDisabled();
            expect(SecondButton).not.toBeDisabled();
            expect(ThirdButton).not.toBeDisabled();
            expect(FourthButton).toBeDisabled();
        })
    });
    
})