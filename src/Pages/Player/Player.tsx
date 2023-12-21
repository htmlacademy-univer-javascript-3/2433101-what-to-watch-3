import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { NameSpace } from '../../const';
import { useEffect, useRef, useState } from 'react';
import { fetchFilmsFilmIdAction } from '../../store/api-actions';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function formatTime(time: number): string {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return hours > 0
    ? `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
    : `${formattedMinutes}:${formattedSeconds}`;
}

export function Player(): JSX.Element{
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const filmsFilmId = useAppSelector((state) => state[NameSpace.Data].filmsFilmId);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmsFilmIdAction(id));
    }
  }, [id, dispatch]);

  const currentContent = formatTime(currentTime);
  const progressValue = isNaN(duration) || isNaN(currentTime) || duration === 0 ? 0 : (currentTime / duration) * 100;

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

  if (!filmsFilmId) {
    return <NotFoundScreen />;
  }

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={filmsFilmId.videoLink}
        className="player__video"
        id={filmsFilmId.id}
        poster={filmsFilmId.posterImage}
        autoPlay
        muted
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
      />
      <button type="button" className="player__exit" onClick={() => navigate(`/films/${filmsFilmId.id}`)}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progressValue} max="100"></progress>
            <div className="player__toggler" style={{ left: `${progressValue}%` }}>
              Toggler
            </div>
          </div>
          <div
            className="player__time-value"
            style={{
              cursor: 'pointer',
            }}
          >
            {currentContent}
          </div>
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
            <button type="button" className="player__play" onClick={handleVideoPause} data-testid="video button">
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#pause" />
              </svg>
              <span>Pause</span>
            </button>}
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
