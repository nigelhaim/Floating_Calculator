import React, { useState } from 'react';
import "./Modal.css";
import Draggable from 'react-draggable';
import Calculator from '../Calculator/Calculator';
export default function Modal(){

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        console.log("Modal");
        setModal(!modal)
    }

    return (
        <>
    <button onClick={ toggleModal } className='btn-modal'>Open Calculator</button>
<h1> The text and form in the website is to test if you can still navigate in the site while the calculator is still opened</h1>
    {modal && (
    <Draggable>

    <div className='modal'>
        <div className='overlay'></div>
        <div className='modal-content'>
                <h2>Calculator</h2>
                <button className='close-modal' onClick={toggleModal}>Close</button>
                <Calculator />
        </div>
    </div>

    </Draggable>
    )}

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
    <div>
    <form>
      <input type='text' />
    </form>
      <button>Submit</button>
    </div>
        </>
    );
}