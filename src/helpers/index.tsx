import React from 'react';

export type RneFunctionComponent<T> = React.FunctionComponent<
  T & {
    children?: React.ReactNode | undefined;
  }
>;