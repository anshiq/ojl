const Gallery = () => {
    const images = [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg',
      'https://example.com/image4.jpg',
      'https://example.com/image5.jpg',
    ];
  
    return (
      <ScrollView horizontal style={styles.gallery}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.galleryImage} />
        ))}
      </ScrollView>
    );
  };
  export default Gallery;