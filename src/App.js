import React, { useState } from 'react';
import './App.css';

function App() {

  // React hooks
  const [triangleSides, setTriangleSides] = useState(
  {
      side1: '',
      side2: '',
      side3: ''
    }
  );
  const [triangleSidesError, setTriangleSidesError] = useState(
  {
      side1Error: '',
      side1ErrorMsg: '',
      side2Error: '',
      side2ErrorMsg: '',
      side3Error: '',
      side3ErrorMsg: ''
    }
  );

  const handleChange = (e) => {
    // To handle the changed/updated value of inputs
    let numbers = /^[1-9][0-9]*$/;
    const val = e.target.value;
    const name = e.target.name;

    if (e.target.value.match(numbers)) {
      setTriangleSides(prevState => {
        return {
          ...prevState,
          [name]: val
        }
      });
    } else if (!e.target.value.length) {
      setTriangleSides(prevState => {
        return {
          ...prevState,
          [name]: val
        }
      });
    }

    if (val !== null) {
      // To clear the error in case of updating input
      setTriangleSidesError(prevState => {
        return {
          ...prevState,
          [name + 'Error']: '',
          [name + 'ErrorMsg']: '',
        }
      });
    }

    console.log(name, val);
  }

  const handleSubmit = () => {
    const { side1, side2, side3 } = triangleSides;
    //checking for non-empty input values
    if (side1 && side2 && side3) {
      //Equilateral: if all sides are equal
      if (side1 === side2 && side2 === side3)
        alert('Equilateral')
      //Isosceles: if 2 sides are equal
      else if (side1 === side2 || side2 === side3 || side3 === side1)
        alert('Isosceles')
      //Scalene: if none of the sides are equal
      else
        alert('Scalene')
    } else {
      //check for error in fields
      if (!side1) {
        setTriangleSidesError(prevState => {
          return {
            ...prevState,
            'side1Error': 'ts-error',
            'side1ErrorMsg': 'Please enter an integer greater than 0',
          }
        });
      }
      if (!side2) {
        setTriangleSidesError(prevState => {
          return {
            ...prevState,
            'side2Error': 'ts-error',
            'side2ErrorMsg': 'Please enter an integer greater than 0',
          }
        });
      }
      if (!side3) {
        setTriangleSidesError(prevState => {
          return {
            ...prevState,
            'side3Error': 'ts-error',
            'side3ErrorMsg': 'Please enter an integer greater than 0'
          }
        });
      }
    }
  }

  const handleError = (e) => {
    // To handle and show error for required fields
    const name = e.target.name;
    if (!e.target.value) {
      setTriangleSidesError(prevState => {
        return {
          ...prevState,
          [name + 'Error']: 'Required'
        }
      });
    }
  }

  const reset = () => {
    // To reset the fields and update error
    setTriangleSides({
      side1: '',
      side2: '',
      side3: '',
    });
    setTriangleSidesError({
      side1Error: '',
      side1ErrorMsg: '',
      side2Error: '',
      side2ErrorMsg: '',
      side3Error: '',
      side3ErrorMsg: ''
    });
  }

  return (
    <div data-ts="Board" className="mainContainer">
      <h3 className="title">
        TradeShift Triangle Challenge
      </h3>

      <p className="body">This program that will determine the type of a triangle.
        Please enter the numbers greater than 0 as the lengths of the triangle's three sides,
        and it will return whether the triangle is equilateral, isosceles or scalene.</p>

      <form data-ts="Form">
        <fieldset>
          <label className={triangleSidesError.side1Error}>
            <span>Side 1</span>
            <input type="text" name='side1'
                   value = { triangleSides.side1 }
                   onChange = { (e) => handleChange(e) }
                   onBlur = { (e) => handleError(e) }
                   required />
          </label>
          <dl className={triangleSidesError.side1Error+'s'}>
            <dt>{triangleSidesError.side2ErrorMsg}</dt>
          </dl>
        </fieldset>
        <fieldset>
          <label className={triangleSidesError.side2Error}>
            <span>Side 2</span>
            <input type="text" name='side2'
                   value={triangleSides.side2}
                   onChange={(e) => handleChange(e)}
                   onBlur={(e) => handleError(e)}
                   required />
          </label>
          <dl className={triangleSidesError.side2Error+'s'}>
            <dt>{triangleSidesError.side2ErrorMsg}</dt>
          </dl>
        </fieldset>
        <fieldset>
          <label className={triangleSidesError.side3Error}>
            <span>Side 3</span>
            <input type="text" name='side3'
                   value={triangleSides.side3}
                   onChange={(e) => handleChange(e)}
                   onBlur={(e) => handleError(e)}
                   required />
          </label>
          <dl className={triangleSidesError.side3Error+'s'}>
            <dt>{triangleSidesError.side3ErrorMsg}</dt>
          </dl>
        </fieldset>
        <div className="buttonContainer">
          <button data-ts="Button"
                  className="ts-primary"
                  type="submit"
                  onClick={handleSubmit}>
            <span>Submit</span>
          </button>
          <button data-ts="Button"
                  className="ts-secondary"
                  type="submit"
                  onClick={reset}>
            <span>Reset</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default (App);
