import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { NameSpace } from '../../const';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { useEffect, useRef, useState } from 'react';
import { fetchFilmsFilmIdAction } from '../../store/api-actions';
import NotFoundScreen from '../NotFoundScreen/NotFoundScreen';


function Player(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const filmsFilmId = useAppSelector((state) => state[NameSpace.Data].filmsFilmId);
  const isFilmDataLoadingStatus = useAppSelector((state) => state[NameSpace.Data].isFilmDataLoadingStatus);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmsFilmIdAction(id));
    }
  }, [id, dispatch]);

  const handleFullScreenClick = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  if (isFilmDataLoadingStatus) {
    return (
      <LoadingScreen />
    );
  }

  if (!id || !filmsFilmId) {
    return (
      <NotFoundScreen />
    );
  }

  return (
    <div className="player">
      <video ref={videoRef} src={filmsFilmId.videoLink} className="player__video" poster={filmsFilmId.posterImage} />
      <button type="button" className="player__exit" onClick={() => navigate(`/films/${filmsFilmId.id}`)}>
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>
        <div className="player__controls-row">
          {!isPlaying ?
            <button type="button" className="player__play" onClick={handleVideoPlay}>
              <svg viewBox="0 0 14 21" width={14} height={21}>
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            :
            <button type="button" className="player__play" onClick={handleVideoPause}>
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#pause" />
              </svg>
              <span>Pause</span>
            </button>}
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
