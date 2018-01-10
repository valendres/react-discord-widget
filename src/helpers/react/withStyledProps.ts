import * as React from 'react';
import { ThemedStyledFunction } from 'styled-components';

export default <U>() =>
  <P, T, O>(
      fn: ThemedStyledFunction<P, T, O>,
  ) => fn as ThemedStyledFunction<P & U, T, O & U>;
