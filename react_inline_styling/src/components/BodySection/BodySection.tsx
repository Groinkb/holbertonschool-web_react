import React, { ReactNode } from 'react';
import { StyleSheet, css } from 'aphrodite';

interface BodySectionProps {
  title: string;
  children: ReactNode;
}

const BodySection: React.FC<BodySectionProps> = ({ title, children }) => {
  return (
    <div className={css(styles.bodySection)}>
      <h2 className={css(styles.title)}>{title}</h2>
      {children}
    </div>
  );
};

const styles = StyleSheet.create({
  bodySection: {
    padding: '1rem',
    width: '100%',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  }
});

export default BodySection;