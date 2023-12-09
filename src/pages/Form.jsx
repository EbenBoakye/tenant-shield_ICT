// import React, { useState } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import Navbar from '../components/Navbar';

// const Form = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         homeAddress: '',
//         postcode: '',
//         landlordName: '',
//         courtHearingDate: '',
//         yearsAtAddress: '',
//         occupants: '',
//         hasDependents: false,
//         hasDisabilities: false,
//         ownDisabilities: false,
//         income: '',
//         arrears: '',
//         financialSituation: '',
//         repairIssues: false,
//         informedLandlord: false,
//         repairReportDate: ''
//     });

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Generate PDF
//         generatePDF();
//         // Reset form after submission
//         setFormData({
//             firstName: '',
//             lastName: '',
//             homeAddress: '',
//             postcode: '',
//             landlordName: '',
//             courtHearingDate: '',
//             yearsAtAddress: '',
//             occupants: '',
//             hasDependents: false,
//             hasDisabilities: false,
//             ownDisabilities: false,
//             income: '',
//             arrears: '',
//             financialSituation: '',
//             repairIssues: false,
//             informedLandlord: false,
//             repairReportDate: ''

//             // ... reset all other fields here
//         });
//     };

//     const generatePDF = () => {
//         const form = document.getElementById('formContent');

//         html2canvas(form).then((canvas) => {
//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF();
//             const width = pdf.internal.pageSize.getWidth();
//             const height = pdf.internal.pageSize.getHeight();
//             pdf.addImage(imgData, 'PNG', 0, 0, width, height);
//             pdf.save('form.pdf');
//         });
//     };

//     return (
//         <div>
//             <Navbar />
//             <form onSubmit={handleSubmit} id="formContent">
//                 <label htmlFor="firstName">First Name:</label>
//                 <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="lastName">Last Name:</label>
//                 <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="homeAddress">Home Address:</label>
//                 <input
//                     type="text"
//                     id="homeAddress"
//                     name="homeAddress"
//                     value={formData.homeAddress}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="postcode">Postcode:</label>
//                 <input
//                     type="text"
//                     id="postcode"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="landlordName">Landlord Name:</label>
//                 <input
//                     type="text"
//                     id="landlordName"
//                     name="landlordName"
//                     value={formData.landlordName}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="courtHearingDate">Court Hearing Date:</label>
//                 <input
//                     type="text"
//                     id="courtHearingDate"
//                     name="courtHearingDate"
//                     value={formData.courtHearingDate}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="yearsAtAddress">Years at Address:</label>
//                 <input
//                     type="text"
//                     id="yearsAtAddress"
//                     name="yearsAtAddress"
//                     value={formData.yearsAtAddress}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="occupants">Occupants:</label>
//                 <input
//                     type="text"
//                     id="occupants"
//                     name="occupants"
//                     value={formData.occupants}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="hasDependents">Has Dependents:</label>
//                 <input
//                     type="checkbox"
//                     id="hasDependents"
//                     name="hasDependents"
//                     checked={formData.hasDependents}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="hasDisabilities">Has Disabilities:</label>
//                 <input
//                     type="checkbox"
//                     id="hasDisabilities"
//                     name="hasDisabilities"
//                     checked={formData.hasDisabilities}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="ownDisabilities">Own Disabilities:</label>
//                 <input
//                     type="checkbox"
//                     id="ownDisabilities"
//                     name="ownDisabilities"
//                     checked={formData.ownDisabilities}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="income">Income:</label>
//                 <input
//                     type="text"
//                     id="income"
//                     name="income"
//                     value={formData.income}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="arrears">Arrears:</label>
//                 <input
//                     type="text"
//                     id="arrears"
//                     name="arrears"
//                     value={formData.arrears}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="financialSituation">Financial Situation:</label>
//                 <input
//                     type="text"
//                     id="financialSituation"
//                     name="financialSituation"
//                     value={formData.financialSituation}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="repairIssues">Repair Issues:</label>
//                 <input
//                     type="checkbox"
//                     id="repairIssues"
//                     name="repairIssues"
//                     checked={formData.repairIssues}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="informedLandlord">Informed Landlord:</label>
//                 <input
//                     type="checkbox"
//                     id="informedLandlord"
//                     name="informedLandlord"
//                     checked={formData.informedLandlord}
//                     onChange={handleInputChange}
//                 />
//                 <label htmlFor="repairReportDate">Repair Report Date:</label>
//                 <input
//                     type="text"
//                     id="repairReportDate"
//                     name="repairReportDate"
//                     value={formData.repairReportDate}
//                     onChange={handleInputChange}
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default Form;

