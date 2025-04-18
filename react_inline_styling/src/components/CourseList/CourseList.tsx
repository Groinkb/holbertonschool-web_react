import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

interface CourseProps {
  id: number;
  name: string;
  credit: number;
}

interface CourseListProps {
  listCourses?: CourseProps[];
}

const CourseList: React.FC<CourseListProps> = ({ listCourses = [] }) => {
  return (
    <div className={css(styles.tableContainer)}>
      {listCourses.length > 0 ? (
        <table className={css(styles.courseList)}>
          <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses" />
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
          </thead>
          <tbody>
            {listCourses.map(course => (
              <CourseListRow 
                key={course.id} 
                textFirstCell={course.name} 
                textSecondCell={course.credit.toString()} 
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className={css(styles.noCourses)}>No course available yet</p>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    width: '100%',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  courseList: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
  },
  noCourses: {
    textAlign: 'center',
    padding: '2rem',
    fontStyle: 'italic',
    color: '#777',
  }
});

export default CourseList;