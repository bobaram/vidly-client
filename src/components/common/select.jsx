import React from 'react';

const Select = ({ label, name, error, options, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select className="form-control" id={name} name={name} {...rest}>
                <option value=""></option>
                {
                    options.map( option => (
                        <option key={option._id} value={option._id}>{option.name}</option>
                    ))
                }
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}
 
export default Select;