const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '68ba70b0c09a789848a6e81ea9890469',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
