import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import {StyleSheet, css} from 'aphrodite';


const styles = StyleSheet.create({
    CourseList: {
        border: '2.5px solid rgb(180, 169, 169)',
        width: '90%',
        margin: 'auto',
        textAlign: 'left',
        marginTop: '10vh',
        marginBottom: '18vh',
    }
})

function CourseList({listCourses}) {
    let courses;
    if (listCourses.length < 1) {
        courses = <tbody><tr>No course available yet</tr></tbody>
    } else {
        courses = <tbody>
            {listCourses.map((element) => {
                return (<CourseListRow key={element.id} textFirstCell={element.name} textSecondCell={element.credit} isHeader={false} />)
            })}
        </tbody>
    }

    return (
    <table className={css(styles.CourseList)}>
        <thead>
            <CourseListRow textFirstCell="Available courses"  isHeader={true} />
            <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        {courses}
    </table>);
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
}

export default CourseList;