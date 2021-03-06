/* eslint-disable prettier/prettier */
import React from 'react';

import Svg, { Path } from 'react-native-svg';

export default function ClockIcon() {
  return (
    <Svg width="110" height="110" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M60.0002 109C83.1962 109 102 90.572 102 67.8402C102 45.1083 83.1962 26.6804 60.0002 26.6804C36.8043 26.6804 18.0002 45.1083 18.0002 67.8402C18.0002 90.572 36.8043 109 60.0002 109Z" fill="#adfff7" stroke="#368f86" strokeOpacity={0.8} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M90 11L110 26.6799M30 11L10 26.6799M94 101.159L102 108.999M26 101.159L18 108.999M62 50.1998V69.7996L50 77.6396" stroke="#181818" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
