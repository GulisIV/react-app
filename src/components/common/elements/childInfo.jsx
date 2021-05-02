import "../common.scss";
import React from "react";
import { injectIntl } from "react-intl";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";
import messages from "../../../Messages";

const ChildInfo = ({ name, age, info, regDate }) => {
  return (
    <>
      <Card
        fluid
        className="child-info"
        header={name}
        meta={age}
        description={info}
        extra={regDate}
      />
      {/* <Card.Content>
          <Card.Header>
            <Header as="h3" className="card-content-header">
              {name}
            </Header>
          </Card.Header>
          <Card.Meta className="card-meta">
            <h5>{age}</h5>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra className="card-extra-content">
          <h6>
            {intl.formatMessage(messages.registrated)} {regDate}
          </h6>
        </Card.Content>
      </Card> */}
    </>
  );
};

ChildInfo.propTypes = {
  name: PropTypes.any,
  age: PropTypes.any,
  info: PropTypes.any,
  regDate: PropTypes.any,
};

export default injectIntl(ChildInfo);
