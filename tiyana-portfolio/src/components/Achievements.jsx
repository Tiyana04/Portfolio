import React, { useState } from 'react';

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const achievementsData = [
    {
      title: 'Participated in Hult Prize',
      organization: 'Hult Prize On-Campus Qualifier Round!',
      description: 'Competed in the Hult Prize On-Campus Qualifier with Student 360 application.',
      image: '/assets/Hult Prize.jpg'
    },
    {
      title: 'Theory of Music',
      organization: 'Trinity College of London',
      description: 'Earned a Grade 6 Theory of Music certification from Trinity College London with Merit, demonstrating a strong understanding of music theory.',
      image: '/assets/Trinity_Grade6.jpg'
    },
    {
      title: 'Inter Divisional Secretariat Athletic Meet ',
      organization: 'Ministry of Sports',
      description: 'Secured third place in the 4x100m relay at the Inter-Divisional Secretariat Athletic Meet showcasing teamwork, speed, and athletic dedication.',
      image: '/assets/Athletic.jpg'
    },
    {
      title: 'Theory of Music',
      organization: 'Trinity College of London',
      description: 'Earned a Grade 6 Theory of Music certification from Trinity College London with Merit, demonstrating a strong understanding of music theory.',
      image: '/assets/Trinity_Grade5.jpg'
    },
    {
      title: 'Piano Competition All Island Finalist',
      organization: 'IIMD',
      description: 'Won a Gold Medal in the Grade 5 Piano Competition at IIMD and advanced as an All-Island Finalist, showcasing exceptional musical talent and performance skills.',
      image: '/assets/IIMD.jpg'
    },
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="section-title">
          <h2>Achievements</h2>
        </div>
        <div className="achievements-grid">
          {achievementsData.map((achievement, index) => (
            <div className="achievement-item" key={index}>
              <div 
                className="achievement-image" 
                onClick={() => openImageModal(achievement.image)}
              >
                <img src={achievement.image} alt={achievement.title} />
                <div className="image-overlay">
                  <span>Click to Enlarge</span>
                </div>
              </div>
              <div className="achievement-info">
                <h3>{achievement.title}</h3>
                <p className="organization">{achievement.organization}</p>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying expanded images */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <span className="close-modal" onClick={closeImageModal}>&times;</span>
            <img src={selectedImage} alt="Expanded view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;