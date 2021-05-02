import React from 'react';
import { Form, Label, Popup, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const GeneralInput = ({ input, type, label, meta: { error, touched }, readOnly, popup }) =>
    <Form.Field error={(touched && error) ? true : false} disabled={readOnly} >
        <label>{label}
            {popup && <Popup inverted className='popup_field' trigger={<Icon name='question circle' />} content={popup} />}
        </label>
        <input disabled={readOnly} type={type} {...input} />
        {touched && error && <Label basic pointing>{error}</Label>}
    </Form.Field>;

GeneralInput.propTypes = {
    input: PropTypes.any,
    type: PropTypes.any,
    label: PropTypes.any,
    meta: PropTypes.any,
    readOnly: PropTypes.bool,
    popup: PropTypes.any
};

export default GeneralInput;
