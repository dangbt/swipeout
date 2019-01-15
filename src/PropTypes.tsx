import * as React from 'react';

interface IPropTypes {
  left?: any;
  right?: any;
  autoClose?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  disabled?: boolean;
  style?: any;
  /* web only */
  prefixCls?: string;
}

export default IPropTypes;
