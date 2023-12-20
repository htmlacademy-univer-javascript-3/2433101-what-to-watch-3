import { render,screen } from '@testing-library/react';
import VideoPlayer from './video-player';


describe('VideoPlayer', () => {
  it('render correctly', () => {
    render(<VideoPlayer srcVideo="" srcImage="" isActive={true}/>);

    expect(screen.getByTestId('video')).toBeInTheDocument();
  });
});
