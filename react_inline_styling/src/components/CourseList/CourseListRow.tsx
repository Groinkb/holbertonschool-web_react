import React from 'react';
import { StyleSheet, css } from 'aphrodite';

interface CourseListRowProps {
  isHeader?: boolean;
  textFirstCell: string;
  textSecondCell?: string;
}

const CourseListRow: React.FC<CourseListRowProps> = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  // Using inline styling for the row background color
  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
  };

  return (
    <tr style={rowStyle}>
      {isHeader && textSecondCell === null ? (
        <th className={css(styles.thHeader)} colSpan={2}>
          {textFirstCell}
        </th>
      ) : (
        <>
          <td className={css(isHeader ? styles.th : styles.td)}>
            {textFirstCell}
          </td>
          <td className={css(isHeader ? styles.th : styles.td)}>
            {textSecondCell}
          </td>
        </>
      )}
    </tr>
  );
};

const styles = StyleSheet.create({
  thHeader: {
    textAlign: 'center',
    padding: '0.5rem',
    borderBottom: '1px solid #ddd',
    fontWeight: 'bold',
  },
  th: {
    padding: '0.5rem',
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  td: {
    padding: '0.5rem',
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',
  }
});

export default CourseListRow;