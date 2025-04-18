import React, { ReactNode } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

interface BodySectionWithMarginBottomProps {
  title: string;
  children: ReactNode;
}

const BodySectionWithMarginBottom: React.FC<BodySectionWithMarginBottomProps> = (props) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  }
});

export default BodySectionWithMarginBottom;