import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Navbar from '../components/Navbar';
import './Form.css'; // Import the CSS file for styling

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        howOld: '',
        homeAddress: '',
        postcode: '',
        landlordName: '',
        courtHearingDate: '',
        yearsAtAddress: '',
        occupants: '',
        hasDependents: false,
        howManyDependents: '',
        hasDisabilities: false,
        ownDisabilities: false,
        income: '',
        arrears: '',
        financialSituation: '',
        repairIssues: false,
        informedLandlord: false,
        repairReportDate: ''
        // Add all other fields here
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Generate PDF
        generatePDF();
        // Reset form after submission
        setFormData({
            firstName: '',
            lastName: '',
            homeAddress: '',
            postcode: '',
            landlordName: '',
            courtHearingDate: '',
            yearsAtAddress: '',
            occupants: '',
            howManyOccupants: '',
            hasDependents: false,
            hasDisabilities: false,
            ownDisabilities: false,
            income: '',
            arrears: '',
            financialSituation: '',
            repairIssues: false,
            informedLandlord: false,
            repairReportDate: ''
            // ... reset all other fields here
        });
    };

    const generatePDF = () => {
        const form = document.getElementById('formContent');

        html2canvas(form).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.save('form.pdf');
        });
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit} id="formContent" className="form-container">
                <div className="form-field">
                    <label htmlFor="firstName"style={{ color: 'white' }}>First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="lastName"style={{ color: 'white' }}>Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="homeAddress"style={{ color: 'white' }}>Home Address:</label>
                    <input
                        type="text"
                        id="homeAddress"
                        name="homeAddress"
                        value={formData.homeAddress}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="postcode" style={{ color: 'white' }}>Postcode:</label>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="landlordName"style={{ color: 'white' }}>Landlord's Name:</label>
                    <input
                        type="text"
                        id="landlordName"
                        name="landlordName"
                        value={formData.landlordName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="courtHearingDate"style={{ color: 'white' }}>Court Hearing Date:</label>
                    <input
                        type="text"
                        id="courtHearingDate"
                        name="courtHearingDate"
                        value={formData.courtHearingDate}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="yearsAtAddress"style={{ color: 'white' }}>Years at the Address:</label>
                    <input
                        type="text"
                        id="yearsAtAddress"
                        name="yearsAtAddress"
                        value={formData.yearsAtAddress}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="occupants"style={{ color: 'white' }}>Do you live with others:</label>
                    <input
                        type="text"
                        id="occupants"
                        name="occupants"
                        value={formData.occupants}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="howManyOccupants"style={{ color: 'white' }}>How many Occupant live at Your address:</label>
                    <input
                        type="text"
                        id="howManyOccupants"
                        name="howManyOccupants"
                        value={formData.howManyOccupants}
                        onChange={handleInputChange}
                    />
                </div>
            
                    <div className="form-field">
                        <label htmlFor="hasDependents"style={{ color: 'white' }}>Do you have Dependents:</label>
                        <input
                            type="checkbox"
                            id="hasDependents"
                            name="hasDependents"
                            checked={formData.hasDependents}
                            onChange={handleInputChange}
                        />
                    </div> 
                    <div className="form-field">
                        <label htmlFor="howManyDependents"style={{ color: 'white' }}>How many Dependents do you have:</label>
                        <input
                            type="text"
                            id="howManyDependents"
                            name="howManyDependents"
                            value={formData.howManyDependents}
                            onChange={handleInputChange}
                        /> 
                    </div>
                    <div className="form-field">
                        <label htmlFor="hasDisabilities">Do they have any Disabilities or health issues:</label>
                        <input
                            type="checkbox"
                            id="hasDisabilities"
                            name="hasDisabilities"
                            checked={formData.hasDisabilities}
                            onChange={handleInputChange}
                        />  
                    </div>
                    <div className="form-field">
                        <label htmlFor="ownDisabilities"style={{ color: 'white' }}>Do you have your any Disabilities or Health issues:</label>
                        <input
                            type="checkbox"
                            id="ownDisabilities"
                            name="ownDisabilities"
                            checked={formData.ownDisabilities}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="income"style={{ color: 'white' }}>What is your Income:</label>
                        <input
                            type="text"
                            id="income"
                            name="income"
                            value={formData.income}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="arrears"style={{ color: 'white' }}>How much weekly or mothly Arrears do you owe:</label>
                        <input
                            type="text"
                            id="arrears"
                            name="arrears"
                            value={formData.arrears}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="financialSituation"style={{ color: 'white' }}>What is Your Financial Situation:</label>
                        <input
                            type="text"
                            id="financialSituation"
                            name="financialSituation"
                            value={formData.financialSituation}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="repairIssues"style={{ color: 'white' }}>Are there any due Repair Issues:</label>
                        <input
                            type="checkbox"
                            id="repairIssues"
                            name="repairIssues"
                            checked={formData.repairIssues}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="informedLandlord"style={{ color: 'white' }}>Have you informed your Landlord:</label>
                        <input
                            type="checkbox"
                            id="informedLandlord"
                            name="informedLandlord"
                            checked={formData.informedLandlord}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="repairReportDate"style={{ color: 'white' }}>Repair Report Date:</label>
                        <input  
                            type="text"
                            id="repairReportDate"
                            name="repairReportDate"
                            value={formData.repairReportDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
        </div>
    );
};

export default Form;
