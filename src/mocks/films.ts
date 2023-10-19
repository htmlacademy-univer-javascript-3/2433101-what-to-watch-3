export type FilmsDataType = {
  filmName: string;
  genre: string;
  date: string;
  director: string;
  runTime: string;
  rating: string;
  ratingTable: string;
  description: string;
  filmPoster: string; 
  filmBackgroundImage: string;
  filmBackgrondColor: string;
  filmVideo: string;
};

export const FilmsData: {[key: string]: FilmsDataType} = {
  '0': {
    filmName: 'Fantastic Beasts: The Crimes of Grindelwald', 
    genre: 'Fantasy', 
    date:'2018', 
    director: 'David Yates', 
    runTime: '134', 
    rating: '3.4', 
    ratingTable: '160757', 
    description: 'In an effort to thwart Grindelwald\'s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he\'s unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.', 
    filmPoster: 'https://13.design.pages.academy/static/film/poster/Fantastic_Beasts.jpg',
    filmBackgroundImage: 'https://13.design.pages.academy/static/film/background/Fantastic_Beasts.jpg',
    filmBackgrondColor: '#B6A99F',
    filmVideo: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  }, 
  '1': {
    filmName: 'Bohemian Rhapsody', 
    genre: 'Drama', 
    date:'2018', 
    director: 'Bryan Singer', 
    runTime: '134', 
    rating: '6.1', 
    ratingTable: '338903', 
    description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.', 
    filmPoster: 'https://13.design.pages.academy/static/film/poster/Bohemian_Rhapsody.jpg',
    filmBackgroundImage: 'https://13.design.pages.academy/static/film/background/Bohemian_Rhapsody.jpg',
    filmBackgrondColor: '#929FA5',
    filmVideo: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  }, 
  '2': {
    filmName: 'Macbeth', 
    genre: 'Drama', 
    date:'2015', 
    director: 'Justin Kurzel', 
    runTime: '113', 
    rating: '3.3', 
    ratingTable: '48798', 
    description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.', 
    filmPoster: 'https://13.design.pages.academy/static/film/poster/Macbeth.jpg',
    filmBackgroundImage: 'https://13.design.pages.academy/static/film/background/Macbeth.jpg',
    filmBackgrondColor: '#F1E9CE',
    filmVideo: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  '3': {
    filmName: 'Aviator', 
    genre: 'Drama', 
    date:'2014', 
    director: 'Martin Scorsese', 
    runTime: '170', 
    rating: '9.8', 
    ratingTable: '307174', 
    description: 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.', 
    filmPoster: 'https://13.design.pages.academy/static/film/poster/Aviator.jpg',
    filmBackgroundImage: 'https://13.design.pages.academy/static/film/background/Aviator.jpg',
    filmBackgrondColor: '#D6CDAF',
    filmVideo: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  }, 
  '4': {
    filmName: 'We need to talk about Kevin', 
    genre: 'Drama', 
    date:'2011', 
    director: 'Lynne Ramsay', 
    runTime: '112', 
    rating: '3.8', 
    ratingTable: '123240', 
    description: 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined..', 
    filmPoster: 'https://13.design.pages.academy/static/film/poster/We_need_to_talk_about_Kevin.jpg',
    filmBackgroundImage: 'https://13.design.pages.academy/static/film/background/We_need_to_talk_about_Kevin.jpg',
    filmBackgrondColor: '#E1DFDE',
    filmVideo: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  '5': {
    filmName: 'What We Do in the Shadows', 
    genre: 'Comedy', 
    date:'2019', 
    director: 'Jemaine Clement', 
    runTime: '30', 
    rating: '7.2', 
    ratingTable: '6173', 
    description: 'A look into the daily (or rather, nightly) lives of three vampires who\'ve lived together for over 100 years, in Staten Island.', 
    filmPoster: 'https://13.design.pages.academy/static/film/poster/What-We-Do-in-the-Shadows.jpg',
    filmBackgroundImage: 'https://13.design.pages.academy/static/film/background/What-We-Do-in-the-Shadows.jpg',
    filmBackgrondColor: '#A39E81',
    filmVideo: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  '6': {
    filmName: 'The Revenant', 
    genre: 'Action', 
    date:'2015', 
    director: 'Alejandro G. Iñárritu', 
    runTime: '156', 
    rating: '4', 
    ratingTable: '618498', 
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.', 
    filmPoster: 'https://13.design.pages.academy/static/film/poster/Revenant.jpg',
    filmBackgroundImage: 'https://13.design.pages.academy/static/film/background/Revenant.jpg',
    filmBackgrondColor: '#92918B',
    filmVideo: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  '7': {
    filmName: 'Peter Howitt', 
    genre: 'Comedy', 
    date:'2003', 
    director: 'Alejandro G. Iñárritu', 
    runTime: '88', 
    rating: '10', 
    ratingTable: '136843', 
    description: 'After a sudden attack on the MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy.', 
    filmPoster: 'https://13.design.pages.academy/static/film/poster/Johnny_English.jpg',
    filmBackgroundImage: 'https://13.design.pages.academy/static/film/background/Johnny_English.jpg',
    filmBackgrondColor: '#F0DBA2',
    filmVideo: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
} as const;