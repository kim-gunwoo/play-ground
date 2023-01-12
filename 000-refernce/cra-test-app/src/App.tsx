import React from 'react';
import './App.css';
import InquiryDateQuarterControlComponent from './components/InquiryDateQuarterControl.component';
import useDateQuarter from './hooks/useDateQuarter';


function App() {
  const { quarter } = useDateQuarter()
  return (
    <div className="App">
      <InquiryDateQuarterControlComponent 
      quarter={quarter} minYear={0} resetDate={function (): void {
        throw new Error('Function not implemented.');
      } } onSubmit={function (): void {
        throw new Error('Function not implemented.');
      } } onChangeYear={function (year: number): void {
        throw new Error('Function not implemented.');
      } } showFromMonthPicker={function (): void {
        throw new Error('Function not implemented.');
      } } showToMonthPicker={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}

export default App;
