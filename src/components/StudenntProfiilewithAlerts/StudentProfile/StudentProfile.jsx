import React from 'react';
import SearchBarWidget from '../../../Widgets/Searchbarwidget/Searchbar_Widget';
import styles from './StudentProfile.module.css'; // Import as an object
import backgroundImage from '../../../Assets/background.png'; // Import the background image

const StudentProfile = () => {
  const backgroundUrl = `url(${backgroundImage})`;

  return (
    <div className={styles.profileSectionMainContainer} style={{ '--background-url': backgroundUrl }}>
      <header className={styles.profileSectionHeader}>
        <h1 className={styles.profileSectionTitle}>Student Profile</h1>
        <p className={styles.profileSectionDescription}>
          Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
        </p>
      </header>
      <div className={styles.profileSectionSearchArea}>
        <SearchBarWidget
          placeholder="Search for student profile "
          className={styles.profileSectionSearchBar} // For border radius
          inputClassName={styles.profileSectionSearchInput} // For placeholder color
        />
      </div>
    </div>
  );
};

export default StudentProfile;