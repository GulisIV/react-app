import React from 'react';
import { Modal, Header } from 'semantic-ui-react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import messages from '../../Messages';
import DigitInput from '../../GeneralComponents/digitInput';

const CodeModal = ({ intl }) => {
    return <>
        <Modal open={true} size="mini">
            {/* <Header content={intl.formatMessage(messages.enter)} /> */}
            <Header content={intl.formatMessage(messages.twoFactAuth)} />
            <Modal.Content>
                <h5 className='center'>{intl.formatMessage(messages.enterSMSCode)}</h5>

                <h5 className='center'>{intl.formatMessage(messages.errorSMSCode)}</h5>
                <h5 className='center'>
                    {intl.formatMessage(messages.dontGetSMSCode)}
                    {' '}
                    {intl.formatMessage(messages.sendAgainSMSCode)}
                </h5>
            </Modal.Content>
        </Modal>
    </>;

}

CodeModal.propTypes = {
    intl: PropTypes.any
};

export default injectIntl(CodeModal);
