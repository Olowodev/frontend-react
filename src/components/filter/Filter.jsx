import React from 'react'
import { FaChevronUp } from 'react-icons/fa'
import './Filter.css'

const Filter = () => {
  return (
    <div className='filter'>
        <div>
            <h2>Filter By</h2>
            <div className='hline'></div>
            <div className='filterSection'>
                <div className='sectionTitle'>
                    <h3>Price</h3>
                    <FaChevronUp />
                </div>
                <div className='mainSection'>
                    <div className='sectionDiv'>
                        <div className='sectionStart'>
                            <input type='checkbox' />
                            <p> $0 - $10 </p>
                        </div>
                        <p>(15)</p>
                    </div>
                    <div className='sectionDiv'>
                        <div className='sectionStart'>
                            <input type='checkbox' />
                            <p> $0 - $10 </p>
                        </div>
                        <p>(15)</p>
                    </div>
                    <div className='sectionDiv'>
                        <div className='sectionStart'>
                            <input type='checkbox' />
                            <p> $0 - $10 </p>
                        </div>
                        <p>(15)</p>
                    </div>
                    <div className='sectionDiv'>
                        <div className='sectionStart'>
                            <input type='checkbox' />
                            <p> $0 - $10 </p>
                        </div>
                        <p>(15)</p>
                    </div>
                    <div className='sectionDiv'>
                        <div className='sectionStart'>
                            <input type='checkbox' />
                            <p> $0 - $10 </p>
                        </div>
                        <p>(15)</p>
                    </div>
                </div>
            </div>
            <div className='hline'></div>
            <div>
                <div className='sectionTitle'>
                    <h3>Category</h3>
                    <FaChevronUp />
                </div>
                <div>
                    <div className='sectionDiv'>
                        <div className='sectionStart'>
                            <input type='checkbox' />
                            <p>Home Appliances</p>
                        </div>
                        <p>(15)</p>
                    </div>
                    <div className='sectionDiv'>
                        <div className='sectionStart'>
                            <input type='checkbox' />
                            <p>Devices</p>
                        </div>
                        <p>(15)</p>
                    </div>
                    <div className='sectionDiv'>
                        <div className='sectionStart'>
                            <input type='checkbox' />
                            <p>Devices</p>
                        </div>
                        <p>(15)</p>
                    </div>
                    <div className='sectionDiv'>
                        <div className='sectionStart'>
                            <input type='checkbox' />
                            <p>Devices</p>
                        </div>
                        <p>(15)</p>
                    </div>
                    <div className='sectionDiv'>
                        <div className='sectionStart'>
                            <input type='checkbox' />
                            <p>Devices</p>
                        </div>
                        <p>(15)</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='vline'></div>
    </div>
  )
}

export default Filter