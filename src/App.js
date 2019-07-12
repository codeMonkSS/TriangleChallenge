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
    const val = e.target.value;
    const name = e.target.name;

    if (val !== null) {
      // To clear the error in case of updating input
      setTriangleSidesError(prevState => {
        return {
          ...prevState,
          [name + 'ErrorMsg']: '',
          [name + 'Error']: ''
        }
      });
    }

    setTriangleSides(prevState => {
      return {
        ...prevState,
        [name]: val
      }
    });

  }

  const handleSubmit = () => {
    const { side1, side2, side3 } = triangleSides;
    //checking for non-empty input values
    let numbers = /^[0-9]*(?:\.[0-9]*)?$/;

    if (!side1 || side1 <= 0 || !side1.match(numbers)) {
      setTriangleSidesError(prevState => {
        return {
          ...prevState,
          'side1Error': 'ts-error',
          'side1ErrorMsg': 'Please enter a number greater than 0',
        }
      });
    }
    if (!side2 || side2 <= 0 || !side2.match(numbers)) {
      setTriangleSidesError(prevState => {
        return {
          ...prevState,
          'side2Error': 'ts-error',
          'side2ErrorMsg': 'Please enter a number greater than 0',
        }
      });
    }
    if (!side3 || side3 <= 0 || !side3.match(numbers)) {
      setTriangleSidesError(prevState => {
        return {
          ...prevState,
          'side3Error': 'ts-error',
          'side3ErrorMsg': 'Please enter a number greater than 0'
        }
      });
    }

    if (side1 && side1 > 0
        && side2 && side2 > 0
        && side3 && side3 > 0
        && side1.match(numbers)
        && side2.match(numbers)
        && side3.match(numbers)) {

      let normalizeSide1 = parseFloat(side1);
      let normalizeSide2 = parseFloat(side2);
      let normalizeSide3 = parseFloat(side3);
      if ((normalizeSide1 + normalizeSide2) <= normalizeSide3
       || (normalizeSide1 + normalizeSide3) <= normalizeSide2
       || (normalizeSide2 + normalizeSide3) <= normalizeSide1) {
        alert('The sum of 2 sides must always be greater than the third side');
      }
      //Equilateral: if all sides are equal
      else if (normalizeSide1 === normalizeSide2
            && normalizeSide2 === normalizeSide3) {
        alert('Equilateral')
      }
      //Isosceles: if 2 sides are equal
      else if (normalizeSide1 === normalizeSide2
            || normalizeSide2 === normalizeSide3
            || normalizeSide3 === normalizeSide1) {
        alert('Isosceles')
      }
      //Scalene: if none of the sides are equal
      else
        alert('Scalene')
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
              <input type="number" name='side1'
                     value={triangleSides.side1}
                     onChange={(e) => handleChange(e)}
                     onBlur={(e) => handleError(e)}
                     required />
            </label>
            <dl className={triangleSidesError.side1Error + 's'}>
              <dt>{triangleSidesError.side1ErrorMsg}</dt>
            </dl>
          </fieldset>
          <fieldset>
            <label className={triangleSidesError.side2Error}>
              <span>Side 2</span>
              <input type="number" name='side2'
                     value={triangleSides.side2}
                     onChange={(e) => handleChange(e)}
                     onBlur={(e) => handleError(e)}
                     required />
            </label>
            <dl className={triangleSidesError.side2Error + 's'}>
              <dt>{triangleSidesError.side2ErrorMsg}</dt>
            </dl>
          </fieldset>
          <fieldset>
            <label className={triangleSidesError.side3Error}>
              <span>Side 3</span>
              <input type="number" name='side3'
                     value={triangleSides.side3}
                     onChange={(e) => handleChange(e)}
                     onBlur={(e) => handleError(e)}
                     required />
            </label>
            <dl className={triangleSidesError.side3Error + 's'}>
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
