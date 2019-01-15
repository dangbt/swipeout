import * as React from 'react';

interface IPropTypes {
  left?: Array<{ text: React.ReactNode; onPress?: () => void; type?: any; style?: any; className?: string; component: React.Component}>;
  right?: Array<{ text: React.ReactNode; onPress?: () => void; type?: any; style?: any; className?: string; component: React.Component}>;
  autoClose?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  disabled?: boolean;
  style?: any;
  /* web only */
  prefixCls?: string;
}

export default IPropTypes;
