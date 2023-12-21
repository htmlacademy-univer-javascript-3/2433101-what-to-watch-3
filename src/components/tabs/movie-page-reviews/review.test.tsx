import { makeFakeComments } from '../../../utils/mocks';
import { render, screen } from '@testing-library/react';
import { Review } from './review';


describe('MoviePageReviews', () => {
  it('renders correctly', () => {
    const comment = makeFakeComments();
    render(<Review description={comment.comment} author={comment.user} date={comment.date} rating={comment.rating}/>);
  
    expect(screen.getByText(comment.comment)).toBeInTheDocument();
    expect(screen.getByText(comment.user)).toBeInTheDocument();
    expect(screen.getByText(comment.rating)).toBeInTheDocument();
  });
});