import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  // Using inline styling for the row background color
  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
  };

  return (
    <tr style={rowStyle}>
      {isHeader && textSecondCell === null ? (
        <th colSpan={2}>{textFirstCell}</th>
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;