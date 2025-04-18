import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({    
    thFirst : {
        textAlign: 'left',
        paddingLeft: '43%',
        paddingTop: '1.5vh',
        paddingBottom: '1.5vh',
        borderBottom: '2.5px solid rgb(180, 169, 169)',
        background: '#deb5b545',
    },
    
    th: {
        paddingTop: '1.5vh',
        paddingBottom: '1.5vh',
        borderBottom: '2.5px solid rgb(180, 169, 169)',
        background: '#deb5b545',
    },

    td: {
        background: '#f5f5f5ab',
    }
})

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    let content;
    if (isHeader === true) {
        if (textSecondCell === null) {
            content = <th  className={css(styles.thFirst)} colSpan = "2">{textFirstCell}</th>
        } else {
            content = 
            <>
                <th className={css(styles.th)}>{textFirstCell}</th>
                <th className={css(styles.th)}>{textSecondCell}</th>
            </>
        }
    } else {
        content =
        <>
            <td className={css(styles.td)} >{textFirstCell}</td>
            <td className={css(styles.td)}>{textSecondCell}</td>
        </>
    }
    return (
        <tr>
            {content}
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}
  
CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

export default CourseListRow;
