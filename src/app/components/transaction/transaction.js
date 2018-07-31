import React from 'react';
import injectSheet from 'react-jss';

import styles from './styles';

const Transaction = ({
  classes,
  data,
  onTransactionRemoveIconClick
}) => (
  <li className={ classes.transactionsSectionListItem }>
    <div className={ classes.transactionsSectionItemCategory }>
      { data.category }
    </div>
    <time className={ classes.transactionsSectionItemDate }>
      { `${data.date.getDate()} ${data.date.getMonth() + 1}, ${data.date.getFullYear()}`}
    </time>
    <div className={ classes.transactionsSectionItemDescription }>
      { data.description }
    </div>
    <div className={ classes.transactionsSectionItemAmount }>
      { `$ ${data.amount}` }
    </div>
    <ul className={ classes.transactionsListItemControls }>
      <li className={ classes.transactionsListItemControl }>
        <i
          className={ `${classes.transactionsListControlIcon} icon-pencil` }
          onClick={ () => {} }
        >
        </i>
      </li>
      <li className={ classes.transactionsListItemControl }>
        <i
          className={ `${classes.transactionsListControlIcon} icon-bin` }
          onClick={ onTransactionRemoveIconClick }
        >
        </i>
      </li>
    </ul>
  </li>
);

export default injectSheet(styles)(Transaction);